import React, { useState } from 'react';
import { TREATMENTS } from '../data/clinicData';
import { Treatment } from '../types';
import { ArrowRight, Sparkles, Check, X } from 'lucide-react';
import facialDetailImg from '../assets/images/treatment_skincare_facial_1790887003509.jpg';

interface TreatmentsProps {
  onOpenBooking: (treatmentTitle?: string) => void;
}

export const Treatments: React.FC<TreatmentsProps> = ({ onOpenBooking }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  return (
    <section id="tratamentos" className="py-24 sm:py-32 bg-[#F5F2ED] border-y border-[#EAE3DA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
            <span>Nossos Procedimentos</span>
            <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
            <span>Personalização Completa</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight text-balance mb-5">
            Cuidado pensado para você.
          </h2>
          <p className="text-base text-[#615B52] leading-relaxed font-light">
            Procedimentos e rituais desenvolvidos para harmonizar saúde, estética e bem-estar em planos sob medida para sua individualidade.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TREATMENTS.map((treatment, index) => (
            <div
              key={treatment.id}
              className="group bg-[#FAF8F5] p-8 sm:p-9 border border-[#E8E2D9] transition-all duration-300 hover:border-[#C8BFB3] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.05)] flex flex-col justify-between"
            >
              <div>
                {/* Clean editorial numbering */}
                <div className="flex items-center justify-between text-xs tracking-wider text-[#9E9385] mb-6">
                  <span className="font-serif text-base italic text-[#7A7062]">0{index + 1}</span>
                  <span className="text-[11px] uppercase tracking-widest">{treatment.category}</span>
                </div>

                {/* Card Title */}
                <h3 className="font-serif text-2xl text-[#1E1C1A] mb-3 group-hover:text-[#8F8171] transition-colors">
                  {treatment.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-[#666056] leading-relaxed mb-6 font-light">
                  {treatment.shortDescription}
                </p>

                {/* Focus List */}
                <div className="space-y-1.5 mb-8 border-t border-[#F0ECE4] pt-4">
                  {treatment.focus.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#7A7267]">
                      <span className="w-1 h-1 rounded-full bg-[#B8ABA0]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#F0ECE4] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="text-xs tracking-wider uppercase font-medium text-[#5C564E] hover:text-[#1E1C1A] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Ver detalhes</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1 text-[#8F8171]" />
                </button>

                <button
                  type="button"
                  onClick={() => onOpenBooking(treatment.title)}
                  className="text-xs uppercase tracking-widest text-[#8F8171] hover:text-[#1E1C1A] font-semibold underline underline-offset-4 cursor-pointer"
                >
                  Agendar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner with featured skincare detail */}
        <div className="mt-14 p-8 sm:p-10 bg-[#FAF8F5] border border-[#E8E2D9] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative overflow-hidden rounded-lg aspect-[4/3] bg-[#EFEBE4]">
            <img
              src={facialDetailImg}
              alt="Ritual de cuidado com a pele LUMIÈRE"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
              onError={(e) => {
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div className="lg:col-span-8 flex flex-col justify-center">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8F8171] mb-2 font-medium">
              Filosofia dos Tratamentos
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#1E1C1A] mb-3">
              Harmonia entre rigor técnico e conforto absoluto
            </h4>
            <p className="text-sm text-[#615B52] leading-relaxed mb-6 font-light max-w-2xl">
              Cada pele responde de maneira singular aos estímulos biológicos. Por isso, nunca aplicamos receitas pré-fabricadas: a escolha de produtos e intensidades é rigorosamente adaptada para proporcionar resultados graduais, elegantes e duradouros.
            </p>
            <div>
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center px-6 py-2.5 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-colors cursor-pointer"
              >
                Solicitar avaliação personalizada
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Treatment Detail Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1816]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF8F5] border border-[#E8E2D9] w-full max-w-xl p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
            
            <button
              type="button"
              onClick={() => setSelectedTreatment(null)}
              className="absolute top-5 right-5 text-[#7A7267] hover:text-[#1E1C1A] p-1.5 transition-colors"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <span className="text-[11px] uppercase tracking-widest text-[#8F8171] font-medium">
                {selectedTreatment.category}
              </span>
              <h3 className="font-serif text-3xl text-[#1E1C1A] mt-1 mb-2">
                {selectedTreatment.title}
              </h3>
              <p className="text-xs text-[#7A7062] italic font-serif">
                {selectedTreatment.highlight}
              </p>
            </div>

            <p className="text-sm text-[#5C564E] leading-relaxed mb-6 font-light">
              {selectedTreatment.fullDescription}
            </p>

            <div className="mb-6 bg-[#F3EFE8] p-4 border border-[#E5DEC4]/40">
              <h5 className="text-xs uppercase tracking-wider text-[#2C2926] font-semibold mb-2.5">
                Pontos de atenção do protocolo:
              </h5>
              <ul className="space-y-2">
                {selectedTreatment.focus.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#615B52]">
                    <Check size={14} className="text-[#8F8171] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs text-[#7A7062] mb-6 pt-3 border-t border-[#EAE3DA]">
              <span>Duração estimada:</span>
              <span className="font-medium text-[#2C2926]">{selectedTreatment.duration}</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  const title = selectedTreatment.title;
                  setSelectedTreatment(null);
                  onOpenBooking(title);
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-colors cursor-pointer"
              >
                Agendar este tratamento
              </button>
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                className="py-3 px-5 text-xs uppercase tracking-widest font-medium text-[#5C564E] hover:text-[#1E1C1A] border border-[#DDD6CC] transition-colors cursor-pointer"
              >
                Voltar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
