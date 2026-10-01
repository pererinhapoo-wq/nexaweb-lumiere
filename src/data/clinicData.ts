import { Treatment, Specialist, Differential, Testimonial, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'LUMIÈRE',
  tagline: 'Beleza, cuidado e confiança em cada detalhe.',
  heroDescription: 'Tratamentos personalizados para valorizar sua experiência de cuidado e bem-estar.',
  experienceTitle: 'Um espaço pensado para cuidar de você.',
  experienceDescription:
    'A LUMIÈRE nasceu do desejo de criar um refúgio acolhedor onde a estética é tratada com serenidade, respeito e rigor profissional. Cada ambiente foi projetado para proporcionar conforto acústico, luz suave e uma atmosfera que desacelera a rotina. Aqui, a tecnologia de ponta convive em harmonia com o toque humano atencioso, assegurando que seu momento de cuidado seja tão revigorante quanto os resultados obtidos.',
  ctaTitle: 'Seu próximo passo começa aqui.',
  ctaDescription: 'Agende uma avaliação e descubra uma experiência de cuidado pensada para suas necessidades.',
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'estetica-facial',
    title: 'Estética facial',
    category: 'Harmonização & Rejuvenescimento',
    shortDescription:
      'Protocolos dedicados a realçar a harmonia natural do rosto com sutileza, equilíbrio e respeito aos seus traços únicos.',
    fullDescription:
      'Com foco em elegância e naturalidade, nossos procedimentos faciais atuam na recuperação do viço dérmico, estruturação sutil e suavização de linhas. Cada intervenção é planejada milimetricamente para preservar sua identidade expressiva, promovendo frescor e vitalidade com delicadeza.',
    focus: ['Estímulo de colágeno facial', 'Revitalização e luminosidade', 'Preservação de linhas naturais', 'Contorno suave e equilibrado'],
    duration: '60 a 90 minutos por sessão',
    highlight: 'Sutileza e naturalidade expressiva'
  },
  {
    id: 'estetica-corporal',
    title: 'Estética corporal',
    category: 'Modelagem & Firmeza',
    shortDescription:
      'Terapias focadas em contorno, firmeza da pele e remodelagem com abordagens não invasivas e de alta precisão.',
    fullDescription:
      'Abordagem integral voltada para tônus cutâneo, redução de retenção hídrica e melhora da textura tecidual. Combinamos tecnologia de estímulo dérmico e protocolos manuais revigorantes para que você se sinta confiante e em sintonia com seu corpo em qualquer fase.',
    focus: ['Melhora do tônus e firmeza', 'Drenagem e desintoxicação tecidual', 'Textura e elasticidade da pele', 'Protocolos para bem-estar corporal'],
    duration: '60 a 80 minutos por sessão',
    highlight: 'Harmonia e contorno não invasivo'
  },
  {
    id: 'cuidados-pele',
    title: 'Cuidados com a pele',
    category: 'Dermatologia Estética & Glow',
    shortDescription:
      'Rituais de limpeza profunda, hidratação biocompatível e renovação celular para uma tez homogênea, saudável e radiante.',
    fullDescription:
      'A saúde da barreira cutânea é a base de toda beleza duradoura. Nossos tratamentos de pele combinam ativos dermocosméticos nobres, esfoliação suave e infusão nutritiva para devolver o equilíbrio lipídico, uniformizar o tom e proporcionar um glow limpo e sofisticado.',
    focus: ['Nutrição celular profunda', 'Uniformização de tonalidade e textura', 'Restauração da barreira protetora', 'Glow saudável e toque aveludado'],
    duration: '50 a 75 minutos por sessão',
    highlight: 'Restauração da luminosidade natural'
  },
  {
    id: 'protocolos-personalizados',
    title: 'Protocolos personalizados',
    category: 'Planos Sob Medida',
    shortDescription:
      'Planos de cuidado integrados, desenhados exclusivamente a partir de uma criteriosa avaliação das suas características e metas.',
    fullDescription:
      'Não acreditamos em soluções padronizadas. Os protocolos personalizados da LUMIÈRE integram diferentes frentes de tratamento — face, corpo e rituais de pele — em um cronograma temporal pensado de acordo com sua rotina, objetivos e ritmo de regeneração biológica.',
    focus: ['Mapeamento individual completo', 'Cronograma gradual e seguro', 'Associação inteligente de técnicas', 'Ajuste contínuo a cada etapa'],
    duration: 'Cronograma sob medida',
    highlight: 'Exclusividade total para sua rotina'
  },
  {
    id: 'bem-estar',
    title: 'Bem-estar',
    category: 'Rituais Sensoriais & Descompressão',
    shortDescription:
      'Momentos de desaceleração que unem terapias manuais, aromacologia e relaxamento profundo para revitalizar o corpo e a mente.',
    fullDescription:
      'O verdadeiro cuidado transcende a superfície. Em nossas salas de relaxamento, oferecemos rituais com óleos essenciais puros, toques terapêuticos e ambiência calma que aliviam tensões acumuladas, reduzem os efeitos do estresse e devolvem sua disposição e serenidade.',
    focus: ['Alívio de tensões musculares', 'Desaceleração do estresse diário', 'Equilíbrio sensorial e sensorialidade', 'Experiência restauradora completa'],
    duration: '60 a 90 minutos por ritual',
    highlight: 'Pausa restauradora para corpo e mente'
  },
  {
    id: 'tratamentos-avancados',
    title: 'Tratamentos avançados',
    category: 'Inovação & Alta Precisão',
    shortDescription:
      'Tecnologias de última geração aplicadas com precisão para bioestimulação, rejuvenescimento e eficácia comprovada.',
    fullDescription:
      'Investimos em tecnologia de ponta para proporcionar procedimentos com mínima interferência na sua rotina diária. Equipamentos modernos atuam em camadas específicas dos tecidos para induzir regeneração tecidual profunda, com máxima segurança, previsibilidade e conforto.',
    focus: ['Bioestimulação tecidual precisa', 'Recuperação confortável e rápida', 'Equipamentos modernos e calibrados', 'Eficiência com segurança absoluta'],
    duration: '45 a 90 minutos por procedimento',
    highlight: 'Tecnologia com máxima precisão'
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    name: 'Dra. Helena Martins',
    role: 'Especialista em Estética Facial & Harmonização',
    focusArea: 'Foco demonstrativo: Estética Facial e Harmonização Natural',
    bio: 'Dedicada a valorizar a arquitetura e a expressão de cada face por meio de intervenções sutis, preservando a identidade e o equilíbrio estético.',
    quote: '“A verdadeira elegância na estética está no que parece espontâneo: sutileza, proporção e bem-estar.”'
  },
  {
    name: 'Dra. Laura Mendes',
    role: 'Especialista em Saúde da Pele & Cosmiatria',
    focusArea: 'Foco demonstrativo: Saúde da Pele e Protocolos de Revitalização',
    bio: 'Focada no estudo minucioso da barreira cutânea e na aplicação de protocolos avançados de hidratação, viço e renovação tecidual duradoura.',
    quote: '“Uma pele saudável reflete cuidado consistente, ativos adequados e respeito ao tempo natural de regeneração.”'
  },
  {
    name: 'Dra. Marina Costa',
    role: 'Especialista em Estética Corporal & Bem-Estar',
    focusArea: 'Foco demonstrativo: Estética Corporal e Terapias de Bem-Estar',
    bio: 'Desenvolve abordagens que integram firmeza tecidual, relaxamento e cuidados globais com a postura, drenagem e vitalidade corporal.',
    quote: '“Cuidar do corpo é um ato de respeito pessoal. Cada protocolo deve acolher e revigorar com conforto e eficácia.”'
  }
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: 'Atendimento personalizado',
    description:
      'Cada pessoa é única; nosso atendimento é guiado por uma relação de confiança mútua, escuta sensível e dedicação integral a você.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Avaliação individual',
    description:
      'Análise detalhada antes de qualquer procedimento para identificar as reais necessidades e características da sua pele e corpo.',
    iconName: 'UserCheck'
  },
  {
    title: 'Protocolos personalizados',
    description:
      'Combinações planejadas sob medida para você, respeitando suas metas, preferências pessoais e a rotina do seu dia a dia.',
    iconName: 'Sparkles'
  },
  {
    title: 'Ambiente acolhedor',
    description:
      'Espaço privativo e sereno, desenhado para que cada visita seja um momento tranquilo de relaxamento, pausa e reconexão.',
    iconName: 'Home'
  },
  {
    title: 'Tecnologia e inovação',
    description:
      'Equipamentos contemporâneos que garantem procedimentos seguros, precisos, confortáveis e com recuperação suave.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Acompanhamento próximo',
    description:
      'Cuidado contínuo em todas as etapas, com orientações atenciosas no pós-atendimento e presença constante da equipe.',
    iconName: 'Clock'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'C. M.',
    treatment: 'Protocolo Facial Personalizado',
    text: 'A experiência na LUMIÈRE superou qualquer expectativa. O ambiente é extremamente calmo e o plano proposto respeitou totalmente a naturalidade dos meus traços. O cuidado antes e após a sessão me transmitiu total segurança.',
    timeContext: 'Experiência demonstrativa de layout'
  },
  {
    id: '2',
    author: 'B. S.',
    treatment: 'Revitalização e Cuidados com a Pele',
    text: 'O que mais me impressionou foi a pontualidade, a gentileza e o tempo dedicado para explicar cada etapa da avaliação. Você não se sente em um ambiente clínico impessoal, mas sim acolhida em um espaço de paz.',
    timeContext: 'Experiência demonstrativa de layout'
  },
  {
    id: '3',
    author: 'A. P.',
    treatment: 'Estética Corporal e Bem-Estar',
    text: 'Profissionalismo impecável e muita discrição. O protocolo foi planejado de acordo com a minha rotina e a sensação de relaxamento durante as sessões é maravilhosa. Recomendo de olhos fechados.',
    timeContext: 'Experiência demonstrativa de layout'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Como funciona a avaliação?',
    answer:
      'A avaliação é um encontro inicial dedicado a entender suas expectativas, histórico e hábitos. Analisamos detalhadamente a pele e as áreas de interesse, esclarecendo dúvidas e estruturando uma proposta transparente, sem pressa nem compromisso de adesão imediata.'
  },
  {
    question: 'Como escolher o tratamento?',
    answer:
      'Você não precisa decidir previamente. Durante a consulta de avaliação, identificamos juntos as principais prioridades e indicamos as abordagens mais adequadas ao seu perfil, respeitando sua individualidade e estilo de vida.'
  },
  {
    question: 'Os tratamentos são personalizados?',
    answer:
      'Sim. Nenhum protocolo na LUMIÈRE é genérico. Desde a escolha dos dermocosméticos até os parâmetros das tecnologias utilizadas, tudo é configurado de maneira individualizada para atender às necessidades biológicas e estéticas de cada pessoa.'
  },
  {
    question: 'É necessário agendamento?',
    answer:
      'Sim. Para garantir um atendimento pontual, privativo e com dedicação exclusiva de nossos especialistas e salas, todas as consultas e procedimentos são realizados mediante agendamento prévio.'
  },
  {
    question: 'Como funciona o acompanhamento?',
    answer:
      'Nosso compromisso continua após o procedimento. Nossa equipe oferece suporte atencioso para sanar dúvidas, passar orientações claras para cuidados em casa e avaliar a evolução progressiva dos resultados.'
  }
];
