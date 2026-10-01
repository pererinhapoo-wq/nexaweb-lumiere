import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { TREATMENTS } from '../data/clinicData';
import { CheckCircle2, Clock, Calendar, ShieldCheck, Send } from 'lucide-react';

interface ContactProps {
  initialTreatment?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialTreatment = '' }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    whatsapp: '',
    email: '',
    interest: initialTreatment || 'Estética facial',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Por favor, informe seu nome.';
    }
    if (!formData.whatsapp.trim()) {
      errs.whatsapp = 'Por favor, informe seu WhatsApp para contato.';
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Por favor, informe um e-mail válido.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    // Simulate polished luxury response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      interest: 'Estética facial',
      message: '',
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#8F8171] mb-3 font-medium">
                <span>Atendimento & Contato</span>
                <span aria-hidden="true" className="text-[#C5BCB1]">·</span>
                <span>Agendamento Prévio</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1C1A] tracking-tight mb-6">
                Inicie sua jornada de cuidado.
              </h2>
              <p className="text-base text-[#615B52] leading-relaxed font-light mb-8">
                Envie suas informações e interesse de tratamento. Nossa equipe entrará em contato de forma discreta e atenciosa para confirmar o melhor horário para sua avaliação individual.
              </p>

              {/* Informational Guidance (without invented address, phone or email) */}
              <div className="space-y-6 pt-6 border-t border-[#EAE3DA]">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#F3EFE8] flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar size={18} className="text-[#8F8171]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#1E1C1A]">Atendimento Exclusivo</h4>
                    <p className="text-xs text-[#7A7062] font-light mt-0.5">
                      Consultas e procedimentos com hora marcada para assegurar privacidade e dedicação integral.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#F3EFE8] flex items-center justify-center shrink-0 mt-0.5">
                    <Clock size={18} className="text-[#8F8171]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#1E1C1A]">Horário de Atendimento</h4>
                    <p className="text-xs text-[#7A7062] font-light mt-0.5">
                      Segunda a Sexta-feira · 09h às 19h (com agendamento prévio).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#F3EFE8] flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck size={18} className="text-[#8F8171]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[#1E1C1A]">Sigilo e Privacidade</h4>
                    <p className="text-xs text-[#7A7062] font-light mt-0.5">
                      Seus dados são tratados com estrita confidencialidade profissional.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 p-5 bg-[#F5F2ED] border border-[#EAE3DA]">
              <p className="font-serif italic text-xs text-[#666056] leading-relaxed">
                “Cada detalhe do nosso atendimento foi pensado para acolher e transmitir serenidade desde o primeiro contato.”
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] p-8 sm:p-10 border border-[#E8E2D9] shadow-[0_15px_35px_-10px_rgba(0,0,0,0.03)]">
              
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-[#F3EFE8] text-[#8F8171] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-3xl text-[#1E1C1A] mb-3">
                    Solicitação enviada com sucesso
                  </h3>
                  <p className="text-sm text-[#615B52] leading-relaxed max-w-md mx-auto mb-8 font-light">
                    Agradecemos seu contato, <strong className="font-medium text-[#2C2926]">{formData.name}</strong>. Nossa equipe receberá seu interesse em <strong className="font-medium text-[#2C2926]">{formData.interest}</strong> e retornará com os horários disponíveis.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center px-6 py-3 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-colors cursor-pointer"
                  >
                    Enviar nova mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div>
                    <h3 className="font-serif text-2xl text-[#1E1C1A] mb-1">
                      Solicitar avaliação
                    </h3>
                    <p className="text-xs text-[#7A7062] font-light mb-6">
                      Preencha os campos abaixo para receber nossa proposta de atendimento.
                    </p>
                  </div>

                  {/* Nome */}
                  <div>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-2">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Como podemos lhe chamar?"
                      className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors ${
                        errors.name ? 'border-red-400' : 'border-[#DDD6CC]'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>
                    )}
                  </div>

                  {/* WhatsApp e E-mail em grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                        className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors ${
                          errors.whatsapp ? 'border-red-400' : 'border-[#DDD6CC]'
                        }`}
                      />
                      {errors.whatsapp && (
                        <span className="text-xs text-red-500 mt-1 block">{errors.whatsapp}</span>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seuemail@exemplo.com"
                        className={`w-full px-4 py-3 bg-[#FAF8F5] border text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors ${
                          errors.email ? 'border-red-400' : 'border-[#DDD6CC]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Interesse */}
                  <div>
                    <label htmlFor="interest" className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-2">
                      Interesse principal *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-none focus:border-[#8F8171] transition-colors cursor-pointer"
                    >
                      {TREATMENTS.map((t) => (
                        <option key={t.id} value={t.title}>
                          {t.title}
                        </option>
                      ))}
                      <option value="Avaliação Geral">Avaliação estética geral e personalizada</option>
                      <option value="Outro">Outro cuidado ou dúvida</option>
                    </select>
                  </div>

                  {/* Mensagem */}
                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-2">
                      Mensagem ou preferência de horário
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos brevemente o que você busca ou seus dias e períodos de preferência..."
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#DDD6CC] text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors resize-none"
                    />
                  </div>

                  {/* Botão Enviar Solicitação */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] disabled:bg-[#8F8171] transition-colors cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Enviando solicitação...</span>
                      ) : (
                        <>
                          <span>Enviar solicitação</span>
                          <Send size={14} />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#8F8171] text-center mt-3 font-light">
                      Nenhum dado é compartilhado com terceiros. Atendimento exclusivamente sob reserva.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
