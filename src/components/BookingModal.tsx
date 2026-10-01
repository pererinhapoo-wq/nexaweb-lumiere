import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calendar, Clock, Sparkles } from 'lucide-react';
import { TREATMENTS } from '../data/clinicData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedTreatment?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedTreatment = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    treatment: preselectedTreatment || 'Estética facial',
    shift: 'morning',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Por favor, informe seu nome.';
    if (!formData.whatsapp.trim()) errs.whatsapp = 'Por favor, informe seu WhatsApp.';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Por favor, informe um e-mail válido.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const valErrors = validate();
    if (Object.keys(valErrors).length > 0) {
      setErrors(valErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      whatsapp: '',
      email: '',
      treatment: 'Estética facial',
      shift: 'morning',
      notes: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#1A1816]/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] border border-[#E8E2D9] w-full max-w-lg p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-[#7A7267] hover:text-[#1E1C1A] p-1.5 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X size={20} />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center animate-in fade-in duration-300">
            <div className="w-14 h-14 bg-[#F3EFE8] text-[#8F8171] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 size={30} />
            </div>

            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8F8171] font-medium block mb-2">
              Avaliação Solicitada
            </span>

            <h3 className="font-serif text-3xl text-[#1E1C1A] mb-3">
              Recebemos seu agendamento
            </h3>

            <p className="text-sm text-[#615B52] leading-relaxed mb-6 font-light max-w-md mx-auto">
              Obrigado, <strong className="font-medium text-[#2C2926]">{formData.name}</strong>. Nossa equipe entrará em contato via WhatsApp para confirmar o horário ideal para sua avaliação de <strong className="font-medium text-[#2C2926]">{formData.treatment}</strong> no período da {formData.shift === 'morning' ? 'manhã' : 'tarde'}.
            </p>

            <div className="bg-[#F5F2ED] p-4 text-left border border-[#EAE3DA] mb-6 text-xs text-[#524C44] space-y-1.5">
              <div><span className="text-[#8F8171]">Interesse:</span> {formData.treatment}</div>
              <div><span className="text-[#8F8171]">Período preferencial:</span> {formData.shift === 'morning' ? 'Manhã (09h às 13h)' : 'Tarde (13h às 19h)'}</div>
              <div><span className="text-[#8F8171]">Contato informado:</span> {formData.whatsapp}</div>
            </div>

            <button
              type="button"
              onClick={handleResetAndClose}
              className="w-full py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-colors cursor-pointer"
            >
              Concluir e voltar ao site
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-[#8F8171] font-medium mb-1">
                <Sparkles size={13} />
                <span>Atendimento Privativo</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1E1C1A]">
                Agendar sua avaliação
              </h3>
              <p className="text-xs text-[#666056] font-light mt-1">
                Reserve seu horário individualizado com tranquilidade e discrição.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Nome */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-1.5">
                  Nome completo *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors ${
                    errors.name ? 'border-red-400' : 'border-[#DDD6CC]'
                  }`}
                />
                {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>}
              </div>

              {/* WhatsApp e E-mail */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-1.5">
                    WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    placeholder="(00) 00000-0000"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors ${
                      errors.whatsapp ? 'border-red-400' : 'border-[#DDD6CC]'
                    }`}
                  />
                  {errors.whatsapp && <span className="text-xs text-red-500 mt-1 block">{errors.whatsapp}</span>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-1.5">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seuemail@exemplo.com"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors ${
                      errors.email ? 'border-red-400' : 'border-[#DDD6CC]'
                    }`}
                  />
                  {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Tratamento */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-1.5">
                  Procedimento de interesse *
                </label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CC] text-sm text-[#1E1C1A] focus:outline-none focus:border-[#8F8171] transition-colors cursor-pointer"
                >
                  {TREATMENTS.map((t) => (
                    <option key={t.id} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                  <option value="Avaliação Geral">Avaliação personalizada completa</option>
                </select>
              </div>

              {/* Período de preferência (Manhã / Tarde) */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-1.5">
                  Período preferencial para atendimento
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, shift: 'morning' })}
                    className={`py-2 px-3 text-xs uppercase tracking-wider font-medium border text-center transition-colors cursor-pointer ${
                      formData.shift === 'morning'
                        ? 'bg-[#2C2926] text-[#FAF8F5] border-[#2C2926]'
                        : 'bg-[#FAF8F5] text-[#5C564E] border-[#DDD6CC] hover:border-[#8F8171]'
                    }`}
                  >
                    Manhã (09h - 13h)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, shift: 'afternoon' })}
                    className={`py-2 px-3 text-xs uppercase tracking-wider font-medium border text-center transition-colors cursor-pointer ${
                      formData.shift === 'afternoon'
                        ? 'bg-[#2C2926] text-[#FAF8F5] border-[#2C2926]'
                        : 'bg-[#FAF8F5] text-[#5C564E] border-[#DDD6CC] hover:border-[#8F8171]'
                    }`}
                  >
                    Tarde (13h - 19h)
                  </button>
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#524C44] font-medium mb-1.5">
                  Observações adicionais (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Se desejar, informe dúvidas prévias ou melhor dia da semana..."
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DDD6CC] text-sm text-[#1E1C1A] placeholder-[#A3998D] focus:outline-none focus:border-[#8F8171] transition-colors resize-none"
                />
              </div>

              {/* Botão de Envio */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 text-xs uppercase tracking-widest font-medium text-[#FAF8F5] bg-[#2C2926] hover:bg-[#443E38] transition-colors cursor-pointer"
                >
                  {isSubmitting ? 'Confirmando solicitação...' : 'Confirmar solicitação de avaliação'}
                </button>
                <p className="text-[11px] text-[#8F8171] text-center mt-2 font-light">
                  Entraremos em contato com discrição para confirmar a data e o horário.
                </p>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
