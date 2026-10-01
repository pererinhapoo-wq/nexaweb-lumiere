import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroImage from '../assets/images/hero_lumiere_wellness_1790886982882.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToTreatments = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector('#tratamentos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Quiet metadata line without pills */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-6 font-medium">
              <span>Estética Contemporânea</span>
              <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
              <span>Bem-Estar</span>
              <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
              <span>Atendimento Exclusivo</span>
            </div>

            {/* Main Title - Cormorant Garamond */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1E1C1A] leading-[1.12] tracking-tight mb-6 max-w-xl text-balance">
              Beleza, cuidado e confiança em cada detalhe.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#615B52] leading-relaxed mb-10 max-w-lg font-light">
              Tratamentos personalizados para valorizar sua experiência de cuidado e bem-estar.
            </p>

            {/* CTA Controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-all duration-200 shadow-[0_10px_25px_-5px_rgba(44,41,38,0.12)] cursor-pointer active:scale-[0.98]"
              >
                Agendar avaliação
              </button>

              <a
                href="#tratamentos"
                onClick={scrollToTreatments}
                className="inline-flex items-center justify-center gap-1.5 text-xs uppercase tracking-widest font-medium text-[#5C564E] hover:text-[#1E1C1A] py-3 transition-colors group cursor-pointer"
              >
                <span>Explorar tratamentos</span>
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#8F8171]" />
              </a>
            </div>

            {/* Refined Trust Indicator */}
            <div className="mt-14 pt-8 border-t border-[#EAE4DC] grid grid-cols-3 gap-6 text-left">
              <div>
                <span className="block font-serif text-2xl text-[#2C2926]">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#7A7267]">Individualizado</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#2C2926]">Privativo</span>
                <span className="text-[11px] uppercase tracking-wider text-[#7A7267]">Espaço Exclusivo</span>
              </div>
              <div>
                <span className="block font-serif text-2xl text-[#2C2926]">Sutileza</span>
                <span className="text-[11px] uppercase tracking-wider text-[#7A7267]">Harmonia Natural</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Asset */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              
              {/* Image Frame with Architectural Soft Geometry */}
              <div className="relative overflow-hidden rounded-t-[120px] rounded-b-2xl aspect-[4/5] sm:aspect-[16/14] lg:aspect-[4/5] bg-[#EFEBE4] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.07)] border border-[#E8E2D9]">
                <img
                  src={heroImage}
                  alt="Espaço sereno e contemporâneo da clínica LUMIÈRE"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Zero broken image fallback
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Architectural accent note */}
              <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#FAF8F5] p-5 sm:p-6 border border-[#E8E2D9] max-w-xs shadow-lg hidden sm:block">
                <p className="font-serif italic text-base text-[#3E3831] leading-snug">
                  “Um refúgio contemporâneo dedicado a ressaltar sua singularidade com leveza e precisão.”
                </p>
                <span className="block mt-2 text-[10px] tracking-widest uppercase text-[#8F8171]">
                  Experiência LUMIÈRE
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
