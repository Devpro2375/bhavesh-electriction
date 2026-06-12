import { MapPin, Navigation, PhoneCall } from "lucide-react";
import { business, directionsHref, phoneHref } from "@/lib/business";
import { serviceAreas } from "@/lib/home-data";

export function AreasSection() {
  return (
    <section id="areas" className="section-pad bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div>
          <p className="section-kicker">सेवा परिसर</p>
          <h2 className="section-title">या भागांत electrician service.</h2>
          <p className="section-copy">
            तुमचा area खालील list मध्ये नसेल तरी फोन करा. कामाचा प्रकार, अंतर
            आणि वेळ पाहून visit बद्दल स्पष्ट सांगितले जाईल.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <a
              href={directionsHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-[#1b1f26] px-5 text-sm font-black text-white transition hover:bg-[#2a303a]"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Directions उघडा
            </a>
            <a
              href={phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#c9bea5] px-5 text-sm font-black text-[#181b20] transition hover:bg-[#f4eedf]"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-[#d9d4c4] bg-[#f8f5ed] p-4 sm:p-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex min-h-13 items-center gap-2 rounded-md bg-white px-3 py-3 text-sm font-black text-[#181b20] shadow-sm"
              >
                <MapPin className="h-4 w-4 shrink-0 text-[#b65d1e]" aria-hidden="true" />
                {area}
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg bg-[#1b1f26] p-5 text-white">
            <p className="text-sm font-bold text-white/68">Address</p>
            <p className="mt-2 text-xl font-black">{business.address.street}</p>
            <p className="mt-2 leading-7 text-white/80">
              {business.address.locality}, {business.address.region}{" "}
              {business.address.postalCode}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
