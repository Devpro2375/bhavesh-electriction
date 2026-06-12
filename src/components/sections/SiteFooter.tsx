import { MessageCircle, PhoneCall } from "lucide-react";
import { business, phoneHref, whatsappHref } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="bg-[#171a20] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xl font-black">{business.fullName}</p>
          <p className="mt-1 text-sm text-white/64">
            Electrical engineer in Pimpri-Chinchwad, Maharashtra
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#f3b743] px-4 text-sm font-black text-[#181b20]"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            फोन करा
          </a>
          <a
            href={whatsappHref}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/18 px-4 text-sm font-black text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
