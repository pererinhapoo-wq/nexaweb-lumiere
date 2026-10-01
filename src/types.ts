export interface Treatment {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  focus: string[];
  duration: string;
  highlight: string;
}

export interface Specialist {
  name: string;
  role: string;
  focusArea: string;
  bio: string;
  quote: string;
  image?: string;
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  treatment: string;
  text: string;
  timeContext: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  whatsapp: string;
  email: string;
  interest: string;
  message: string;
  preferredShift?: 'morning' | 'afternoon' | 'any';
  preferredDate?: string;
}
