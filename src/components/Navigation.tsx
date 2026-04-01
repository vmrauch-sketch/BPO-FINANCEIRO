import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const servicePages = ['/bpo', '/cfo', '/contabil'];
  const isServicePage = servicePages.includes(location.pathname);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border/20 z-50 transition-all">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-auto lg:py-2">
          {/* Logo + Service Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/" className="text-2xl font-playfair font-bold text-primary">
              Valorum
            </Link>
            {!isServicePage && (
              <div className="hidden sm:flex items-center gap-1.5">
                <Link to="/bpo">
                  <Button size="sm" className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs px-2.5 py-1 h-7 ${isActive('/bpo') ? 'ring-2 ring-blue-300' : ''}`}>
                    BPO
                  </Button>
                </Link>
                <Link to="/cfo">
                  <Button size="sm" className={`bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary text-xs px-2.5 py-1 h-7 font-semibold ${isActive('/cfo') ? 'ring-2 ring-lime-300' : ''}`}>
                    CFO
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          {!isServicePage && (
            <div className="hidden lg:flex items-center gap-3 ml-6">
              <Link
                to="/"
                className={`font-medium transition-all px-3 py-1 rounded-md hover:bg-primary/10 active:bg-primary/20 active:scale-95 text-sm whitespace-nowrap ${
                  isActive('/') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Início
              </Link>
              <Link
                to="/contato"
                className={`font-medium transition-all px-3 py-1 rounded-md hover:bg-primary/10 active:bg-primary/20 active:scale-95 text-sm whitespace-nowrap ${
                  isActive('/contato') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Contato
              </Link>
            </div>
          )}

          {/* Mobile menu button */}
          {!isServicePage && (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {!isServicePage && (
          <div className="sm:hidden pb-3">
            <div className="flex flex-wrap items-center gap-2">
              <Link to="/bpo">
                <Button size="sm" className={`bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs px-2.5 py-1 h-7 ${isActive('/bpo') ? 'ring-2 ring-blue-300' : ''}`}>
                  BPO
                </Button>
              </Link>
              <Link to="/cfo">
                <Button size="sm" className={`bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary text-xs px-2.5 py-1 h-7 font-semibold ${isActive('/cfo') ? 'ring-2 ring-lime-300' : ''}`}>
                  CFO
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border/20">
            <div className="py-4 space-y-2">
              {!isServicePage && (
                <div className="flex flex-wrap gap-2 pb-4 mb-2 border-b border-border/20">
                  <Link to="/bpo" onClick={() => setIsOpen(false)} className="flex-1 min-w-[10rem]">
                    <Button size="sm" className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
                      Valorum BPO
                    </Button>
                  </Link>
                  <Link to="/cfo" onClick={() => setIsOpen(false)} className="flex-1 min-w-[10rem]">
                    <Button size="sm" className="w-full bg-gradient-to-r from-lime-400 to-lime-500 hover:from-lime-500 hover:to-lime-600 text-primary font-semibold">
                      Valorum CFO
                    </Button>
                  </Link>
                </div>
              )}

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 font-medium transition-all hover:bg-primary/10 active:bg-primary/20 rounded-md ${
                  isActive('/') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Início
              </Link>
              <Link
                to="/contato"
                onClick={() => setIsOpen(false)}
                className={`block py-2 px-3 font-medium transition-all hover:bg-primary/10 active:bg-primary/20 rounded-md ${
                  isActive('/contato') ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
