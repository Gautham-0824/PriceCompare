import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchHeroProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
}

const SearchHero = ({ searchQuery, onSearchChange, onSearch }: SearchHeroProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 animate-fade-in">
          Find the Best Deals,<br />
          <span className="text-primary">Save More Money</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Compare prices across top stores and make smarter shopping decisions
        </p>
        
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for a product..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 px-8">
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SearchHero;
