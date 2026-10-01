import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Treatments } from './components/Treatments';
import { Experience } from './components/Experience';
import { Specialists } from './components/Specialists';
import { Differentials } from './components/Differentials';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { CtaSection } from './components/CtaSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedTreatmentForBooking, setSelectedTreatmentForBooking] = useState<string | undefined>(undefined);

  const handleOpenBooking = (treatmentTitle?: string) => {
    setSelectedTreatmentForBooking(treatmentTitle);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedTreatmentForBooking(undefined);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2926] selection:bg-[#E8E0D5] selection:text-[#1A1816]">
      {/* 1. Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Tratamentos */}
        <Treatments onOpenBooking={handleOpenBooking} />

        {/* 4. Experiência LUMIÈRE */}
        <Experience onOpenBooking={handleOpenBooking} />

        {/* 5. Especialistas */}
        <Specialists />

        {/* 6. Diferenciais */}
        <Differentials />

        {/* 7. Depoimentos */}
        <Testimonials />

        {/* 8. FAQ */}
        <Faq />

        {/* 9. CTA */}
        <CtaSection onOpenBooking={handleOpenBooking} />

        {/* 10. Contato */}
        <Contact initialTreatment={selectedTreatmentForBooking} />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedTreatment={selectedTreatmentForBooking}
      />
    </div>
  );
}
