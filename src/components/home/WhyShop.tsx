const reasons = [
  {
    title: "Affordable prices",
    text: "Everyday products priced with local budgets in mind.",
  },
  {
    title: "Wide product selection",
    text: "Fashion, home, beauty, electronics and more under one roof.",
  },
  {
    title: "Friendly customer service",
    text: "A welcoming team ready to help you find what you need.",
  },
  {
    title: "Convenient one-stop shopping",
    text: "Save time by shopping for the whole family in one store.",
  },
  {
    title: "New arrivals",
    text: "Fresh styles and essentials arriving regularly.",
  },
  {
    title: "Growing South African retail",
    text: "Proudly serving Mankweng and the wider Limpopo community.",
  },
];

export function WhyShop() {
  return (
    <section className="py-16 md:py-24 border-y border-hl-border">
      <div className="mx-auto max-w-[1600px] px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="font-display text-2xl md:text-4xl tracking-tight">
            Why Shop at Helen Lifestyle
          </h2>
          <p className="mt-4 text-sm md:text-base text-hl-muted leading-relaxed">
            We focus on affordability, variety, convenience and friendly service
            — making everyday shopping easier for our community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="animate-slide-up" style={{ animationDelay: `${i * 80}ms` }}>
              <p className="text-[11px] tracking-[0.16em] uppercase text-hl-muted mb-2">
                0{i + 1}
              </p>
              <h3 className="font-display text-lg md:text-xl tracking-tight">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm text-hl-muted leading-relaxed">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
