import Features from "./_components/features";
import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import Price from "./_components/price";

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Features />
      <Price />
    </div>
  );
};

export default HomePage;
