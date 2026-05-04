"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";

type Form = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Form>();

  const onSubmit = async (data: Form) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...data }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 rounded-3xl border border-sand bg-whitecap p-6 shadow-sm"
    >
      <div>
        <label className="font-body text-sm font-medium text-driftwood">Name *</label>
        <input
          className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body outline-none ring-coral/30 focus:ring-2"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <p className="mt-1 text-xs text-coral">Required</p>
        )}
      </div>
      <div>
        <label className="font-body text-sm font-medium text-driftwood">Email *</label>
        <input
          type="email"
          className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body outline-none ring-coral/30 focus:ring-2"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-coral">Required</p>
        )}
      </div>
      <div>
        <label className="font-body text-sm font-medium text-driftwood">Phone</label>
        <input
          className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body outline-none ring-coral/30 focus:ring-2"
          {...register("phone")}
        />
      </div>
      <div>
        <label className="font-body text-sm font-medium text-driftwood">
          Message / order details
        </label>
        <textarea
          rows={5}
          className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body outline-none ring-coral/30 focus:ring-2"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="mt-1 text-xs text-coral">Please add a message.</p>
        )}
      </div>
      {status === "error" && (
        <p className="text-sm text-coral">Could not send. Try again?</p>
      )}
      {status === "done" && (
        <p className="text-sm text-seafoam">Thanks! We&apos;ll be in touch soon.</p>
      )}
      <Button type="submit" variant="primary" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send it →"}
      </Button>
    </form>
  );
}
