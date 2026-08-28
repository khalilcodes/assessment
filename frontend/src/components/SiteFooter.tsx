import { MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';

const contacts = [
{
  id: 'email',
  Icon: MailIcon,
  label: 'Email',
  value: 'hello@halolight.co',
  href: 'mailto:hello@halolight.co'
},
{
  id: 'phone',
  Icon: PhoneIcon,
  label: 'Phone',
  value: '+1 (415) 555-0148',
  href: 'tel:+14155550148'
},
{
  id: 'studio',
  Icon: MapPinIcon,
  label: 'Studio',
  value: '218 Vine Street, Portland, OR',
  href: null
}];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-night text-[#E8E1D8]"
    >
      <div className="mx-auto max-w-page px-5 py-14 sm:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <h2
              id="contact-heading"
              className="font-display text-3xl tracking-tight text-white sm:text-4xl">
              Talk to us
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-[#A79E93]">
              Questions about shipping, spare parts, or wholesale? A real person
              answers, usually within a day.
            </p>
          </div>

          <address className="not-italic">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {contacts.map(({ id, Icon, label, value, href }) =>
                <li key={id} className="flex items-start gap-3.5">
                  <Icon
                    className="mt-0.5 h-4 w-4 flex-none text-ember"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs uppercase tracking-[0.14em] text-[#A79E93]">
                      {label}
                    </p>
                    {href ?
                      <a
                        href={href}
                        className="mt-1 block text-[#E8E1D8] transition-colors duration-150 ease-out hover:text-white">
                          {value}
                      </a> :
                      <p className="mt-1 text-[#E8E1D8]">{value}</p>
                      }
                  </div>
                </li>
              )}
            </ul>
          </address>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[#A79E93] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Halo Light Co.</p>
          <p>Two-year warranty · Free returns for 30 days</p>
        </div>
      </div>
    </footer>
  );
}