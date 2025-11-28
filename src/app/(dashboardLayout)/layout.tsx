import DashboardNavbar from "@/components/modules/dashboard/DashboardNavbar";
import DashboardSidebar from "@/components/modules/dashboard/DashboardSidebar";


import { cookies } from "next/headers";

async function getCookieData() {
  return new Promise((resolve) =>
    setTimeout(async () => {
      // cookies will be called outside of the async context, causing a build-time error
      const cookieStore = await cookies();
      resolve(cookieStore.getAll());
    }, 1000)
  );
}
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   const cookieData = await getCookieData();
  return (
    <div className="flex h-screen overflow-hidden">
      <DashboardSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <DashboardNavbar />
        <main className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6">
          <div className="container mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );

}
