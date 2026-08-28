import { SiteHeader } from './components/SiteHeader';
import { Hero } from './components/Hero';
import { Overview } from './components/Overview';
import { Features } from './components/Features';
import { SiteFooter } from './components/SiteFooter';

export function App() {
  return (
    <div className="min-h-full w-full bg-paper font-sans text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Overview />
        <Features />
      </main>
      <SiteFooter />
    </div>
  );
}
