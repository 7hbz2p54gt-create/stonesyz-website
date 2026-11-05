import Link from "next/link";
import { wrap } from "@/components/Header";

export default function NotFound() {
  return (
    <section className={`${wrap} flex min-h-[60vh] flex-col justify-center`}>
      <h1 className="big big-1">Page not found</h1>
      <Link href="/" className="mt-6 text-ink-900 underline underline-offset-4">Back to StoneSyz &rarr;</Link>
    </section>
  );
}
