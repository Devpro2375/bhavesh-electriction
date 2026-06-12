import { MapPin, PhoneCall } from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  business,
  directionsHref,
  phoneHref,
  whatsappHref,
} from "@/lib/business";

export function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="section-kicker">संपर्क</p>
          <h2 className="section-title">Pune किंवा Bhosari मध्ये urgent काम असेल तर फोन करा.</h2>
          <p className="section-copy">
            Emergency electrician Pune, MCB repair, wiring किंवा fan-light fitting
            साठी थेट कॉल करा. Routine कामासाठी form भरा; submit केल्यावर WhatsApp
            message तयार होईल, त्यामुळे details पुन्हा type कराव्या लागणार नाहीत.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4">
            <a
              href={phoneHref}
              className="flex items-center gap-4 rounded-lg border border-[#d9d4c4] bg-white p-4 shadow-sm transition hover:bg-[#f8f5ed] sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#f3b743] text-[#181b20]">
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-[#66706b]">
                  Call / emergency
                </span>
                <span className="break-words text-2xl font-black text-[#181b20]">
                  {business.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-lg border border-[#d9d4c4] bg-white p-4 shadow-sm transition hover:bg-[#f8f5ed] sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-[#1b1f26] text-[#f3b743]">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-bold text-[#66706b]">Address</span>
                <span className="text-lg font-black text-[#181b20]">
                  Adarsh Nagar, Bhosari, PCMC 411039
                </span>
              </span>
            </a>
          </div>
        </div>

        <EnquiryForm phoneHref={phoneHref} whatsappHref={whatsappHref} />
      </div>
    </section>
  );
}
