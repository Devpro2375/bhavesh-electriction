import { quickFacts } from "@/lib/home-data";

export function QuickFactsSection() {
  return (
    <section className="bg-[#1b1f26] text-white" aria-label="Bhavesh Electrician quick details">
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
              <span>
                <span className="block text-sm font-bold text-white/58">{item.label}</span>
                <span className="block text-xl font-black">{item.value}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
