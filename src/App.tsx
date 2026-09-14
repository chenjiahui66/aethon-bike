import { useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { Nav } from './components/ui/Nav';
import { SectionCounter } from './components/ui/SectionCounter';
import { CustomCursor } from './components/ui/CustomCursor';
import { Preload } from './components/sections/Preload';
import { Hero } from './components/sections/Hero';
import { Manifesto } from './components/sections/Manifesto';
import { Origin } from './components/sections/Origin';
import { Product } from './components/sections/Product';
import { Anatomy } from './components/sections/Anatomy';
import { TechData } from './components/sections/TechData';
import { Journals } from './components/sections/Journals';
import { Footer } from './components/sections/Footer';
import './App.css';

export function App() {
  const [preloadDone, setPreloadDone] = useState(false);
  useLenis();

  useEffect(() => {
    // Lock scroll during preload
    document.body.style.overflow = preloadDone ? '' : 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [preloadDone]);

  return (
    <div className="app" id="top">
      <Preload duration={500} onDone={() => setPreloadDone(true)} />
      <CustomCursor />
      <Nav />
      <SectionCounter />

      <main className={`app__main ${preloadDone ? 'is-ready' : 'is-loading'}`}>
        <Hero />
        <Manifesto />
        <Origin />
        <Product />
        <Anatomy />
        <TechData />
        <Journals />
        <Footer />
      </main>
    </div>
  );
}
