import Image from "next/image";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { getServiceWhatsappHref, personalSignals, services } from "@/lib/home-data";

export function ServicesSection() {
  return (
    <section id="services" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="live-strip rounded-md border-y border-[#d9d4c4] bg-[#fffdf7] py-3">
          <div className="live-track flex w-max gap-3">
            {[...personalSignals, ...personalSignals].map((signal, index) => (
              <span
                key={`${signal}-${index}`}
                className="inline-flex items-center gap-2 rounded bg-[#1b1f26] px-3 py-2 text-sm font-black text-white"
              >
                <span className="h-2 w-2 rounded-full bg-[#f3b743]" />
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
          <div>
            <p className="section-kicker">सेवा</p>
            <h2 className="section-title">कोणते electrical काम आहे ते लगेच कळेल.</h2>
            <p className="section-copy">
              घरातील छोटा fault असो किंवा दुकान-ऑफिसचे काम, आधी समस्या स्पष्ट
              समजून घेतली जाते आणि मग योग्य उपाय सांगितला जातो.
            </p>

            <div className="mt-6 rounded-lg border border-[#d7c9ab] bg-[#181b20] p-4 text-white shadow-[0_14px_34px_rgba(24,27,32,0.12)]">
              <p className="text-sm font-black text-[#f3b743]">Bhavesh कडून</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">
                Call करताना area, problem आणि तातडी आधी विचारली जाते. शक्य असेल
                तर phone वरच अंदाज सांगितला जातो.
              </p>
            </div>
          </div>

          <div className="service-rail grid auto-cols-[minmax(15.75rem,78vw)] grid-flow-col items-stretch gap-4 overflow-x-auto pb-3 md:grid-flow-row md:auto-cols-auto md:auto-rows-fr md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const Icon = service.icon;
  const serviceWhatsappHref = getServiceWhatsappHref(service.title);

  return (
    <article
      className="service-card flex h-full snap-start flex-col overflow-hidden rounded-md border border-[#d8cbb2] bg-[#fffdf8] shadow-[0_8px_22px_rgba(24,27,32,0.055)]"
      style={{ animationDelay: `${index * 75}ms` }}
    >
      <div className="relative h-[7.75rem] shrink-0 overflow-hidden bg-[#d9d4c4] sm:h-[8.15rem] lg:h-[7.9rem] xl:h-[8.15rem]">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 82vw"
          className="service-card-image object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(24,27,32,0.30),rgba(24,27,32,0))]" />
      </div>
      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="mb-2.5 flex min-h-8 items-center justify-between gap-3">
          <span className="max-w-[calc(100%-2.75rem)] truncate rounded bg-[#f1e7cd] px-2.5 py-1 text-[0.78rem] font-black leading-none text-[#79400e]">
            {service.tag}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1b1f26] text-[#f3b743]">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
        <h3 className="service-card-title text-[1.05rem] font-black leading-6 text-[#181b20] sm:text-[1.1rem]">
          {service.title}
        </h3>
        <p className="service-card-copy mt-1.5 text-[0.92rem] font-medium leading-6 text-[#5d6470]">
          {service.description}
        </p>
        <ul className="service-card-points mt-3 space-y-1 border-t border-[#ece4d4] pt-3">
          {service.points.slice(0, 2).map((point) => (
            <li
              key={point}
              className="service-card-point flex items-start gap-1.5 text-[0.84rem] font-bold leading-5 text-[#303946]"
            >
              <CheckCircle2
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2f6f9f]"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-3">
          <a
            href={serviceWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md bg-[#1b1f26] px-3 text-[0.9rem] font-black text-white transition hover:bg-[#2a303a]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            या कामासाठी WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}
