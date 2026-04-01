// Dados de SEO centralizados para consistência
export const SITE_URL = "https://valorum.vilsonrauch.com.br";

export const SEOData = {
  valorum: {
    title: "Valorum - BPO Financeiro, CFO as a Service e Contabilidade Consultiva",
    description: "Valorum: soluções financeiras completas para empresas. BPO Financeiro, CFO as a Service e Contabilidade Consultiva. Financeiro não se improvisa.",
    keywords: "BPO financeiro, CFO as a service, contabilidade consultiva, terceirização financeira, gestão financeira empresarial, contabilidade empresarial, direção financeira terceirizada",
  },

  valorumContabil: {
    title: "Valorum Contábil | Contabilidade Especializada para Empresas",
    description: "Contabilidade consultiva especializada: holding patrimonial, profissionais da saúde, indústria, comércio. Fazendo sempre mais do que os clientes esperam.",
    keywords: "contabilidade consultiva, contabilidade empresarial, holding patrimonial, contabilidade médicos, planejamento tributário, abertura de empresas, BPO financeiro, contabilidade Santa Catarina",
  },

  valorumCFO: {
    title: "Valorum CFO | CFO as a Service para Empresas",
    description: "CFO as a Service: gestão financeira estratégica para empresas. Compreender pessoas. Expandir negócios. Soluções personalizadas para crescimento.",
    keywords: "CFO as a service, gestão financeira empresarial, consultoria CFO, diretor financeiro terceirizado, planejamento financeiro empresarial, controladoria, gestão de custos, análise financeira",
  },

  contato: {
    title: "Contato | Valorum - Fale com um Consultor",
    description: "Entre em contato com a Valorum. Agende uma consulta e descubra como podemos ajudar sua empresa com BPO, CFO e Contabilidade.",
    keywords: "contato valorum, consultoria financeira contato, agendar consulta financeira, falar com consultor",
  },
};

export const StructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Valorum",
    "alternateName": ["Valorum BPO", "Valorum Contábil", "Valorum CFO"],
    "description": "Soluções financeiras completas para empresas: BPO Financeiro, CFO as a Service e Contabilidade Consultiva.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo-valorum-social.png`,
    "image": `${SITE_URL}/logo-valorum-social.png`,
    "telephone": "+55-11-94956-6290",
    "priceRange": "$$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "serviceType": ["BPO Financeiro", "CFO as a Service", "Contabilidade Consultiva"],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-11-94956-6290",
      "contactType": "customer service",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SC",
      "addressLocality": "Santa Catarina"
    },
  },

  contabilService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Valorum Contábil",
    "description": "Contabilidade consultiva especializada para holdings, profissionais da saúde, indústria e comércio.",
    "url": `${SITE_URL}/contabil`,
    "provider": { "@type": "Organization", "name": "Valorum" },
    "serviceType": ["Contabilidade Consultiva", "Planejamento Tributário", "Abertura de Empresas", "BPO Financeiro"],
    "areaServed": "BR"
  },

  cfoService: {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Valorum CFO",
    "description": "CFO as a Service: gestão financeira estratégica para empresas com foco em crescimento e eficiência.",
    "url": `${SITE_URL}/cfo`,
    "provider": { "@type": "Organization", "name": "Valorum" },
    "serviceType": ["CFO as a Service", "Gestão Financeira", "Controladoria", "Planejamento Estratégico"],
    "areaServed": "BR"
  },

  breadcrumbHome: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": SITE_URL
    }]
  },
};
