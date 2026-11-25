import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategorySection from "@/components/CategorySection";
import NewArrivalsSection from "@/components/NewArrivalsSection";
import CustomerFavoritesSection from "@/components/CustomerFavoritesSection";
import BrandCollectionSection from "@/components/BrandCollectionSection";
import SkincareSection from "@/components/SkincareSection";
import HaircareSection from "@/components/HaircareSection";
import BodySunCareSection from "@/components/BodySunCareSection";
import OurStorySection from "@/components/OurStorySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-cream">
      <main className="flex-1">
        <div className="relative">
          <Navbar transparent />
          <Hero />
        </div>
        <CategorySection />
        <NewArrivalsSection />
        <CustomerFavoritesSection />
        <BrandCollectionSection />
        <SkincareSection />
        <HaircareSection />
        <BodySunCareSection />
        <OurStorySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
