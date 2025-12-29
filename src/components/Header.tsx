import { Search, User, ShoppingCart, Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Header({ isDarkMode, setIsDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 md:px-8 py-4 md:py-6 flex items-center justify-between border-b border-border transition-colors">
      <div className="text-xl md:text-2xl tracking-[0.3em] text-muted-foreground">
        IORA
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-8 xl:gap-12">
        {['SHOP', 'COLLECTIONS', 'OUR STORY', 'JOURNAL'].map((item) => (
          <a key={item} href="#" className="text-sm tracking-wider transition-colors text-muted-foreground hover:text-foreground">
            {item}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4 md:gap-6">
        <button className="transition-colors text-muted-foreground hover:text-foreground">
          <Search size={20} />
        </button>
        <button className="hidden sm:block transition-colors text-muted-foreground hover:text-foreground">
          <User size={20} />
        </button>
        <button className="relative transition-colors text-muted-foreground hover:text-foreground">
          <ShoppingCart size={20} />
          <span className="absolute -top-1 -right-1 text-primary-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center bg-primary">
            2
          </span>
        </button>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="transition-colors text-muted-foreground hover:text-foreground"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden transition-colors text-muted-foreground hover:text-foreground"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 lg:hidden border-b border-border transition-colors bg-background">
          <nav className="flex flex-col px-4 py-6 gap-4">
            {['SHOP', 'COLLECTIONS', 'OUR STORY', 'JOURNAL'].map((item) => (
              <a key={item} href="#" className="text-sm tracking-wider transition-colors text-muted-foreground hover:text-foreground">
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}