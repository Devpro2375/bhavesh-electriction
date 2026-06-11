"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, MessageCircle, PhoneCall, Send } from "lucide-react";

type EnquiryFormProps = {
  phoneHref: string;
  whatsappHref: string;
};

type FormState = {
  name: string;
  phone: string;
  area: string;
  service: string;
  message: string;
  company: string;
};

type SubmitState =
  | { type: "idle"; message: string; whatsappUrl?: undefined }
  | { type: "loading"; message: string; whatsappUrl?: undefined }
  | { type: "success"; message: string; whatsappUrl: string }
  | { type: "error"; message: string; whatsappUrl?: undefined };

const initialForm: FormState = {
  name: "",
  phone: "",
  area: "",
  service: "वायरिंग / स्विचबोर्ड",
  message: "",
  company: "",
};

const serviceOptions = [
  "वायरिंग / स्विचबोर्ड",
  "MCB / ELCB / panel issue",
  "Fan / light fitting",
  "Inverter / battery / earthing",
  "Shop / office / society work",
  "Emergency repair",
];

export function EnquiryForm({ phoneHref, whatsappHref }: EnquiryFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "Routine कामासाठी details पाठवा.",
  });

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState({ type: "loading", message: "Enquiry तयार होत आहे..." });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as {
        message?: string;
        whatsappUrl?: string;
      };

      if (!response.ok || !payload.whatsappUrl) {
        throw new Error(payload.message || "Details तपासा आणि पुन्हा प्रयत्न करा.");
      }

      setSubmitState({
        type: "success",
        message: payload.message || "Enquiry तयार झाली.",
        whatsappUrl: payload.whatsappUrl,
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Enquiry पाठवता आली नाही. थेट फोन करा.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#d9d4c4] bg-white p-4 shadow-[0_20px_60px_rgba(27,39,33,0.1)] sm:p-7"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-black text-[#a6531d]">Quick enquiry</p>
          <h3 className="mt-2 text-2xl font-black leading-9 text-[#14231d] sm:text-3xl sm:leading-10">
            कामाची माहिती पाठवा
          </h3>
          <p className="mt-2 text-sm leading-6 text-[#66706b]">
            Form submit केल्यावर WhatsApp message तयार होईल.
          </p>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#1b1f26] text-[#f3b743]">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(event) => updateField("company", event.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="field-label">
          नाव
          <input
            className="field-control"
            required
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="उदा. अमोल"
          />
        </label>

        <label className="field-label">
          मोबाइल नंबर
          <input
            className="field-control"
            required
            inputMode="tel"
            name="phone"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="उदा. 98xxxxxx"
          />
        </label>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="field-label">
          Area
          <input
            className="field-control"
            name="area"
            value={form.area}
            onChange={(event) => updateField("area", event.target.value)}
            placeholder="भोसरी / मोशी / पुणे"
          />
        </label>

        <label className="field-label">
          Service
          <select
            className="field-control"
            name="service"
            value={form.service}
            onChange={(event) => updateField("service", event.target.value)}
          >
            {serviceOptions.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="field-label mt-4">
        Problem काय आहे?
        <textarea
          className="field-control min-h-28 resize-y"
          name="message"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="उदा. main MCB trip होत आहे, fan fitting करायची आहे..."
        />
      </label>

      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <button
          type="submit"
          disabled={submitState.type === "loading"}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1b1f26] px-5 text-sm font-black text-white transition hover:bg-[#2a303a] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitState.type === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Send className="h-4 w-4" aria-hidden="true" />
          )}
          Enquiry तयार करा
        </button>
        <a
          href={phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#c9bea5] px-5 text-sm font-black text-[#13251f] transition hover:bg-[#f4eedf]"
        >
          <PhoneCall className="h-4 w-4" aria-hidden="true" />
          थेट फोन
        </a>
      </div>

      {submitState.type !== "idle" && (
        <div
          className={`mt-5 rounded-lg border p-4 text-sm font-bold leading-6 ${
            submitState.type === "error"
              ? "border-[#e0b8a3] bg-[#fff2ed] text-[#7b2d12]"
              : "border-[#b8cce0] bg-[#edf4fb] text-[#234d75]"
          }`}
        >
          <div className="flex items-start gap-2">
            {submitState.type === "success" && (
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            )}
            <p>{submitState.message}</p>
          </div>
          {submitState.type === "success" && (
            <a
              href={submitState.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#234d75] px-4 text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp वर पाठवा
            </a>
          )}
        </div>
      )}

      <a
        href={whatsappHref}
        className="mt-4 inline-flex text-sm font-black text-[#a6531d] underline decoration-[#e2bd79] underline-offset-4"
      >
        Form नको असेल तर direct WhatsApp करा
      </a>
    </form>
  );
}
