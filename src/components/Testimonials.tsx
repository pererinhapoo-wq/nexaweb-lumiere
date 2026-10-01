import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5F2ED] border-y border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
              <span>Experiência & Confiança</span>
              <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
              <span>Acolhimento</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight">
              O que dizem sobre nossa atenção.
            </h2>
          </div>

          {/* Discreet demonstrative layout note */}
          <div className="text-xs text-[#82786C] font-light md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#D8CFC3] pl-3 md:pl-0 md:pr-3 py-1">
            * Depoimentos demonstrativos para apresentação visual do layout.
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] p-8 sm:p-9 border border-[#E8E2D9] flex flex-col justify-between"
            >
              <div>
                <Quote size={28} className="text-[#D3C7B9] mb-6 stroke-1" />
                <p className="text-sm text-[#4E4840] leading-relaxed font-light mb-8 italic">
                  “{item.text}”
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0ECE4]">
                <span className="font-serif text-lg text-[#1E1C1A] block">
                  {item.author}
                </span>
                <span className="text-xs text-[#8F8171] block mt-0.5">
                  {item.treatment}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
