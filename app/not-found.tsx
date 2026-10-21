import Link from "next/link";
import { wrap } from "@/components/Header";

export default function NotFound() {
  return (
    <section className={`${wrap} flex min-h-[60vh] flex-col justify-center`}>
      <h1 className="text-3xl font-semibold">Page not found</h1>
      <Link href="/" className="mt-6 text-accent hover:text-accent-hover">Back to Stonesyz &rarr;</Link>
    </section>
  );
}
