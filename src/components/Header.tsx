import { Search, User, ShoppingCart, Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`px-4 md:px-8 py-4 md:py-6 flex items-center justify-between border-b transition-colors ${
      isDarkMode ? 'border-gray-700' : 'border-gray-200'
    }`}>
      <div className={`text-xl md:text-2xl tracking-[0.3em] ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`}>
        IORA
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 xl:gap-12">
        <a href="#" className={`text-sm tracking-wider transition-colors ${
          isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
        }`}>
          SHOP
        </a>
        <a href="#" className={`text-sm tracking-wider transition-colors ${
          isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
        }`}>
          COLLECTIONS
        </a>
        <a href="#" className={`text-sm tracking-wider transition-colors ${
          isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
        }`}>
          OUR STORY
        </a>
        <a href="#" className={`text-sm tracking-wider transition-colors ${
          isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
        }`}>
          JOURNAL
        </a>
      </nav>

      <div className="flex items-center gap-4 md:gap-6">
        <button className={`transition-colors ${
          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}>
          <Search size={20} />
        </button>
        <button className={`hidden sm:block transition-colors ${
          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}>
          <User size={20} />
        </button>
        <button className={`relative transition-colors ${
          isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
        }`}>
          <ShoppingCart size={20} />
          <span className={`absolute -top-1 -right-1 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center ${
            isDarkMode ? 'bg-gray-500' : 'bg-gray-700'
          }`}>
            2
          </span>
        </button>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`transition-colors ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden transition-colors ${
            isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-full left-0 right-0 lg:hidden border-b transition-colors ${
          isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-[#FAF9F7] border-gray-200'
        }`}>
          <nav className="flex flex-col px-4 py-6 gap-4">
            <a href="#" className={`text-sm tracking-wider transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}>
              SHOP
            </a>
            <a href="#" className={`text-sm tracking-wider transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}>
              COLLECTIONS
            </a>
            <a href="#" className={`text-sm tracking-wider transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}>
              OUR STORY
            </a>
            <a href="#" className={`text-sm tracking-wider transition-colors ${
              isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'
            }`}>
              JOURNAL
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}