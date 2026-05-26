import { Laptop, Stethoscope, PiggyBank, TrendingUp } from "lucide-react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "Technology",
    icon: Laptop,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    jobs: "1,400+",
  },
  {
    title: "Healthcare",
    icon: Stethoscope,
    color: "text-green-500",
    bgColor: "bg-green-100",
    jobs: "1,200+",
  },
  {
    title: "Finance",
    icon: PiggyBank,
    color: "text-purple-500",
    bgColor: "bg-purple-100",
    jobs: "900+",
  },
  {
    title: "Marketing",
    icon: TrendingUp,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    jobs: "800+",
  },
];

export function TrendingCategory() {
  return (
    <section className="bg-gray-50 py-10 text-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 ">Trending Categories</h2>
          <p>Explore opportunities across popular industries</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
