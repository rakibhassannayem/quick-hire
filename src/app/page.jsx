import Categories from "@/components/Categories";
import Companies from "@/components/Companies";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-10 mb-20">
      <Hero />
      <Companies />
      <Categories />
    </div>
  );
}
