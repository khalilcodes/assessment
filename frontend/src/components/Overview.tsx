export function Overview() {
  return (
    <section
      id="overview"
      aria-labelledby="overview-heading"
      className="border-y border-line bg-surface"
    >  
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <h2
            id="overview-heading"
            className="font-display text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]"
          >
            Most portable lights look like tools. This one was drawn for the
            table it sits on.
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:pt-2">
            <p>
              The Halo is a single machined cylinder with a sealed opal dome on
              top. There is no app, no colour wheel, and no menu — a knurled
              ring at the base takes the light from the flicker of a candle up
              to something you can genuinely read by, then off again.
            </p>
            <p>
              It charges over USB-C in two hours, runs for thirty-eight, and
              shrugs off a downpour. Pick it up by the leather loop and the
              evening moves with you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
