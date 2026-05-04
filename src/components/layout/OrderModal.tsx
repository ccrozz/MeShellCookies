"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCartStore } from "@/lib/store/cartStore";
import { Button } from "@/components/ui/Button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  deliveryPreference: string;
  orderNote: string;
};

export function OrderModal() {
  const open = useCartStore((s) => s.isOrderModalOpen);
  const close = useCartStore((s) => s.closeOrderModal);
  const items = useCartStore((s) => s.items);
  const clearCart = useCartStore((s) => s.clearCart);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      deliveryPreference: "",
      orderNote: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "order",
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          deliveryPreference: data.deliveryPreference,
          orderNote: data.orderNote,
          cartLines: items.map((i) => ({
            name: i.name,
            qty: i.quantity,
            price: i.price,
            note: i.note,
          })),
        }),
      });
      const json = (await res.json()) as { error?: string };
      if (!res.ok) {
        throw new Error(json.error ?? "Request failed");
      }
      setStatus("done");
      clearCart();
      reset();
    } catch (e) {
      setStatus("error");
      setErrorMsg(e instanceof Error ? e.message : "Something went wrong");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
          <motion.button
            type="button"
            className="absolute inset-0 bg-deep/50 backdrop-blur-sm"
            aria-label="Close order form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-whitecap p-6 shadow-2xl sm:rounded-3xl"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl text-driftwood">
                  Almost there 🍪
                </h2>
                <p className="mt-1 font-body text-sm text-driftwood/70">
                  Tell us where to deliver and we&apos;ll confirm your order by
                  email or phone.
                </p>
              </div>
              <button
                type="button"
                className="rounded-full p-2 text-driftwood hover:bg-shell"
                onClick={close}
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {status === "done" ? (
              <p className="font-body text-driftwood">
                Thanks! Your order request was sent. Michelle will reach out
                soon.
              </p>
            ) : (
              <form
                className="space-y-4"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <div>
                  <label className="font-body text-sm font-medium text-driftwood">
                    Name *
                  </label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body text-driftwood outline-none ring-coral/30 focus:ring-2"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-coral">Name is required.</p>
                  )}
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-driftwood">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body text-driftwood outline-none ring-coral/30 focus:ring-2"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-coral">Email is required.</p>
                  )}
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-driftwood">
                    Phone *
                  </label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body text-driftwood outline-none ring-coral/30 focus:ring-2"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-coral">Phone is required.</p>
                  )}
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-driftwood">
                    Delivery address *
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body text-driftwood outline-none ring-coral/30 focus:ring-2"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <p className="mt-1 text-xs text-coral">
                      Address is required.
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-driftwood">
                    Preferred delivery date / time
                  </label>
                  <input
                    className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body text-driftwood outline-none ring-coral/30 focus:ring-2"
                    {...register("deliveryPreference")}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-driftwood">
                    Notes (allergies, gifting)
                  </label>
                  <textarea
                    rows={3}
                    className="mt-1 w-full rounded-2xl border border-sand bg-shell px-4 py-3 font-body text-driftwood outline-none ring-coral/30 focus:ring-2"
                    {...register("orderNote")}
                  />
                </div>
                {errorMsg && (
                  <p className="text-sm text-coral" role="alert">
                    {errorMsg}
                  </p>
                )}
                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending…" : "Send order request"}
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={close}
                    disabled={status === "sending"}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
