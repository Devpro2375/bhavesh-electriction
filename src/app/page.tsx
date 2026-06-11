import Image from "next/image";
import {
  ArrowRight,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Clock,
  Fan,
  Gauge,
  Home,
  MapPin,
  MessageCircle,
  Navigation,
  PhoneCall,
  Plug,
  ShieldCheck,
  Star,
  Store,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { EnquiryForm } from "@/components/EnquiryForm";

const phoneDisplay = "077989 79678";
const phoneHref = "tel:+917798979678";
const whatsappPhone = "917798979678";
const whatsappHref = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
  "नमस्कार Bhaavesh Electrician, मला भोसरी/पुणे परिसरात इलेक्ट्रिशियन सेवा हवी आहे.",
)}`;
const getServiceWhatsappHref = (serviceTitle: string) =>
  `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
    `नमस्कार Bhaavesh Electrician, मला "${serviceTitle}" या सेवेसाठी enquiry करायची आहे. मी भोसरी/पुणे परिसरातून संपर्क करत आहे.`,
  )}`;
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Bhaavesh%20Electrician%20Adarsh%20Nagar%20Bhosari%20Pimpri-Chinchwad%20Maharashtra%20411039";

type Service = {
  title: string;
  tag: string;
  description: string;
  image: string;
  icon: LucideIcon;
  points: string[];
};

const services: Service[] = [
  {
    title: "वायरिंग आणि स्विचबोर्ड",
    tag: "घर / फ्लॅट",
    description:
      "लूज कनेक्शन, जळालेला स्विच, नवीन पॉइंट किंवा शॉकची समस्या असेल तर तपासणी करून सुरक्षित दुरुस्ती.",
    image: "/images/service-no-face-wiring.png",
    icon: Plug,
    points: ["स्विच, सॉकेट, रेग्युलेटर", "नवीन पॉइंट आणि concealed wiring", "फ्यूज व लोड तपासणी"],
  },
  {
    title: "MCB, ELCB आणि पॅनेल",
    tag: "सुरक्षा",
    description:
      "MCB वारंवार trip होत असेल, main बंद होत असेल किंवा बोर्ड गरम होत असेल तर कारण शोधून योग्य उपाय.",
    image: "/images/service-no-face-mcb.png",
    icon: ShieldCheck,
    points: ["MCB/ELCB/RCCB बदल", "मीटर आणि distribution board", "लोड balancing"],
  },
  {
    title: "फॅन, लाईट आणि फिटिंग",
    tag: "इंस्टॉलेशन",
    description:
      "Ceiling fan, LED panel, tube light, chandelier, exhaust fan आणि shop lighting स्वच्छ कामासह बसवून देतो.",
    image: "/images/service-no-face-fan-light.png",
    icon: Fan,
    points: ["फॅन fitting आणि repair", "LED/spot light fitting", "holder, dimmer, tube light"],
  },
  {
    title: "इन्व्हर्टर, बॅटरी आणि अर्थिंग",
    tag: "बॅकअप",
    description:
      "इन्व्हर्टर लाइन, बॅटरी कनेक्शन, earthing आणि voltage check करून power backup नीट चालेल याची खात्री.",
    image: "/images/service-no-face-inverter.png",
    icon: BatteryCharging,
    points: ["इन्व्हर्टर connection", "बॅटरी terminal service", "earthing आणि voltage check"],
  },
  {
    title: "दुकान, ऑफिस आणि सोसायटी",
    tag: "दुकान / ऑफिस",
    description:
      "दुकानाचे पॉइंट, ऑफिस wiring, सोसायटी common lights, pump starter आणि routine maintenance साठी visit.",
    image: "/images/service-no-face-shop-society.png",
    icon: Building2,
    points: ["दुकान/ऑफिस wiring", "common area lights", "maintenance visit"],
  },
  {
    title: "24 तास तातडीची दुरुस्ती",
    tag: "तत्काळ",
    description:
      "रात्री लाईट गेली, burning smell आली, sparking sound येत असेल किंवा main बंद झाला तर लगेच फोन करा.",
    image: "/images/service-no-face-emergency.png",
    icon: Clock,
    points: ["फोनवर प्राथमिक मार्गदर्शन", "तत्काळ visit", "सुरक्षित temporary fix"],
  },
];

const serviceAreas = [
  "भोसरी",
  "आदर्श नगर",
  "पिंपरी-चिंचवड",
  "चिखली",
  "मोशी",
  "निगडी",
  "आकुर्डी",
  "दिघी",
  "कासारवाडी",
  "पुणे शहर",
];

const quickFacts = [
  { label: "सेवा वेळ", value: "24 तास उपलब्ध", icon: Clock },
  { label: "मुख्य परिसर", value: "भोसरी, PCMC, पुणे", icon: MapPin },
  { label: "Google reviews", value: "4.3 rating", icon: Star },
  { label: "थेट फोन", value: phoneDisplay, icon: PhoneCall },
];

const personalSignals = [
  "Bhaavesh स्वतः phone उचलतो",
  "भोसरी base, Pune-PCMC visit",
  "पहिले problem समजून घेतो",
  "कामानंतर safety check",
  "Emergency साठी 24 तास call",
  "Adarsh Nagar पासून जलद visit",
];

const workSteps = [
  {
    title: "समस्या आधी नीट समजून घेतो",
    description:
      "कुठे trip होत आहे, smell किंवा sound आहे का, कोणत्या भागात visit हवी आहे हे फोनवर विचारतो.",
    icon: PhoneCall,
  },
  {
    title: "तपासणी करून खर्च सांगतो",
    description:
      "Tester, meter आणि load check करून काम सुरू करण्यापूर्वी अंदाज स्पष्ट सांगितला जातो.",
    icon: Gauge,
  },
  {
    title: "कामानंतर final safety check",
    description:
      "बोर्ड, MCB, fitting किंवा earthing पुन्हा तपासून जागा स्वच्छ ठेवली जाते.",
    icon: CheckCircle2,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Bhaavesh Electrician, Bhosari",
  image: "/images/hero-bhaavesh-electrician-v2.png",
  telephone: "+91 77989 79678",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Adarsh Nagar, Bhosari",
    addressLocality: "Pimpri-Chinchwad",
    addressRegion: "Maharashtra",
    postalCode: "411039",
    addressCountry: "IN",
  },
  areaServed: serviceAreas,
  openingHours: "Mo-Su 00:00-23:59",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.3",
    reviewCount: "6",
  },
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)] pb-24 text-[var(--foreground)] md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative isolate min-h-[820px] overflow-hidden bg-[#181b20] text-white md:min-h-[86svh]">
        <Image
          src="/images/hero-bhaavesh-electrician-v2.png"
          alt="भोसरीमध्ये electrical panel तपासत असलेले Bhaavesh Electrician"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,21,26,0.98)_0%,rgba(18,21,26,0.88)_58%,rgba(18,21,26,0.46)_100%)] md:bg-[linear-gradient(90deg,rgba(18,21,26,0.94)_0%,rgba(18,21,26,0.74)_44%,rgba(18,21,26,0.28)_78%,rgba(18,21,26,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_50%,rgba(243,183,67,0.14),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(0deg,rgba(18,21,26,0.92),rgba(18,21,26,0))]" />

        <div className="relative z-10 mx-auto flex min-h-[820px] max-w-7xl flex-col px-4 py-4 sm:px-6 md:min-h-[86svh] lg:px-10">
          <header className="flex items-center justify-between gap-3">
            <a href="#top" className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/24 bg-white/12 backdrop-blur">
                <Zap className="h-5 w-5 text-[#f3b743]" aria-hidden="true" />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block truncate text-base font-black sm:text-lg">
                  Bhaavesh Electrician
                </span>
                <span className="block text-xs text-white/74 sm:text-sm">
                  Bhosari • Pune
                </span>
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-semibold text-white/82 md:flex">
              <a className="transition hover:text-white" href="#services">
                सेवा
              </a>
              <a className="transition hover:text-white" href="#areas">
                परिसर
              </a>
              <a className="transition hover:text-white" href="#contact">
                संपर्क
              </a>
            </nav>

            <a
              href={phoneHref}
              className="hidden min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-[#f3b743] px-3 text-sm font-black text-[#181b20] shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition hover:bg-[#ffd06a] sm:inline-flex sm:px-4"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">फोन करा</span>
              <span className="sm:hidden">Call</span>
            </a>
          </header>

          <div id="top" className="flex flex-1 items-center py-12 sm:py-16 md:py-20">
            <div className="w-full min-w-0 max-w-[22rem] sm:max-w-[34rem] md:max-w-3xl">
              <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-md border border-white/22 bg-white/10 px-3 py-2 text-sm font-bold leading-6 text-white/88 backdrop-blur">
                <MapPin className="h-4 w-4 shrink-0 text-[#f3b743]" aria-hidden="true" />
                भोसरी, पिंपरी-चिंचवड आणि पुणे परिसर
              </div>

              <h1 className="max-w-[20rem] break-words font-serif text-[2.22rem] font-black leading-[1.06] text-white [overflow-wrap:anywhere] sm:max-w-3xl sm:text-5xl md:text-6xl lg:max-w-4xl lg:text-7xl">
                Bhaavesh Electrician, Bhosari
              </h1>
              <p className="mt-5 w-full max-w-full text-[1.04rem] font-medium leading-8 text-white/90 [overflow-wrap:anywhere] sm:max-w-2xl sm:text-xl sm:leading-9">
                <span className="block sm:inline">
                  घर, दुकान, ऑफिस आणि सोसायटीसाठी
                </span>{" "}
                <span className="block sm:inline">
                  विश्वासार्ह इलेक्ट्रिशियन सेवा.
                </span>{" "}
                <span className="block sm:inline">
                  Wiring, MCB, फॅन-लाईट फिटिंग,
                </span>{" "}
                <span className="block sm:inline">
                  इन्व्हर्टर, अर्थिंग आणि urgent repair.
                </span>{" "}
                <span className="block sm:inline">
                  24 तास फोन उपलब्ध.
                </span>
              </p>

              <div className="mt-8 grid w-full max-w-full grid-cols-1 gap-3 sm:max-w-xl sm:grid-cols-2">
                <a
                  href={phoneHref}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-[#f3b743] px-5 text-base font-black text-[#181b20] transition hover:bg-[#ffd06a]"
                >
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  आता फोन करा
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={whatsappHref}
                  className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/28 bg-white/12 px-5 text-base font-black text-white backdrop-blur transition hover:bg-white/20"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  WhatsApp करा
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-full grid-cols-1 gap-3 sm:max-w-2xl sm:grid-cols-3">
                <div className="rounded-md border border-white/14 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm text-white/64">फोन नंबर</p>
                  <p className="mt-1 text-lg font-black">{phoneDisplay}</p>
                </div>
                <div className="rounded-md border border-white/14 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm text-white/64">सेवा वेळ</p>
                  <p className="mt-1 text-lg font-black">24 तास</p>
                </div>
                <div className="rounded-md border border-white/14 bg-white/10 p-4 backdrop-blur">
                  <p className="text-sm text-white/64">पत्ता</p>
                  <p className="mt-1 text-lg font-black">Adarsh Nagar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1b1f26] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 border-y border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex min-h-24 items-center gap-4 border-b border-white/10 px-4 py-5 sm:border-r sm:px-6 lg:border-b-0 lg:px-8"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10">
                  <Icon className="h-5 w-5 text-[#f3b743]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white/62">{item.label}</p>
                  <p className="mt-1 text-lg font-black">{item.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-[#dfd4bd] bg-[#f4ead4]">
        <div className="live-strip mx-auto max-w-7xl overflow-hidden px-4 py-3 sm:px-6 lg:px-10">
          <div className="live-track flex w-max gap-3">
            {[...personalSignals, ...personalSignals].map((signal, index) => (
              <span
                key={`${signal}-${index}`}
                className="inline-flex min-h-9 items-center rounded-full border border-[#d2c29e] bg-white/72 px-4 text-sm font-black text-[#303946]"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_22rem] lg:items-end">
            <div className="max-w-3xl">
              <p className="section-kicker">सेवा स्पष्ट, भाषा सोपी</p>
              <h2 className="section-title">कोणते electrical काम हवे आहे?</h2>
              <p className="section-copy">
                खालील सेवा पाहून लगेच कळेल की कोणत्या कामासाठी फोन करायचा.
                घरातील छोटा fault असो किंवा दुकान-ऑफिसचे काम, आधी समस्या
                स्पष्ट समजून घेतली जाते आणि मग योग्य उपाय सांगितला जातो.
              </p>
            </div>

            <div className="rounded-lg border border-[#d7c9ab] bg-[#181b20] p-4 text-white shadow-[0_14px_34px_rgba(24,27,32,0.12)]">
              <p className="text-sm font-black text-[#f3b743]">Bhaavesh कडून</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white/78">
                Call करताना area, problem आणि तातडी आधी विचारली जाते. शक्य
                असेल तर phone वरच अंदाज सांगितला जातो.
              </p>
            </div>
          </div>

          <div className="service-rail mt-7 grid auto-cols-[minmax(16.25rem,82vw)] grid-flow-col items-stretch gap-3 overflow-x-auto pb-3 md:grid-flow-row md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const serviceWhatsappHref = getServiceWhatsappHref(service.title);
              return (
                <article
                  key={service.title}
                  className="service-card flex h-full min-h-0 snap-start flex-col overflow-hidden rounded-md border border-[#ddd3bf] bg-white shadow-[0_8px_22px_rgba(24,27,32,0.055)]"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="relative h-[8.25rem] overflow-hidden bg-[#d9d4c4] sm:h-[8.75rem] lg:h-[8.5rem] xl:h-[9rem]">
                    <Image
                      src={service.image}
                      alt={`${service.title} सेवा दाखवणारा फोटो`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="service-card-image object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(0deg,rgba(24,27,32,0.30),rgba(24,27,32,0))]" />
                  </div>
                  <div className="flex flex-1 flex-col p-3.5 sm:p-4">
                    <div className="mb-2.5 flex min-h-8 items-center justify-between gap-3">
                      <span className="rounded bg-[#f1e7cd] px-2.5 py-1 text-[0.78rem] font-black leading-none text-[#79400e]">
                        {service.tag}
                      </span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#1b1f26] text-[#f3b743]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="text-[1.05rem] font-black leading-6 text-[#181b20] sm:text-[1.12rem]">
                      {service.title}
                    </h3>
                    <p className="service-card-copy mt-1.5 text-[0.92rem] font-medium leading-6 text-[#5d6470]">
                      {service.description}
                    </p>
                    <ul className="mt-3 space-y-1 border-t border-[#ece4d4] pt-3">
                      {service.points.slice(0, 2).map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-1.5 text-[0.84rem] font-bold leading-5 text-[#303946]"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2f6f9f]"
                            aria-hidden="true"
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={serviceWhatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-[#1b1f26] px-3 text-[0.9rem] font-black text-white transition hover:bg-[#2a303a]"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp enquiry
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f2ead7] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-10">
          <div>
            <p className="section-kicker">Local trust</p>
            <h2 className="section-title">भोसरी base, Pune आणि PCMC मध्ये service.</h2>
            <p className="section-copy">
              Adarsh Nagar, Bhosari येथून घर, दुकान, ऑफिस आणि सोसायटीसाठी visit
              केली जाते. जवळचा भाग असेल तर timing लवकर मिळू शकते.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-[#cdbf9d] bg-[#181b20] p-5 text-white shadow-[0_18px_46px_rgba(24,27,32,0.16)] sm:p-6">
              <p className="text-sm font-black text-[#f3b743]">Bhaavesh Electrician</p>
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
                {phoneDisplay}
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <div className="rounded-lg border border-[#cdbf9d] bg-white/78 p-5">
                <Home className="h-6 w-6 text-[#a6531d]" aria-hidden="true" />
                <p className="mt-3 text-xl font-black">घर</p>
                <p className="mt-2 text-sm leading-6 text-[#5d625d]">
                  फ्लॅट, row house, kitchen points, geyser, fan आणि lights.
                </p>
              </div>
              <div className="rounded-lg border border-[#cdbf9d] bg-white/78 p-5">
                <Store className="h-6 w-6 text-[#2f6f9f]" aria-hidden="true" />
                <p className="mt-3 text-xl font-black">दुकान / ऑफिस</p>
                <p className="mt-2 text-sm leading-6 text-[#5d625d]">
                  counter points, signage, AC line आणि lighting setup.
                </p>
              </div>
              <div className="rounded-lg border border-[#cdbf9d] bg-white/78 p-5">
                <Building2 className="h-6 w-6 text-[#203954]" aria-hidden="true" />
                <p className="mt-3 text-xl font-black">सोसायटी</p>
                <p className="mt-2 text-sm leading-6 text-[#5d625d]">
                  common lights, panel check, pump starter आणि maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="section-kicker">सेवा परिसर</p>
            <h2 className="section-title">या भागांत electrician service.</h2>
            <p className="section-copy">
              तुमचा area खालील list मध्ये नसेल तरी फोन करा. कामाचा प्रकार,
              अंतर आणि वेळ पाहून visit बद्दल स्पष्ट सांगितले जाईल.
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
                {phoneDisplay}
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
              <p className="mt-2 text-xl font-black">Adarsh Nagar, Bhosari</p>
              <p className="mt-2 leading-7 text-white/80">
                Pimpri-Chinchwad, Maharashtra 411039
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[#1b1f26] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker text-[#f3b743]">कामाची पद्धत</p>
              <h2 className="font-serif text-4xl font-black leading-tight sm:text-5xl">
                आधी सुरक्षितता, मग दुरुस्ती.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/76">
                ग्राहकाला काय बिघडले आहे, किती तातडीचे आहे आणि पुढचा step काय
                आहे हे साध्या भाषेत सांगितले जाते.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {workSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article
                    key={step.title}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/12 bg-white/7 p-4 sm:p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#f3b743] text-[#181b20]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-black text-[#f3b743]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-1 text-xl font-black sm:text-2xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-7 text-white/72">{step.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
          <div>
            <p className="section-kicker">संपर्क</p>
              <h2 className="section-title">Urgent काम असेल तर थेट फोन करा.</h2>
            <p className="section-copy">
              Routine कामासाठी form भरा. Submit केल्यावर WhatsApp message तयार
              होईल, त्यामुळे details पुन्हा type कराव्या लागणार नाहीत.
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
                    {phoneDisplay}
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

      <footer className="bg-[#171a20] px-4 py-8 text-white sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black">Bhaavesh Electrician, Bhosari</p>
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
    </main>
  );
}
