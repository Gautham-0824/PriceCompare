import { TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface LowestPriceBarProps {
  storeName: string;
  price: number;
  isVisible: boolean;
}

const LowestPriceBar = ({ storeName, price, isVisible }: LowestPriceBarProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-slide-up">
      <Card className="px-6 py-4 bg-accent text-accent-foreground shadow-lg border-accent">
        <div className="flex items-center gap-3">
          <TrendingDown className="h-5 w-5" />
          <div>
            <div className="text-sm font-medium">Best Price Found!</div>
            <div className="text-lg font-bold">
              {storeName} • ₹{price.toLocaleString('en-IN')}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LowestPriceBar;
