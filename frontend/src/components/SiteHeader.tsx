import { useEffect, useState } from 'react';

const navLinks = [
{ href: '#overview', label: 'Overview' },
{ href: '#features', label: 'Features' },
{ href: '#contact', label: 'Contact' }];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ease-out
      ${scrolled ?
        'border-line bg-paper/90 backdrop-blur-md' :
        'border-transparent bg-transparent'}`
      }>
      <div className="mx-auto flex max-w-page items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:py-5">
        <a
          href="#top"
          className="flex items-baseline gap-2.5 whitespace-nowrap"
          aria-label="Halo Field Lamp, home"
        >  
          <span className="font-display text-2xl leading-none tracking-tight text-ink sm:text-[1.75rem]">
            Halo
          </span>
          <span className="hidden text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted sm:inline">
            Field Lamp
          </span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) =>
            <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap text-sm text-muted transition-colors duration-150 ease-out hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            )}
          </ul>
        </nav>

        <a
          href="#contact"
          className="whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-surface transition-[background-color,transform] duration-150 ease-out hover:bg-night active:scale-[0.98]"
        > 
          Buy · $148
        </a>
      </div>
    </header>);

}