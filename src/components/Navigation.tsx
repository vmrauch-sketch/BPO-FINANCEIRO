import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border/20 z-50 transition-all">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-auto lg:py-2">
          <div className="flex items-center gap-2">
            <a href="https://valorum.vilsonrauch.com.br" target="_blank" rel="noopener noreferrer" className="text-2xl font-playfair font-bold text-primary hover:text-primary/80 transition-colors">
              Grupo Valorum
            </a>
            <Link to="/">
              <span className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs px-3.5 py-1.5 font-bold shadow-sm hover:shadow-md transition-all duration-200 border border-blue-400/30 ${isActive('/') ? 'ring-2 ring-blue-300 ring-offset-1' : ''}`}>
                BPO
              </span>
            </Link>
            <Link to="/cfo">
              <span className={`inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary text-xs px-3.5 py-1.5 font-bold shadow-sm hover:shadow-md transition-all duration-200 border border-lime-400/30 ${isActive('/cfo') ? 'ring-2 ring-lime-300 ring-offset-1' : ''}`}>
                CFO
              </span>
            </Link>
            <a href="https://valorum.vilsonrauch.com.br" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white text-xs px-3.5 py-1.5 font-bold shadow-sm hover:shadow-md transition-all duration-200 border border-amber-400/30">
                Consultoria
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-3 ml-6">
            <Link
              to="/"
              className={`font-medium transition-all px-3 py-1 rounded-md hover:bg-primary/10 active:bg-primary/20 active:scale-95 text-sm whitespace-nowrap ${
                isActive('/') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
              }`}
            >
              Início
            </Link>
            <a
              href="/#contato-bpo"
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
              <a
                href="/#contato-bpo"
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
