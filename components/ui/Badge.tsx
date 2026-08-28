import { cn } from "@/lib/utils";

type BadgeKind = "new" | "bestseller" | "limited" | "sale";

const styles: Record<BadgeKind, string> = {
  new: "bg-ink text-ivory",
  bestseller: "bg-gold text-ink",
  limited: "bg-error text-ivory",
  sale: "bg-ivory text-ink border border-ink",
};

const labels: Record<BadgeKind, string> = {
  new: "New",
  bestseller: "Bestseller",
  limited: "Limited",
  sale: "Sale",
};

export function Badge({ kind, className }: { kind: BadgeKind; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block px-2.5 py-1 text-[10px] uppercase tracking-widest font-medium",
        styles[kind],
        className
      )}
    >
      {labels[kind]}
    </span>
  );
}
