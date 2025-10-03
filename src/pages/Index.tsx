import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import SearchHero from "@/components/SearchHero";
import TrendingProducts from "@/components/TrendingProducts";
import StoreCard from "@/components/StoreCard";
import FilterSort from "@/components/FilterSort";
import ProductDetailsModal from "@/components/ProductDetailsModal";
import LowestPriceBar from "@/components/LowestPriceBar";
import { productsDatabase, ProductName } from "@/data/productsData";
import { toast } from "sonner";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProduct, setActiveProduct] = useState<ProductName | null>(null);
  const [sortBy, setSortBy] = useState("price-low");
  const [selectedStores, setSelectedStores] = useState<string[]>([]);
  const [selectedStoreForModal, setSelectedStoreForModal] = useState<number | null>(null);

  // Handle search from URL params
  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchQuery(searchFromUrl);
      handleProductClick(searchFromUrl);
    }
  }, [searchParams]);

  const handleSearch = () => {
    const productKey = Object.keys(productsDatabase).find(
      (key) => key.toLowerCase().includes(searchQuery.toLowerCase())
    ) as ProductName | undefined;

    if (productKey) {
      setActiveProduct(productKey);
      toast.success(`Found ${productsDatabase[productKey].stores.length} stores selling ${productKey}!`);
    } else {
      toast.error("Product not found. Try searching for iPhone, Sony headphones, MacBook, or Samsung Galaxy.");
    }
  };

  const handleProductClick = (productName: string) => {
    setSearchQuery(productName);
    const productKey = Object.keys(productsDatabase).find(
      (key) => key.toLowerCase().includes(productName.toLowerCase())
    ) as ProductName | undefined;

    if (productKey) {
      setActiveProduct(productKey);
      toast.success(`Showing prices for ${productKey}`);
    }
  };

  const currentProduct = activeProduct ? productsDatabase[activeProduct] : null;

  const getSortedAndFilteredStores = () => {
    if (!currentProduct) return [];

    let stores = [...currentProduct.stores];

    if (selectedStores.length > 0) {
      stores = stores.filter((store) => selectedStores.includes(store.name));
    }

    switch (sortBy) {
      case "price-low":
        stores.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        stores.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        stores.sort((a, b) => b.rating - a.rating);
        break;
    }

    return stores;
  };

  const sortedStores = getSortedAndFilteredStores();
  const lowestPrice = currentProduct
    ? Math.min(...currentProduct.stores.map((s) => s.price))
    : 0;
  const lowestPriceStore = currentProduct?.stores.find((s) => s.price === lowestPrice);

  const availableStores = currentProduct
    ? Array.from(new Set(currentProduct.stores.map((s) => s.name)))
    : [];

  const handleStoreToggle = (store: string) => {
    setSelectedStores((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  return (
    <div className="min-h-screen bg-background font-['Inter',system-ui,sans-serif]">
      <Header />

      {!activeProduct ? (
        <>
          <SearchHero
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onSearch={handleSearch}
          />
          <TrendingProducts onProductClick={handleProductClick} />
        </>
      ) : (
        <main className="py-8 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-32 h-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {currentProduct.name}
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    {currentProduct.description}
                  </p>
                  <button
                    onClick={() => {
                      setActiveProduct(null);
                      setSearchQuery("");
                    }}
                    className="text-primary hover:text-primary-hover text-sm font-medium"
                  >
                    ← Back to search
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="text-sm text-muted-foreground">
                  Found {sortedStores.length} {sortedStores.length === 1 ? 'store' : 'stores'}
                </div>
                <FilterSort
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  selectedStores={selectedStores}
                  onStoreToggle={handleStoreToggle}
                  availableStores={availableStores}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {sortedStores.map((store, index) => (
                <div
                  key={store.name}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <StoreCard
                    store={store}
                    isLowestPrice={store.price === lowestPrice}
                    onClick={() => setSelectedStoreForModal(index)}
                  />
                </div>
              ))}
            </div>

            {sortedStores.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No stores match your filter. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </main>
      )}

      {lowestPriceStore && activeProduct && (
        <LowestPriceBar
          storeName={lowestPriceStore.name}
          price={lowestPriceStore.price}
          isVisible={activeProduct !== null}
        />
      )}

      {selectedStoreForModal !== null && currentProduct && (
        <ProductDetailsModal
          isOpen={selectedStoreForModal !== null}
          onClose={() => setSelectedStoreForModal(null)}
          product={currentProduct}
          stores={currentProduct.stores}
        />
      )}
    </div>
  );
};

export default Index;
