import { ArrowUpDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface FilterSortProps {
  sortBy: string;
  onSortChange: (value: string) => void;
  selectedStores: string[];
  onStoreToggle: (store: string) => void;
  availableStores: string[];
}

const FilterSort = ({
  sortBy,
  onSortChange,
  selectedStores,
  onStoreToggle,
  availableStores,
}: FilterSortProps) => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2">
        <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Rating: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter Stores
            {selectedStores.length > 0 && (
              <span className="ml-2 bg-primary text-primary-foreground rounded-full px-2 py-0.5 text-xs">
                {selectedStores.length}
              </span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Filter by Store</h4>
            {availableStores.map((store) => (
              <div key={store} className="flex items-center space-x-2">
                <Checkbox
                  id={store}
                  checked={selectedStores.includes(store)}
                  onCheckedChange={() => onStoreToggle(store)}
                />
                <Label
                  htmlFor={store}
                  className="text-sm font-normal cursor-pointer"
                >
                  {store}
                </Label>
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FilterSort;
