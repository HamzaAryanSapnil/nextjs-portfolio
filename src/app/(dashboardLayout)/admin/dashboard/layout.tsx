import LogoutBtn from "@/components/shared/LogoutBtn";
import { getCookie } from "@/services/auth/tokenHandler";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const accessToken = await getCookie("accessToken")
  return <div>{children}
  {accessToken && <LogoutBtn/>}
  </div>;
}
