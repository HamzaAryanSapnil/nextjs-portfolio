// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-lg text-muted-foreground mb-6">
          The page you are looking for could not be found.
        </p>
        <div className="flex justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Go home
          </Link>
          <Link href="/projects" className="btn btn-outline">
            View projects
          </Link>
        </div>
      </div>
    </main>
  );
}
