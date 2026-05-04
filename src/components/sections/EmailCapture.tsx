"use client";

import { useState } from "react";
import { FadeUp } from "@/components/ui/FadeUp";
import { WaveDivider } from "@/components/ui/WaveDivider";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "newsletter",
          email: email.trim(),
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("done");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-tide py-16">
      <FadeUp className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="text-3xl">🍪</p>
        <h2 className="mt-2 font-display text-3xl text-deep sm:text-4xl">
          New flavors drop all the time.
        </h2>
        <p className="mt-2 font-display text-3xl text-deep sm:text-4xl">
          Be the first to know.
        </p>
        <p className="mx-auto mt-4 max-w-xl font-body text-lg text-deep/80">
          Get updates on new flavors and seasonal specials.
        </p>
        <form
          onSubmit={submit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full rounded-full border-0 bg-whitecap px-6 py-4 font-body text-driftwood shadow-md outline-none ring-2 ring-transparent transition focus:ring-coral"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="rounded-full bg-coral px-8 py-4 font-body font-semibold text-whitecap shadow-md transition hover:bg-coral/90 disabled:opacity-60"
          >
            {status === "done" ? "You’re in!" : "Notify me →"}
          </button>
        </form>
        {status === "error" && (
          <p className="mt-3 text-sm text-deep">Something went wrong. Try again?</p>
        )}
      </FadeUp>
      <div className="mt-16">
        <WaveDivider fillColor="#18242F" bgColor="#6F9499" />
      </div>
    </section>
  );
}
