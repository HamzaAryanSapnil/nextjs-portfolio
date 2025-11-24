import { Column } from "@/components/shared/ManagementTable";
import { IBlog } from "@/types/blogs.interface";




export const blogsColumns: Column<IBlog>[] = [
 
  {
    header: "Title",
    accessor: (blog) => blog.title.length > 50 ? blog.title.slice(0, 50) + "..." : blog.title,
  },
  {
    header: "Category",
    accessor: (blog) => blog.category,
  },
  {
    header: "Content",
    accessor: (blog) => blog.content.length > 20 ? blog.content.slice(0, 20) + "..." : blog.content,
  },
  {
    header: "Created At",
    accessor: (blog) => blog.createdAt,
  },

];
