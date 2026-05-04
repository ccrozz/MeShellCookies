"use client";

import { Minus, Plus } from "lucide-react";

type QtyStepperProps = {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  disabledPlus?: boolean;
  accent?: boolean;
};

export function QtyStepper({
  value,
  onChange,
  min = 0,
  max,
  disabledPlus,
  accent,
}: QtyStepperProps) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => {
    if (max !== undefined && value >= max) return;
    if (disabledPlus) return;
    onChange(value + 1);
  };

  const btn =
    "flex h-9 w-9 items-center justify-center rounded-full border border-sand bg-whitecap text-driftwood transition hover:bg-shell disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-1 py-1 ${
        accent ? "border-coral/40 bg-coral/5" : "border-sand bg-whitecap"
      }`}
    >
      <button
        type="button"
        className={btn}
        onClick={dec}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="min-w-[1.5rem] text-center font-body text-sm font-semibold text-driftwood">
        {value}
      </span>
      <button
        type="button"
        className={btn}
        onClick={inc}
        disabled={disabledPlus || (max !== undefined && value >= max)}
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
