import { useEffect, useState, useCallback } from 'react';

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

interface SectionNavProps {
  onContactClick?: () => void;
}

const SectionNav = ({ onContactClick }: SectionNavProps) => {
  const [active, setActive] = useState('top');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-15% 0px -15% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = useCallback((section: Section) => {
    if (section.id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (section.id === 'contato-bpo' && onContactClick) {
      onContactClick();
      setTimeout(() => {
        document.getElementById('contato-bpo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return;
    }
    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [onContactClick]);

  if (!visible) return null;

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3"
      aria-label="Navegação rápida"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <button
            key={section.id}
            onClick={() => handleClick(section)}
            className="group flex items-center gap-3 outline-none"
            aria-label={section.label}
            aria-current={isActive ? 'true' : undefined}
          >
            <span className="text-xs font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/90 px-2.5 py-1 rounded-md shadow-sm whitespace-nowrap backdrop-blur-sm">
              {section.label}
            </span>
            <span
              className={`block w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                isActive
                  ? 'bg-primary border-primary scale-125 shadow-[0_0_10px_rgba(44,90,160,0.6)]'
                  : 'bg-white border-primary/40 hover:border-primary hover:scale-110'
              }`}
            />
          </button>
        );
      })}
    </nav>
  );
};

export { SectionNav };
