interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: CommonLayoutProps) => {
  return <div>{children}</div>;
};

export default CommonLayout;
