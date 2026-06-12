import { MessageCircle, PhoneCall } from "lucide-react";
import { phoneHref, whatsappHref } from "@/lib/business";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/16 bg-[#171a20]/96 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 text-white shadow-[0_-12px_32px_rgba(0,0,0,0.22)] backdrop-blur md:hidden">
      <div className="mx-auto grid w-full max-w-[22rem] grid-cols-2 gap-2">
        <a
          href={phoneHref}
          className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-md bg-[#f3b743] px-2 text-sm font-black text-[#181b20]"
        >
          <PhoneCall className="h-4 w-4 shrink-0" aria-hidden="true" />
          Call
        </a>
        <a
          href={whatsappHref}
          className="inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-md border border-white/18 px-2 text-sm font-black"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
