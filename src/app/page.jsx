import Categories from "@/components/Categories";
import Companies from "@/components/Companies";
import FeaturedJobs from "@/components/FeaturedJobs";
import Hero from "@/components/Hero";
import LatestJobs from "@/components/LatestJobs";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="space-y-14">
      <Hero />
      <Companies />
      <Categories />
      <Newsletter />
      <FeaturedJobs />
      <LatestJobs />
    </div>
  );
}
