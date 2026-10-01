import React from 'react';
import { SPECIALISTS } from '../data/clinicData';
import specialistsGroupImg from '../assets/images/specialists_demonstration_1790887017397.jpg';

export const Specialists: React.FC = () => {
  return (
    <section id="especialistas" className="py-24 sm:py-32 bg-[#F5F2ED] border-t border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
              <span>Equipe & Cuidado</span>
              <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
              <span>Atenção Individual</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight">
              Conheça nossos especialistas.
            </h2>
          </div>
          
          {/* Discrete demonstrative disclaimer */}
          <div className="text-xs text-[#82786C] font-light max-w-xs md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#D8CFC3] pl-3 md:pl-0 md:pr-3 py-1">
            * Perfis ilustrativos elaborados para apresentação e composição do site.
          </div>
        </div>

        {/* Specialists Overview Portrait */}
        <div className="mb-14 relative overflow-hidden rounded-2xl aspect-[16/7] sm:aspect-[21/9] bg-[#EFEBE4] border border-[#E8E2D9]">
          <img
            src={specialistsGroupImg}
            alt="Especialistas da clínica LUMIÈRE"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1C1A]/70 via-[#1E1C1A]/20 to-transparent flex items-end p-6 sm:p-10">
            <p className="text-sm sm:text-base text-[#FAF8F5] font-light max-w-xl">
              Cuidado humanizado orientado pela escuta cuidadosa, respeito à sua história e busca pela beleza que parece natural e espontânea.
            </p>
          </div>
        </div>

        {/* Specialists Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SPECIALISTS.map((specialist, idx) => (
            <div
              key={idx}
              className="bg-[#FAF8F5] p-8 border border-[#E8E2D9] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] uppercase tracking-widest text-[#8F8171] font-medium block mb-2">
                  {specialist.focusArea}
                </span>

                <h3 className="font-serif text-2xl text-[#1E1C1A] mb-3">
                  {specialist.name}
                </h3>

                <p className="text-xs text-[#524C44] leading-relaxed mb-6 font-light">
                  {specialist.bio}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F0ECE4]">
                <blockquote className="font-serif italic text-xs text-[#7A7062] leading-relaxed">
                  {specialist.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
