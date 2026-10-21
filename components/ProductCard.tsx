import Image from "next/image";
import { PRODUCTS } from "./site";

type Product = (typeof PRODUCTS)[number];

/**
 * A product card with its real screenshot. On hover (or keyboard focus) the
 * card lifts and the screenshot glides up to show more of the screen.
 */
export default function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={p.href}
      className="product-card group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-canvas"
    >
      <div className="relative h-56 overflow-hidden bg-surface">
        <div aria-hidden className="glow absolute -right-10 -top-10 h-40 w-40" />
        {p.phone ? (
          <div className="product-shot absolute left-1/2 top-6 w-36 -translate-x-1/2 overflow-hidden rounded-[1.4rem] border-4 border-ink-900/80 shadow-xl">
            <Image src={p.image} width={p.width} height={p.height} alt={p.alt} sizes="144px" className="h-auto w-full" />
          </div>
        ) : (
          <div className="product-shot absolute left-6 top-6 w-[150%] overflow-hidden rounded-lg border border-line shadow-xl">
            <Image src={p.image} width={p.width} height={p.height} alt={p.alt} sizes="(min-width: 768px) 480px, 150vw" className="h-auto w-full" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-medium uppercase tracking-widest text-accent">{p.tag}</span>
        <h3 className="mt-2 text-xl font-semibold">{p.name}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-ink-700">{p.body}</p>
        <span className="mt-6 text-sm font-medium text-accent">
          Learn more<span className="sr-only"> about {p.name}</span>{" "}
          <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
        </span>
      </div>
    </a>
  );
}
