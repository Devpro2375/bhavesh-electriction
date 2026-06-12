import { workSteps } from "@/lib/home-data";

export function ProcessSection() {
  return (
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
  );
}
