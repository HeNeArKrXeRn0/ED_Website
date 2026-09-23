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
   Valeurs admises : 'in_stock' | 'on_order' | 'coming_soon' | 'discontinued' | 'not_available'
   Devis autorisé : 'in_stock', 'on_order', 'coming_soon' (voir ED.data.isQuoteAllowed dans app.js).
   -------------------------------------------------------------------------- */

window.ED_PRODUCTS = [

  /* ====================== AGRICULTURE — PULVÉRISATION ===================== */
  {
    id: 't55',
    name: 'DJI Agras T55',
    segment: 'agriculture',
    category: 'agriculture',
    type: 'aircraft',
    tagline: {"fr": "Un drone Agras pour la pulvérisation et l’épandage sur grandes surfaces.", "en": "An Agras drone for spraying and spreading over large areas."},
    usage: {"fr": "Le T55 s’adresse aux exploitations et aux prestataires qui travaillent sur de grandes parcelles. Il peut servir à la pulvérisation et, avec un équipement compatible, à l’épandage de produits granulés. Le débit de chantier et la rentabilité dépendent des cultures, des doses, des conditions et de l’organisation au sol.", "en": "The T55 is intended for farms and contractors working on large plots. It supports spraying and, with compatible equipment, granular spreading. Work rate and profitability depend on crops, application rates, conditions and ground operations."},
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '50 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '104 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le T100 combine pulvérisation, épandage et transport de charges avec les équipements compatibles. Il peut répondre aux besoins d’exploitations qui associent traitement des cultures et logistique sur terrain difficile. La configuration, les limites de charge et les conditions de vol doivent être définies pour chaque usage.", "en": "The T100 combines spraying, spreading and cargo lifting with compatible equipment. It can serve farms that combine crop treatment and logistics over difficult terrain. Configuration, load limits and flight conditions must be defined for each use."},
    useCases: ['pulverisation', 'epandage', 'nettoyage', 'cartographie'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '100 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '175 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le T70P est destiné à la pulvérisation et à l’épandage sur de grandes parcelles. Le réglage du débit, de la vitesse et de la largeur de travail permet d’adapter l’application au chantier. La consommation de produit et la qualité de couverture dépendent du calibrage et des conditions d’exploitation.", "en": "The T70P is intended for spraying and spreading over large plots. Flow rate, speed and working width can be adjusted to the task. Product consumption and coverage quality depend on calibration and operating conditions."},
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '70 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '130 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le T50 est un modèle polyvalent pour la pulvérisation et l’épandage. Ses fonctions de détection aident le pilote à gérer le relief et les obstacles, sans remplacer la préparation du vol. Ce modèle est indiqué en fin de série dans notre catalogue ; contactez-nous pour vérifier les pièces et les alternatives disponibles.", "en": "The T50 is a versatile model for spraying and spreading. Its sensing functions help the pilot manage terrain and obstacles, while flight planning remains essential. This model is marked discontinued in our catalogue; contact us to check parts and available alternatives."},
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '50 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '92 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le T25P privilégie un format compact pour les vergers et les parcelles morcelées. Son choix dépend de l’espace de manœuvre, du relief, des obstacles et de la dose à appliquer. Vérifiez les dimensions de transport et l’équipement nécessaire avant de prévoir des interventions sur plusieurs sites.", "en": "The T25P prioritises a compact format for orchards and fragmented plots. Suitability depends on manoeuvring space, terrain, obstacles and application rate. Check transport dimensions and equipment requirements before planning work across multiple sites."},
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '20 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '53 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le T25 est un drone agricole compact pour la pulvérisation et l’épandage avec les équipements adaptés. Sa capacité peut convenir à des parcelles où la maniabilité prime sur le débit. Ce modèle est indiqué en fin de série dans notre catalogue ; nous pouvons vous orienter vers une alternative selon votre besoin.", "en": "The T25 is a compact agricultural drone for spraying and spreading with suitable equipment. Its capacity may suit plots where manoeuvrability matters more than throughput. This model is marked discontinued in our catalogue; we can help identify an alternative for your needs."},
    useCases: ['pulverisation', 'epandage', 'nettoyage'],
    highlights: [
      { label: { fr: 'Charge utile', en: 'Payload' }, value: '20 kg' },
      { label: { fr: 'Masse Max. Décollage', en: 'Max Takeoff Weight' }, value: '52 kg', icon: 'assets/img/svg_icons/max_takeoff_weight.svg' },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le Mavic 3M collecte des images multispectrales pour analyser la vigueur du couvert végétal et produire des cartes d’indices, notamment le NDVI. Ces cartes aident à repérer des zones à examiner sur le terrain ; elles ne déterminent pas à elles seules la cause d’un stress. Leur utilisation pour une application à dose variable nécessite un traitement des données et un équipement compatible.", "en": "The Mavic 3M collects multispectral images to assess crop vigour and produce index maps, including NDVI. These maps help identify areas for field inspection; they do not establish the cause of stress on their own. Variable-rate application requires data processing and compatible equipment."},
    useCases: ['cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '43 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '15 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Caméra multispectrale', en: 'Multispectral Camera' }, value: 'G/R/RE/NIR', icon: 'assets/img/svg_icons/simple_camera.svg' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '43 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '15 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "0,95 kg", "en": "0.95 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "1,05 kg", "en": "1.05 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus (omnidirectionnel)', en: 'Included (Omnidirectional)' } },
          { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: {"fr": "4/3 CMOS, pixels effectifs: 20 MP", "en": "4/3 CMOS, Effective Pixels: 20 MP"} },
          { label: { fr: 'Caméra multispectrale', en: 'Multispectral Camera' }, value: {"fr": "CMOS 1/2.8 pouce, pixels effectifs: 5 MP", "en": "1/2.8-inch CMOS, Effective Pixels: 5 MP"} },
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
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '40 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '59 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '40 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '7000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "9,7 kg", "en": "9.7 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "15,8 kg", "en": "15.8 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '25 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
          { label: { fr: 'Indice de protection', en: 'Protection Rating' }, value: 'IP55' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
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
    usage: {"fr": "Le Matrice 4E sert à la photogrammétrie : orthophotos, modèles de terrain et calculs de volumes. Le RTK et l’obturateur mécanique contribuent à la qualité des acquisitions. La précision du livrable dépend du protocole de vol, des corrections, des points de contrôle et du traitement des données.", "en": "The Matrice 4E supports photogrammetry, including orthophotos, terrain models and volume calculations. RTK and a mechanical shutter support data capture quality. Deliverable accuracy depends on flight procedures, corrections, control points and data processing."},
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '49 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '25 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '49 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '25 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "1,22 kg", "en": "1.22 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "1,43 kg", "en": "1.43 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Non inclus (dédié photogrammétrie)', en: 'Not included (Photogrammetry dedicated)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "CMOS 4/3 pouce pixels effectifs: 20 MP", "en": "4/3-inch CMOS Effective Pixels: 20 MP"} },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: {"fr": "CMOS 1/1.5 pouce, pixels effectifs: 48 MP", "en": "1/1.5-inch CMOS, Effective Pixels: 48 MP"} },
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
    usage: {"fr": "Le Matrice 4T associe une caméra thermique, un zoom et un télémètre laser pour l’inspection et la sécurité civile. Il aide à repérer des anomalies thermiques ou des personnes selon les conditions de visibilité. L’interprétation des images et la confirmation des anomalies restent nécessaires.", "en": "The Matrice 4T combines a thermal camera, zoom and laser rangefinder for inspection and public safety. It helps locate thermal anomalies or people, depending on visibility conditions. Image interpretation and confirmation of anomalies remain necessary."},
    useCases: ['inspection', 'securite', 'topographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '49 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '25 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '49 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '25 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "1,22 kg", "en": "1.22 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "1,43 kg", "en": "1.43 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Inclus (thermique radiométrique 640×512)', en: 'Included (640×512 Radiometric Thermal)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Projecteur infrarouge', en: 'Infrared Spotlight' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: {"fr": "CMOS 1/1.5 pouce, pixels effectifs: 48 MP", "en": "1/1.5-inch CMOS, Effective Pixels: 48 MP"} },
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
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "3,77 kg", "en": "3.77 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "9,2 kg", "en": "9.2 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '23 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
          { label: { fr: 'Indice de protection', en: 'Protection Rating' }, value: 'IP55' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus (6 directions)', en: 'Included (6 Directions)' } },
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
    tagline: {"fr": "Photogrammétrie compacte avec caméra 4/3 à obturateur mécanique.", "en": "Compact photogrammetry with a 4/3 camera and mechanical shutter."},
    usage: {"fr": "Le Mavic 3E associe une caméra grand-angle CMOS 4/3 de 20 MP à obturateur mécanique et une caméra zoom pour les relevés aériens. L’obturateur mécanique aide à limiter les déformations liées au mouvement pendant les acquisitions.", "en": "The Mavic 3E combines a 20 MP 4/3 CMOS wide-angle camera with a mechanical shutter and a zoom camera for aerial surveys. The mechanical shutter helps limit motion-related distortion during capture."},
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '45 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '15 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '45 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '15 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "0,92 kg", "en": "0.92 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "1,05 kg", "en": "1.05 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Module optionnel', en: 'Optional module' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus (omnidirectionnel)', en: 'Included (Omnidirectional)' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "CMOS 4/3 pouce pixels effectifs: 20 MP", "en": "4/3-inch CMOS Effective Pixels: 20 MP"} },
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: {"fr": "1/2\" CMOS, pixels effectifs: 12 MP (56× hybride)", "en": "1/2\" CMOS, Effective pixels: 12 MP (56× hybrid)"} },
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
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '15 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '45 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '15 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '6000 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "0,92 kg", "en": "0.92 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "1,05 kg", "en": "1.05 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Module optionnel', en: 'Optional module' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus (omnidirectionnel)', en: 'Included (Omnidirectional)' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: {"fr": "Microbolomètre VOx non refroidi, 640 × 512", "en": "Uncooled VOx microbolometer, 640 × 512"} },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "1/2\" CMOS, pixels effectifs: 48 MP", "en": "1/2\" CMOS, Effective pixels: 48 MP"} },
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: {"fr": "1/2\" CMOS, pixels effectifs: 12 MP (56× hybride)", "en": "1/2\" CMOS, Effective pixels: 12 MP (56× hybrid)"} },
        ]
      },
    ],
    compatiblePayloads: [],
    availability: 'discontinued',
    image: 'assets/img/products/mavic-3t.png',
    imageFallback: 'assets/img/svg/aircraft.svg',
    djiUrl: 'https://enterprise.dji.com/mavic-3-enterprise'
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
      fr: 'La H30T associe zoom, grand-angle, caméra thermique et télémètre laser, avec un éclairage proche infrarouge d’appoint. Elle permet de recueillir plusieurs types d’observation lors d’une même mission d’inspection ou de recherche. Les mesures dépendent des conditions et des limites des capteurs.',
      en: 'The H30T combines zoom, wide-angle, thermal imaging and laser ranging with auxiliary near-infrared illumination. It supports multiple types of observation during a single inspection or search mission. Measurements depend on conditions and sensor limitations.'
    },
    useCases: ['inspection', 'securite'],
    highlights: [
      { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: '1280×1024' },
      { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '40 MP' },
      { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '3000 m' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/1.8" CMOS, 40MP' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide-Angle Camera' }, value: '1/1.3" CMOS, 48MP' },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: '1280×1024 @ 30 i/s', en: '1280×1024 @ 30fps' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '3000 m' },
          { label: { fr: 'Éclairage IR', en: 'Spotlight IR' }, value: { fr: 'Oui — éclairage proche infrarouge', en: 'Yes — NIR auxiliary light' } },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
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
      { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Double 640×512', en: 'Dual 640×512' } },
      { label: { fr: 'Vision nocturne zoom', en: 'Night Vision Zoom' }, value: '4 MP' },
      { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '1200 m' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Double 640×512 px @ 30 i/s', en: 'Dual 640×512 px @ 30fps' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '1200 m' },
          { label: { fr: 'Vision nocturne grand-angle', en: 'Night Vision Wide Camera' }, value: '1/2.7" CMOS, 2MP' },
          { label: { fr: 'Vision nocturne zoom', en: 'Night Vision Zoom Camera' }, value: '1/1.8" CMOS, 4MP' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Fin de série', en: 'Discontinued' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 350 RTK' }
        ]
      }
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
      fr: 'La L2 utilise le LiDAR pour produire des nuages de points destinés aux relevés de terrain et d’infrastructure. Elle peut recueillir des points au sol à travers les ouvertures du couvert végétal. La densité de végétation, le plan de vol et le traitement influencent la qualité du modèle obtenu.',
      en: 'The L2 uses LiDAR to produce point clouds for terrain and infrastructure surveys. It can capture ground points through gaps in vegetation. Vegetation density, flight planning and processing affect the quality of the resulting model.'
    },
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus', en: 'Included' } },
      { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: '4/3 CMOS, 20 MP' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: '4/3 CMOS, 20MP' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
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
      fr: 'La P1 embarque un capteur plein format pour la photogrammétrie et la cartographie de grandes surfaces. La couverture par vol et la précision finale dépendent de l’objectif, de l’altitude, du recouvrement et du protocole de traitement.',
      en: 'The P1 carries a full-frame sensor for photogrammetry and large-area mapping. Coverage per flight and final accuracy depend on the lens, altitude, image overlap and processing workflow.'
    },
    useCases: ['topographie', 'cartographie'],
    highlights: [
      { label: { fr: 'Capteur', en: 'Sensor' }, value: { fr: 'Plein format', en: 'Full frame' }, icon: 'assets/img/svg_icons/CMOS_sensor.svg' },
      { label: { fr: 'Résolution', en: 'Resolution' }, value: '45 MP', icon: 'assets/img/svg_icons/sensor_resolution.svg' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: { fr: 'Plein format, 45 MP', en: 'Full frame, 45 MP' } },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
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
      { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '40 MP' },
      { label: { fr: 'Caméra grand-angle', en: 'Wide-Angle Camera' }, value: '48 MP', icon: 'assets/img/svg_icons/wide_camera.svg' },
      { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '3000 m' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/1.8" CMOS, 40MP' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide-Angle Camera' }, value: '1/1.3" CMOS, 48MP' },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '3000 m' },
          { label: { fr: 'Éclairage IR', en: 'Spotlight IR' }, value: { fr: 'Oui — éclairage proche infrarouge', en: 'Yes — NIR auxiliary light' } },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
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
      { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '20 MP' },
      { label: { fr: 'Caméra grand-angle', en: 'Wide-Angle Camera' }, value: '12 MP', icon: 'assets/img/svg_icons/wide_camera.svg' },
      { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '1200 m' },
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/1.7" CMOS, 20MP' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide-Angle Camera' }, value: '1/2.3" CMOS, 12MP' },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '1200 m' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Fin de série', en: 'Discontinued' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 350 RTK' }
        ]
      }
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
      { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: '640×512' },
      { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '20 MP' },
      { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '1200 m' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: '1/1.7" CMOS, 20MP' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide-Angle Camera' }, value: '1/2.3" CMOS, 12MP' },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: '640×512 px @ 30 i/s', en: '640×512 px @ 30fps' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: '1200 m' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Fin de série', en: 'Discontinued' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 350 RTK' }
        ]
      }
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
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '15 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '41 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '15 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "3,77 kg", "en": "3.77 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "4,07 kg", "en": "4.07 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '23 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
          { label: { fr: 'Indice de protection', en: 'Protection Rating' }, value: 'IP55' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra FPV', en: 'FPV Camera' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Microbolomètre VOx non refroidi (640×512)', en: 'Uncooled VOx Microbolometer (640×512)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus (jusqu’à 1 200 m)', en: 'Included (up to 1,200 m)' } },
          { label: { fr: 'Caméra zoom', en: 'Zoom Camera' }, value: {"fr": "1/2\" CMOS, pixels effectifs: 48M", "en": "1/2\" CMOS, Effective pixels: 48M"} },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "1/2\" CMOS, pixels effectifs: 12M", "en": "1/2\" CMOS, Effective pixels: 12M"} },
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
    usage: {"fr": "Le Matrice 4TD associe caméras thermiques et visuelles pour des missions à distance et des interventions programmées. Les opérations automatisées nécessitent une supervision et des conditions d’exploitation adaptées.", "en": "The Matrice 4TD combines thermal and visual cameras for remote missions and scheduled operations. Automated operations require supervision and suitable operating conditions."},
    useCases: ['inspection', 'securite', 'topographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '41 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '25 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '41 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '25 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "1,85 kg", "en": "1.85 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "2,09 kg", "en": "2.09 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
          { label: { fr: 'Indice de protection', en: 'Protection Rating' }, value: 'IP55' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: '640×512 Microbolomètre VOx non refroidi', en: '640×512 Uncooled VOx Microbolometer' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Projecteur infrarouge', en: 'Infrared Spotlight' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: {"fr": "CMOS 1/1.5 pouce, pixels effectifs: 48 MP", "en": "1/1.5-inch CMOS, Effective Pixels: 48 MP"} },
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
      en: 'High-precision mapping and photogrammetry drone for automated operations.'
    },
    usage: {
      fr: 'Le Matrice 4D est dédié aux relevés topographiques et à la modélisation 3D automatisée grâce à son capteur grand-angle 4/3 CMOS avec obturateur mécanique.',
      en: 'The Matrice 4D is dedicated to automated topographic surveys and 3D modeling with its 4/3 CMOS mechanical shutter wide camera.'
    },
    useCases: ['topographie', 'inspection', 'cartographie'],
    highlights: [
      { label: { fr: 'Autonomie', en: 'Flight time' }, value: '41 min', icon: 'assets/img/svg_icons/full_battery.svg', key: 'flight-time' },
      { label: { fr: 'Rayon de vol', en: 'Flight radius' }, value: '25 km', icon: 'assets/img/svg_icons/radar.svg', key: 'flight-radius' },
      { label: { fr: 'Altitude max.', en: 'Max altitude' }, value: '500 m', icon: 'assets/img/svg_icons/max_flight_altitude.svg', key: 'max-altitude' },
    ],
    specs: [
      {
        group: { fr: 'Performances', en: 'Performance' },
        rows: [
          { label: { fr: 'Autonomie de vol max. (sans vent)', en: 'Max Flight Time (no wind)' }, value: '41 min' },
          { label: { fr: 'Rayon de vol max.', en: 'Max Flight Radius' }, value: '25 km' },
          { label: { fr: 'Altitude max. de décollage', en: 'Max Takeoff Altitude' }, value: '500 m' },
          { label: { fr: 'Masse à vide', en: 'Empty Weight' }, value: {"fr": "1,85 kg", "en": "1.85 kg"} },
          { label: { fr: 'Masse max. au décollage', en: 'Max Takeoff Weight' }, value: {"fr": "2,09 kg", "en": "2.09 kg"} },
          { label: { fr: 'Vitesse max.', en: 'Max Speed' }, value: '21 m/s' },
          { label: { fr: 'Résistance au vent', en: 'Wind Resistance' }, value: '12 m/s' },
          { label: { fr: 'Indice de protection', en: 'Protection Rating' }, value: 'IP55' },
        ]
      },
      {
        group: { fr: 'Équipements intégrés', en: 'Integrated Equipment' },
        rows: [
          { label: { fr: 'Antenne RTK', en: 'RTK Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Station D-RTK 3', en: 'D-RTK 3 Base Station' }, value: { fr: 'Compatible', en: 'Compatible' } },
          { label: { fr: 'Antenne GNSS', en: 'GNSS Antenna' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra thermique', en: 'Thermal Camera' }, value: { fr: 'Non inclus (dédié photogrammétrie)', en: 'Not included (Photogrammetry dedicated)' } },
          { label: { fr: 'Télémètre laser', en: 'Laser Rangefinder' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Projecteur d’appoint', en: 'Accessory Spotlight' }, value: 'AL1' },
          { label: { fr: 'Haut-parleur d’appoint', en: 'Accessory Speaker' }, value: 'AS1' },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "CMOS 4/3 pouce pixels effectifs: 20 MP", "en": "4/3-inch CMOS Effective Pixels: 20 MP"} },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: {"fr": "CMOS 1/1.5 pouce, pixels effectifs: 48 MP", "en": "1/1.5-inch CMOS, Effective Pixels: 48 MP"} },
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
    id: 'flycart-30',
    name: 'DJI FlyCart 30',
    segment: 'enterprise',
    category: 'enterprise',
    type: 'aircraft',
    tagline: {"fr": "Transport aérien de charges avec configuration adaptée à la mission.", "en": "Aerial cargo transport configured for the mission."},
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
      { label: { fr: 'Alimentation', en: 'Power' }, value: {"fr": "Deux batteries", "en": "Dual battery"} }
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
    usage: {"fr": "Le Air 3S associe deux focales pour la photographie et la vidéo aériennes de paysages, de voyages et de productions créatives.", "en": "The Air 3S combines two focal lengths for aerial photography and video of landscapes, travel and creative productions."},
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "CMOS 1 pouce, 50 MP effectifs; champ de vision 84°; f/1.8", "en": "1-inch CMOS, 50MP Effective Pixels; FOV 84°; f/1.8"} },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: {"fr": "CMOS 1/1.3 pouce, 48 MP effectifs; champ de vision 35°; f/2.8", "en": "1/1.3-inch CMOS, 48MP Effective Pixels; FOV 35°; f/2.8"} },
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
    usage: {"fr": "Le Mini 4 Pro permet la prise de vue verticale et le suivi automatique de sujets. Ses fonctions de détection d’obstacles assistent le pilote et restent soumises aux conditions de visibilité et aux limites du système.", "en": "The Mini 4 Pro supports vertical shooting and automatic subject tracking. Its obstacle-sensing functions assist the pilot and remain subject to visibility conditions and system limitations."},
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP"} },
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
    usage: {"fr": "Un format compact pour les vidéastes et photographes qui souhaitent emporter leur matériel en déplacement. Vérifiez la configuration proposée et ses caractéristiques avant de préparer votre mission.", "en": "A compact format for videographers and photographers taking their equipment on the move. Check the proposed configuration and its specifications before planning your flight."},
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "CMOS 1 pouce, 50 MP effectifs", "en": "1-inch CMOS, 50MP Effective Pixels"} },
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
    tagline: {"fr": "Drone compact pliable pour la photographie et la vidéo aériennes.", "en": "Compact folding drone for aerial photography and video."},
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "CMOS 1/1.3 pouce", "en": "1/1.3-inch CMOS"} },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Non inclus', en: 'Not included' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "CMOS 1/2 pouce, 48 MP effectifs", "en": "1/2-inch CMOS, 48MP Effective Pixels"} },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "CMOS 1/1.3 pouce, 48 MP effectifs", "en": "1/1.3-inch CMOS, 48MP Effective Pixels"} },
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
    tagline: {"fr": "Système à trois caméras pour la photographie et la vidéo aériennes.", "en": "Three-camera system for aerial photography and video."},
    usage: {"fr": "Le Mavic 4 Pro offre plusieurs focales pour varier les cadrages d’une production aérienne. Les formats d’enregistrement et fonctions disponibles dépendent de la caméra et de la configuration utilisées.", "en": "The Mavic 4 Pro offers multiple focal lengths for varied framing in aerial productions. Available recording formats and functions depend on the camera and configuration used."},
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra grand-angle', en: 'Wide Camera' }, value: {"fr": "4/3 CMOS, pixels effectifs: 100 MP; champ de vision 72°; f/2.0", "en": "4/3 CMOS, Effective Pixels: 100 MP; FOV 72°; f/2.0"} },
          { label: { fr: 'Téléobjectif moyen', en: 'Medium Tele Camera' }, value: {"fr": "CMOS 1/1.3 pouce, pixels effectifs: 48 MP; champ de vision 35°; f/2.8", "en": "1/1.3-inch CMOS, Effective Pixels: 48 MP; FOV 35°; f/2.8"} },
          { label: { fr: 'Téléobjectif', en: 'Telephoto Camera' }, value: {"fr": "CMOS 1/1.5 pouce, pixels effectifs: 50 MP; champ de vision 15°; f/2.8", "en": "1/1.5-inch CMOS, Effective Pixels: 50 MP; FOV 15°; f/2.8"} },
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "CMOS 1/2 pouce", "en": "1/2-inch CMOS"} },
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
    usage: {"fr": "Le vol immersif nécessite un casque et des commandes compatibles. Les protections d’hélices et les fonctions de stabilisation assistent l’opérateur ; elles ne remplacent ni la préparation du vol ni le respect des distances de sécurité.", "en": "Immersive flight requires compatible goggles and controls. Propeller guards and stabilisation functions assist the operator; flight planning and safe separation remain essential."},
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
          { label: { fr: 'Évitement d’obstacles', en: 'Obstacle Avoidance' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus (évitement d’obstacles)', en: 'Included (Obstacle avoidance)' } },
          { label: { fr: 'Caméra principale', en: 'Main Camera' }, value: {"fr": "Deux CMOS 1/1.1 pouce; pixels effectifs 64MP", "en": "Two 1/1.1-Inch CMOS; Effective Pixels 64MP"} },
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
      { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus', en: 'Included' } },
      { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: '4/3 CMOS' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'LiDAR', en: 'LiDAR' }, value: { fr: 'Inclus', en: 'Included' } },
          { label: { fr: 'Caméra RVB', en: 'RGB Camera' }, value: '4/3 CMOS' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
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
      { label: { fr: 'Projecteur visible', en: 'Spotlight VIS' }, value: '30 lux @ 100 m' },
      { label: { fr: 'Portée effective', en: 'Effective Range' }, value: '500 m', icon: 'assets/img/svg_icons/light_range.svg' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Projecteur visible', en: 'Spotlight VIS' }, value: '30 lux @ 100 m' },
          { label: { fr: 'Portée projecteur visible', en: 'Spotlight VIS Range' }, value: '500 m' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
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
      fr: 'Haut-parleur longue portée pour Matrice 400 : 129 dB à 1 m, portée maximale de 700 m.',
      en: 'Long-range loudspeaker for Matrice 400: 129 dB at 1 m, maximum range of 700 m.'
    },
    usage: {
      fr: 'Le V1 diffuse messages d’alerte et consignes à grande distance pour la sécurité civile, la gestion de foules et les secours : 129 dB à 1 m, portée 700 m.',
      en: 'The V1 broadcasts alerts and instructions at distance for public safety, crowd management and rescue: 129 dB at 1 m, 700 m range.'
    },
    useCases: ['securite', 'inspection'],
    highlights: [
      { label: { fr: 'Haut-parleur', en: 'Loudspeaker' }, value: '129 dB @ 1 m' },
      { label: { fr: 'Portée effective', en: 'Effective Range' }, value: '700 m', icon: 'assets/img/svg_icons/sound_range.svg' },
      { label: { fr: 'Porteur', en: 'Carrier' }, value: 'Matrice 400' }
    ],
    specs: [
      {
        group: { fr: 'Général', en: 'General' },
        rows: [
          { label: { fr: 'Haut-parleur', en: 'Loudspeaker' }, value: '129 dB @ 1 m' },
          { label: { fr: 'Portée haut-parleur', en: 'Loudspeaker Range' }, value: '700 m' },
          { label: { fr: 'Statut', en: 'Status' }, value: { fr: 'Bientôt disponible', en: 'Coming soon' } },
          { label: { fr: 'Aéronefs compatibles', en: 'Compatible Aircraft' }, value: 'Matrice 400' }
        ]
      }
    ],
    availability: 'coming_soon',
    image: 'assets/img/products/V1.png',
    imageFallback: 'assets/img/svg/payload-gimbal.svg',
    djiUrl: 'https://enterprise.dji.com/zenmuse-v1'
  }
];
