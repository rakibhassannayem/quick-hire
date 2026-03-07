import Categories from "@/components/landing/Categories";
import Companies from "@/components/landing/Companies";
import FeaturedJobs from "@/components/landing/FeaturedJobs";
import Hero from "@/components/landing/Hero";
import LatestJobs from "@/components/landing/LatestJobs";
import Newsletter from "@/components/landing/Newsletter";

export const dynamic = 'force-dynamic'

export default async function Home() {

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
