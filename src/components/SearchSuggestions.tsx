import { Card } from "@/components/ui/card";
import { productsDatabase, ProductName } from "@/data/productsData";

interface SearchSuggestionsProps {
  searchQuery: string;
  onSuggestionClick: (productName: string) => void;
  isVisible: boolean;
}

const SearchSuggestions = ({ searchQuery, onSuggestionClick, isVisible }: SearchSuggestionsProps) => {
  if (!isVisible || !searchQuery.trim()) return null;

  const suggestions = Object.keys(productsDatabase).filter(
    (key) => key.toLowerCase().includes(searchQuery.toLowerCase())
  ) as ProductName[];

  if (suggestions.length === 0) return null;

  return (
    <Card className="absolute top-full left-0 right-0 mt-2 z-50 max-h-96 overflow-y-auto shadow-lg">
      <div className="p-2">
        {suggestions.map((productKey) => {
          const product = productsDatabase[productKey];
          return (
            <button
              key={productKey}
              onClick={() => onSuggestionClick(productKey)}
              className="w-full flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors text-left"
            >
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-foreground truncate">
                  {product.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {product.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Card>
  );
};

export default SearchSuggestions;
