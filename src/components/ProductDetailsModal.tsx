import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

interface ProductDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    image: string;
    description: string;
    features: string[];
  };
  stores: Array<{
    name: string;
    logo: string;
    price: number;
    rating: number;
    reviews: number;
    link: string;
  }>;
}

const ProductDetailsModal = ({
  isOpen,
  onClose,
  product,
  stores,
}: ProductDetailsModalProps) => {
  const lowestPrice = Math.min(...stores.map((s) => s.price));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Key Features</h3>
              <ul className="space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Price Comparison</h3>
            <div className="space-y-3">
              {stores.map((store) => (
                <div
                  key={store.name}
                  className={`p-4 rounded-lg border ${
                    store.price === lowestPrice
                      ? 'border-accent bg-accent/5'
                      : 'border-border bg-card'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-muted flex items-center justify-center overflow-hidden">
                        <img src={store.logo} alt={store.name} className="w-full h-full object-contain p-1" />
                      </div>
                      <div>
                        <div className="font-medium">{store.name}</div>
                        <div className="flex items-center gap-1">
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
                            ({store.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`text-xl font-bold ${
                      store.price === lowestPrice ? 'text-accent' : 'text-foreground'
                    }`}>
                      ₹{store.price.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <Button
                    onClick={() => window.open(store.link, '_blank')}
                    className="w-full"
                    variant={store.price === lowestPrice ? "default" : "outline"}
                  >
                    Buy Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetailsModal;
