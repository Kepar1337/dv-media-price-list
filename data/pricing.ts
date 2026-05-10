export interface BrandData {
  name: string;
  tagline: string;
  mark: string;
}

export interface HeroStat {
  k: string;
  v: string;
}

export interface HeroData {
  label: string;
  headline_pre: string;
  headline_em: string;
  supporting: string;
  stats: HeroStat[];
}

export interface AdFormat {
  code: string;
  name: string;
  desc: string;
}

export interface ChannelPrices {
  '1/24': number;
  '2/48': number;
  '2/perm': number;
}

export type ChannelTag = 'top' | 'er';

export interface Channel {
  name: string;
  handle: string;
  link: string;
  category: string;
  geo: string;
  geoFlag: string;
  subs: number;
  views: number;
  er: number;
  prices: ChannelPrices;
  tag?: ChannelTag;
}

export interface Package {
  name: string;
  for: string;
  price: number;
  turnaround: string;
  includes: string[];
  note?: string;
}

export interface Service {
  name: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface DirectContact {
  label: string;
  value: string;
  href: string;
}

export interface ContactsData {
  intro: string;
  body: string;
  direct: DirectContact[];
  response: string;
}

export interface PricingData {
  brand: BrandData;
  hero: HeroData;
  adFormats: AdFormat[];
  channels: Channel[];
  packages: Package[];
  services: Service[];
  faq: FaqItem[];
  contacts: ContactsData;
}

export const pricingData: PricingData = {
  brand: {
    name: 'DV Media Group',
    tagline: 'Telegram · 2026',
    mark: 'DV',
  },

  hero: {
    label: 'Рекламна мережа · Telegram · 2026',
    headline_pre: 'Рекламний',
    headline_em: 'прайс-лист.',
    supporting:
      '13 українських Telegram-каналів: 587 тис. підписників у мережі, середнє охоплення посту ~68 тис., середній ER 13,6%. Чотири стандартизовані формати розміщення, прозоре ціноутворення по кожному каналу.',
    stats: [
      { k: 'Підписників у мережі', v: '587K' },
      { k: 'Середнє охоплення', v: '~68K' },
      { k: 'Середній ER', v: '13,6%' },
      { k: 'Форматів реклами', v: '4' },
    ],
  },

  adFormats: [
    {
      code: '1/24',
      name: '1/24',
      desc: '1 година в топі каналу, 24 години у стрічці.',
    },
    {
      code: '2/48',
      name: '2/48',
      desc: '2 години в топі каналу, 48 годин у стрічці.',
    },
    {
      code: '2/perm',
      name: '2/без видалення',
      desc: '2 години в топі, назавжди у стрічці — не видаляється.',
    },
    {
      code: 'native',
      name: 'Нативна реклама',
      desc: 'Органічна інтеграція в контент каналу. Ціна узгоджується індивідуально.',
    },
  ],

  channels: [
    {
      name: 'Доступна англійська',
      handle: 't.me/dostupna_en',
      link: 'https://t.me/+7bg9oCFsbeJmOWEy',
      category: 'Лінгвістика',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 134874,
      views: 15143,
      er: 11.2,
      prices: { '1/24': 2800, '2/48': 3400, '2/perm': 4500 },
      tag: 'top',
    },
    {
      name: 'Головна афіша Києва',
      handle: 't.me/afisha_kyiv',
      link: 'https://t.me/+G-XMfXddtmc1NjYy',
      category: 'Афіша',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 66765,
      views: 8167,
      er: 12.2,
      prices: { '1/24': 1700, '2/48': 2300, '2/perm': 3500 },
    },
    {
      name: '5 слів англійською',
      handle: 't.me/5words_en',
      link: 'https://t.me/+zQ15HQ2WTLplMGUy',
      category: 'Лінгвістика',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 63288,
      views: 4309,
      er: 6.8,
      prices: { '1/24': 1000, '2/48': 1400, '2/perm': 1900 },
    },
    {
      name: 'Доступна німецька',
      handle: 't.me/dostupna_de',
      link: 'https://t.me/+7Y_gWhgBtLcwODJi',
      category: 'Лінгвістика',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 62212,
      views: 9287,
      er: 14.9,
      prices: { '1/24': 2800, '2/48': 3400, '2/perm': 4500 },
    },
    {
      name: 'Англійська у смартфоні',
      handle: 't.me/english_phone',
      link: 'https://t.me/+0YTwFyvS2Mg4Yjdi',
      category: 'Лінгвістика',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 55714,
      views: 3443,
      er: 6.2,
      prices: { '1/24': 1000, '2/48': 1400, '2/perm': 1900 },
    },
    {
      name: 'Антисуржик',
      handle: 't.me/anty_surzhyk',
      link: 'https://t.me/anty_surzhyk',
      category: 'Лінгвістика',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 51598,
      views: 11083,
      er: 21.5,
      prices: { '1/24': 1300, '2/48': 1800, '2/perm': 2300 },
      tag: 'er',
    },
    {
      name: 'Німеччина | Діаспора',
      handle: 't.me/germany_dias',
      link: 'https://t.me/+45m7tw4Ng5c1YTEy',
      category: 'Діаспора',
      geo: 'DE',
      geoFlag: '🇩🇪',
      subs: 44277,
      views: 7746,
      er: 17.5,
      prices: { '1/24': 2200, '2/48': 2800, '2/perm': 3800 },
    },
    {
      name: 'Доступна освіта',
      handle: 't.me/dostupna_edu',
      link: 'https://t.me/+4XviiWWCstMzYWI6',
      category: 'Освіта',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 34844,
      views: 1616,
      er: 4.6,
      prices: { '1/24': 1100, '2/48': 1400, '2/perm': 1800 },
    },
    {
      name: 'Цікавий Київ ⚡️ Афіша',
      handle: 't.me/kyiv_afisha',
      link: 'https://t.me/+AAAAAEOEzh7xVfgnL-88TA',
      category: 'Афіша',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 23607,
      views: 1393,
      er: 5.9,
      prices: { '1/24': 900, '2/48': 1100, '2/perm': 1500 },
    },
    {
      name: 'Українська діаспора | Українці в Європі',
      handle: 't.me/diaspora_ukraine',
      link: 'https://t.me/diaspora_ukraine',
      category: 'Діаспора',
      geo: 'EU',
      geoFlag: '🇪🇺',
      subs: 21717,
      views: 2412,
      er: 11.1,
      prices: { '1/24': 700, '2/48': 900, '2/perm': 1300 },
    },
    {
      name: 'Головна афіша Львова',
      handle: 't.me/afisha_lviv',
      link: 'https://t.me/+l8gAC1q6ihA4NTIy',
      category: 'Афіша',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 12188,
      views: 2316,
      er: 19.0,
      prices: { '1/24': 700, '2/48': 900, '2/perm': 1300 },
    },
    {
      name: 'А ти знав?',
      handle: 't.me/a_ty_znav_ua',
      link: 'https://t.me/a_ty_znav_ua',
      category: 'Факти',
      geo: 'UA',
      geoFlag: '🇺🇦',
      subs: 9582,
      views: 3222,
      er: 33.6,
      prices: { '1/24': 400, '2/48': 650, '2/perm': 800 },
      tag: 'er',
    },
    {
      name: 'Польща | Діаспора',
      handle: 't.me/polish_diaspora',
      link: 'https://t.me/polish_diaspora',
      category: 'Діаспора',
      geo: 'PL',
      geoFlag: '🇵🇱',
      subs: 6929,
      views: 1431,
      er: 20.6,
      prices: { '1/24': 500, '2/48': 750, '2/perm': 1100 },
    },
  ],

  packages: [
    {
      name: 'Стартовий мікс',
      for: 'Тестова кампанія в мережі — перше знайомство з аудиторією.',
      price: 4800,
      turnaround: '3–5 днів',
      includes: [
        '3 канали · формат 1/24',
        'Мікс «Лінгвістика + Афіша»',
        'Рев\'ю креативу менеджером',
        'Єдине вікно публікацій',
        'Звіт за результатами кампанії',
      ],
      note: 'Пакет орієнтовний — фінальний склад погоджується індивідуально',
    },
    {
      name: 'Мережеве охоплення',
      for: 'Максимальне покриття топових каналів в одній кампанії.',
      price: 15800,
      turnaround: '5–7 днів',
      includes: [
        '7 каналів · формат 2/48',
        'Топ-канал «Доступна англійська» у складі',
        'Координований графік публікацій',
        'Адаптація креативу під кожен канал',
        'Проміжний та фінальний звіти',
        'Персональний менеджер кампанії',
      ],
      note: 'Найчастіше замовляється — ключові канали мережі',
    },
    {
      name: 'Діаспора',
      for: 'Українська аудиторія у DE, PL та ширше ЄС — лише діаспорні канали.',
      price: 7400,
      turnaround: '4–6 днів',
      includes: [
        '4 діаспорні канали',
        'Формат 2/48 по всьому сету',
        'Гео-адаптація креативу',
        'Підтримка локалізації (UA/EN/DE/PL)',
        'Фінальний звіт з метриками',
      ],
      note: 'Пакет орієнтовний — фінальний склад погоджується індивідуально',
    },
  ],

  services: [
    {
      name: 'Закупівля реклами',
      desc: 'Розміщення в Telegram-каналах: пошук слотів, переговори, публікація, звітність.',
    },
    {
      name: 'Воронки та автоматизація',
      desc: 'Архітектура воронок та автоматизація: боти, сценарії, CRM-інтеграції, трекінг подій.',
    },
    {
      name: 'Запуск інфопродуктів',
      desc: 'Запуск інфопродуктів під ключ: прогрів, лист очікування, оркестрація дня продажів.',
    },
    {
      name: 'Розвиток каналів під ключ',
      desc: 'Повний цикл розвитку: контент-стратегія, редактура, дизайн, закупівля трафіку.',
    },
    {
      name: 'Консалтинг',
      desc: 'Стратегічні сесії для власників каналів, брендів та агентств — діагностика та дорожня карта.',
    },
    {
      name: 'Таргетована реклама',
      desc: 'Платний трафік у Telegram-канали через таргетовані кампанії та воронки.',
    },
  ],

  faq: [
    {
      q: 'Як відбувається бронювання та оплата?',
      a: 'Надсилайте канал(и), формат і бажані дати через форму або напряму менеджеру. Підтверджуємо наявність слоту, фіксуємо графік, виставляємо рахунок. Повна передоплата на рахунок або криптою — до публікації.',
    },
    {
      q: 'Чи можна редагувати креатив після узгодження?',
      a: 'Мінорні правки (друкарські помилки, посилання) — безкоштовно до 4 годин перед публікацією. Суттєві зміни потребують повторного узгодження з адміністрацією каналу і можуть зсунути слот. Фінальну версію завжди фіксуємо письмово.',
    },
    {
      q: 'Які терміни публікації?',
      a: 'Стандартні слоти — 3–7 днів. На топових каналах бронювання може бути на 2–3 тижні наперед. Ділимось актуальним графіком за запитом; рекомендуємо бронювати щонайменше за тиждень для мультиканальних кампаній.',
    },
    {
      q: 'Як стартує кампанія?',
      a: 'Напишіть менеджеру цільову аудиторію, бюджет і дедлайн. Протягом робочого дня повертаємось з підбіркою каналів, оцінкою бюджету та графіком. Старт — після узгодження креативу та оплати.',
    },
    {
      q: 'Як ми комунікуємо під час кампанії?',
      a: 'Прямий Telegram-чат з персональним менеджером. Надсилаємо підтвердження графіку, прев\'ю креативу, скріншоти публікацій та фінальний звіт з метриками.',
    },
    {
      q: 'Що не входить у стандартний скоуп?',
      a: 'Ми не робимо лендинги, не знімаємо відео і не закуповуємо поза Telegram. Базова адаптація креативу — включена; повна креативна розробка — окремою послугою.',
    },
  ],

  contacts: {
    intro: 'Готові розмістити рекламу?',
    body: 'Напишіть менеджеру — обговоримо формат, дати та умови. Відповідаємо швидко.',
    direct: [
      { label: 'Telegram', value: '@teo_ua', href: 'https://t.me/teo_ua' },
      { label: 'Email', value: 'tg.colab@gmail.com', href: 'mailto:tg.colab@gmail.com' },
    ],
    response: 'Зазвичай відповідаємо протягом 1–2 годин у робочі дні.',
  },
};
