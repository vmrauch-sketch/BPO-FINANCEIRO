// Dados de SEO centralizados para consistência
// Domínio oficial (canonical) — usado para evitar conteúdo duplicado
// entre cfvalorum.com.br e cfvalorum.lovable.app no Google.
export const SITE_URL = "https://cfvalorum.com.br";

export const SEOData = {
  valorum: {
    title: "NORGE | Terceirização Financeira e Software Financeiro",
    description: "NORGE: terceirização financeira completa para sua empresa: departamento financeiro operado por especialistas, software financeiro próprio, controle de caixa e CFO as a Service. Financeiro não se improvisa.",
    keywords: "terceirização financeira, departamento financeiro terceirizado, software financeiro, CFO as a service, departamento financeiro terceirizado, sistema financeiro empresarial, contas a pagar e receber, conciliação bancária, fluxo de caixa, controladoria, NORGE, finance as a service, gestão financeira empresarial",
  },

  valorumContabil: {
    title: "NORGE | Terceirização Financeira para Empresas Contábeis e PMEs",
    description: "Terceirização financeira com software próprio para escritórios contábeis e PMEs. Operação financeira por especialistas com previsibilidade de custo.",
    keywords: "terceirização financeira para contadores, terceirização financeira para escritório contábil, software financeiro para PMEs, departamento financeiro terceirizado",
  },

  valorumCFO: {
    title: "NORGE CFO as a Service | Direção Financeira Terceirizada",
    description: "CFO as a Service: direção financeira terceirizada com terceirização financeira integrada e software financeiro próprio. Estratégia, controladoria e decisões mais seguras.",
    keywords: "CFO as a service, CFO terceirizado, direção financeira terceirizada, controladoria terceirizada, planejamento financeiro empresarial, análise financeira, gestão de custos, terceirização financeira com CFO",
  },

  contato: {
    title: "Contato NORGE | Fale com um Especialista em Terceirização Financeira",
    description: "Fale com a NORGE. Agende um diagnóstico gratuito e descubra como a terceirização financeira com software próprio e CFO as a Service pode transformar sua empresa.",
    keywords: "contato NORGE, terceirização financeira contato, BPO financeiro contato, agendar diagnóstico financeiro, falar com especialista financeiro",
  },
};

export const StructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "NORGE",
    "alternateName": ["NORGE Terceirização Financeira", "NORGE BPO", "NORGE CFO"],
    "description": "Terceirização Financeira, Software Financeiro próprio e CFO as a Service para empresas.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.png`,
    "image": `${SITE_URL}/og-valorum-bpo-cfo.jpg`,
    "telephone": "+55-11-95958-6722",
    "priceRange": "$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "serviceType": [
      "Terceirização Financeira",
      "Terceirização Financeira",
      "Software Financeiro",
      "CFO as a Service",
      "Controladoria",
      "Tesouraria"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-95958-6722",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+55-48-99164-8272",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BR",
      "addressRegion": "SC",
      "addressLocality": "Santa Catarina"
    },
    "sameAs": [
      "https://cfvalorum.com.br",
      "https://cfvalorum.lovable.app"
    ]
  },

  bpoService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Terceirização Financeira",
    "name": "NORGE — Terceirização Financeira",
    "description": "Departamento financeiro operado por especialistas com software financeiro próprio: contas a pagar, contas a receber, conciliação bancária, fluxo de caixa e relatórios gerenciais.",
    "url": `${SITE_URL}/`,
    "provider": { "@type": "Organization", "name": "NORGE" },
    "areaServed": "BR"
  },

  cfoService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CFO as a Service",
    "name": "NORGE CFO as a Service",
    "description": "Direção financeira terceirizada com terceirização financeira integrada: planejamento, controladoria, análise de indicadores e estratégia para crescimento.",
    "url": `${SITE_URL}/cfo`,
    "provider": { "@type": "Organization", "name": "NORGE" },
    "areaServed": "BR"
  },

  // Alias mantido para retrocompatibilidade da página ValoromContabil.
  contabilService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Terceirização Financeira",
    "name": "NORGE — Terceirização Financeira",
    "description": "Departamento financeiro terceirizado com software próprio para empresas e parceiros contábeis.",
    "url": `${SITE_URL}/`,
    "provider": { "@type": "Organization", "name": "NORGE" },
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
