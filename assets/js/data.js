/* ==========================================================================
   EQUIP DRONES — SOURCE DE VÉRITÉ DU CATALOGUE
   --------------------------------------------------------------------------
   Pour ajouter un produit : copiez un objet, changez les champs. Rien d'autre.
   Pour changer une disponibilité : modifiez `availability` (voir plus bas).
   Pour remplacer une image : modifiez `image`. Une seule ligne par produit.

   RÈGLE ABSOLUE SUR LES SPÉCIFICATIONS
   Toute valeur de `specs` provient des fiches techniques officielles DJI.
   Lorsque DJI ne publie aucun chiffre, la valeur est le tiret « — ».
   On n'estime jamais une spécification : un chiffre faux dans un devis est un
   problème commercial, pas un détail cosmétique.
   ========================================================================== */

/* Coordonnées reprises telles quelles du site existant */
window.ED_CONTACT = {
  company:    'SARL Equip Drones',
  phone:      '+213661936666',
  phoneLabel: '+213 661 93 66 66',
  whatsapp:   '213661936666',
  email:      'info@equipdrones.com',
  instagram:  'https://www.instagram.com/equip_drones/',
  facebook:   'https://www.facebook.com/profile.php?id=61571771371833',
  linkedin:   'https://www.linkedin.com/company/equip-drones/',
  youtube:    'https://www.youtube.com/@equip_drones_algeria',
  logo:       'assets/img/svg/Logo.svg',
  djiLogo:    'assets/img/photos/DJI_logo_white.png'
};

/* Photos d'ambiance reprises du site existant, hébergées en local */
window.ED_PHOTOS = {
  heroSpray:  'assets/img/photos/hero-spray.jpg',
  sunsetField:'assets/img/photos/sunset-field.jpg',
  flag:       'assets/img/photos/flag.jpg',
  operator:   'assets/img/photos/operator.jpg',
  background: 'assets/img/photos/background.jpg',
  djiAg:      'assets/img/photos/dji-ag.png',
  services:   'assets/img/photos/06_services_IMG01.jpg'
};

/* --------------------------------------------------------------------------
   DISPONIBILITÉS — DONNÉES FICTIVES
   ⚠ FAKE DATA : valeurs saisies à la main pour la démonstration.
   À remplacer par un vrai flux de stock. Seul ce champ change ; l'affichage,
   les libellés et les badges restent identiques.
   Valeurs admises : 'in_stock' | 'on_order' | 'coming_soon'
   -------------------------------------------------------------------------- */

window.ED_PRODUCTS = [

  /* ====================== AGRICULTURE — PULVÉRISATION ===================== */
  {
    id: 't55',
    name: 'DJI Agras T55',
    segment: 'agriculture',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'Le vaisseau amiral de la gamme Agras, conçu pour les très grandes surfaces.',
      en: 'The flagship of the Agras range, built for very large acreages.'
    },
    usage: {
      fr: 'Le T55 s’adresse aux exploitations céréalières étendues et aux prestataires de services qui traitent plusieurs centaines d’hectares par saison. Sa capacité de cuve et son débit lui permettent d’enchaîner les parcelles sans multiplier les rotations de remplissage. Il assure aussi bien la pulvérisation phytosanitaire que l’épandage d’engrais granulés et de semences, ce qui en fait un outil rentable sur toute l’année agricole.',
      en: 'The T55 targets large cereal operations and contractors treating hundreds of hectares a season. Its tank capacity and flow rate let it work plot after plot without constant refill trips. It handles crop-protection spraying as well as granular fertiliser and seed spreading, making it productive across the whole farming year.'
    },
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '50 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '104 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
      { label: { fr: 'Autonomie', en: 'Autonomy' }, value: '7 min' },
      { label: { fr: 'Largeur Pulvérisation', en: 'Spray Width' }, value: '11 m', icon: 'assets/img/svg_icons/spray_width_1.svg' },
    ],
    specs: [
      {
        group: { fr: 'Spécifications Clés', en: 'Key Specifications' },
        rows: [
          { label: { fr: 'Charge utile (Payload)', en: 'Payload Capacity' }, value: '50 kg' },
          { label: { fr: 'Masse max. au décollage (MTOW)', en: 'Max Takeoff Weight' }, value: '104 kg' },
          { label: { fr: 'Autonomie de vol', en: 'Flight Autonomy' }, value: '7 min' },
          { label: { fr: 'Largeur de pulvérisation', en: 'Spray Width' }, value: '11 m' },
          { label: { fr: 'Vitesse de vol max.', en: 'Max Flight Speed' }, value: '13.8 m/s' },
        ]
      },
      {
        group: { fr: 'Performances de vol', en: 'Flight Performance' },
        rows: [
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '100 m' },
          { label: { fr: 'Rayon de vol', en: 'Flight Radius' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '6 m/s' },
          { label: { fr: 'Altitude max. au décollage', en: 'Max Takeoff Altitude' }, value: { fr: '4500 m (au-dessus du niveau de la mer)', en: '4500 m Above Sea Level' } },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radars AESA', en: 'AESA Radars' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision pour l’évitement d’obstacles', en: 'Vision System for Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/t55.png',
    imageFallback: 'assets/img/svg/agras-t.svg',
    djiUrl: 'https://ag.dji.com/t55'
  },
  {
    id: 't100',
    segment: 'agriculture',
    name: 'DJI Agras T100',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'Polyvalent lourd : pulvérisation, épandage et transport de charges.',
      en: 'Heavy multi-role: spraying, spreading and cargo lifting.'
    },
    usage: {
      fr: 'Le T100 dépasse le cadre du seul traitement phytosanitaire. Sa capacité d’emport lui permet de transporter des charges en terrain difficile — palmeraies, vergers en pente, chantiers isolés — là où aucun véhicule ne passe. Les exploitations qui combinent traitement, épandage et logistique interne y trouvent une seule machine pour trois usages, avec un taux d’utilisation annuel bien supérieur à un pulvérisateur dédié.',
      en: 'The T100 goes beyond crop protection alone. Its lift capacity lets it carry loads across difficult terrain — date palm groves, sloping orchards, remote sites — where no vehicle can go. Operations combining treatment, spreading and internal logistics get one machine for three jobs, with far higher annual utilisation than a dedicated sprayer.'
    },
    useCases: ['pulverisation', 'epandage', 'nettoyage', 'cartographie'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '100 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '175 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
      { label: { fr: 'Autonomie', en: 'Autonomy' }, value: '6 min' },
      { label: { fr: 'Largeur Pulvérisation', en: 'Spray Width' }, value: '13 m', icon: 'assets/img/svg_icons/spray_width_1.svg' },
    ],
    specs: [
      {
        group: { fr: 'Spécifications Clés', en: 'Key Specifications' },
        rows: [
          { label: { fr: 'Charge utile (Payload)', en: 'Payload Capacity' }, value: '100 kg' },
          { label: { fr: 'Masse max. au décollage (MTOW)', en: 'Max Takeoff Weight' }, value: '175 kg' },
          { label: { fr: 'Autonomie de vol', en: 'Flight Autonomy' }, value: '6 min' },
          { label: { fr: 'Largeur de pulvérisation', en: 'Spray Width' }, value: '13 m' },
          { label: { fr: 'Vitesse de vol max.', en: 'Max Flight Speed' }, value: '13.8 m/s' },
        ]
      },
      {
        group: { fr: 'Performances de vol', en: 'Flight Performance' },
        rows: [
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '100 m' },
          { label: { fr: 'Rayon de vol', en: 'Flight Radius' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '6 m/s' },
          { label: { fr: 'Altitude max. au décollage', en: 'Max Takeoff Altitude' }, value: { fr: '4500 m (au-dessus du niveau de la mer)', en: '4500 m Above Sea Level' } },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radars AESA', en: 'AESA Radars' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision pour l’évitement d’obstacles', en: 'Vision System for Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus', en: 'Included' } },
        ]
      },
    ],
    availability: 'not_available',
    image: 'assets/img/products/t100.png',
    imageFallback: 'assets/img/svg/agras-t.svg',
    djiUrl: 'https://ag.dji.com/t100'
  },
  {
    id: 't70p',
    segment: 'agriculture',
    name: 'DJI Agras T70P',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'Haut rendement sur grandes parcelles, avec pulvérisation de précision.',
      en: 'High throughput on large plots, with precision spraying.'
    },
    usage: {
      fr: 'Le T70P vise le meilleur compromis entre débit de chantier et précision d’application. Son système de pulvérisation module la dose en fonction de la vitesse réelle, ce qui limite le surdosage en bout de rang et les recouvrements. C’est l’appareil de référence pour les céréaliers qui veulent réduire leur consommation de produit tout en traitant de grandes surfaces dans les fenêtres météo courtes.',
      en: 'The T70P aims at the best balance of work rate and application precision. Its spraying system modulates dose against actual ground speed, limiting overdosing at row ends and overlaps. It is the reference aircraft for cereal growers wanting lower product consumption while still covering large areas inside short weather windows.'
    },
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '70 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '130 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
      { label: { fr: 'Autonomie', en: 'Autonomy' }, value: '7 min' },
      { label: { fr: 'Largeur Pulvérisation', en: 'Spray Width' }, value: '11 m', icon: 'assets/img/svg_icons/spray_width_1.svg' },
    ],
    specs: [
      {
        group: { fr: 'Spécifications Clés', en: 'Key Specifications' },
        rows: [
          { label: { fr: 'Charge utile (Payload)', en: 'Payload Capacity' }, value: '70 kg' },
          { label: { fr: 'Masse max. au décollage (MTOW)', en: 'Max Takeoff Weight' }, value: '130 kg' },
          { label: { fr: 'Autonomie de vol', en: 'Flight Autonomy' }, value: '7 min' },
          { label: { fr: 'Largeur de pulvérisation', en: 'Spray Width' }, value: '11 m' },
          { label: { fr: 'Vitesse de vol max.', en: 'Max Flight Speed' }, value: '13.8 m/s' },
        ]
      },
      {
        group: { fr: 'Performances de vol', en: 'Flight Performance' },
        rows: [
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '100 m' },
          { label: { fr: 'Rayon de vol', en: 'Flight Radius' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '6 m/s' },
          { label: { fr: 'Altitude max. au décollage', en: 'Max Takeoff Altitude' }, value: { fr: '4500 m (au-dessus du niveau de la mer)', en: '4500 m Above Sea Level' } },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radars AESA', en: 'AESA Radars' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision pour l’évitement d’obstacles', en: 'Vision System for Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/t70p.png',
    imageFallback: 'assets/img/svg/agras-t.svg',
    djiUrl: 'https://ag.dji.com/t70p'
  },
  {
    id: 't50',
    segment: 'agriculture',
    name: 'DJI Agras T50',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'La référence polyvalente pour exploitations moyennes et grandes.',
      en: 'The versatile reference for medium and large farms.'
    },
    usage: {
      fr: 'Le T50 est le modèle le plus déployé de la gamme et le meilleur point d’entrée pour une exploitation qui mécanise son traitement. Il couvre la pulvérisation comme l’épandage, son radar évite le relief et les obstacles, et son écosystème de batteries et de pièces est largement disponible. Pour la majorité des exploitations algériennes de taille moyenne, c’est le choix par défaut.',
      en: 'The T50 is the most widely deployed model in the range and the best entry point for a farm mechanising its treatment. It covers spraying and spreading alike, its radar avoids terrain and obstacles, and its battery and parts ecosystem is widely available. For most medium-sized Algerian farms, this is the default choice.'
    },
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '50 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '92 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
      { label: { fr: 'Autonomie', en: 'Autonomy' }, value: '7 min' },
      { label: { fr: 'Largeur Pulvérisation', en: 'Spray Width' }, value: '11 m', icon: 'assets/img/svg_icons/spray_width_1.svg' },
    ],
    specs: [
      {
        group: { fr: 'Spécifications Clés', en: 'Key Specifications' },
        rows: [
          { label: { fr: 'Charge utile (Payload)', en: 'Payload Capacity' }, value: '50 kg' },
          { label: { fr: 'Masse max. au décollage (MTOW)', en: 'Max Takeoff Weight' }, value: '92 kg' },
          { label: { fr: 'Autonomie de vol', en: 'Flight Autonomy' }, value: '7 min' },
          { label: { fr: 'Largeur de pulvérisation', en: 'Spray Width' }, value: '11 m' },
          { label: { fr: 'Vitesse de vol max.', en: 'Max Flight Speed' }, value: '10 m/s' },
        ]
      },
      {
        group: { fr: 'Performances de vol', en: 'Flight Performance' },
        rows: [
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '100 m' },
          { label: { fr: 'Rayon de vol', en: 'Flight Radius' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '6 m/s' },
          { label: { fr: 'Altitude max. au décollage', en: 'Max Takeoff Altitude' }, value: { fr: '4500 m (au-dessus du niveau de la mer)', en: '4500 m Above Sea Level' } },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radars AESA', en: 'AESA Radars' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision pour l’évitement d’obstacles', en: 'Vision System for Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/t50.png',
    imageFallback: 'assets/img/svg/agras-t.svg',
    djiUrl: 'https://ag.dji.com/t50'
  },
  {
    id: 't25p',
    segment: 'agriculture',
    name: 'DJI Agras T25P',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'Compact et maniable, pensé pour les vergers et les parcelles morcelées.',
      en: 'Compact and agile, built for orchards and fragmented plots.'
    },
    usage: {
      fr: 'Le T25P privilégie la maniabilité sur le débit brut. Son gabarit réduit lui permet d’évoluer entre les rangs de vergers, dans les palmeraies denses et sur les petites parcelles irrégulières où un appareil plus lourd serait inutilisable. Il se transporte dans un véhicule utilitaire ordinaire, ce qui simplifie la logistique pour les prestataires intervenant sur plusieurs sites dans la journée.',
      en: 'The T25P favours agility over raw throughput. Its compact size lets it work between orchard rows, inside dense palm groves and on small irregular plots where a heavier aircraft would be unusable. It fits in an ordinary van, simplifying logistics for contractors covering several sites in a day.'
    },
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '20 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '53 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
      { label: { fr: 'Autonomie', en: 'Autonomy' }, value: '9 min' },
      { label: { fr: 'Largeur Pulvérisation', en: 'Spray Width' }, value: '7 m', icon: 'assets/img/svg_icons/spray_width_1.svg' },
    ],
    specs: [
      {
        group: { fr: 'Spécifications Clés', en: 'Key Specifications' },
        rows: [
          { label: { fr: 'Charge utile (Payload)', en: 'Payload Capacity' }, value: '20 kg' },
          { label: { fr: 'Masse max. au décollage (MTOW)', en: 'Max Takeoff Weight' }, value: '53 kg' },
          { label: { fr: 'Autonomie de vol', en: 'Flight Autonomy' }, value: '9 min' },
          { label: { fr: 'Largeur de pulvérisation', en: 'Spray Width' }, value: '7 m' },
          { label: { fr: 'Vitesse de vol max.', en: 'Max Flight Speed' }, value: '10 m/s' },
        ]
      },
      {
        group: { fr: 'Performances de vol', en: 'Flight Performance' },
        rows: [
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '100 m' },
          { label: { fr: 'Rayon de vol', en: 'Flight Radius' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '6 m/s' },
          { label: { fr: 'Altitude max. au décollage', en: 'Max Takeoff Altitude' }, value: { fr: '4500 m (au-dessus du niveau de la mer)', en: '4500 m Above Sea Level' } },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radars AESA', en: 'AESA Radars' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision pour l’évitement d’obstacles', en: 'Vision System for Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur', en: 'Spotlight' }, value: { fr: 'Inclus', en: 'Included' } },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/t25p.png',
    imageFallback: 'assets/img/svg/agras-t.svg',
    djiUrl: 'https://ag.dji.com/t25p'
  },
  {
    id: 't25',
    segment: 'agriculture',
    name: 'DJI Agras T25',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'Le drone agricole compact et maniable pour les vergers et moyennes parcelles.',
      en: 'The compact and nimble agricultural drone for orchards and mid-size plots.'
    },
    usage: {
      fr: 'Le T25 est l’appareil d’apprentissage et de première installation. Il permet à une exploitation ou à un jeune prestataire de démarrer une activité de traitement aérien avec un investissement contenu, tout en conservant les automatismes de vol et la sécurité de la gamme Agras. Beaucoup d’opérateurs commencent avec un T25 avant de monter en gamme une fois leur carnet de commandes constitué.',
      en: 'The T25 is the learning and first-installation aircraft. It lets a farm or a new contractor start aerial treatment with contained investment, while keeping the flight automation and safety of the Agras range. Many operators start on a T25 and move up once their order book is established.'
    },
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '20 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '52 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
      { label: { fr: 'Autonomie', en: 'Autonomy' }, value: '9 min' },
      { label: { fr: 'Largeur Pulvérisation', en: 'Spray Width' }, value: '7 m', icon: 'assets/img/svg_icons/spray_width_1.svg' },
    ],
    specs: [
      {
        group: { fr: 'Spécifications Clés', en: 'Key Specifications' },
        rows: [
          { label: { fr: 'Charge utile (Payload)', en: 'Payload Capacity' }, value: '20 kg' },
          { label: { fr: 'Masse max. au décollage (MTOW)', en: 'Max Takeoff Weight' }, value: '52 kg' },
          { label: { fr: 'Autonomie de vol', en: 'Flight Autonomy' }, value: '9 min' },
          { label: { fr: 'Largeur de pulvérisation', en: 'Spray Width' }, value: '4 - 7 m' },
          { label: { fr: 'Vitesse de vol max.', en: 'Max Flight Speed' }, value: '10 m/s' },
        ]
      },
      {
        group: { fr: 'Performances de vol', en: 'Flight Performance' },
        rows: [
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '100 m' },
          { label: { fr: 'Rayon de vol', en: 'Flight Radius' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '6 m/s' },
          { label: { fr: 'Altitude max. au décollage', en: 'Max Takeoff Altitude' }, value: { fr: '4500 m (au-dessus du niveau de la mer)', en: '4500 m Above Sea Level' } },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radars AESA', en: 'AESA Radars' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision pour l’évitement d’obstacles', en: 'Vision System for Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/t25.png',
    imageFallback: 'assets/img/svg/agras-t.svg',
    djiUrl: 'https://ag.dji.com/t25'
  },
  {
    id: 'mavic-3m',
    segment: 'agriculture',
    name: 'DJI Mavic 3 Multispectral',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {
      fr: 'Cartographie multispectrale : voir l’état du couvert avant de traiter.',
      en: 'Multispectral mapping: see crop status before you treat.'
    },
    usage: {
      fr: 'Le Mavic 3M ne traite pas, il observe. Ses capteurs multispectraux mesurent la vigueur du couvert végétal et produisent des cartes d’indices (NDVI et assimilés) qui révèlent les zones de stress hydrique, les carences et les attaques avant qu’elles ne soient visibles à l’œil. Ces cartes alimentent directement les Agras en prescriptions de dose variable : on ne traite que là où c’est nécessaire.',
      en: 'The Mavic 3M does not treat, it observes. Its multispectral sensors measure canopy vigour and produce index maps (NDVI and similar) revealing water stress, deficiencies and pest attacks before they are visible to the eye. These maps feed the Agras directly as variable-rate prescriptions: you treat only where needed.'
    },
    useCases: ['cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '43 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '32 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Caméra multispectrale', en: 'Multispectral Camera' }, value: 'G/R/RE/NIR', icon: 'assets/img/svg_icons/simple_camera.svg' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '43 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '32 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '0,95 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '1,05 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (omnidirectionnel)', en: 'Included (Omnidirectional)' } },
          { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: '4/3 CMOS, Effective Pixels: 20 MP' },
          { label: { fr: 'Caméra multispectrale', en: 'Multispectral Camera' }, value: '1/2.8-inch CMOS, Effective Pixels: 5 MP' },
          { label: { fr: 'Bande multispectrale — Vert (G)', en: 'Multispectral Band — Green (G)' }, value: '560 ± 16 nm' },
          { label: { fr: 'Bande multispectrale — Rouge (R)', en: 'Multispectral Band — Red (R)' }, value: '650 ± 16 nm' },
          { label: { fr: 'Bande multispectrale — Red Edge (RE)', en: 'Multispectral Band — Red Edge (RE)' }, value: '730 ± 16 nm' },
          { label: { fr: 'Bande multispectrale — Proche infrarouge (NIR)', en: 'Multispectral Band — Near infrared (NIR)' }, value: '860 ± 26 nm' },
        ]
      },
    ],
    compatiblePayloads: [],
    availability: 'coming_soon',
    image: 'assets/img/products/mavic-3m.png',
    imageFallback: 'assets/img/svg/mavic-fold.svg',
    djiUrl: 'https://ag.dji.com/mavic-3-m'
  },

  /* ========================= ENTREPRISE / INDUSTRIE ======================= */
  {
    id: 'matrice-400',
    segment: 'enterprise',
    name: 'DJI Matrice 400',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Plateforme longue endurance pour missions lourdes et étendues.',
      en: 'Long-endurance platform for heavy, wide-area missions.'
    },
    usage: {
      fr: 'Le Matrice 400 est la plateforme des missions que les appareils plus légers ne peuvent pas tenir : couverture de longs linéaires, relevés étendus, surveillance prolongée. Son autonomie et sa capacité d’emport permettent d’associer plusieurs charges utiles sur un même vol — thermique, LiDAR, zoom — et donc de rentrer plusieurs livrables d’une seule sortie sur des sites difficiles d’accès.',
      en: 'The Matrice 400 is the platform for missions lighter aircraft cannot sustain: long linear corridors, wide-area survey, extended surveillance. Its endurance and lift allow several payloads on one flight — thermal, LiDAR, zoom — bringing back multiple deliverables from a single sortie over hard-to-reach sites.'
    },
    useCases: ['inspection', 'topographie', 'securite'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '59 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '49 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '59 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '49 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '7000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '9,7 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '15,8 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '25 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Radar', en: 'Radar' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Accessoires de nacelle', en: 'Gimbal Accessory' }, value: { fr: 'Série Zenmuse (H30, H30T, L3, S1, V1, L2, P1)', en: 'Zenmuse Series (H30, H30T, L3, S1, V1, L2, P1)' } },
        ]
      },
    ],
    compatiblePayloads: ['zenmuse-h30', 'zenmuse-h30t', 'zenmuse-l3', 'zenmuse-s1', 'zenmuse-v1', 'zenmuse-l2', 'zenmuse-p1', 'd-rtk-3'],
    availability: 'coming_soon',
    image: 'assets/img/products/matrice-400.png',
    imageFallback: 'assets/img/svg/matrice-quad.svg',
    djiUrl: 'https://enterprise.dji.com/matrice-400'
  },
  {
    id: 'matrice-4e',
    segment: 'enterprise',
    name: 'DJI Matrice 4E',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Photogrammétrie et relevés topographiques de précision.',
      en: 'Photogrammetry and precision topographic survey.'
    },
    usage: {
      fr: 'Le Matrice 4E est dédié à la production de données géométriques : orthophotos, modèles numériques de terrain, calculs de cubatures. Ses capteurs et son RTK permettent d’atteindre une précision centimétrique sans multiplier les points d’appui au sol. Bureaux d’études, carrières, chantiers de travaux publics et services cadastraux l’utilisent pour remplacer des relevés terrestres longs et coûteux.',
      en: 'The Matrice 4E is dedicated to geometric data: orthophotos, digital terrain models, volume calculations. Its sensors and RTK reach centimetre accuracy without multiplying ground control points. Survey firms, quarries, civil-works sites and land-registry services use it to replace slow, costly ground surveys.'
    },
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '49 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '35 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '49 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '35 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '1,22 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '1,43 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Non inclus (dédié photogrammétrie)', en: 'Not included (Photogrammetry dedicated)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '4/3-inch CMOS Effective Pixels: 20 MP' },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: '1/1.5-inch CMOS, Effective Pixels: 48 MP' },
        ]
      },
    ],
    compatiblePayloads: ['d-rtk-3'],
    availability: 'coming_soon',
    image: 'assets/img/products/matrice-4e.png',
    imageFallback: 'assets/img/svg/matrice-quad.svg',
    djiUrl: 'https://enterprise.dji.com/matrice-4-series'
  },
  {
    id: 'matrice-4t',
    segment: 'enterprise',
    name: 'DJI Matrice 4T',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Thermique, zoom et télémètre pour l’inspection et la sécurité civile.',
      en: 'Thermal, zoom and rangefinder for inspection and public safety.'
    },
    usage: {
      fr: 'Le Matrice 4T combine caméra thermique, zoom longue portée et télémètre laser dans un appareil transportable par un seul opérateur. Il détecte les points chauds sur un réseau électrique, repère une fuite sur une canalisation, localise une personne de nuit. Protection civile, gestionnaires de réseaux et services de sécurité l’emploient pour des interventions où la vitesse de déploiement prime.',
      en: 'The Matrice 4T combines a thermal camera, long-range zoom and laser rangefinder in an aircraft one operator can carry. It finds hot spots on an electrical network, spots a pipeline leak, locates a person at night. Civil protection, network operators and security services use it where speed of deployment matters most.'
    },
    useCases: ['inspection', 'securite', 'topographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '49 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '35 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '49 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '35 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '1,22 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '1,43 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Inclus (thermique radiométrique 640×512)', en: 'Included (640×512 Radiometric Thermal)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Projecteur infrarouge', en: 'Infrared Spotlight' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: '1/1.5-inch CMOS, Effective Pixels: 48 MP' },
        ]
      },
    ],
    compatiblePayloads: ['d-rtk-3'],
    availability: 'coming_soon',
    image: 'assets/img/products/matrice-4t.png',
    imageFallback: 'assets/img/svg/matrice-quad.svg',
    djiUrl: 'https://enterprise.dji.com/matrice-4-series'
  },
  {
    id: 'matrice-350-rtk',
    segment: 'enterprise',
    name: 'DJI Matrice 350 RTK',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Le cheval de bataille industriel, multi-charges utiles.',
      en: 'The industrial workhorse, multi-payload.'
    },
    usage: {
      fr: 'Le Matrice 350 RTK est la plateforme industrielle la plus éprouvée de la gamme DJI. Sa force est l’écosystème : une même machine reçoit un LiDAR le matin pour un relevé, une thermique l’après-midi pour une inspection de poste électrique. Sa protection contre les intempéries et sa redondance en font l’appareil de référence des exploitants de réseaux et des prestataires industriels.',
      en: 'The Matrice 350 RTK is the most proven industrial platform in the DJI range. Its strength is the ecosystem: the same airframe takes a LiDAR in the morning for a survey and a thermal in the afternoon for a substation inspection. Weather sealing and redundancy make it the reference aircraft for network operators and industrial contractors.'
    },
    useCases: ['inspection', 'topographie', 'securite', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '55 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '20 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '7000 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '55 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '20 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '7000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '3,77 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '9,2 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '23 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (6 directions)', en: 'Included (6 Directions)' } },
          { label: { fr: 'Radar', en: 'Radar' }, value: { fr: 'Compatible (Radar CSM)', en: 'Compatible (CSM Radar)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Compatible (Zenmuse L2)', en: 'Compatible (Zenmuse L2)' } },
          { label: { fr: 'Accessoires de nacelle', en: 'Gimbal Accessory' }, value: { fr: 'Série Zenmuse (H20, H20T, H20N, H30T, L2, P1)', en: 'Zenmuse Series (H20, H20T, H20N, H30T, L2, P1)' } },
        ]
      },
    ],
    compatiblePayloads: ['zenmuse-h30t', 'zenmuse-h20', 'zenmuse-h20t', 'zenmuse-h20n', 'zenmuse-l2', 'zenmuse-p1', 'd-rtk-3'],
    availability: 'discontinued',
    image: 'assets/img/products/matrice-350-rtk.png',
    imageFallback: 'assets/img/svg/matrice-quad.svg',
    djiUrl: 'https://enterprise.dji.com/matrice-350-rtk'
  },
  {
    id: 'mavic-3e',
    segment: 'enterprise',
    name: 'DJI Mavic 3E',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Photogrammétrie compacte avec capteur grand-angle mécanique 4/3.',
      en: 'Compact photogrammetry with 4/3 mechanical wide sensor.'
    },
    usage: {
      fr: 'Le Mavic 3E redéfinit les standards de l’industrie pour les petits drones d’arpentage. Équipé d’un capteur 4/3 CMOS de 20 MP à obturateur mécanique et d’un zoom hybride jusqu’à 56×, il permet des levés topographiques rapides et sans flou de mouvement.',
      en: 'The Mavic 3E sets new standards for small commercial survey drones. Featuring a 20 MP 4/3 CMOS mechanical shutter wide camera and up to 56× hybrid zoom, it delivers fast, blur-free topographic mapping.'
    },
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '45 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '32 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '45 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '32 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '0,92 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '1,05 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Module optionnel', en: 'Optional module' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (omnidirectionnel)', en: 'Included (Omnidirectional)' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '4/3-inch CMOS Effective Pixels: 20 MP' },
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/2" CMOS, Effective pixels: 12 MP (56× hybride)' },
        ]
      },
    ],
    compatiblePayloads: [],
    availability: 'discontinued',
    image: 'assets/img/products/mavic-3e.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com/mavic-3-enterprise'
  },
  {
    id: 'mavic-3t',
    segment: 'enterprise',
    name: 'DJI Mavic 3T',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Inspection thermique et sécurité civile ultra-portables.',
      en: 'Ultra-portable thermal inspection and public safety.'
    },
    usage: {
      fr: 'Le Mavic 3T intègre une caméra thermique 640×512, un capteur grand-angle 48 MP et un téléobjectif zoom jusqu’à 56×. Il excelle dans la lutte contre les incendies, la recherche et le sauvetage, ainsi que l’inspection nocturne des infrastructures.',
      en: 'The Mavic 3T integrates a 640×512 thermal camera, a 48 MP wide camera, and up to 56× tele zoom. It excels in firefighting, search and rescue, and nocturnal infrastructure inspection.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '45 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '32 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '45 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '32 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '0,92 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '1,05 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Module optionnel', en: 'Optional module' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (omnidirectionnel)', en: 'Included (Omnidirectional)' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: '640×512 Microbolomètre VOx non refroidi' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '1/2" CMOS, Effective pixels: 48 MP' },
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/2" CMOS, Effective pixels: 12 MP (56× hybride)' },
        ]
      },
    ],
    compatiblePayloads: [],
    availability: 'discontinued',
    image: 'assets/img/products/mavic-3t.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com/mavic-3-enterprise'
  },
  {
    id: 'dock-3',
    segment: 'enterprise',
    name: 'DJI Dock 3',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Station d’intervention automatique autonome.',
      en: 'Autonomous automated intervention dock.'
    },
    usage: {
      fr: 'Le Dock 3 supprime le déplacement humain. L’appareil décolle seul selon un calendrier, exécute sa mission, revient se poser et se recharger. Pour un site industriel, une carrière ou un linéaire à surveiller quotidiennement, cela transforme une tournée d’inspection en une donnée automatique. Il se déploie en poste fixe comme en version véhiculée pour couvrir plusieurs sites.',
      en: 'The Dock 3 removes the site visit. The aircraft takes off on schedule by itself, flies its mission, lands and recharges. For an industrial site, a quarry or a corridor needing daily monitoring, that turns an inspection round into an automatic data feed. It deploys as a fixed station or vehicle-mounted to cover several sites.'
    },
    useCases: ['inspection', 'securite', 'topographie'],
    highlights: [
      { label: { fr: 'Protection', en: 'IP rating' }, value: 'IP56' },
      { label: { fr: 'Masse', en: 'Weight' }, value: '55 kg' },
      { label: { fr: 'Aéronefs', en: 'Aircraft' }, value: '1' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Nom du produit', en: 'Product Name' }, value: 'DJI Dock 3' },
        { label: { fr: 'Catégorie de produit', en: 'Product category' }, value: 'Automated drone-in-a-box dock for 24/7 remote operations; DJI’s first dock adaptable for vehicle mounting' },
        { label: { fr: 'Nombre d’aéronefs hébergés', en: 'Number of Drones Accommodated' }, value: '1' },
        { label: { fr: 'Aéronefs compatibles', en: 'Supported Aircraft' }, value: 'DJI Matrice 4D / DJI Matrice 4TD (the dock-housed aircraft; IP55-rated, same cameras as the Matrice 4 Series but improved flight and protection performance). Charging Hub / AL1 Spotlight / AS1 Speaker accessory line reads: “Supports Matrice 4TD/4D, Matrice 4T/4E”' },
        { label: { fr: 'Accessoire associé', en: 'Related accessory' }, value: 'D-RTK 3 Relay Fixed Deployment Version makes DJI Dock 3 site selection more flexible' },
        ]
      },
      {
        group: { fr: 'Aéronef et performances', en: 'Aircraft and performance' },
        rows: [
        { label: { fr: 'Masse totale', en: 'Total Weight' }, value: '55 kg (without aircraft)' },
        { label: { fr: 'Dimensions (capot ouvert)', en: 'Dimensions (Dock Cover Opened)' }, value: '1760×745×485 mm (L×W×H)' },
        { label: { fr: 'Dimensions (capot fermé)', en: 'Dimensions (Dock Cover Closed)' }, value: '640×745×770 mm (L×W×H)' },
        { label: { fr: 'Remarque sur les dimensions', en: 'Dimensions note' }, value: 'All data includes the RTK module width (160 mm), wind speed gauge height (145 mm), and mounting base brackets (58 mm)' },
        { label: { fr: 'Vent max. admissible à l’atterrissage', en: 'Max Allowable Landing Wind Speed' }, value: '12 m/s' },
        { label: { fr: 'Altitude max. d’exploitation', en: 'Max Operating Altitude' }, value: '4500 m' },
        { label: { fr: 'Aéronef hébergé (Matrice 4D/4TD) — Masse', en: 'Housed aircraft (Matrice 4D/4TD) — Weight' }, value: '1850 g (incl. battery, propellers, microSD card)' },
        { label: { fr: 'Aéronef hébergé (Matrice 4D/4TD) — Masse max. au décollage', en: 'Housed aircraft (Matrice 4D/4TD) — Max Takeoff Weight' }, value: '2090 g' },
        { label: { fr: 'Aéronef hébergé (Matrice 4D/4TD) — Dimensions', en: 'Housed aircraft (Matrice 4D/4TD) — Dimensions' }, value: '377.7×416.2×212.5 mm (L×W×H, without propellers)' },
        { label: { fr: 'Aéronef hébergé (Matrice 4D/4TD) — Empattement diagonal', en: 'Housed aircraft (Matrice 4D/4TD) — Diagonal Wheelbase' }, value: '498.5 mm' },
        { label: { fr: 'Aéronef hébergé (Matrice 4D/4TD) — Distance de vol max.', en: 'Housed aircraft (Matrice 4D/4TD) — Max Flight Distance' }, value: '43 km' },
        ]
      },
      {
        group: { fr: 'Positionnement', en: 'Positioning' },
        rows: [
        { label: { fr: 'Réception satellite de la station de base RTK', en: 'RTK Base Station Satellite Reception' }, value: 'Simultaneously receive: GPS L1 C/A, L2, L5; BeiDou B1l, B2l, B3l, B2a, B2b, B1C; GLONASS F1, F2; Galileo E1, E5a, E5b, E6; QZSS L1, L2, L5' },
        { label: { fr: 'Précision de positionnement de la station', en: 'Dock positioning accuracy' }, value: '— (no dock-level RTK accuracy figure published; aircraft hovering accuracy with RTK is ±0.1 m)' },
        ]
      },
      {
        group: { fr: 'Imagerie et capteurs', en: 'Imaging and sensors' },
        rows: [
        { label: { fr: 'Support de nacelle véhiculé (accessoire)', en: 'Vehicle-Mounted Gimbal Mount (accessory)' }, value: 'Weight: Right Bracket and Gimbal Support 440 g, Left Bracket 155 g; Right bracket and gimbal support dimensions: 112.8×152.2×157.8 mm (L×W×H)' },
        { label: { fr: 'Capteurs', en: 'Sensors' }, value: 'Wind speed sensor, rainfall sensor, ambient temperature sensor, water immersion sensor, in-cabin temperature sensor, in-cabin humidity sensor — all supported' },
        { label: { fr: 'Caméras de surveillance', en: 'Security Cameras' }, value: 'External: 1920×1080, FOV 151°, auxiliary white light. Internal: 1920×1080, FOV 151°, auxiliary white light' },
        ]
      },
      {
        group: { fr: 'Transmission et radiocommande', en: 'Transmission and controller' },
        rows: [
        { label: { fr: 'Transmission vidéo — fréquence', en: 'Video Transmission — Operating Frequency' }, value: '2.400-2.4835 GHz; 5.150-5.250 GHz (CE: 5.170-5.250 GHz); 5.725-5.850 GHz' },
        { label: { fr: 'Transmission vidéo — antenne', en: 'Video Transmission — Antenna' }, value: 'Built-in 9 antennas, 2T4R, supports intelligent switching' },
        { label: { fr: 'Transmission vidéo — système', en: 'Video Transmission — System' }, value: 'O4+ Enterprise (stated in DJI’s Dock 3 release-highlights text; the Dock – Video Transmission spec group itself lists only frequency, antenna and EIRP)' },
        { label: { fr: 'Puissance d’émission (PIRE)', en: 'Transmitter Power (EIRP)' }, value: '2.4 GHz: < 33 dBm (FCC), < 20 dBm (CE/SRRC/MIC); 5.2 GHz: < 23 dBm (FCC/CE); 5.8 GHz: < 33 dBm (FCC), < 14 dBm (CE), < 30 dBm (SRRC)' },
        { label: { fr: 'Connectivité réseau', en: 'Network Access' }, value: 'Ethernet: 10/100/1000 Mbps adaptive Ethernet port; 4G Access: requires DJI Cellular Dongle 2 (sold separately)' },
        ]
      },
      {
        group: { fr: 'Batterie et alimentation', en: 'Battery and power' },
        rows: [
        { label: { fr: 'Batterie de secours', en: 'Backup Battery' }, value: 'Capacity 12 Ah; Output Voltage 12 V; Battery Type: Lead-acid battery; Battery Life: > 4 hours (measured with a fully charged backup battery in a 25° C environment; during a power outage the dock does not support aircraft charging, air conditioning, dock cover heating, or wind speed gauge heating)' },
        { label: { fr: 'Temps de charge de l’aéronef', en: 'Aircraft Charging Time' }, value: '27 minutes (measured charging the aircraft, powered off, from 15% to 95% in a 25° C / 77° F environment)' },
        { label: { fr: 'Tension de charge en sortie', en: 'Charging Output Voltage' }, value: '35 V DC' },
        { label: { fr: 'Tension d’entrée', en: 'Input Voltage' }, value: '100-240 V (AC), 50/60 Hz' },
        { label: { fr: 'Puissance d’entrée', en: 'Input Power' }, value: 'Max 800 W' },
        ]
      },
      {
        group: { fr: 'Station', en: 'Dock' },
        rows: [
        { label: { fr: 'Mode de déploiement — véhiculé', en: 'Deployment mode — vehicle-mounted' }, value: 'Yes. DJI: “DJI’s First Dock Adaptable for Vehicle Mounting”; “DJI Dock 3 empowers 24/7 remote operations and, for the first time, supports mobile vehicle-mounted deployment, effortlessly adapting to various environments.” Release notes: “Supports vehicle-mounted deployment.”' },
        { label: { fr: 'Contraintes d’exploitation en version véhiculée (FAQ DJI)', en: 'Vehicle-mounted operating constraints (DJI FAQ)' }, value: 'The parking slope must be less than 3° during operation; remote dock calibration must be completed in the cloud before operation; during aircraft operation the vehicle and dock must not move; the dock base must be securely fixed to the vehicle mounting bracket with lock nuts and a safety rope; the dock cover must be closed when the vehicle is moving' },
        { label: { fr: 'Système de climatisation', en: 'Air Conditioning System' }, value: 'Compressor-based air conditioning; Operating Voltage 48 V DC' },
        { label: { fr: 'Protection contre la foudre', en: 'Lightning Protection' }, value: 'AC Power Port: 20 kA (rated), meets EN 61643-11 Type 2 / IEC 61643-1 Class II; Ethernet Port: 10 kA (I_total), meets EN/IEC 61643-21 Category C' },
        { label: { fr: 'Capacité d’extension', en: 'Expansion Capability' }, value: 'Edge Computing: supports data communication with external switches' },
        { label: { fr: 'Temps de déploiement / d’installation', en: 'Deployment / setup time' }, value: '— (DJI publishes no deployment/setup-time figure on the specs page; release notes state “Supports quick takeoff, ready to fly as soon as the cover is opened”)' },
        { label: { fr: 'Aéronef hébergé (Matrice 4D/4TD) — IP rating', en: 'Housed aircraft (Matrice 4D/4TD) — IP rating' }, value: 'IP55' },
        ]
      },
      {
        group: { fr: 'Environnement', en: 'Environment' },
        rows: [
        { label: { fr: 'Température d’exploitation', en: 'Operating Temperature' }, value: '-30° to 50° C (-22° to 122° F)' },
        { label: { fr: 'Indice de protection', en: 'Ingress Protection Rating' }, value: 'IP56' },
        ]
      },
    ],
    compatiblePayloads: [],
    availability: 'coming_soon',
    image: 'assets/img/products/dock-3.png',
    imageFallback: 'assets/img/svg/dock.svg',
    djiUrl: 'https://enterprise.dji.com/dock-3'
  },

  /* ====================== CHARGES UTILES & ACCESSOIRES ==================== */
  {
    id: 'zenmuse-h30t',
    segment: 'enterprise',
    name: 'DJI Zenmuse H30T',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Nacelle quadruple capteur : zoom, grand-angle, thermique et télémètre.',
      en: 'Quad-sensor gimbal: zoom, wide, thermal and rangefinder.'
    },
    usage: {
      fr: 'La H30T réunit quatre capteurs sur une seule nacelle, ce qui évite de refaire un vol pour changer de modalité. Un même passage fournit l’image visible, la signature thermique et la distance exacte de la cible. C’est la charge utile de référence pour l’inspection de réseaux électriques et les missions de sécurité de nuit.',
      en: 'The H30T brings four sensors onto one gimbal, avoiding a second flight to change modality. A single pass yields the visible image, the thermal signature and the exact target distance. It is the reference payload for power-line inspection and night security missions.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Zoom hybride', en: 'Hybrid zoom' }, value: '34×' },
      { label: { fr: 'Thermique', en: 'Thermal' }, value: '1280×1024' },
      { label: { fr: 'Protection', en: 'IP rating' }, value: 'IP54' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Flagship multi-sensor enterprise gimbal payload combining a 40 MP zoom camera, 48 MP wide camera, 1280×1024 infrared thermal camera, laser rangefinder and NIR auxiliary light for inspection, public safety and search-and-rescue.' },
        { label: { fr: 'Éclairage d’appoint proche infrarouge', en: 'NIR Auxiliary Light' }, value: 'FOV 4.6±0.6° (round); Illumination Range @100 m: approx. 8 m diameter circle' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
      {
        group: { fr: 'Aéronef et performances', en: 'Aircraft and performance' },
        rows: [
        { label: { fr: 'Masse', en: 'Weight' }, value: '920±5 g' },
        { label: { fr: 'Dimensions', en: 'Dimensions' }, value: '170×145×165 mm (L×W×H)' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        ]
      },
      {
        group: { fr: 'Positionnement', en: 'Positioning' },
        rows: [
        { label: { fr: 'Télémètre laser — portée (CSV)', en: 'Laser Rangefinder — Range (CSV)' }, value: '3000 m' },
        { label: { fr: 'Télémètre laser — précision', en: 'Laser Rangefinder — Accuracy' }, value: '≤ 500 m: ±(0.2 m + measurement distance × 0.15%); > 500 m: ±1.0 m' },
        ]
      },
      {
        group: { fr: 'Imagerie et capteurs', en: 'Imaging and sensors' },
        rows: [
        { label: { fr: 'Caméra zoom — Capteur', en: 'Zoom Camera — Sensor' }, value: '1/1.8-inch CMOS, Effective Pixels: 40 MP' },
        { label: { fr: 'Caméra zoom — Objectif', en: 'Zoom Camera — Lens' }, value: 'Actual Focal Length: 7.1-172 mm (equivalent focal length: 33.4-809.3 mm); Aperture f/1.6-f/5.2; DFOV 66.7°-2.9°' },
        { label: { fr: 'Caméra zoom — Zoom', en: 'Zoom Camera — Zoom' }, value: 'Hybrid Optical Zoom: 34×; Max Zoom: 400×' },
        { label: { fr: 'Caméra zoom — ISO', en: 'Zoom Camera — ISO' }, value: 'Single Shot: 100-25600; Night Scene: 100-819200' },
        { label: { fr: 'Caméra zoom — Max Taille des photos', en: 'Zoom Camera — Max Photo Size' }, value: '7328×5496, 3664×2748' },
        { label: { fr: 'Caméra grand-angle — Capteur', en: 'Wide-Angle Camera — Sensor' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
        { label: { fr: 'Caméra grand-angle — Objectif', en: 'Wide-Angle Camera — Lens' }, value: 'Actual Focal Length: 6.72 mm (equivalent focal length: 24 mm); Aperture f/1.7; DFOV 82.1°' },
        { label: { fr: 'Caméra thermique infrarouge — Détecteur', en: 'Infrared Thermal Camera — Imager' }, value: 'Uncooled VOx Microbolometer' },
        { label: { fr: 'Caméra thermique infrarouge — Résolution', en: 'Infrared Thermal Camera — Resolution' }, value: '1280×1024' },
        { label: { fr: 'Caméra thermique infrarouge — Objectif', en: 'Infrared Thermal Camera — Lens' }, value: 'Focal Length 24 mm (equivalent focal length 52 mm); Aperture f/0.95; DFOV 45.2°' },
        { label: { fr: 'Caméra thermique infrarouge — Pas des pixels', en: 'Infrared Thermal Camera — Pixel Pitch' }, value: '12 μm' },
        { label: { fr: 'Caméra thermique infrarouge — Zoom numérique', en: 'Infrared Thermal Camera — Digital Zoom' }, value: '32×' },
        { label: { fr: 'Caméra thermique infrarouge — Bande spectrale', en: 'Infrared Thermal Camera — Spectral Band' }, value: '8-14 μm' },
        { label: { fr: 'Caméra thermique infrarouge — NETD', en: 'Infrared Thermal Camera — NETD' }, value: '≤ 50 mk@f/1.0' },
        { label: { fr: 'Caméra thermique infrarouge — Plage de mesure de température', en: 'Infrared Thermal Camera — Temperature Measurement Range' }, value: 'High Gain: -20° to 150° C (-4° to 302° F); -20° to 450° C (-4° to 842° F) with Infrared Density Filter. Low Gain: 0° to 600° C (32° to 1112° F); 0° to 1600° C (32° to 2912° F) with Infrared Density Filter' },
        { label: { fr: 'Télémètre laser — plage de mesure', en: 'Laser Rangefinder — Measurement Range' }, value: '3-3000 m (range for common objects: grasslands 2000 m, woodlands 1900 m)' },
        { label: { fr: 'Télémètre laser — longueur d’onde / sécurité', en: 'Laser Rangefinder — Wavelength / Safety' }, value: '905 nm; Class 1' },
        { label: { fr: 'Nacelle', en: 'Gimbal' }, value: '3-axis (tilt, roll, pan); Angular vibration — Hover: ±0.002°, Flight: ±0.004°; Mounting: Detachable DJI SKYPORT; Controllable Range Tilt -120° to +60°, Pan ±320°' },
        ]
      },
      {
        group: { fr: 'Batterie et alimentation', en: 'Battery and power' },
        rows: [
        { label: { fr: 'Alimentation', en: 'Power' }, value: 'H30: 26 W; H30T: 28 W' },
        ]
      },
      {
        group: { fr: 'Environnement', en: 'Environment' },
        rows: [
        { label: { fr: 'Indice de protection', en: 'Ingress Protection Rating' }, value: 'IP54 (under controlled laboratory conditions, per IEC60529; the IP rating is not permanently effective and may decrease due to product wear and tear)' },
        { label: { fr: 'Température d’exploitation', en: 'Operating Temperature' }, value: '-20° to 50° C (-4° to 122° F)' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/zenmuse-h30t.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-h30-series'
  },
  {
    id: 'zenmuse-h20n',
    segment: 'enterprise',
    name: 'DJI Zenmuse H20N',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Vision nocturne : capteurs starlight et thermiques couplés.',
      en: 'Night vision: paired starlight and thermal sensors.'
    },
    usage: {
      fr: 'La H20N est spécialisée dans les opérations de nuit. Ses capteurs starlight restituent une image exploitable en très faible luminosité, là où une caméra classique ne voit plus rien. Elle est employée pour la surveillance de sites sensibles, la recherche de personnes et les interventions de sécurité après la tombée du jour.',
      en: 'The H20N is specialised for night operations. Its starlight sensors deliver a usable image in very low light, where a conventional camera sees nothing. It is used for sensitive-site surveillance, search operations and security work after dark.'
    },
    useCases: ['securite', 'inspection'],
    highlights: [
      { label: { fr: 'Thermique', en: 'Thermal' }, value: '640×512' },
      { label: { fr: 'Télémètre', en: 'Rangefinder' }, value: '1 200 m' },
      { label: { fr: 'Masse', en: 'Weight' }, value: '878 g' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Night-optimised hybrid multi-sensor gimbal payload pairing starlight zoom and wide cameras with dual (wide + tele) thermal cameras and a laser rangefinder, for round-the-clock public safety and night operations.' },
        { label: { fr: 'Caméra thermique (CSV)', en: 'Thermal Camera (CSV)' }, value: 'Dual 640×512 px @ 30fps' },
        { label: { fr: 'Télémètre laser (CSV)', en: 'Laser Rangefinder (CSV)' }, value: '1200 m' },
        { label: { fr: 'Vision nocturne grand-angle (CSV)', en: 'Night Vision Wide Camera (CSV)' }, value: '1/2.7" CMOS, 2MP' },
        { label: { fr: 'Vision nocturne zoom (CSV)', en: 'Night Vision Zoom Camera (CSV)' }, value: '1/1.8" CMOS, 4MP' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Discontinued' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 350 RTK' },
        ]
      },
      {
        group: { fr: 'Aéronef et performances', en: 'Aircraft and performance' },
        rows: [
        { label: { fr: 'Masse', en: 'Weight' }, value: '878±5 g' },
        { label: { fr: 'Dimensions', en: 'Dimensions' }, value: '178×135×161 mm' },
        ]
      },
      {
        group: { fr: 'Positionnement', en: 'Positioning' },
        rows: [
        { label: { fr: 'Télémètre laser — précision', en: 'Laser Rangefinder — Accuracy' }, value: '±(0.2 m + target distance × 0.15%)' },
        ]
      },
      {
        group: { fr: 'Imagerie et capteurs', en: 'Imaging and sensors' },
        rows: [
        { label: { fr: 'Caméra zoom (starlight) — Capteur', en: 'Zoom Camera (starlight) — Sensor' }, value: '1/1.8" CMOS; Effective Pixels: 4M' },
        { label: { fr: 'Caméra zoom — Objectif', en: 'Zoom Camera — Lens' }, value: 'Focal Length: 6.8-119.9 mm (equivalent: approximately 32.7-574.5 mm); Aperture f/1.6-f/11; Focus 1 m to ∞ (wide), 8 m to ∞ (tele)' },
        { label: { fr: 'Caméra zoom — Taille max. des images', en: 'Zoom Camera — Max Image Size' }, value: '2688×1512' },
        { label: { fr: 'Caméra zoom — ISO', en: 'Zoom Camera — ISO' }, value: 'Video: 100-102400; Photo: 100-102400' },
        { label: { fr: 'Caméra grand-angle (starlight) — Capteur', en: 'Wide Camera (starlight) — Sensor' }, value: '1/2.7" CMOS; Effective Pixels: 2M' },
        { label: { fr: 'Caméra grand-angle — Objectif', en: 'Wide Camera — Lens' }, value: 'DFOV 73.6°; Focal Length 4.5 mm (equivalent: approximately 29 mm); Aperture f/2.8; Focus 1 m to ∞' },
        { label: { fr: 'Caméra grand-angle — Taille max. des images', en: 'Wide Camera — Max Image Size' }, value: '1920×1080' },
        { label: { fr: 'Tele Caméra thermique infrarouge', en: 'Tele Infrared Thermal Camera' }, value: 'Resolution 640×512; DFOV 12.5°; Focal Length 44.5 mm (equivalent: approximately 196 mm); Aperture f/1.2; Focus 45 m to ∞' },
        { label: { fr: 'Wide Caméra thermique infrarouge', en: 'Wide Infrared Thermal Camera' }, value: 'Resolution 640×512; DFOV 45.5°; Focal Length 12 mm (equivalent: approximately 53 mm); Aperture f/1.0; Focus 5 m to ∞' },
        { label: { fr: 'Thermique — Détecteur', en: 'Thermal — Imager' }, value: 'Uncooled VOx Microbolometer' },
        { label: { fr: 'Thermique — Pas des pixels', en: 'Thermal — Pixel Pitch' }, value: '12 μm' },
        { label: { fr: 'Thermique — Bande spectrale', en: 'Thermal — Spectral Band' }, value: '8-14 μm' },
        { label: { fr: 'Thermique — NETD', en: 'Thermal — NETD' }, value: '≤50 mK @ f/1.0' },
        { label: { fr: 'Thermique — Zoom numérique équivalent', en: 'Thermal — Equivalent Digital Zoom' }, value: '16x, 32x' },
        { label: { fr: 'Thermique — Plage de scène', en: 'Thermal — Scene Range' }, value: '-20° C to 150° C (High Gain); 0° C to 500° C (Low Gain)' },
        { label: { fr: 'Thermique — Méthode de mesure de température', en: 'Thermal — Temperature Measurement Method' }, value: 'Spot Meter, Area Measurement' },
        { label: { fr: 'Télémètre laser — plage de mesure', en: 'Laser Rangefinder — Measuring Range' }, value: '3-1,200 m (0.5 × 12 m vertical surface with 20% reflectivity)' },
        { label: { fr: 'Télémètre laser — longueur d’onde / sécurité', en: 'Laser Rangefinder — Wavelength / Safety' }, value: '905 nm; Class 1M (IEC 60825-1:2014)' },
        { label: { fr: 'Nacelle', en: 'Gimbal' }, value: 'Angular vibration range ±0.01°; Detachable mount; Controllable Range Pan ±320°, Tilt -120° to +60°; Max control speed 90°/s (pan and tilt)' },
        ]
      },
      {
        group: { fr: 'Environnement', en: 'Environment' },
        rows: [
        { label: { fr: 'Indice de protection', en: 'Protection Rating' }, value: 'IP44 (per IEC60529; the protection rating is not permanent and might be reduced due to prolonged use and wear)' },
        { label: { fr: 'Température d’exploitation', en: 'Operating Temperature' }, value: '-20° to 50° C (-4 to 122°F)' },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/zenmuse-h20n.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-h20n'
  },
  {
    id: 'zenmuse-l2',
    segment: 'enterprise',
    name: 'DJI Zenmuse L2',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'LiDAR aéroporté : relevés 3D sous couvert végétal.',
      en: 'Airborne LiDAR: 3D survey beneath vegetation.'
    },
    usage: {
      fr: 'La L2 mesure la distance par laser et reconstruit le terrain en nuage de points, y compris sous la végétation — ce que la photogrammétrie ne sait pas faire. Elle est utilisée pour les modèles numériques de terrain en zone boisée, les relevés de lignes électriques et les études de génie civil où la précision altimétrique est déterminante.',
      en: 'The L2 measures distance by laser and reconstructs terrain as a point cloud, including beneath vegetation — which photogrammetry cannot do. It is used for digital terrain models in wooded areas, power-line surveys and civil engineering studies where vertical accuracy is decisive.'
    },
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Portée LiDAR', en: 'LiDAR range' }, value: '450 m' },
      { label: { fr: 'Points/s', en: 'Point rate' }, value: '240 000' },
      { label: { fr: 'Masse', en: 'Weight' }, value: '905 g' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Integrated LiDAR payload combining a frame LiDAR module, high-accuracy IMU and a 4/3 CMOS RGB mapping camera for aerial surveying, topographic mapping and 3D reconstruction with DJI Terra.' },
        { label: { fr: 'LiDAR (CSV)', en: 'LiDAR (CSV)' }, value: 'Oui / Yes' },
        { label: { fr: 'Caméra RVB (CSV)', en: 'RGB Camera (CSV)' }, value: '4/3 CMOS, 20MP' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
      {
        group: { fr: 'Aéronef et performances', en: 'Aircraft and performance' },
        rows: [
        { label: { fr: 'Plage du gyromètre de la centrale inertielle', en: 'IMU Angular Velocity Meter Range' }, value: '±300 dps' },
        { label: { fr: 'Masse', en: 'Weight' }, value: '905±5 g' },
        { label: { fr: 'Dimensions', en: 'Dimensions' }, value: '155×128×176 mm (L×W×H)' },
        ]
      },
      {
        group: { fr: 'Positionnement', en: 'Positioning' },
        rows: [
        { label: { fr: 'Précision de télémétrie (RMS 1σ)', en: 'Ranging Accuracy (RMS 1σ)' }, value: '2 cm @ 150 m' },
        { label: { fr: 'Précision du système', en: 'System Accuracy' }, value: 'Horizontal: 5 cm @ 150 m; Vertical: 4 cm @ 150 m' },
        { label: { fr: 'Précision de positionnement horizontal', en: 'Horizontal Positioning Accuracy' }, value: 'RTK FIX: 1 cm + 1 ppm' },
        { label: { fr: 'Précision de positionnement vertical', en: 'Vertical Positioning Accuracy' }, value: 'RTK FIX: 1.5 cm + 1 ppm' },
        ]
      },
      {
        group: { fr: 'Imagerie et capteurs', en: 'Imaging and sensors' },
        rows: [
        { label: { fr: 'Débit du nuage de points', en: 'Point Cloud Rate' }, value: 'Single return: max. 240,000 pts/s; Multiple returns: max. 1,200,000 pts/s' },
        { label: { fr: 'Portée de détection', en: 'Detection Range' }, value: '450 m @ 50% reflectivity, 0 klx; 250 m @ 10% reflectivity, 100 klx (maximum detection range 500 m)' },
        { label: { fr: 'Portée de détection minimale', en: 'Minimum Detection Range' }, value: '3 m' },
        { label: { fr: 'Nombre max. de retours pris en charge', en: 'Maximum Returns Supported' }, value: '5' },
        { label: { fr: 'Modes de balayage', en: 'Scanning Modes' }, value: 'Non-repetitive scanning pattern, Repetitive scanning pattern' },
        { label: { fr: 'Champ de vision', en: 'FOV' }, value: 'Repetitive scanning pattern: Horizontal 70°, Vertical 3°; Non-repetitive scanning pattern: Horizontal 70°, Vertical 75°' },
        { label: { fr: 'Longueur d’onde laser / sécurité', en: 'Laser Wavelength / Safety' }, value: '905 nm; Class 1 (IEC 60825-1:2014)' },
        { label: { fr: 'Fréquence d’émission des impulsions laser', en: 'Laser Pulse Emission Frequency' }, value: '240 kHz' },
        { label: { fr: 'Divergence du faisceau laser', en: 'Laser Beam Divergence' }, value: 'Horizontal 0.2 mrad, Vertical 0.6 mrad' },
        { label: { fr: 'Taille du spot laser', en: 'Laser Spot Size' }, value: 'Horizontal 4 cm, vertical 12 cm @ 100 m (FWHM)' },
        { label: { fr: 'Fréquence de rafraîchissement de la centrale inertielle', en: 'IMU Update Frequency' }, value: '200 Hz' },
        { label: { fr: 'Plage de l’accéléromètre de la centrale inertielle', en: 'IMU Accelerometer Range' }, value: '±6 g' },
        { label: { fr: 'Caméra RVB de cartographie — Capteur', en: 'RGB Mapping Camera — Sensor' }, value: '4/3 CMOS, Effective Pixels: 20 MP' },
        ]
      },
      {
        group: { fr: 'Batterie et alimentation', en: 'Battery and power' },
        rows: [
        { label: { fr: 'Alimentation', en: 'Power' }, value: '28 W (typical); 58 W (max.)' },
        ]
      },
      {
        group: { fr: 'Environnement', en: 'Environment' },
        rows: [
        { label: { fr: 'Indice de protection', en: 'IP Rating' }, value: 'IP54 (per IEC60529 under controlled laboratory conditions)' },
        { label: { fr: 'Température d’exploitation', en: 'Operating Temperature' }, value: '-20° to 50° C (-4° to 122° F)' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/zenmuse-l2.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-l2'
  },
  {
    id: 'zenmuse-p1',
    segment: 'enterprise',
    name: 'DJI Zenmuse P1',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Plein format pour photogrammétrie haute précision.',
      en: 'Full-frame sensor for high-precision photogrammetry.'
    },
    usage: {
      fr: 'La P1 embarque un capteur plein format destiné à la cartographie de grande emprise. Elle couvre davantage de surface par vol qu’un capteur plus petit, à précision égale.',
      en: 'The P1 carries a full-frame sensor aimed at wide-area mapping, covering more ground per flight with metrology-grade accuracy.'
    },
    useCases: ['topographie', 'cartographie'],
    highlights: [
      { label: { fr: 'Capteur', en: 'Sensor' }, value: 'Plein format' },
      { label: { fr: 'Photo', en: 'Photo' }, value: '45 Mpx' },
      { label: { fr: 'Précision H.', en: 'H. accuracy' }, value: '3 cm' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Full-frame 45MP photogrammetry payload for high-precision aerial mapping.' },
        { label: { fr: 'Caméra RVB (CSV)', en: 'RGB Camera (CSV)' }, value: 'Full Frame, 45MP' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/zenmuse-p1.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-p1'
  },
  {
    id: 'zenmuse-h30',
    segment: 'enterprise',
    name: 'DJI Zenmuse H30',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Triple capteur jour : zoom 40 MP, grand-angle 48 MP et télémètre 3000 m.',
      en: 'Triple day sensor: 40MP zoom, 48MP wide and 3000 m rangefinder.'
    },
    usage: {
      fr: 'La H30 reprend la plateforme optique de la H30T sans la voie thermique, pour l’inspection diurne haute résolution : zoom 34×, grand-angle 48 MP, télémètre 3000 m et éclairage NIR d’appoint, sur Matrice 400.',
      en: 'The H30 reuses the H30T optical platform without thermal, for high-resolution daytime inspection: 34× zoom, 48MP wide, 3000 m rangefinder and NIR auxiliary light, on Matrice 400.'
    },
    useCases: ['inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Zoom hybride', en: 'Hybrid zoom' }, value: '34×' },
      { label: { fr: 'Grand-angle', en: 'Wide' }, value: '48 MP' },
      { label: { fr: 'Télémètre', en: 'Rangefinder' }, value: '3000 m' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Day-only multi-sensor gimbal payload: zoom + wide + laser rangefinder + NIR auxiliary light.' },
        { label: { fr: 'Caméra zoom (CSV)', en: 'Zoom Camera (CSV)' }, value: '1/1.8" CMOS, 40MP' },
        { label: { fr: 'Caméra grand-angle (CSV)', en: 'Wide-Angle Camera (CSV)' }, value: '1/1.3" CMOS, 48MP' },
        { label: { fr: 'Caméra thermique (CSV)', en: 'Thermal Camera (CSV)' }, value: 'FALSE — pas de voie thermique / no thermal' },
        { label: { fr: 'Télémètre laser (CSV)', en: 'Laser Rangefinder (CSV)' }, value: '3000m' },
        { label: { fr: 'Éclairage IR (CSV)', en: 'Spotlight IR (CSV)' }, value: 'TRUE (NIR Auxiliary Light)' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/H30.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-h30-series'
  },
  {
    id: 'zenmuse-h20',
    segment: 'enterprise',
    name: 'DJI Zenmuse H20',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Triple capteur éprouvé pour Matrice 350 RTK : zoom, grand-angle, télémètre.',
      en: 'Proven triple sensor for Matrice 350 RTK: zoom, wide, rangefinder.'
    },
    usage: {
      fr: 'La H20 combine zoom 20 MP, grand-angle 12 MP et télémètre 1200 m pour l’inspection et la cartographie légère sur Matrice 350 RTK. Gamme remplacée par H30/H30T sur Matrice 400.',
      en: 'The H20 combines 20MP zoom, 12MP wide and 1200 m rangefinder for inspection and light mapping on Matrice 350 RTK. Superseded by H30/H30T on Matrice 400.'
    },
    useCases: ['inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Zoom', en: 'Zoom' }, value: '20 MP' },
      { label: { fr: 'Grand-angle', en: 'Wide' }, value: '12 MP' },
      { label: { fr: 'Télémètre', en: 'Rangefinder' }, value: '1200 m' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Caméra zoom (CSV)', en: 'Zoom Camera (CSV)' }, value: '1/1.7" CMOS, 20MP' },
        { label: { fr: 'Caméra grand-angle (CSV)', en: 'Wide-Angle Camera (CSV)' }, value: '1/2.3" CMOS, 12MP' },
        { label: { fr: 'Télémètre laser (CSV)', en: 'Laser Rangefinder (CSV)' }, value: '1200m' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Discontinued' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 350 RTK' },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/H20.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-h20-series'
  },
  {
    id: 'zenmuse-h20t',
    segment: 'enterprise',
    name: 'DJI Zenmuse H20T',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Quadruple capteur avec thermique 640×512 pour Matrice 350 RTK.',
      en: 'Quad sensor with 640×512 thermal for Matrice 350 RTK.'
    },
    usage: {
      fr: 'La H20T ajoute une thermique 640×512 @ 30fps à la plateforme H20 pour l’inspection thermographique et la sécurité sur Matrice 350 RTK. Gamme remplacée par H30T sur Matrice 400.',
      en: 'The H20T adds 640×512 @ 30fps thermal to the H20 platform for thermography and security on Matrice 350 RTK. Superseded by H30T on Matrice 400.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Thermique', en: 'Thermal' }, value: '640×512' },
      { label: { fr: 'Zoom', en: 'Zoom' }, value: '20 MP' },
      { label: { fr: 'Télémètre', en: 'Rangefinder' }, value: '1200 m' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Caméra zoom (CSV)', en: 'Zoom Camera (CSV)' }, value: '1/1.7" CMOS, 20MP' },
        { label: { fr: 'Caméra grand-angle (CSV)', en: 'Wide-Angle Camera (CSV)' }, value: '1/2.3" CMOS, 12MP' },
        { label: { fr: 'Caméra thermique (CSV)', en: 'Thermal Camera (CSV)' }, value: '640×512 px @ 30fps' },
        { label: { fr: 'Télémètre laser (CSV)', en: 'Laser Rangefinder (CSV)' }, value: '1200m' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Discontinued' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 350 RTK' },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/H20T.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-h20-series'
  },
  {
    id: 'd-rtk-3',
    segment: 'enterprise',
    name: 'DJI D-RTK 3',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Station de base RTK pour une précision centimétrique au sol.',
      en: 'RTK base station for centimetre accuracy on the ground.'
    },
    usage: {
      fr: 'La station D-RTK 3 fournit la correction différentielle qui fait passer le positionnement du mètre au centimètre.',
      en: 'The D-RTK 3 base station provides differential correction for centimetre-level positioning.'
    },
    useCases: ['topographie', 'cartographie', 'cereales'],
    highlights: [
      { label: { fr: 'Précision RTK', en: 'RTK accuracy' }, value: '0,8 cm' },
      { label: { fr: 'Autonomie', en: 'Operating time' }, value: '7 h' },
      { label: { fr: 'Protection', en: 'IP rating' }, value: 'IP67' }
    ],
    specs: [],
    availability: 'coming_soon',
    image: 'assets/img/products/d-rtk-3.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/d-rtk-3'
  },

  /* ===================== ENTERPRISE AIRCRAFT ================== */

  {
    id: 'matrice-30t',
    name: 'DJI Matrice 30T',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Plateforme thermique compacte pour la surveillance et l’inspection critique.',
      en: 'Compact thermal platform for surveillance and critical inspection.'
    },
    usage: {
      fr: 'Le Matrice 30T intègre capteurs grand-angle, zoom 48 MP et thermique radiométrique dans un châssis pliable résistant IP55.',
      en: 'Matrice 30T integrates wide, 48 MP zoom, and radiometric thermal sensors in a foldable IP55 airframe.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '41 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '40 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '41 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '40 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '3,77 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '4,07 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '23 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Microbolomètre VOx non refroidi (640×512)', en: 'Uncooled VOx Microbolometer (640×512)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus (jusqu’à 1 200 m)', en: 'Included (up to 1,200 m)' } },
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/2" CMOS, Effective pixels: 48M' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '1/2" CMOS, Effective pixels: 12M' },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/matrice-30t.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com/matrice-30',
    compatiblePayloads: []
  },

  {
    id: 'matrice-4td',
    name: 'DJI Matrice 4TD',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Drone de surveillance thermique ultra-compact pour opérations automatisées.',
      en: 'Ultra-compact thermal surveillance drone for automated operations.'
    },
    usage: {
      fr: 'Conçu pour des missions d’intervention rapide et de surveillance continue avec capteurs thermiques et visuels avancés.',
      en: 'Designed for rapid intervention and continuous surveillance with dual thermal and visual sensors.'
    },
    useCases: ['inspection', 'securite', 'topographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '41 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '10 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '41 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '10 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '1,85 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '2,09 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: '640×512 Microbolomètre VOx non refroidi', en: '640×512 Uncooled VOx Microbolometer' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Projecteur infrarouge', en: 'Infrared Spotlight' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: '1/1.5-inch CMOS, Effective Pixels: 48 MP' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/matrice-4-td.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'matrice-4d',
    name: 'DJI Matrice 4D',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Drone de cartographie et photogrammétrie haute précision pour opérations automatisées.',
      en: 'High-precision mapping and photogrammetry drone for automated dock operations.'
    },
    usage: {
      fr: 'Hébergé dans le DJI Dock 3, le Matrice 4D est dédié aux relevés topographiques et à la modélisation 3D automatisée grâce à son capteur grand-angle 4/3 CMOS avec obturateur mécanique.',
      en: 'Housed in the DJI Dock 3, the Matrice 4D is dedicated to automated topographic surveys and 3D modeling with its 4/3 CMOS mechanical shutter wide camera.'
    },
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '41 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '10 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '41 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '10 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: '1,85 kg' },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: '2,09 kg' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Non inclus (dédié photogrammétrie)', en: 'Not included (Photogrammetry dedicated)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '4/3-inch CMOS Effective Pixels: 20 MP' },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: '1/1.5-inch CMOS, Effective Pixels: 48 MP' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/matrice-4e.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'flycart-30',
    name: 'DJI FlyCart 30',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Solution de transport aérien dynamique pour charges lourdes jusqu’à 40 kg.',
      en: 'Dynamic aerial transport solution for heavy payloads up to 40 kg.'
    },
    usage: {
      fr: 'Acheminement de matériel sur chantiers isolés, logistique d’urgence et ravitaillement par voie aérienne.',
      en: 'Cargo transport to remote worksites, emergency logistics, and aerial delivery.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Charge max.', en: 'Max payload' }, value: '30–40 kg' },
      { label: { fr: 'Rayon d’action', en: 'Flight range' }, value: '28 km' },
      { label: { fr: 'Vitesse max.', en: 'Max speed' }, value: '20 m/s' }
    ],
    specs: [],
    availability: 'coming_soon',
    image: 'assets/img/products/flycart-30.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com/flycart-30',
    compatiblePayloads: []
  },

  {
    id: 'flycart-100',
    name: 'DJI FlyCart 100',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {
      fr: 'Système de livraison haute capacité pour transport de fret industriel lourd.',
      en: 'High-capacity delivery system for heavy industrial cargo.'
    },
    usage: {
      fr: 'Aéronef de transport lourd pour charges volumineuses et logistique sur longues distances.',
      en: 'Heavy-lift transport aircraft for large industrial equipment and long-distance cargo dispatch.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Charge max.', en: 'Max payload' }, value: '100 kg' },
      { label: { fr: 'Portée', en: 'Range' }, value: '40 km' },
      { label: { fr: 'Alimentation', en: 'Power' }, value: 'Bi-batterie' }
    ],
    specs: [],
    availability: 'coming_soon',
    image: 'assets/img/products/flycart-100.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com',
    compatiblePayloads: []
  },

  /* ==================== CAMERA AIRCRAFT ==================== */

  {
    id: 'air-3s',
    name: 'DJI Air 3S',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Drone de voyage photo/vidéo avec capteur principal 1 pouce et téléobjectif 70mm.',
      en: 'Dual-camera travel drone with 1-inch main sensor and 70mm telephoto.'
    },
    usage: {
      fr: 'Le compagnon idéal pour les créateurs de contenu exigeants, paysages, tournages et voyages.',
      en: 'Ideal for demanding creators, landscapes, travel videography, and commercial shoots.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '720 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '45 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '32 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '720 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '45 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '32 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '1-inch CMOS, 50MP Effective Pixels; FOV 84°; f/1.8' },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: '1/1.3-inch CMOS, 48MP Effective Pixels; FOV 35°; f/2.8' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/air-3s.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com/air-3s',
    compatiblePayloads: []
  },

  {
    id: 'mini-4-pro',
    name: 'DJI Mini 4 Pro',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Mini drone ultra-léger (<249 g) avec vidéo 4K/60fps HDR et détection 360°.',
      en: 'Ultra-light (<249g) mini drone with 4K/60fps HDR video and 360° obstacle sensing.'
    },
    usage: {
      fr: 'Ultra-compact, pliable et puissant, le Mini 4 Pro permet de filmer en vertical natif et de suivre automatiquement les sujets.',
      en: 'Ultra-compact and capable, providing vertical shooting, obstacle avoidance, and ActiveTrack 360.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '249 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '34 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '18 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '249 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '34 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '16 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '18 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '4000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '11 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '82.1°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/1.7' },
        ]
      },
    ],
    availability: 'discontinued',
    image: 'assets/img/products/mini-4-pro.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com/mini-4-pro',
    compatiblePayloads: []
  },

  {
    id: 'mini-5-pro',
    name: 'DJI Mini 5 Pro',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Nouvelle génération ultra-compacte avec capteur optimisé et autonomie étendue.',
      en: 'Next-generation ultra-compact drone with enhanced sensor and battery life.'
    },
    usage: {
      fr: 'Performances étendues dans un format de poche pour vidéastes nomades et photographes.',
      en: 'Enhanced performance in a pocket-sized package for mobile videographers.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '249 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '36 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '21 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '249 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '36 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '19 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '21 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: '1-inch CMOS, 50MP Effective Pixels' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '84°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/1.8' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/mini-5-pro.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'flip',
    name: 'DJI Flip',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Drone ultra-compact au design révolutionnaire pour capture aérienne spontanée.',
      en: 'Ultra-compact drone with innovative folding design for spontaneous aerial capture.'
    },
    usage: {
      fr: 'Pensé pour un déploiement instantané et des prises de vue rapides en plein air.',
      en: 'Designed for immediate deployment and effortless point-and-shoot aerial imaging.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '233 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '31 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '14 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '233 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '31 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '12 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '14 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '3000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '11 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: '1/1.3-inch CMOS' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '82.1°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/1.7' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/flip.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'lito-1',
    name: 'DJI Lito 1',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Drone polyvalent compact avec suivi intelligent IA et grande stabilité.',
      en: 'Versatile compact drone with intelligent AI subject tracking.'
    },
    usage: {
      fr: 'Idéal pour le vlogging dynamique, les activités sportives et les prises de vue automatisées.',
      en: 'Ideal for dynamic vlogging, outdoor action sports, and automated tracking.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '183 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '52 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '32 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '183 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '52 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '18 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '32 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '4500 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '11 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: '1/2-inch CMOS, 48MP Effective Pixels' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '79°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/1.8' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/lito-1.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'lito-x1',
    name: 'DJI Lito X1',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Version étendue du Lito 1 avec suivi intelligent IA et grande stabilité.',
      en: 'Extended version of the Lito 1 with intelligent AI subject tracking.'
    },
    usage: {
      fr: 'Idéal pour le vlogging dynamique, les activités sportives et les prises de vue automatisées.',
      en: 'Ideal for dynamic vlogging, outdoor action sports, and automated tracking.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '183 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '52 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '32 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '183 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '52 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '18 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '32 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '4500 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '11 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: '1/1.3-inch CMOS, 48MP Effective Pixels' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '82.1°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/1.7' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/lito-x1.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'mavic-4-pro',
    name: 'DJI Mavic 4 Pro',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Le standard professionnel de l’imagerie aérienne avec triple caméra Hasselblad.',
      en: 'The pro standard in aerial imagery with triple Hasselblad camera system.'
    },
    usage: {
      fr: 'Le Mavic 4 Pro repousse les limites des productions audiovisuelles avec ses trois optiques de pointe et son profil 10 bits D-Log M.',
      en: 'Built for broadcast and cinema productions with high dynamic range triple lenses and 10-bit D-Log M.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '1063 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '51 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '41 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '1063 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '51 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '25 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '41 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: '4/3 CMOS, Effective Pixels: 100 MP; FOV 72°; f/2.0' },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: '1/1.3-inch CMOS, Effective Pixels: 48 MP; FOV 35°; f/2.8' },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: '1/1.5-inch CMOS, Effective Pixels: 50 MP; FOV 15°; f/2.8' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/mavic-4pro.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com',
    compatiblePayloads: []
  },

  {
    id: 'neo-2',
    name: 'DJI Neo 2',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Nanodrone ultra-léger (160 g) avec décollage de la paume et commandes simplifiées.',
      en: 'Ultra-light nano drone (160g) with palm takeoff and simplified controls.'
    },
    usage: {
      fr: 'Décollez directement de la main sans radiocommande. Le compagnon quotidien parfait pour des plans aériens créatifs instantanés.',
      en: 'Launch directly from your hand without a controller. Perfect for effortless daily self-shots and vlogs.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '160 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '19 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '7 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '160 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '19 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '12 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '7 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '2000 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '11 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: '1/2-inch CMOS' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '119.8°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/2.2' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/neo-2.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com/neo',
    compatiblePayloads: []
  },

  {
    id: 'avata-360',
    name: 'DJI Avata 360',
    segment: 'camera',
    category: 'camera',
    type: 'aircraft',
    tagline: {
      fr: 'Drone FPV immersif avec protection intégrée et capture 360° ultra-fluide.',
      en: 'Immersive FPV drone with built-in propeller guards and 360° recording.'
    },
    usage: {
      fr: 'Vivez l’expérience du vol FPV en toute sécurité. Châssis renforcé, stabilisation RockSteady et casque immersif.',
      en: 'Experience intuitive FPV flight with enclosed guards, RockSteady stabilization, and immersive goggles.'
    },
    useCases: [],
    highlights: [
      { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '455 g', icon: 'assets/img/svg_icons/payload.svg', key: 'takeoff-weight' },
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '23 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '13 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Masse au décollage', en: 'Takeoff Weight' }, value: '455 g' },
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '23 min' },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '18 m/s' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '13 km' },
          { label: { fr: 'Altitude de vol max.', en: 'Max Flight Altitude' }, value: '120 m' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '4500 m' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '11 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: 'GPS + Galileo + BeiDou' },
          { label: { fr: 'Système de vision', en: 'Vision System' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: 'Two 1/1.1-Inch CMOS; Effective Pixels 64MP' },
          { label: { fr: 'Caméra principale — Angle de champ', en: 'Main Camera — Field of View' }, value: '200°' },
          { label: { fr: 'Caméra principale — Ouverture', en: 'Main Camera — Aperture' }, value: 'f/1.9' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/avata-360.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://www.dji.com/avata-2',
    compatiblePayloads: []
  },

  /* ======================== PAYLOADS — AGRICULTURE ======================== */

  {
    id: 'zenmuse-l3',
    name: 'DJI Zenmuse L3',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'LiDAR nouvelle génération pour Matrice 400 : cartographie 3D haute densité.',
      en: 'Next-gen LiDAR for Matrice 400: high-density 3D mapping.'
    },
    usage: {
      fr: 'La L3 associe un module LiDAR et une caméra RVB 4/3 CMOS pour les relevés topographiques, modèles numériques de terrain et inspection de linéaires sur Matrice 400.',
      en: 'The L3 pairs a LiDAR module with a 4/3 CMOS RGB camera for topographic survey, terrain models and corridor inspection on Matrice 400.'
    },
    useCases: ['topographie', 'cartographie', 'inspection'],
    highlights: [
      { label: { fr: 'LiDAR', en: 'LiDAR' }, value: 'Oui' },
      { label: { fr: 'Caméra RVB', en: 'RGB camera' }, value: '4/3 CMOS' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'LiDAR + RGB mapping payload for Matrice 400.' },
        { label: { fr: 'LiDAR (CSV)', en: 'LiDAR (CSV)' }, value: 'Oui / Yes' },
        { label: { fr: 'Caméra RVB (CSV)', en: 'RGB Camera (CSV)' }, value: '4/3 CMOS' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/L3.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-l3'
  },

  {
    id: 'zenmuse-s1',
    name: 'DJI Zenmuse S1',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Projecteur visible longue portée pour opérations nocturnes Matrice 400.',
      en: 'Long-range visible spotlight for Matrice 400 night operations.'
    },
    usage: {
      fr: 'Le S1 éclaire les scènes de nuit pour la recherche, la sécurité et l’inspection : 30 lux à 100 m, portée 500 m, porté par Matrice 400.',
      en: 'The S1 lights night scenes for search, security and inspection: 30 lux at 100 m, 500 m range, carried by Matrice 400.'
    },
    useCases: ['securite', 'inspection'],
    highlights: [
      { label: { fr: 'Éclairage', en: 'Illuminance' }, value: '30 lux @ 100 m' },
      { label: { fr: 'Portée', en: 'Range' }, value: '500 m' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Visible spotlight payload for night search, security and inspection.' },
        { label: { fr: 'Projecteur visible (CSV)', en: 'Spotlight VIS (CSV)' }, value: '30 lux @ 100 m' },
        { label: { fr: 'Portée projecteur visible (CSV)', en: 'Spotlight VIS Range (CSV)' }, value: '500m' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/S1.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-s1'
  },

  {
    id: 'zenmuse-v1',
    name: 'DJI Zenmuse V1',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'payload',
    tagline: {
      fr: 'Haut-parleur longue portée pour Matrice 400 : 129 dB à 700 m.',
      en: 'Long-range loudspeaker for Matrice 400: 129 dB out to 700 m.'
    },
    usage: {
      fr: 'Le V1 diffuse messages d’alerte et consignes à grande distance pour la sécurité civile, la gestion de foules et les secours : 129 dB à 1 m, portée 700 m.',
      en: 'The V1 broadcasts alerts and instructions at distance for public safety, crowd management and rescue: 129 dB at 1 m, 700 m range.'
    },
    useCases: ['securite', 'inspection'],
    highlights: [
      { label: { fr: 'Niveau', en: 'Level' }, value: '129 dB @ 1 m' },
      { label: { fr: 'Portée', en: 'Range' }, value: '700 m' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
        { label: { fr: 'Présentation', en: 'What it is' }, value: 'Loudspeaker payload for broadcast, alert and rescue coordination.' },
        { label: { fr: 'Haut-parleur (CSV)', en: 'Loudspeaker (CSV)' }, value: '129 dB @ 1 m' },
        { label: { fr: 'Portée haut-parleur (CSV)', en: 'Loudspeaker Range (CSV)' }, value: '700m' },
        { label: { fr: 'Statut (référentiel zenmuse_specs.csv)', en: 'Status (zenmuse_specs.csv)' }, value: 'Coming Soon' },
        { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' },
        ]
      },
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/V1.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-v1'
  }
];
