import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/clinicData';
import { ChevronDown } from 'lucide-react';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
            <span>Dúvidas Frequentes</span>
            <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
            <span>Transparência & Cuidado</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight">
            Perguntas frequentes.
          </h2>
          <p className="mt-4 text-sm text-[#615B52] font-light">
            Respostas claras para você se sentir seguro(a) em todas as fases da sua jornada na clínica.
          </p>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-[#EAE3DA] border-y border-[#EAE3DA]">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 sm:py-7">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8F8171]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl sm:text-2xl text-[#1E1C1A] group-hover:text-[#8F8171] transition-colors">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-[#8F8171] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="mt-4 pr-6 sm:pr-12 animate-in fade-in duration-200">
                    <p className="text-sm sm:text-base text-[#615B52] leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
