import React from 'react';
import experienceImg from '../assets/images/clinic_interior_experience_1790886992775.jpg';
import { CLINIC_INFO } from '../data/clinicData';

interface ExperienceProps {
  onOpenBooking: () => void;
}

export const Experience: React.FC<ExperienceProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: 'Acolhimento Exclusivo',
      description: 'Atendimento com horário rigorosamente reservado, garantindo tranquilidade, privacidade e uma experiência fluida e sem esperas.'
    },
    {
      title: 'Atenção aos Detalhes',
      description: 'Design sensorial com iluminação indireta relaxante, acústica serena e materiais naturais que proporcionam bem-estar imediato.'
    },
    {
      title: 'Escuta Atenta',
      description: 'Tempo dedicado exclusivamente a entender suas aspirações, rotina e necessidades com delicadeza e sensibilidade profissional.'
    }
  ];

  return (
    <section id="a-clinica" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#EFEBE4] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)] border border-[#E8E2D9]">
                <img
                  src={experienceImg}
                  alt="Ambiente privativo e acolhedor da clínica LUMIÈRE"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>

              {/* Subtle architectural label */}
              <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8F8171]">
                <span>Ambiente privativo & acolhedor</span>
                <span>Conforto e discrição</span>
              </div>
            </div>
          </div>

          {/* Text and Experience Pillars */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
              <span>Experiência LUMIÈRE</span>
              <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
              <span>Bem-Estar em Sintonia</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight leading-[1.18] mb-6 text-balance">
              {CLINIC_INFO.experienceTitle}
            </h2>

            <p className="text-base text-[#615B52] leading-relaxed font-light mb-10">
              {CLINIC_INFO.experienceDescription}
            </p>

            {/* Experience Pillars */}
            <div className="space-y-6 mb-10">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="font-serif text-lg italic text-[#8F8171] w-6 shrink-0 mt-0.5">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-medium text-sm sm:text-base text-[#1E1C1A] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#666056] leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <button
                type="button"
                onClick={onOpenBooking}
                className="inline-flex items-center px-7 py-3 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-colors cursor-pointer"
              >
                Conhecer a clínica
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
