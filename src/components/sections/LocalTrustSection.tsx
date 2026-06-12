import { business, phoneHref } from "@/lib/business";
import { localUseCases } from "@/lib/home-data";
import { PhoneCall } from "lucide-react";

export function LocalTrustSection() {
  return (
    <section className="bg-[#f2ead7] py-12 sm:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
        <div>
          <p className="section-kicker">Local trust</p>
          <h2 className="section-title">
            भोसरी base, Pune आणि PCMC मध्ये service.
          </h2>
          <p className="section-copy">
            Adarsh Nagar, Bhosari येथून घर, दुकान, ऑफिस आणि सोसायटीसाठी visit
            केली जाते. जवळचा भाग असेल तर timing लवकर मिळू शकते.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-[#cdbf9d] bg-[#181b20] p-5 text-white shadow-[0_18px_46px_rgba(24,27,32,0.16)] sm:p-6">
            <p className="text-sm font-black text-[#f3b743]">Bhavesh Electrician</p>
            <h3 className="mt-3 text-3xl font-black leading-10">
              24 तास फोन उपलब्ध
            </h3>
            <p className="mt-4 leading-7 text-white/76">
              काम तातडीचे असेल तर form न भरता थेट फोन करा. Routine कामासाठी
              details पाठवल्यावर timing आणि अंदाज सांगितला जाईल.
            </p>
            <a
              href={phoneHref}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#f3b743] px-5 text-sm font-black text-[#181b20]"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {localUseCases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg border border-[#cdbf9d] bg-white/78 p-5"
                >
                  <Icon className="h-6 w-6" style={{ color: item.color }} aria-hidden="true" />
                  <p className="mt-3 text-xl font-black">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[#5d625d]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
