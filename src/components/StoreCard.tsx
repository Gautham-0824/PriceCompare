import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StoreCardProps {
  store: {
    name: string;
    logo: string;
    price: number;
    rating: number;
    reviews: number;
    link: string;
  };
  isLowestPrice: boolean;
  onClick: () => void;
}

const StoreCard = ({ store, isLowestPrice, onClick }: StoreCardProps) => {
  const handleVisit = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(store.link, '_blank');
  };

  return (
    <Card
      onClick={onClick}
      className={`group cursor-pointer p-6 hover:shadow-card-hover transition-all duration-300 ${
        isLowestPrice ? 'border-2 border-accent shadow-lg animate-glow' : 'border-border'
      }`}
    >
      {isLowestPrice && (
        <Badge className="mb-3 bg-accent hover:bg-accent">
          ✨ Yay! This one's the cheapest — grab it now!
        </Badge>
      )}
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
            <img src={store.logo} alt={store.name} className="w-full h-full object-contain p-2" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
              {store.name}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(store.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground/30'
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                ({store.reviews.toLocaleString()})
              </span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <div className={`text-2xl font-bold ${isLowestPrice ? 'text-accent' : 'text-foreground'}`}>
            ₹{store.price.toLocaleString('en-IN')}
          </div>
        </div>
      </div>
      
      <Button
        onClick={handleVisit}
        className="w-full"
        variant={isLowestPrice ? "default" : "outline"}
      >
        Visit Website
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );
};

export default StoreCard;
