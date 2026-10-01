import React from 'react';
import { DIFFERENTIALS } from '../data/clinicData';
import { HeartHandshake, UserCheck, Sparkles, Home, ShieldCheck, Clock } from 'lucide-react';

export const Differentials: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'HeartHandshake':
        return <HeartHandshake size={22} className="text-[#8F8171]" />;
      case 'UserCheck':
        return <UserCheck size={22} className="text-[#8F8171]" />;
      case 'Sparkles':
        return <Sparkles size={22} className="text-[#8F8171]" />;
      case 'Home':
        return <Home size={22} className="text-[#8F8171]" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} className="text-[#8F8171]" />;
      case 'Clock':
        return <Clock size={22} className="text-[#8F8171]" />;
      default:
        return <Sparkles size={22} className="text-[#8F8171]" />;
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
            <span>Nossa Abordagem</span>
            <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
            <span>Pilares de Excelência</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight">
            Diferenciais que definem nossa prática.
          </h2>
        </div>

        {/* 6 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className="p-8 bg-[#FAF8F5] border border-[#E8E2D9] transition-all duration-300 hover:border-[#C8BFB3] hover:bg-[#FDFBF7]"
            >
              <div className="w-12 h-12 bg-[#F3EFE8] flex items-center justify-center mb-6">
                {getIcon(diff.iconName)}
              </div>

              <h3 className="font-serif text-2xl text-[#1E1C1A] mb-3">
                {diff.title}
              </h3>

              <p className="text-sm text-[#615B52] leading-relaxed font-light">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
