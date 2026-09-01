import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import norgieWordmark from "@/assets/norgie-financeiro-wordmark.jpg.asset.json";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

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
