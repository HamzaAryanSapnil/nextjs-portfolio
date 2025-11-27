// app/(dashboard)/my-profile/page.tsx
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { serverFetch } from "@/lib/server-fetch";
import Link from "next/link";
import { IBlog } from "@/types/blogs.interface";
import BlogCard from "@/components/modules/blog/BlogCard";
import { projects } from "@/app/(commonLayout)/page";
import { ProjectCard } from "@/components/modules/Home/ProjectCard";
import { Projects } from "@/components/modules/Home/Project";

export default async function MyProfilePage() {
  // fetch profile
  const meRes = await serverFetch.get("/auth/me");
  const meJson = await meRes.json().catch(() => null);

  // fetch blogs
  const blogsRes = await serverFetch.get("/blogs");
  const blogsJson = await blogsRes.json().catch(() => null);

  const user = meJson?.data ?? null;
  const profile = user?.admin ?? null;

  const blogs: IBlog[] = Array.isArray(blogsJson?.data) ? blogsJson.data : [];

  // static sample projects (replace links with your own)
  // const projects: IProject[] = [
  //   {
  //     title: "Portfolio Website",
  //     image:
  //       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
  //     description: "Personal portfolio built with Next.js and Tailwind CSS.",
  //     live: "#",
  //     frontend: "#",
  //     backend: "#",
  //   },
  //   {
  //     title: "E-commerce Demo",
  //     image:
  //       "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=1200",
  //     description: "Demo shop with stripe integration and headless CMS.",
  //     live: "#",
  //     frontend: "#",
  //     backend: "#",
  //   },
  //   {
  //     title: "Task Manager",
  //     image:
  //       "https://images.unsplash.com/photo-1507238691740-187a5a3d48aa?q=80&w=1200",
  //     description:
  //       "Productivity app showcasing realtime updates and websockets.",
  //     live: "#",
  //     frontend: "#",
  //     backend: "#",
  //   },
  // ];

  return (
    <div className="container mx-auto max-w-6xl py-10 space-y-10">
      <h1 className="text-3xl font-bold">My Profile</h1>

      {/* Profile Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row items-start gap-6">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="w-36 h-36 relative rounded-xl overflow-hidden border">
                <Image
                  src={profile?.profilePhoto ?? "/placeholder-200.png"}
                  alt={profile?.name ?? "Profile"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-semibold">
                  {profile?.name ?? "—"}
                </h2>
                <Badge variant="outline">{user?.role ?? "—"}</Badge>
              </div>

              <p className="text-sm text-muted-foreground mt-2">
                {profile?.email ?? user?.email ?? "—"}
              </p>

              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Account status</p>
                  <p className="font-medium">{user?.status ?? "—"}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Need password change</p>
                  <p className="font-medium">
                    {String(user?.needPasswordChange ?? false)}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Member since</p>
                  <p className="font-medium">
                    {profile?.createdAt
                      ? new Date(profile.createdAt).toLocaleDateString()
                      : "—"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* My Blogs */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Blogs</h2>
          <Link href="/admin/dashboard/manage-blogs">
            <span className="text-sm text-primary underline">Manage blogs</span>
          </Link>
        </div>

        {blogs.length === 0 ? (
          <p className="text-muted-foreground">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((b: IBlog) => (
              <BlogCard key={b.id} blog={b} />
            ))}
          </div>
        )}
      </section>

      <Separator />

      {/* Projects (static) */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">My Projects</h2>
          <Link href="/#projects">
            <span className="text-sm text-primary underline">See all</span>
          </Link>
        </div>
        <Projects projects={projects} showViewAll viewAllUrl="#" />;
      </section>
    </div>
  );
}
