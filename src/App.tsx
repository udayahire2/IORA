import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Demo } from './components/Demo'
import { Collection } from './components/Collection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { useState, useEffect } from 'react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Hero isDarkMode={isDarkMode} />
      {/* <Demo/> */}
      <Collection />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}