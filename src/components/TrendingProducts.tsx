import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface TrendingProductsProps {
  onProductClick: (productName: string) => void;
}

const trendingProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1696446702094-944d0c87d4fe?w=400&q=80",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400&q=80",
  },
  {
    id: 3,
    name: "MacBook Pro M3",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&q=80",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&q=80",
  },
];

const TrendingProducts = ({ onProductClick }: TrendingProductsProps) => {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Trending Products</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingProducts.map((product, index) => (
            <Card
              key={product.id}
              onClick={() => onProductClick(product.name)}
              className="group cursor-pointer overflow-hidden border-border bg-card hover:shadow-card-hover transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
