import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

export const Footer: React.FC = () => {
  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Especialistas', href: '#especialistas' },
    { label: 'A Clínica', href: '#a-clinica' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-[#EAE3DA] pt-20 pb-12 text-[#2C2926]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#EAE3DA]">
          
          {/* Brand & Slogan */}
          <div className="md:col-span-5">
            <a
              href="#inicio"
              className="font-serif text-3xl tracking-[0.22em] text-[#1E1C1A] uppercase block mb-4"
            >
              {CLINIC_INFO.name}
            </a>
            <p className="font-serif italic text-base text-[#615B52] max-w-sm mb-6 leading-relaxed">
              “{CLINIC_INFO.tagline}”
            </p>
            <p className="text-xs text-[#82786C] font-light max-w-sm leading-relaxed">
              Clínica de estética e bem-estar contemporânea voltada para atendimentos individualizados, privacidade e resultados em perfeita harmonia com sua essência.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 md:col-start-7">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F8171] font-medium block mb-4">
              Navegação
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[#5C564E] hover:text-[#1E1C1A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horários e Condições */}
          <div className="md:col-span-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8F8171] font-medium block mb-4">
              Atendimento
            </span>
            <p className="text-xs text-[#666056] leading-relaxed font-light mb-2">
              Segunda a Sexta-feira
            </p>
            <p className="text-xs text-[#1E1C1A] font-medium mb-4">
              09:00 às 19:00
            </p>
            <p className="text-[11px] text-[#8F8171] leading-relaxed">
              Atendimento exclusivo mediante agendamento prévio.
            </p>
          </div>

        </div>

        {/* Copyright and Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F8171] font-light">
          <p>
            © {new Date().getFullYear()} LUMIÈRE — Todos os direitos reservados.
          </p>
          <p className="text-center sm:text-right text-[11px]">
            Projeto de clínica demonstrativa · Beleza, cuidado e confiança em cada detalhe.
          </p>
        </div>

      </div>
    </footer>
  );
};
