import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import norgieWordmark from "@/assets/norgie-financeiro-wordmark.jpg.asset.json";

interface Section {
  id: string;
  label: string;
  top?: boolean;
}

const sections: Section[] = [
  { id: 'top', label: 'Início', top: true },
  { id: 'bpo-servicos', label: 'Serviços' },
  { id: 'bpo-painel', label: 'Painel' },
  { id: 'bpo-resultados', label: 'Resultados' },
  { id: 'bpo-passos', label: 'Passos' },
  { id: 'bpo-fundador', label: 'Fundador' },
  { id: 'bpo-diferenciais', label: 'Diferenciais' },
  { id: 'bpo-faq', label: 'FAQ' },
  { id: 'contato-bpo', label: 'Contato' },
];

const navSections = sections.filter((s) => !s.top);

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSectionClick = (section: Section) => {
    setDropdownOpen(false);
    setIsOpen(false);
    if (section.id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (location.pathname !== '/bpo') {
      window.location.href = `/bpo#${section.id}`;
      return;
    }
    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border/20 z-50 transition-all">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-auto lg:py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0 mr-6">
            <img
              src={norgieWordmark.url}
              alt="Norgie Financeiro"
              className="h-9 lg:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            <Link
              to="/"
              className={`font-medium transition-all px-3 py-1 rounded-md hover:bg-primary/10 active:bg-primary/20 active:scale-95 text-sm whitespace-nowrap ${
                isActive('/') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Início
            </Link>

            {/* Section navigation dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 font-medium transition-all px-3 py-1 rounded-md hover:bg-primary/10 active:bg-primary/20 active:scale-95 text-sm whitespace-nowrap text-muted-foreground hover:text-primary"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                Navegar
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-border/20 py-1 z-50">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section)}
                      className="w-full text-left px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="/bpo#contato-bpo"
              className={`font-medium transition-all px-3 py-1 rounded-md hover:bg-primary/10 active:bg-primary/20 active:scale-95 text-sm whitespace-nowrap text-muted-foreground hover:text-primary`}
            >
              Agendar Diagnóstico
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-muted-foreground hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/20">
            <div className="py-4 space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 font-medium transition-all hover:bg-primary/10 active:bg-primary/20 rounded-md ${
                  isActive('/') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Início
              </Link>

              <div className="px-3 py-2">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navegar</span>
                <div className="mt-1 space-y-1 pl-2 border-l-2 border-primary/20">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionClick(section)}
                      className="block w-full text-left py-1.5 px-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="/bpo#contato-bpo"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-3 font-medium transition-all hover:bg-primary/10 active:bg-primary/20 rounded-md text-muted-foreground hover:text-primary"
              >
                Agendar Diagnóstico
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
