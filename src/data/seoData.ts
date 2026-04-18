// Dados de SEO centralizados para consistência
// Domínio oficial (canonical) — usado para evitar conteúdo duplicado
// entre cfvalorum.com.br e cfvalorum.lovable.app no Google.
export const SITE_URL = "https://cfvalorum.com.br";

export const SEOData = {
  valorum: {
    title: "ConFiza | Terceirização Financeira, BPO Financeiro e Software Financeiro",
    description: "ConFiza: terceirização financeira completa para sua empresa. BPO Financeiro, software financeiro próprio, controle de caixa e CFO as a Service. Financeiro não se improvisa.",
    keywords: "terceirização financeira, BPO financeiro, software financeiro, CFO as a service, departamento financeiro terceirizado, sistema financeiro empresarial, contas a pagar e receber, conciliação bancária, fluxo de caixa, controladoria, ConFiza, finance as a service, gestão financeira empresarial",
  },

  valorumContabil: {
    title: "ConFiza | Terceirização Financeira para Empresas Contábeis e PMEs",
    description: "Terceirização financeira com software próprio para escritórios contábeis e PMEs. Operação financeira por especialistas com previsibilidade de custo.",
    keywords: "terceirização financeira para contadores, BPO financeiro para escritório contábil, software financeiro para PMEs, departamento financeiro terceirizado",
  },

  valorumCFO: {
    title: "ConFiza CFO as a Service | Direção Financeira Terceirizada",
    description: "CFO as a Service: direção financeira terceirizada com BPO Financeiro integrado e software financeiro próprio. Estratégia, controladoria e decisões mais seguras.",
    keywords: "CFO as a service, CFO terceirizado, direção financeira terceirizada, controladoria terceirizada, planejamento financeiro empresarial, análise financeira, gestão de custos, BPO financeiro com CFO",
  },

  contato: {
    title: "Contato ConFiza | Fale com um Especialista em Terceirização Financeira",
    description: "Fale com a ConFiza. Agende um diagnóstico gratuito e descubra como a terceirização financeira com software próprio e CFO as a Service pode transformar sua empresa.",
    keywords: "contato ConFiza, terceirização financeira contato, BPO financeiro contato, agendar diagnóstico financeiro, falar com especialista financeiro",
  },
};

export const StructuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "ConFiza",
    "alternateName": ["ConFiza Terceirização Financeira", "ConFiza BPO", "ConFiza CFO"],
    "description": "Terceirização Financeira, BPO Financeiro, software financeiro próprio e CFO as a Service para empresas.",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.png`,
    "image": `${SITE_URL}/og-valorum-bpo-cfo.jpg`,
    "telephone": "+55-11-94956-6290",
    "priceRange": "$$$",
    "areaServed": {
      "@type": "Country",
      "name": "Brazil"
    },
    "serviceType": [
      "Terceirização Financeira",
      "BPO Financeiro",
      "Software Financeiro",
      "CFO as a Service",
      "Controladoria",
      "Tesouraria"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+55-11-94956-6290",
        "contactType": "customer service",
        "availableLanguage": "Portuguese",
        "areaServed": "BR"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+55-48-98436-3346",
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
    "name": "ConFiza — Terceirização Financeira (BPO Financeiro)",
    "description": "Departamento financeiro operado por especialistas com software financeiro próprio: contas a pagar, contas a receber, conciliação bancária, fluxo de caixa e relatórios gerenciais.",
    "url": `${SITE_URL}/`,
    "provider": { "@type": "Organization", "name": "ConFiza" },
    "areaServed": "BR"
  },

  cfoService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "CFO as a Service",
    "name": "ConFiza CFO as a Service",
    "description": "Direção financeira terceirizada com BPO Financeiro integrado: planejamento, controladoria, análise de indicadores e estratégia para crescimento.",
    "url": `${SITE_URL}/cfo`,
    "provider": { "@type": "Organization", "name": "ConFiza" },
    "areaServed": "BR"
  },

  // Alias mantido para retrocompatibilidade da página ValoromContabil.
  contabilService: {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Terceirização Financeira",
    "name": "ConFiza — Terceirização Financeira",
    "description": "Departamento financeiro terceirizado com software próprio para empresas e parceiros contábeis.",
    "url": `${SITE_URL}/`,
    "provider": { "@type": "Organization", "name": "ConFiza" },
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
