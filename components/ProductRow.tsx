import Image from "next/image";
import { PRODUCTS } from "./site";

type Product = (typeof PRODUCTS)[number];

/**
 * One product per row: copy on one side, the real screenshot tilted on a warm
 * slab on the other. Rows alternate sides; on hover the screenshot squares up.
 */
export default function ProductRow({ p, index }: { p: Product; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div className="product-row grid items-center gap-8 md:grid-cols-2 md:gap-14">
      <div className={flip ? "md:order-2" : ""}>
        <p className="font-display text-6xl font-extrabold outline-num">{String(index + 1).padStart(2, "0")}</p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{p.tag}</p>
        <h3 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{p.name}</h3>
        <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">{p.body}</p>
        <a
          href={p.href}
          className="btn mt-6 inline-flex items-center gap-2 rounded-full border-2 border-ink-900 px-5 py-2.5 text-sm font-semibold hover:border-accent hover:bg-accent hover:text-accent-on"
        >
          Explore {p.name} <span aria-hidden>&rarr;</span>
        </a>
      </div>
      <div className={`slab relative overflow-hidden rounded-[2rem] p-8 sm:p-10 ${flip ? "md:order-1" : ""}`}>
        {p.phone ? (
          <div className={`tilt ${flip ? "tilt-rev" : ""} mx-auto w-44 overflow-hidden rounded-[1.6rem] border-[5px] border-ink-900 sm:w-52`}>
            <Image src={p.image} width={p.width} height={p.height} alt={p.alt} sizes="208px" className="h-auto w-full" />
          </div>
        ) : (
          <div className={`tilt ${flip ? "tilt-rev" : ""} overflow-hidden rounded-xl border border-white/40`}>
            <Image src={p.image} width={p.width} height={p.height} alt={p.alt} sizes="(min-width: 768px) 520px, 90vw" className="h-auto w-full" />
          </div>
        )}
      </div>
    </div>
  );
}
