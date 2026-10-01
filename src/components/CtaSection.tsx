import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';

interface CtaSectionProps {
  onOpenBooking: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#2C2926] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle architectural ambient texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5BCB1] font-medium block mb-4">
          Atendimento Personalizado
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FAF8F5] tracking-tight mb-6 text-balance max-w-3xl mx-auto">
          {CLINIC_INFO.ctaTitle}
        </h2>

        <p className="text-base sm:text-lg text-[#C5BCB1] leading-relaxed max-w-2xl mx-auto mb-10 font-light text-balance">
          {CLINIC_INFO.ctaDescription}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 text-xs uppercase tracking-widest font-medium text-[#2C2926] bg-[#FAF8F5] hover:bg-[#EFEBE4] transition-all duration-200 cursor-pointer shadow-lg active:scale-[0.98]"
          >
            Agendar avaliação
          </button>
        </div>

      </div>
    </section>
  );
};
