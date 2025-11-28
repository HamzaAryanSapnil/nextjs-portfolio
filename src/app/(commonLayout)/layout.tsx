export const dynamic = "force-static";
import { Footer } from "@/components/shared/Footer";
import PublicNav from "@/components/shared/PublicNav";

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div>
      <PublicNav />
      {children}
      <Footer />
    </div>
  );
};

export default CommonLayout;
