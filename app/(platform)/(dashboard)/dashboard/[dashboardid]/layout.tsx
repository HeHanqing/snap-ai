import { Separator } from "@/components/ui/separator";
import Sidebar from "../../_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-4 max-w-7xl 2xl:max-x-screen-xl mx-auto">
      <div className="flex gap-x-10 h-screen py-20">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        <div>
          <Separator orientation="vertical" />
        </div>
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
