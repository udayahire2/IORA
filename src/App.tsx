import { Header } from './components/Header';
// import { Hero } from './components/Hero';
import { Demo } from './components/Demo'
import { Collection } from './components/Collection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { useState } from 'react';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-[#FAF9F7]'}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      {/* <Hero isDarkMode={isDarkMode} /> */}
      <Demo />
      <Collection isDarkMode={isDarkMode} />
      <Features isDarkMode={isDarkMode} />
      <Testimonials isDarkMode={isDarkMode} />
      <Newsletter isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}