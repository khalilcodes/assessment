import { features } from '../data/features';

const FEATURES_IMAGE = "/features-image.jpg";

export function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-24"
    >  
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs uppercase tracking-[0.16em] text-ember">
            Key features
          </p>
          <h2
            id="features-heading"
            className="mt-4 font-display text-3xl leading-[1.1] tracking-tight text-ink sm:text-4xl"
          >  
            Four decisions that shaped it
          </h2>
          <figure className="mt-8 hidden lg:block">
            <img
              src={FEATURES_IMAGE}
              alt="The Halo Field Lamp glowing on a linen-covered outdoor table at dusk, beside a ceramic bowl and folded napkin."
              className="w-full rounded-2xl object-cover"
              width={1200}
              height={800}
            />
          </figure>
        </div>

        <ul className="divide-y divide-line border-t border-line">
          {features.map((feature) =>
            <li
              key={feature.id}
              className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 gap-y-2 py-7 sm:gap-x-8 sm:py-9"
            >  
              <span
                aria-hidden="true"
                className="font-display text-xl leading-none text-ember sm:text-2xl"
              >  
                {feature.index}
              </span>
              <div>
                <h3 className="font-display text-2xl leading-tight tracking-tight text-ink sm:text-[1.75rem]">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  {feature.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-muted">
                  {feature.spec}
                </p>
              </div>
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}
