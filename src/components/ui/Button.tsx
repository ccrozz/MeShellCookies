import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "white";

const variants: Record<Variant, string> = {
  primary:
    "bg-coral text-whitecap shadow-md hover:bg-coral/90 active:scale-[0.98]",
  secondary:
    "border-2 border-coral text-coral bg-transparent hover:bg-coral/10 active:scale-[0.98]",
  ghost:
    "border border-whitecap text-whitecap hover:bg-whitecap/10 active:scale-[0.98]",
  white:
    "bg-whitecap text-coral shadow hover:bg-whitecap/90 active:scale-[0.98]",
};

type Base = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
};

type ButtonAsButton = Base &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = Base &
  React.ComponentProps<typeof Link> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
    ...rest
  } = props as ButtonAsButton & { href?: string };

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:pointer-events-none disabled:opacity-50";

  if ("href" in props && props.href) {
    const { href, ...linkRest } = props as ButtonAsLink;
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  const btnProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={btnProps.type ?? "button"}
      className={`${base} ${variants[variant]} ${className}`}
      {...btnProps}
    >
      {children}
    </button>
  );
}
