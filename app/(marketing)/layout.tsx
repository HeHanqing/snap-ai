import Navbar from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="text-white">{children}</main>
    </div>
  );
};

export default MarketingLayout;
