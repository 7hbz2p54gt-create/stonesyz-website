import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 sm:px-6">
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Link href="/" className="mt-6 text-accent hover:text-accent-hover">Back to Stonesyz &rarr;</Link>
    </main>
  );
}
