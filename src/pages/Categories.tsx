import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { productsDatabase, categories } from "@/data/productsData";
import { Smartphone, Headphones, Laptop } from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Phones":
        return <Smartphone className="h-12 w-12" />;
      case "Headphones":
        return <Headphones className="h-12 w-12" />;
      case "Laptops":
        return <Laptop className="h-12 w-12" />;
      default:
        return null;
    }
  };

  const categoryProducts = Object.values(productsDatabase).filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory
  );

  const categoryStats = categories.slice(1).map((cat) => ({
    name: cat,
    count: Object.values(productsDatabase).filter((p) => p.category === cat).length,
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-12 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Browse Categories
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore products across different categories and find the best deals
            </p>
          </div>

          {/* Category Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {categoryStats.map((stat) => (
              <Card
                key={stat.name}
                className="p-6 hover:shadow-card-hover transition-all cursor-pointer"
                onClick={() => setSelectedCategory(stat.name)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {stat.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {stat.count} products available
                    </p>
                  </div>
                  <div className="text-primary">{getCategoryIcon(stat.name)}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex gap-3 mb-8 flex-wrap justify-center">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                className="cursor-pointer px-6 py-2 text-base"
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <Card
                key={product.name}
                className="overflow-hidden hover:shadow-card-hover transition-all cursor-pointer group"
                onClick={() => {
                  navigate(`/?search=${encodeURIComponent(product.name)}`);
                }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <Badge className="mb-3" variant="secondary">
                    {product.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {product.stores.length} stores
                    </span>
                    <span className="font-bold text-lg text-primary">
                      From ₹{Math.min(...product.stores.map(s => s.price)).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;
