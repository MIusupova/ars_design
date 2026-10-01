export type Lang = 'ru' | 'fr';

export type PortfolioItemText = {
  title: string;
  meta: string;
};

export type Translation = {
  meta: {
    title: string;
    description: string;
    ogDescription: string;
  };
  nav: {
    about: string;
    portfolio: string;
    services: string;
    contact: string;
    blog: string;
  };
  header: {
    title: string;
    subtitle: string;
    scrollAria: string;
  };
  sections: {
    about: { eyebrow: string; label: string };
    portfolio: { eyebrow: string; label: string };
    services: { eyebrow: string; label: string };
    contact: { eyebrow: string; label: string };
  };
  aboutUs: {
    lead: string;
    body: string;
    principles: string[];
  };
  services: { number: string; title: string; text: string }[];
  portfolio: {
    items: Record<string, PortfolioItemText>;
    photoAlt: (title: string, index: number, total: number) => string;
    photoAriaLabel: (index: number, total: number) => string;
    prevAria: string;
    nextAria: string;
  };
  contact: {
    addressAlt: string;
    phoneAlt: string;
    mailAlt: string;
    namePlaceholder: string;
    phonePlaceholder: string;
    submit: string;
  };
  blog: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    label: string;
    readMore: string;
    back: string;
    empty: string;
  };
  footer: {
    navAria: string;
    copy: (year: number) => string;
  };
  navMenu: {
    toTop: string;
    mainNavAria: string;
    mobileNavAria: string;
    openMenu: string;
    closeMenu: string;
  };
};

export const translations: Record<Lang, Translation> = {
  ru: {
    meta: {
      title: 'ARS DESIGN — ремонт и отделка квартир и домов в Ницце',
      description:
        'ARS DESIGN — компания по ремонту и отделке в Ницце: ремонт квартир и домов под ключ, отделка стен и потолков, напольные покрытия, ремонт ванных комнат и кухонь, электромонтаж на Лазурном берегу.',
      ogDescription:
        'Ремонт и отделка квартир и домов под ключ на Лазурном берегу.',
    },
    nav: {
      about: 'О нас',
      portfolio: 'Портфолио',
      services: 'Услуги',
      contact: 'Контакты',
      blog: 'Блог',
    },
    header: {
      title: 'Создаём пространство, в котором хочется жить',
      subtitle: 'Ремонт и отделка квартир и домов',
      scrollAria: 'Перейти к разделу «О нас»',
    },
    sections: {
      about: { eyebrow: 'наша история', label: ' // О НАС' },
      portfolio: { eyebrow: 'наши работы', label: ' // ПОРТФОЛИО' },
      services: { eyebrow: 'что мы делаем', label: ' // УСЛУГИ' },
      contact: { eyebrow: 'где нас найти', label: ' // КОНТАКТЫ' },
    },
    aboutUs: {
      lead: 'Мы создаём качественные и продуманные интерьеры, уделяя внимание каждой детали.',
      body: 'Наша команда выполняет внутренние ремонтные и отделочные работы для квартир, домов и коммерческих помещений. Работаем аккуратно, соблюдаем сроки и стремимся к результату, который будет радовать вас долгие годы.',
      principles: ['Качество', 'Точность', 'Внимание к деталям'],
    },
    services: [
      {
        number: '01',
        title: 'Ремонт квартир и домов',
        text: 'Полный ремонт помещений — от подготовки стен до финальной отделки.',
      },
      {
        number: '02',
        title: 'Отделка стен и потолков',
        text: 'Штукатурка, шпаклёвка, покраска и другие работы для аккуратного результата.',
      },
      {
        number: '03',
        title: 'Напольные покрытия',
        text: 'Укладка плитки, ламината, паркета и других напольных материалов.',
      },
      {
        number: '04',
        title: 'Ванная и кухня',
        text: 'Ремонт и отделка помещений с учётом особенностей влажных зон.',
      },
      {
        number: '05',
        title: 'Электрика и освещение',
        text: 'Монтаж розеток, выключателей, освещения и необходимых электрических систем.',
      },
      {
        number: '06',
        title: 'Ремонт под ключ',
        text: 'Берём на себя весь комплекс внутренних работ, чтобы вам не пришлось искать разных специалистов.',
      },
    ],
    portfolio: {
      items: {
        livingRoom: { title: 'Гостиная-кухня', meta: 'ТВ-панель на мраморе и рейке, кухня с подсветкой' },
        showerBathroom: { title: 'Ванная с душевой', meta: 'Отделка мрамором и раковины на столешнице' },
        marbleBathroom: { title: 'Ванная под мрамор', meta: 'Крупноформатная плитка, ванна и раковины' },
        reception: { title: 'Ресепшн', meta: 'Мраморная арка с подсветкой и стойка администратора' },
        toiletShower: { title: 'Туалет и душевая', meta: 'Инсталляция унитаза и отделка плиткой' },
      },
      photoAlt: (title, index, total) => `${title}, фото ${index} из ${total}`,
      photoAriaLabel: (index, total) => `Фото ${index} из ${total}`,
      prevAria: 'Предыдущее фото',
      nextAria: 'Следующее фото',
    },
    contact: {
      addressAlt: 'Адрес',
      phoneAlt: 'Телефон',
      mailAlt: 'Почта',
      namePlaceholder: 'Имя',
      phonePlaceholder: '+33 6 __ __ __ __',
      submit: 'ПЕРЕЗВОНИТЕ',
    },
    blog: {
      metaTitle: 'Блог — советы по ремонту | ARS DESIGN',
      metaDescription:
        'Блог ARS DESIGN: практические советы по ремонту и отделке квартир и домов на Лазурном берегу.',
      eyebrow: 'советы и идеи',
      label: ' // БЛОГ',
      readMore: 'Читать статью',
      back: 'Назад в блог',
      empty: 'Статьи скоро появятся.',
    },
    footer: {
      navAria: 'Навигация в подвале',
      copy: (year) => `© ${year} ARS DESIGN — Nice, Bd. Gambetta 85`,
    },
    navMenu: {
      toTop: 'Наверх',
      mainNavAria: 'Основная навигация',
      mobileNavAria: 'Мобильная навигация',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
    },
  },
  fr: {
    meta: {
      title: 'ARS DESIGN — Entreprise de rénovation à Nice',
      description:
        "ARS DESIGN, entreprise de rénovation basée à Nice : rénovation complète d'appartements et de maisons, plâtrerie et peinture, revêtements de sol, salle de bain et cuisine, électricité et suivi de chantier sur la Côte d'Azur.",
      ogDescription:
        "Rénovation et finitions intérieures d'appartements et de maisons sur la Côte d'Azur.",
    },
    nav: {
      about: 'À propos',
      portfolio: 'Réalisations',
      services: 'Prestations',
      contact: 'Contact',
      blog: 'Blog',
    },
    header: {
      title: "Nous donnons vie à vos projets de rénovation",
      subtitle: "Rénovation et aménagement d'appartements et de maisons",
      scrollAria: 'Aller à la section « À propos »',
    },
    sections: {
      about: { eyebrow: 'notre savoir-faire', label: ' // À PROPOS' },
      portfolio: { eyebrow: 'nos chantiers', label: ' // RÉALISATIONS' },
      services: { eyebrow: 'nos prestations', label: ' // SERVICES' },
      contact: { eyebrow: 'nous contacter', label: ' // CONTACT' },
    },
    aboutUs: {
      lead: 'Nous concevons des intérieurs soignés, en apportant un soin particulier à chaque détail.',
      body: "Notre équipe réalise vos travaux de rénovation et de finition intérieure : appartements, maisons et locaux commerciaux. Nous intervenons avec soin, respectons les délais convenus et visons un résultat durable, à la hauteur de vos attentes.",
      principles: ['Qualité', 'Précision', 'Souci du détail'],
    },
    services: [
      {
        number: '01',
        title: 'Rénovation d\'appartements et de maisons',
        text: "Rénovation complète de votre bien, de la préparation des murs jusqu'aux finitions.",
      },
      {
        number: '02',
        title: 'Plâtrerie et peinture',
        text: 'Enduit, ratissage, peinture et traitement des murs et plafonds pour un rendu impeccable.',
      },
      {
        number: '03',
        title: 'Revêtements de sol',
        text: 'Pose de carrelage, parquet, sol stratifié et autres revêtements de sol.',
      },
      {
        number: '04',
        title: 'Salle de bain et cuisine',
        text: "Rénovation et finition adaptées aux contraintes des pièces d'eau.",
      },
      {
        number: '05',
        title: 'Électricité et éclairage',
        text: 'Installation de prises, interrupteurs, éclairage et mise aux normes électriques.',
      },
      {
        number: '06',
        title: 'Rénovation clé en main',
        text: "Un interlocuteur unique pour l'ensemble de vos travaux : vous n'avez pas à coordonner plusieurs corps de métier.",
      },
    ],
    portfolio: {
      items: {
        livingRoom: { title: 'Salon-cuisine', meta: 'Panneau TV en marbre et claustra bois, cuisine avec éclairage LED' },
        showerBathroom: { title: "Salle de bain avec douche à l'italienne", meta: 'Finition marbre et vasques à poser' },
        marbleBathroom: { title: 'Salle de bain effet marbre', meta: 'Carrelage grand format, baignoire et vasques' },
        reception: { title: 'Réception', meta: "Arche en marbre avec éclairage et comptoir d'accueil" },
        toiletShower: { title: 'WC et douche', meta: 'Bâti-support WC et finition carrelage' },
      },
      photoAlt: (title, index, total) => `${title}, photo ${index} sur ${total}`,
      photoAriaLabel: (index, total) => `Photo ${index} sur ${total}`,
      prevAria: 'Photo précédente',
      nextAria: 'Photo suivante',
    },
    contact: {
      addressAlt: 'Adresse',
      phoneAlt: 'Téléphone',
      mailAlt: 'E-mail',
      namePlaceholder: 'Nom',
      phonePlaceholder: '+33 6 __ __ __ __',
      submit: 'ÊTRE RAPPELÉ',
    },
    blog: {
      metaTitle: 'Blog — conseils de rénovation | ARS DESIGN',
      metaDescription:
        'Le blog d’ARS DESIGN : conseils pratiques pour la rénovation et la décoration d’appartements et de maisons sur la Côte d’Azur.',
      eyebrow: 'conseils et idées',
      label: ' // BLOG',
      readMore: 'Lire l’article',
      back: 'Retour au blog',
      empty: 'Les articles arrivent bientôt.',
    },
    footer: {
      navAria: 'Navigation du pied de page',
      copy: (year) => `© ${year} ARS DESIGN — Nice, Bd. Gambetta 85`,
    },
    navMenu: {
      toTop: 'Retour en haut',
      mainNavAria: 'Navigation principale',
      mobileNavAria: 'Navigation mobile',
      openMenu: 'Ouvrir le menu',
      closeMenu: 'Fermer le menu',
    },
  },
};
