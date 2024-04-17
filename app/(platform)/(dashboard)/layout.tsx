import { Toaster } from "sonner";

const platformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default platformLayout;
