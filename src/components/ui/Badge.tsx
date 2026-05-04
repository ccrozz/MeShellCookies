const tagStyles: Record<string, string> = {
  bestseller: "bg-coral text-whitecap",
  new: "bg-tide text-deep",
  "fan-fave": "bg-seafoam text-driftwood",
  seasonal: "bg-sand text-driftwood",
  "gf-friendly": "bg-whitecap text-driftwood ring-1 ring-sand",
};

function labelForTag(tag: string) {
  if (tag === "fan-fave") return "Fan Fave";
  if (tag === "gf-friendly") return "GF Friendly";
  return tag.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Badge({ tag }: { tag: string }) {
  const style = tagStyles[tag] ?? "bg-tide/80 text-deep";
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${style}`}
    >
      {labelForTag(tag)}
    </span>
  );
}
