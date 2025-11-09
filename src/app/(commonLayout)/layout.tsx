import PublicNav from "@/components/shared/PublicNav";

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return (
    <div>
      <PublicNav />
      {children}
    </div>
  );
};

export default CommonLayout;
