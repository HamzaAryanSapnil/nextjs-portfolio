import BlogsManagementHeader from '@/components/modules/admin/Blog/BlogsManagementHeader';
import BlogsTable from '@/components/modules/admin/Blog/BlogsTable';
import RefreshButton from '@/components/shared/RefreshButton';
import { TableSkeleton } from '@/components/shared/TableSkeleton';
import { getAllBlogs } from '@/services/admin/blogsManagement';
import React, { Suspense } from 'react'

export default async function ManageBlogsPage() {
  const result = await getAllBlogs();
  return (
    <div className="space-y-6">
      <BlogsManagementHeader />
      <div className="flex">
        <RefreshButton />
      </div>
      <Suspense fallback={<TableSkeleton columns={2} rows={10} />}>
        <BlogsTable blogs={result?.data} />
      </Suspense>
    </div>
  );
}
