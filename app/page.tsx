import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl text-muted-foreground">HomePage</h1>
      
      <Button variant="outline" size="lg" className="capitalize m-8">
        click
      </Button>
    </div>
  );
}
export default HomePage;
