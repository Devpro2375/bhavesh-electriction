import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle, PhoneCall } from "lucide-react";
import { LogoMark } from "@/components/LogoMark";
import { business, phoneHref, whatsappHref } from "@/lib/business";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[690px] w-full max-w-[100vw] overflow-hidden bg-[#101317] text-white sm:min-h-[760px] md:min-h-[86svh]">
      <Image
        src="/images/optimized/hero-bhavesh-electrician.jpg"
        alt="भोसरीमध्ये electrical panel तपासत असलेले Bhavesh Electrician"
        fill
        preload
        sizes="100vw"
        className="object-cover object-[72%_center] opacity-72 sm:opacity-78 md:object-center md:opacity-100"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,19,23,0.76)_0%,rgba(16,19,23,0.58)_58%,rgba(16,19,23,0.22)_100%)] md:bg-[linear-gradient(90deg,rgba(16,19,23,0.96)_0%,rgba(16,19,23,0.78)_48%,rgba(16,19,23,0.34)_82%,rgba(16,19,23,0.2)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(244,190,82,0.1),transparent_36%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(0deg,rgba(16,19,23,0.68),rgba(16,19,23,0))]" />

      <div className="relative z-10 mx-auto flex min-h-[690px] w-full max-w-7xl flex-col overflow-hidden px-4 py-4 sm:min-h-[760px] sm:px-6 md:min-h-[86svh] lg:px-10">
        <header className="flex items-center justify-between gap-3">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Bhavesh Electrician home">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border-2 border-[#f4be52] bg-[#121a27] p-1 shadow-[0_6px_0_rgba(0,0,0,0.24)]">
              <LogoMark />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-base font-black sm:text-lg">
                {business.name}
              </span>
              <span className="block text-xs text-white/74 sm:text-sm">
                Bhosari • Pune
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-white/82 md:flex" aria-label="Main navigation">
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
            <span>फोन करा</span>
          </a>
        </header>

        <div
          id="top"
          className="flex w-full min-w-0 flex-1 items-center justify-center py-8 sm:py-16 md:py-20 lg:justify-start"
        >
          <div className="mx-auto w-full min-w-0 max-w-[calc(100vw-2rem)] sm:max-w-[34rem] md:max-w-[40rem] lg:mx-0 lg:max-w-3xl">
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-md border border-white/16 bg-white/8 px-3 py-2 text-[0.86rem] font-bold leading-5 text-white/84 backdrop-blur sm:text-sm sm:leading-6">
              <MapPin className="h-4 w-4 shrink-0 text-[#f4be52]" aria-hidden="true" />
              Electrician in Pune, Bhosari, PCMC
            </div>

            <h1 className="w-full max-w-[10.5ch] font-serif text-[clamp(2.08rem,8vw,2.22rem)] font-black leading-[1.04] text-[#fffaf0] [text-shadow:0_3px_18px_rgba(0,0,0,0.45)] sm:text-5xl sm:leading-[1.06] md:text-6xl lg:text-7xl">
              Bhavesh Electrician Bhosari
            </h1>
            <div className="mt-3 h-1 w-20 rounded-full bg-[#f4be52]" />
            <p className="mt-4 w-full max-w-full text-[0.98rem] font-semibold leading-7 text-white/88 [text-shadow:0_2px_14px_rgba(0,0,0,0.42)] sm:max-w-2xl sm:text-xl sm:leading-9">
              <span className="block sm:inline">भोसरी, पिंपरी-चिंचवड, PCMC आणि पुणे शहरात</span>{" "}
              <span className="block sm:inline">घर, दुकान, ऑफिस आणि सोसायटीसाठी electrician service.</span>{" "}
              <span className="block sm:inline">Wiring, MCB repair, switchboard, फॅन-लाईट फिटिंग,</span>{" "}
              <span className="block sm:inline">इन्व्हर्टर, अर्थिंग आणि emergency repair.</span>
              <span className="mt-2 inline-flex rounded bg-white/10 px-2.5 py-1 font-black text-white">
                24 तास फोन उपलब्ध.
              </span>
            </p>

            <div className="mt-6 grid w-full max-w-full grid-cols-1 gap-2.5 sm:max-w-xl sm:grid-cols-2 sm:gap-3">
              <a
                href={phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#f4be52] px-5 text-base font-black text-[#111317] shadow-[0_16px_36px_rgba(0,0,0,0.28)] transition hover:bg-[#ffd06a] sm:min-h-14"
              >
                <PhoneCall className="h-5 w-5" aria-hidden="true" />
                आता फोन करा
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={whatsappHref}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-white/18 bg-white/8 px-5 text-base font-black text-white backdrop-blur transition hover:bg-white/14 sm:min-h-14"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp करा
              </a>
            </div>

            <div className="mt-5 grid w-full max-w-full grid-cols-1 gap-2.5 sm:mt-8 sm:max-w-2xl sm:grid-cols-3 sm:gap-3">
              {[
                ["फोन नंबर", business.phoneDisplay],
                ["सेवा वेळ", "24 तास"],
                ["पत्ता", "Adarsh Nagar"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-md border border-white/10 bg-[#1b2027]/92 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.16)]"
                >
                  <p className="text-sm font-bold text-white/58">{label}</p>
                  <p className="mt-1 text-lg font-black">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
