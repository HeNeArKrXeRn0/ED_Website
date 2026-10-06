/* ==========================================================================
   EQUIP DRONES — Dictionnaire FR / EN
   Le français est la langue par défaut ET la langue de repli.
   Une clé sans traduction `en` affiche le texte `fr`, jamais la clé brute.
   ========================================================================== */
window.ED_STRINGS = {

  /* ---- Navigation & chrome ---- */
  'nav.home':        { fr: 'Accueil',        en: 'Home' },
  'nav.agriculture': { fr: 'Agriculture',    en: 'Agriculture' },
  'nav.enterprise':  { fr: 'Entreprise',     en: 'Enterprise' },
  'nav.camera':      { fr: 'Caméra',         en: 'Camera' },
  'nav.catalogue':   { fr: 'Catalogue',      en: 'Catalogue' },
  'nav.applications':{ fr: 'Applications',   en: 'Applications' },
  'nav.compare':     { fr: 'Comparateur',    en: 'Compare' },
  'nav.services':    { fr: 'Services',       en: 'Services' },
  'nav.about':       { fr: 'À propos',       en: 'About' },
  'nav.quote':       { fr: 'Devis',          en: 'Quote' },
  'nav.menu':        { fr: 'Menu',           en: 'Menu' },
  'nav.skip':        { fr: 'Aller au contenu principal', en: 'Skip to main content' },

  /* ---- Actions ---- */
  'cta.quote':       { fr: 'Demander un devis',   en: 'Request a quote' },
  'cta.catalogue':   { fr: 'Voir le catalogue',   en: 'View the catalogue' },
  'cta.details':     { fr: 'Détails',             en: 'Details' },
  'cta.addQuote':    { fr: 'Ajouter au devis',    en: 'Add to quote' },
  'cta.added':       { fr: 'Ajouté au devis',     en: 'Added to quote' },
  'cta.notify':      { fr: 'Me prévenir',         en: 'Notify me' },
  'cta.discontinued':{ fr: 'Fin de série',        en: 'Discontinued' },
  'cta.whatsapp':    { fr: 'Envoyer par WhatsApp',en: 'Send via WhatsApp' },
  'cta.email':       { fr: 'Envoyer par e-mail',  en: 'Send by email' },
  'cta.call':        { fr: 'Appeler',             en: 'Call' },
  'cta.contact':     { fr: 'Nous contacter',      en: 'Contact us' },
  'cta.compare':     { fr: 'Comparer',            en: 'Compare' },
  'cta.back':        { fr: 'Retour au catalogue', en: 'Back to catalogue' },
  'cta.copy':        { fr: 'Copier le message',   en: 'Copy the message' },
  'cta.copied':      { fr: 'Copié',               en: 'Copied' },
  'cta.remove':      { fr: 'Retirer',             en: 'Remove' },
  'cta.djiSheet':    { fr: 'Fiche technique DJI', en: 'Official DJI page' },
  'cta.discover':    { fr: 'Découvrir',           en: 'Discover' },
  'cta.learnMore':   { fr: 'En savoir plus',      en: 'Learn more' },

  /* ---- Disponibilité (données fictives) ---- */
  'avail.in_stock':    { fr: 'En stock',                     en: 'In stock' },
  'avail.on_order':    { fr: 'Sur commande — 4 à 6 semaines',en: 'On order — 4 to 6 weeks' },
  'avail.coming_soon': { fr: 'Bientôt disponible',           en: 'Coming soon' },
  'avail.discontinued':{ fr: 'Fin de série',                 en: 'Discontinued' },
  'avail.not_available':{ fr: 'Non disponible',             en: 'Not available' },
  'avail.label':       { fr: 'Disponibilité',                en: 'Availability' },
  'cta.djiFullSpecs':  { fr: 'Consulter la fiche technique complète sur DJI.com', en: 'View full technical specifications on DJI.com' },

  /* ---- Catégories ---- */
  'cat.all':         { fr: 'Tout',          en: 'All' },
  'cat.agriculture': { fr: 'Agriculture',   en: 'Agriculture' },
  'cat.enterprise':  { fr: 'Entreprise',    en: 'Enterprise' },
  'cat.camera':      { fr: 'Caméra',        en: 'Camera' },
  'cat.payload':     { fr: 'Charges utiles',en: 'Payloads' },

  /* ---- Catalogue ---- */
  'cat.title':       { fr: 'Catalogue',   en: 'Catalogue' },
  'cat.filterCat':   { fr: 'Catégorie',   en: 'Category' },
  'cat.filterSector':{ fr: 'Secteur',     en: 'Sector' },
  'cat.filterAvail': { fr: 'Disponibilité',en:'Availability' },
  'cat.results':     { fr: 'produit(s)', en: 'products' },
  'cat.empty':       { fr: 'Aucun appareil ne correspond à ces filtres.', en: 'No aircraft match these filters.' },
  'cat.reset':       { fr: 'Réinitialiser les filtres', en: 'Reset filters' },

  /* ---- Fiche produit ---- */
  'prod.usage':      { fr: 'À quoi sert ce produit',  en: 'What this product is for' },
  'prod.specs':      { fr: 'Spécifications techniques', en: 'Technical specifications' },
  'prod.payloads':   { fr: 'Charges utiles et accessoires compatibles', en: 'Compatible payloads and accessories' },
  'prod.related':    { fr: 'Modèles similaires',        en: 'Similar models' },
  'prod.sectors':    { fr: 'Secteurs d’application', en: 'Application sectors' },
  'prod.qty':        { fr: 'Quantité',                  en: 'Quantity' },
  'prod.notFound':   { fr: 'Produit introuvable',       en: 'Product not found' },
  'prod.notFoundBody':{ fr: 'Ce produit n’existe pas ou n’est plus référencé.', en: 'This product does not exist or is no longer listed.' },
  'prod.specNote':   { fr: 'Spécifications publiées par DJI. Un tiret (—) indique une valeur non communiquée par le constructeur.', en: 'Specifications as published by DJI. A dash (—) means the manufacturer publishes no figure.' },

  /* ---- Comparateur ---- */
  'cmp.title':       { fr: 'Comparateur de modèles', en: 'Model comparison' },
  'cmp.pick':        { fr: 'Sélectionnez 2 à 4 appareils à comparer.', en: 'Select 2 to 4 aircraft to compare.' },
  'cmp.slot':        { fr: 'Appareil',    en: 'Aircraft' },
  'cmp.none':        { fr: '— Aucun —',   en: '— None —' },
  'cmp.needTwo':     { fr: 'Choisissez au moins deux appareils pour lancer la comparaison.', en: 'Choose at least two aircraft to start comparing.' },
  'cmp.hideSame':    { fr: 'Masquer les lignes identiques', en: 'Hide identical rows' },

  /* ---- Devis ---- */
  'quote.title':     { fr: 'Demande de devis',  en: 'Quote request' },
  'quote.yourList':  { fr: 'Votre sélection',   en: 'Your selection' },
  'quote.empty':     { fr: 'Votre sélection est vide. Parcourez le catalogue pour ajouter des appareils, ou envoyez-nous une demande générale ci-dessous.', en: 'Your selection is empty. Browse the catalogue to add aircraft, or send us a general enquiry below.' },
  'quote.yourInfo':  { fr: 'Vos coordonnées',   en: 'Your details' },
  'quote.name':      { fr: 'Nom complet',       en: 'Full name' },
  'quote.company':   { fr: 'Société / exploitation', en: 'Company / farm' },
  'quote.email':     { fr: 'E-mail',            en: 'Email' },
  'quote.phone':     { fr: 'Téléphone',         en: 'Phone' },
  'quote.wilaya':    { fr: 'Wilaya',            en: 'Wilaya' },
  'quote.wilayaPick':{ fr: 'Sélectionnez une wilaya', en: 'Select a wilaya' },
  'quote.activity':  { fr: 'Type d’activité', en: 'Type of activity' },
  'quote.area':      { fr: 'Superficie à traiter (ha)', en: 'Area to treat (ha)' },
  'quote.message':   { fr: 'Message',           en: 'Message' },
  'quote.messagePh': { fr: 'Précisez votre besoin, vos cultures, vos délais…', en: 'Tell us about your needs, crops, timeline…' },
  'quote.submit':    {"fr": "Préparer ma demande", "en": "Prepare my request"},
  'quote.how':       { fr: 'Comment souhaitez-vous nous transmettre votre demande ?', en: 'How would you like to send us your request?' },
  'quote.sentTitle': { fr: 'Votre demande est prête', en: 'Your request is ready' },
  'quote.sentBody':  { fr: 'Choisissez WhatsApp ou l’e-mail pour nous l’envoyer. Vous pouvez aussi copier le message et nous l’adresser par le canal de votre choix.', en: 'Choose WhatsApp or email to send it. You can also copy the message and send it however you prefer.' },
  'quote.newRequest':{ fr: 'Modifier ma demande', en: 'Edit my request' },
  'quote.required':  { fr: 'Champ obligatoire', en: 'Required field' },
  'quote.badEmail':  { fr: 'Adresse e-mail invalide', en: 'Invalid email address' },
  'quote.badPhone':  { fr: 'Numéro de téléphone invalide', en: 'Invalid phone number' },
  'quote.noPrice':   { fr: 'Aucun prix n’est affiché sur ce site : chaque configuration fait l’objet d’un devis personnalisé.', en: 'No prices are shown on this site: every configuration is quoted individually.' },

  /* ---- Secteurs / Applications ---- */
  'sector.pulverisation': { fr: 'Pulvérisation',         en: 'Spraying' },
  'sector.epandage':      { fr: 'Épandage',              en: 'Spreading' },
  'sector.nettoyage':     { fr: 'Nettoyage',             en: 'Cleaning' },
  'sector.cartographie':  { fr: 'Cartographie',          en: 'Mapping' },
  'sector.spraying':      { fr: 'Pulvérisation',         en: 'Spraying' },
  'sector.spreading':     { fr: 'Épandage',              en: 'Spreading' },
  'sector.cleaning':      { fr: 'Nettoyage',             en: 'Cleaning' },
  'sector.mapping':       { fr: 'Cartographie',          en: 'Mapping' },
  'sector.cereales':   { fr: 'Céréaliculture',        en: 'Cereal farming' },
  'sector.palmeraies': { fr: 'Palmeraies & vergers',  en: 'Date palms & orchards' },
  'sector.vignes':     { fr: 'Viticulture',           en: 'Viticulture' },
  'sector.serres':     { fr: 'Maraîchage & serres',   en: 'Market gardening & greenhouses' },
  'sector.inspection': { fr: 'Inspection de réseaux', en: 'Network inspection' },
  'sector.topographie':{ fr: 'Topographie & cadastre',en: 'Survey & land registry' },
  'sector.securite':   { fr: 'Sécurité & secours',    en: 'Safety & emergency response' },

  /* ---- Footer ---- */
  'foot.nav':        { fr: 'Navigation',    en: 'Navigation' },
  'foot.products':   { fr: 'Produits',      en: 'Products' },
  'foot.contact':    { fr: 'Contact',       en: 'Contact' },
  'foot.follow':     { fr: 'Nous suivre',   en: 'Follow us' },
  'foot.tagline':    { fr: 'Distributeur agréé et officiel de DJI en Algérie.', en: 'Authorised and official DJI distributor in Algeria.' },
  'foot.rights':     { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
  'foot.disclaimer': { fr: 'DJI et Agras sont des marques déposées de SZ DJI Technology Co., Ltd.', en: 'DJI and Agras are registered trademarks of SZ DJI Technology Co., Ltd.' },

  /* ---- Divers ---- */
  'misc.official':   { fr: 'Distributeur officiel DJI — Algérie', en: 'Official DJI distributor — Algeria' },
  'misc.demoNotice': { fr: 'Démonstration : les disponibilités affichées sont fictives.', en: 'Demo: displayed availability is placeholder data.' },
  'misc.loading':    { fr: 'Chargement…',   en: 'Loading…' },

  /* ---- Agriculture Hub ---- */
  'agriculture_hero_title':      { fr: 'Solutions Agricoles DJI pour l\'Algérie', en: 'DJI Agricultural Solutions for Algeria' },
  'agriculture_hero_subtitle':   { fr: 'Pulvérisation de précision. Cartographie multispectrale. Support complet.', en: 'Precision spraying. Multispectral mapping. Full support.' },
  'agriculture_hero_cta':        { fr: 'Explorez les modèles', en: 'Explore models' },
  'agriculture_hero_cta2':       { fr: 'Demander un devis', en: 'Request quote' },
  'agriculture_featured_title':  { fr: 'Appareils Vedettes', en: 'Featured Aircraft' },
  'agriculture_featured_subtitle':{ fr: 'Les modèles les plus adaptés aux exploitations algériennes', en: 'Top models for Algerian farms' },
  'agriculture_all_products_title': { fr: 'Tous les Modèles Agriculture', en: 'All Agriculture Models' },
  'agriculture_payloads_title':  { fr: 'Capteurs et Accessoires', en: 'Sensors & Accessories' },
  'agriculture_payloads_subtitle':{ fr: 'Étendez les capacités de vos appareils', en: 'Extend your aircraft capabilities' },
  'agriculture_services_title':  { fr: 'Services et Support', en: 'Services & Support' },
  'agriculture_cta_title':       { fr: 'Prêt à Commencer?', en: 'Ready to Get Started?' },
  'agriculture_cta_text':        { fr: 'Parlez avec nos experts en solutions agricoles', en: 'Talk to our agricultural solutions experts' },

  /* ---- Enterprise Page ---- */
  'enterprise_hero_title':       { fr: 'Solutions Entreprise', en: 'Enterprise Solutions' },
  'enterprise_hero_subtitle':    { fr: 'Drones de haut rendement pour les opérations critiques', en: 'High-performance drones for critical operations' },
  'enterprise_hero_cta':         { fr: 'Découvrir', en: 'Discover' },
  'enterprise_hero_cta2':        { fr: 'Demander', en: 'Request' },
  'enterprise_products_title':   { fr: 'Appareils Enterprise', en: 'Enterprise Aircraft' },
  'enterprise_products_subtitle':{ fr: 'Photogrammétrie, inspection, relevés de précision', en: 'Photogrammetry, inspection, precision surveys' },
  'enterprise_accessories_title':{ fr: 'Accessoires et Pièces de Rechange', en: 'Accessories & Spare Parts' },
  'enterprise_cta_title':        { fr: 'Besoin d\'une Intégration Custom?', en: 'Need Custom Integration?' },
  'enterprise_cta_text':         { fr: 'Contactez notre équipe pour discuter de vos besoins spécifiques', en: 'Contact our team to discuss your specific needs' },
  'enterprise_cta_button':       { fr: 'Nous Contacter', en: 'Contact Us' },
  'disclaimer_enterprise':       { fr: 'Equip Drones fournit ces produits et pièces. Formation, maintenance, réparation, intégration et support opérationnel ne sont pas inclus sauf accord écrit séparé.', en: 'Equip Drones supplies these products and parts. Training, maintenance, repair, integration, and operational support are not included unless separately approved in writing.' },

  /* ---- Camera Page ---- */
  'camera_hero_title':           { fr: 'Drones Caméra et de Loisir', en: 'Camera & Recreational Drones' },
  'camera_hero_subtitle':        { fr: 'Captez le monde sous tous les angles', en: 'Capture the world from every angle' },
  'camera_hero_cta':             { fr: 'Explorer', en: 'Explore' },
  'camera_hero_cta2':            { fr: 'Commander', en: 'Order' },
  'camera_products_title':       { fr: 'Nos Modèles Caméra', en: 'Our Camera Models' },
  'camera_products_subtitle':    { fr: 'Du compact portable aux performances cinéma', en: 'From portable compact to cinema performance' },
  'camera_accessories_title':    { fr: 'Accessoires et Pièces', en: 'Accessories & Parts' },
  'camera_accessories_subtitle': { fr: 'Améliorez votre équipement', en: 'Enhance your equipment' },
  'camera_accessories_coming':   { fr: 'Accessoires à venir', en: 'Accessories coming soon' },
  'camera_cta_title':            { fr: 'Commandes en Gros?', en: 'Bulk Orders?' },
  'camera_cta_text':             { fr: 'Obtenez des tarifs spéciaux pour les achats en volume', en: 'Get special rates for volume purchases' },
  'camera_cta_button':           { fr: 'Contacter Ventes', en: 'Contact Sales' },
  'disclaimer_camera':           { fr: 'Equip Drones fournit ces produits et pièces. Formation, support opérationnel et intégration ne sont pas inclus.', en: 'Equip Drones supplies these products and parts. Training, operational support, and integration are not included.' },

  /* ---- Filters ---- */
  'filter_sector':               { fr: 'Secteur', en: 'Sector' },
  'filter_availability':         { fr: 'Disponibilité', en: 'Availability' }
};


/* Editorial copy: deliberate FR/EN translations, including page metadata.
   HTML entries contain only repository-owned presentation markup. */
Object.assign(window.ED_STRINGS, {
  "a-propos.copy.a-propos-equip-drones": {
    "fr": "À propos — Equip Drones",
    "en": "About — Equip Drones"
  },
  "a-propos.copy.a-propos-dequip-drones": {
    "fr": "À propos d’Equip Drones",
    "en": "About Equip Drones"
  },
  "a-propos.copy.sarl-equip-drones-est-le-distributeur-agree": {
    "fr": "SARL Equip Drones est le distributeur agréé et officiel de DJI en Algérie. Notre cœur de métier est le drone agricole : les appareils, mais aussi le conseil, la formation, l’entretien et les pièces qui font qu’ils volent encore la saison suivante.",
    "en": "SARL Equip Drones is the authorised and official DJI distributor in Algeria. Agricultural drones are our core business: the equipment, advice, training, maintenance and parts that keep it working season after season."
  },
  "a-propos.copy.notre-raison-detre": {
    "fr": "Notre raison d’être",
    "en": "Our purpose"
  },
  "a-propos.copy.mettre-la-technologie-au-service-de-lagriculture": {
    "fr": "Mettre la technologie au service de l’agriculture algérienne",
    "en": "Putting technology to work for Algerian agriculture"
  },
  "a-propos.copy.equip-drones-sest-constituee-autour-dune-conviction": {
    "fr": "Equip Drones s’est constituée autour d’une conviction simple : le drone agricole a besoin d’un accompagnement complet. L’appareil seul ne suffit pas sans opérateur formé, entretien et pièces détachées. C’est pourquoi nous associons distribution et services pour les drones agricoles.",
    "en": "Equip Drones was built on a simple conviction: agricultural drones need a complete support system. Equipment alone is not enough without trained operators, maintenance and spare parts. That is why we combine distribution with agricultural drone services."
  },
  "a-propos.copy.notre-terrain-ce-sont-les-exploitations-cerealieres": {
    "fr": "Notre terrain, ce sont les exploitations céréalières des Hauts Plateaux, les palmeraies et vergers du Sud, les vignobles de l’Ouest et les périmètres maraîchers. Les contraintes y sont concrètes : des fenêtres de traitement courtes, des sols qui portent mal après la pluie, des arbres qu’on ne peut pas traiter depuis le sol, et des surfaces qui dépassent ce qu’un matériel roulant peut couvrir à temps.",
    "en": "We focus on cereal farms in the High Plateaus, date palm groves and orchards in the south, western vineyards and market gardens. They face practical constraints: short treatment windows, wet ground that cannot support vehicles, hard-to-reach tree canopies and areas that ground equipment struggles to cover in time."
  },
  "a-propos.copy.la-mission-dequip-drones-est-de-mener": {
    "fr": "« La mission d’Equip Drones est d’accompagner l’adoption de la technologie dans l’agriculture algérienne et de contribuer à l’autosuffisance alimentaire du pays. »",
    "en": "“Equip Drones' mission is to support technology adoption in Algerian agriculture and contribute to the country's food self-sufficiency.”"
  },
  "a-propos.copy.partenariat-et-agrement": {
    "fr": "Partenariat et agrément",
    "en": "Partnership and accreditation"
  },
  "a-propos.copy.deux-titres-qui-engagent-lentreprise": {
    "fr": "Deux engagements derrière notre accompagnement",
    "en": "Two commitments behind our service"
  },
  "a-propos.copy.ce-sont-les-deux-seules-choses-quun": {
    "fr": "Notre partenariat et notre agrément aident l’acheteur à comprendre l’origine du matériel et l’accompagnement proposé pendant sa durée d’utilisation.",
    "en": "Our partnership and accreditation help buyers understand the origin of their equipment and the support available throughout its working life."
  },
  "a-propos.copy.01-partenariat-dji": {
    "fr": "01 — PARTENARIAT DJI",
    "en": "01 — DJI PARTNERSHIP"
  },
  "a-propos.copy.partenaire-officiel-de-dji-en-algerie": {
    "fr": "Partenaire officiel de DJI en Algérie",
    "en": "Official DJI partner in Algeria"
  },
  "a-propos.copy.equip-drones-est-le-partenaire-officiel-de": {
    "fr": "Equip Drones est le distributeur officiel et agréé de DJI en Algérie. Le canal officiel donne accès aux pièces d’origine, aux mises à jour adaptées à la configuration et à l’assistance du constructeur. La couverture de garantie dépend du produit et des conditions applicables.",
    "en": "Equip Drones is DJI's official and authorised distributor in Algeria. The official distribution channel provides access to genuine parts, configuration-specific updates and manufacturer support. Warranty coverage depends on the product and the applicable terms."
  },
  "a-propos.copy.02-agrement-national": {
    "fr": "02 — AGRÉMENT NATIONAL",
    "en": "02 — NATIONAL ACCREDITATION"
  },
  "a-propos.copy.agreee-par-le-centre-national-des-systemes": {
    "fr": "Agréée par le Centre National des Systèmes d’Aéronefs Sans Pilote à bord",
    "en": "Accredited by the Centre National des Systèmes d’Aéronefs Sans Pilote à bord"
  },
  "a-propos.copy.equip-drones-est-la-premiere-compagnie-algerienne": {
    "fr": "Equip Drones se présente comme la première compagnie algérienne partenaire de DJI et agréée par le Centre National des Systèmes d’Aéronefs Sans Pilote à bord. Notre formation au pilotage agricole aborde le cadre d’exploitation et les responsabilités de l’opérateur. L’agrément ne remplace pas les autorisations nécessaires à chaque opération.",
    "en": "Equip Drones presents itself as the first Algerian company to partner with DJI and hold accreditation from the Centre National des Systèmes d’Aéronefs Sans Pilote à bord. Our agricultural pilot training covers the operating framework and the operator's responsibilities. Accreditation does not replace the authorisations required for an individual operation."
  },
  "a-propos.copy.notre-activite": {
    "fr": "Notre activité",
    "en": "Our work"
  },
  "a-propos.copy.ce-que-nous-faisons": {
    "fr": "Ce que nous faisons",
    "en": "What we do"
  },
  "a-propos.copy.equip-drones-fait-la-vente-de-drones": {
    "fr": "Equip Drones vend du matériel DJI et propose du conseil, de la formation, de la maintenance et de la réparation pour les drones agricoles. Une même équipe vous accompagne du choix du matériel à la révision d’inter-saison.",
    "en": "Equip Drones sells DJI equipment and provides advice, training, maintenance and repairs for agricultural drones. One team helps you from equipment selection through to off-season servicing."
  },
  "a-propos.copy.vente-et-conseil": {
    "fr": "Vente et conseil",
    "en": "Sales and advice"
  },
  "a-propos.copy.dimensionnement-de-lappareil-selon-la-surface-les": {
    "fr": "Dimensionnement de l’appareil selon la surface, les cultures, le relief et le nombre de passages annuels — accessoires et logistique de charge compris.",
    "en": "Equipment sizing based on area, crops, terrain and annual treatment frequency, including accessories and charging logistics."
  },
  "a-propos.copy.formation-des-pilotes": {
    "fr": "Formation des pilotes",
    "en": "Pilot training"
  },
  "a-propos.copy.cadre-reglementaire-mise-en-uvre-planification-de": {
    "fr": "Cadre d’exploitation, mise en œuvre, planification de mission, réglages de traitement et procédures d’urgence, avec une formation pratique sur l’appareil.",
    "en": "Operating rules, setup, mission planning, application settings and emergency procedures, with practical training on the aircraft."
  },
  "a-propos.copy.maintenance-et-reparation": {
    "fr": "Maintenance et réparation",
    "en": "Maintenance and repair"
  },
  "a-propos.copy.diagnostic-par-les-journaux-de-vol-reparation": {
    "fr": "Diagnostic par les journaux de vol, réparation, contrôle des batteries et révision complète entre deux campagnes.",
    "en": "Flight-log diagnostics, repairs, battery checks and full servicing between seasons."
  },
  "a-propos.copy.pieces-detachees": {
    "fr": "Pièces détachées",
    "en": "Spare parts"
  },
  "a-propos.copy.pieces-dji-dorigine-referencees-pour-la-version": {
    "fr": "Pièces DJI d’origine référencées pour la version exacte de votre appareil : usure, batteries, pompes, buses, modules RTK.",
    "en": "Genuine DJI parts matched to your exact equipment version: wear parts, batteries, pumps, nozzles and RTK modules."
  },
  "a-propos.copy.la-filiere": {
    "fr": "La filière",
    "en": "The industry"
  },
  "a-propos.copy.une-technologie-deja-eprouvee-a-grande-echelle": {
    "fr": "Une technologie utilisée à grande échelle",
    "en": "Technology used at scale"
  },
  "a-propos.copy.le-drone-agricole-nest-plus-une-experimentation": {
    "fr": "Les drones agricoles sont utilisés pour la pulvérisation, l’épandage et la cartographie dans de nombreuses régions agricoles. Leur adoption à grande échelle montre leur potentiel, mais la fiabilité et la productivité dépendent du matériel, des conditions d’exploitation, de la formation et de l’entretien.",
    "en": "Agricultural drones are used for spraying, spreading and crop mapping across many farming regions. Large-scale adoption demonstrates their potential, but reliability and productivity still depend on equipment selection, operating conditions, training and maintenance."
  },
  "a-propos.copy.lenjeu-en-algerie-nest-donc-pas-de": {
    "fr": "En Algérie, l’adoption repose sur un accompagnement concret : disponibilité du matériel, opérateurs formés et entretien local, pour développer les compétences campagne après campagne.",
    "en": "In Algeria, adoption depends on practical support: equipment availability, trained operators and local maintenance, so farms can build their capabilities season after season."
  },
  "a-propos.copy.500-m-ha": {
    "fr": "500 M ha",
    "en": "500 M ha"
  },
  "a-propos.copy.surfaces-traitees-par-drone-dans-le-monde": {
    "fr": "Hectares traités dans le monde — repère historique de filière",
    "en": "Hectares treated worldwide — historical industry figure"
  },
  "a-propos.copy.drones-agricoles-en-service-dans-le-monde": {
    "fr": "Drones agricoles en service — repère historique de filière",
    "en": "Agricultural drones in service — historical industry figure"
  },
  "a-propos.copy.chiffres-de-la-filiere-mondiale-du-drone": {
    "fr": "Repères historiques de la filière mondiale ; ils ne décrivent ni l’activité ni le stock actuel d’Equip Drones.",
    "en": "Historical worldwide industry figures; these do not describe Equip Drones' activity or current inventory."
  },
  "a-propos.copy.contact": {
    "fr": "Contact",
    "en": "Contact"
  },
  "a-propos.copy.parlons-de-votre-projet": {
    "fr": "Parlons de votre projet",
    "en": "Let's discuss your project"
  },
  "a-propos.copy.telephone-whatsapp-ou-e-mail-choisissez-le": {
    "fr": "Téléphone, WhatsApp ou e-mail : choisissez le canal qui vous convient. Pour des produits et des quantités précis, la page devis vous aide à préparer votre liste de matériel.",
    "en": "Choose the channel that suits you: phone, WhatsApp or email. For specific products and quantities, the quote page helps you prepare your equipment list."
  },
  "a-propos.copy.nous-joindre-directement": {
    "fr": "Nous joindre directement",
    "en": "Contact us directly"
  },
  "a-propos.copy.info-equipdrones-com": {
    "fr": "info@equipdrones.com",
    "en": "info@equipdrones.com"
  },
  "a-propos.copy.sarl-equip-drones-distributeur-agree-officiel-et": {
    "fr": "SARL Equip Drones — distributeur agréé et officiel de DJI en Algérie.",
    "en": "SARL Equip Drones — authorised and official DJI distributor in Algeria."
  },
  "a-propos.copy.preparer-une-demande-de-devis": {
    "fr": "Préparer une demande de devis →",
    "en": "Prepare a quote request →"
  },
  "a-propos.copy.nous-suivre": {
    "fr": "Nous suivre",
    "en": "Follow us"
  },
  "a-propos.copy.nous-ecrire": {
    "fr": "Nous écrire",
    "en": "Write to us"
  },
  "a-propos.copy.ce-formulaire-ne-transmet-rien-a-un": {
    "fr": "Préparez votre message ici, puis envoyez-le depuis WhatsApp ou votre messagerie. Il ne sera transmis qu’après votre confirmation dans cette application.",
    "en": "Prepare your message here, then send it from WhatsApp or your email application. Your message is not sent until you confirm it in that application."
  },
  "a-propos.copy.indiquez-au-moins-un-e-mail-ou": {
    "fr": "Indiquez au moins un e-mail ou un numéro de téléphone pour que nous puissions vous répondre.",
    "en": "Enter an email address or phone number so we can reply."
  },
  "a-propos.meta.description": {
    "fr": "SARL Equip Drones, distributeur officiel et agréé de DJI en Algérie. Vente de drones agricoles, conseil, formation des pilotes, maintenance et pièces d’origine.",
    "en": "SARL Equip Drones, official and authorised DJI distributor in Algeria. Agricultural drone sales, advice, pilot training, maintenance and genuine parts."
  },
  "a-propos.a11y.drapeau-algerien": {
    "fr": "Drapeau algérien",
    "en": "Algerian flag"
  },
  "a-propos.a11y.technicien-pilotant-un-drone-de-pulverisation-au": {
    "fr": "Technicien pilotant un drone de pulvérisation au coucher du soleil",
    "en": "Operator flying an agricultural spraying drone at sunset"
  },
  "agriculture.copy.dji-agriculture-drones-agricoles-agras-en-algerie": {
    "fr": "DJI Agriculture — Drones Agricoles Agras en Algérie | Equip Drones",
    "en": "DJI Agriculture — Agras Agricultural Drones in Algeria | Equip Drones"
  },
  "agriculture.copy.solutions-agricoles-dji-agras": {
    "fr": "Solutions agricoles <span class=\"accent\">DJI Agras</span>",
    "en": "Agricultural solutions with <span class=\"accent\">DJI Agras</span>"
  },
  "agriculture.copy.pulverisation-ultra-ciblee-epandage-grand-debit-et": {
    "fr": "Pulvérisation de précision, épandage à grande capacité et cartographie multispectrale. Choisissez un équipement adapté à vos cultures, à vos surfaces et à vos objectifs de gestion des intrants.",
    "en": "Precision spraying, high-capacity spreading and multispectral mapping. Choose equipment suited to your crops, working area and input-management goals."
  },
  "agriculture.copy.cycle-operationnel": {
    "fr": "Cycle opérationnel →",
    "en": "Operating cycle →"
  },
  "agriculture.copy.charge-utile-maximale-agras-t70p": {
    "fr": "Charge utile maximale (Agras T70P)",
    "en": "Maximum payload (Agras T70P)"
  },
  "agriculture.copy.debit-de-travail-en-grande-culture": {
    "fr": "Débit de chantier — selon les conditions d’exploitation",
    "en": "Field work rate — depends on operating conditions"
  },
  "agriculture.copy.vol-entierement-automatique": {
    "fr": "Autopilote",
    "en": "Autopilot"
  },
  "agriculture.copy.itineraires-planifies-et-execution-autonome": {
    "fr": "Itinéraires planifiés et exécution autonome",
    "en": "Planned routes with autonomous execution"
  },
  "agriculture.copy.radiocommande-intelligente": {
    "fr": "Contrôleur intelligent",
    "en": "Smart Controller"
  },
  "agriculture.copy.pilotage-et-suivi-du-chantier": {
    "fr": "Planification du vol, pilotage et suivi",
    "en": "Flight planning, control and monitoring"
  },
  "agriculture.copy.methodologie-agricole": {
    "fr": "Organisation du chantier",
    "en": "Field operations"
  },
  "agriculture.copy.decouvrez-le-cycle-d-operation-a-4": {
    "fr": "Découvrez un cycle d’exploitation à quatre batteries",
    "en": "Explore a four-battery operating cycle"
  },
  "agriculture.copy.recharge-ultra-rapide-10-min-par-groupe": {
    "fr": "Planifiez la rotation des batteries et les équipements de charge compatibles pour réduire l’attente entre les vols.",
    "en": "Plan battery rotation and compatible charging equipment to reduce time between flights."
  },
  "agriculture.copy.decouvrir-le-schema": {
    "fr": "Découvrir le schéma →",
    "en": "View the cycle →"
  },
  "agriculture.copy.catalogue-agriculture": {
    "fr": "Catalogue Agriculture",
    "en": "Agricultural catalogue"
  },
  "agriculture.copy.drones-de-pulverisation-epandage-cartographie": {
    "fr": "Drones de pulvérisation, d’épandage et de cartographie",
    "en": "Drones for spraying, spreading and mapping"
  },
  "agriculture.copy.ouvrir-le-comparateur-complet": {
    "fr": "Ouvrir le comparateur complet →",
    "en": "Open the full comparison →"
  },
  "agriculture.copy.aucun-drone-agricole-ne-correspond-a-cette": {
    "fr": "Aucun drone agricole ne correspond à cette sélection.",
    "en": "No agricultural drones match this selection."
  },
  "agriculture.copy.reinitialiser-les-filtres": {
    "fr": "Réinitialiser les filtres",
    "en": "Reset filters"
  },
  "agriculture.copy.support-technique-local": {
    "fr": "Support technique local",
    "en": "Local technical support"
  },
  "agriculture.copy.l-ecosysteme-agricole-equip-drones": {
    "fr": "L’accompagnement agricole Equip Drones",
    "en": "Agricultural support from Equip Drones"
  },
  "agriculture.copy.01-conseil": {
    "fr": "01 — CONSEIL",
    "en": "01 — ADVICE"
  },
  "agriculture.copy.choix-d-appareils": {
    "fr": "Choix d'appareils",
    "en": "Choosing your equipment"
  },
  "agriculture.copy.nous-analysons-vos-besoins-cultures-relief-rotation": {
    "fr": "Nous analysons vos besoins (cultures, relief, rotation) pour déterminer le modèle et les accessoires adaptés à votre projet.",
    "en": "We review your crops, terrain and operating cycle to identify the model and accessories suited to your project."
  },
  "agriculture.copy.02-formation-pilotes": {
    "fr": "02 — FORMATION PILOTES",
    "en": "02 — PILOT TRAINING"
  },
  "agriculture.copy.prise-en-main-securite": {
    "fr": "Prise en main et sécurité",
    "en": "Getting started and working safely"
  },
  "agriculture.copy.formation-pratique-de-vos-operateurs-aux-plans": {
    "fr": "Formation pratique de vos opérateurs aux plans de vol automatisés, à l'étalonnage des buses centrifuges et aux protocoles d'entretien quotidien.",
    "en": "Practical operator training in automated flight plans, centrifugal nozzle calibration and daily maintenance procedures."
  },
  "agriculture.copy.03-atelier-pieces": {
    "fr": "03 — ATELIER & PIÈCES",
    "en": "03 — WORKSHOP AND PARTS"
  },
  "agriculture.copy.continuite-de-chantier": {
    "fr": "Continuité de chantier",
    "en": "Keeping work moving"
  },
  "agriculture.copy.stock-permanent-d-helices-bras-moteurs-pompes": {
    "fr": "Hélices, bras, moteurs, pompes et buses DJI d’origine, avec un accompagnement local pour limiter l’immobilisation. La disponibilité des pièces et le délai d’intervention sont confirmés pour chaque demande.",
    "en": "Genuine DJI propellers, arms, motors, pumps and nozzles, with local support to help reduce downtime. Part availability and repair times are confirmed for each request."
  },
  "agriculture.copy.pret-a-moderniser-l-agriculture-en-algerie": {
    "fr": "Prêt à équiper votre exploitation ?",
    "en": "Ready to equip your farm?"
  },
  "agriculture.copy.contactez-nos-conseillers-techniques-agricoles-pour-recevoir": {
    "fr": "Échangez avec nos conseillers techniques agricoles pour évaluer vos besoins et préparer un devis adapté.",
    "en": "Discuss your project with our agricultural technical advisers to assess your needs and prepare a tailored quote."
  },
  "agriculture.copy.demander-un-devis-agricole": {
    "fr": "Demander un devis agricole",
    "en": "Request an agricultural quote"
  },
  "agriculture.copy.explorer-les-applications-par-culture": {
    "fr": "Explorer les applications par culture",
    "en": "Explore applications by crop"
  },
  "agriculture.meta.description": {
    "fr": "Gamme complète des drones agricoles DJI Agras distribués en Algérie par SARL Equip Drones : T55, T70P, T25P, Mavic 3M. Pulvérisation, épandage et cartographie.",
    "en": "DJI Agras agricultural drones distributed in Algeria by SARL Equip Drones: T55, T70P, T25P and Mavic 3M. Spraying, spreading and mapping."
  },
  "agriculture.a11y.drone-dji-agras-en-operation-de-pulverisation": {
    "fr": "Drone DJI Agras en opération de pulvérisation agricole",
    "en": "DJI Agras drone spraying crops"
  },
  "agriculture.a11y.points-forts-agricoles": {
    "fr": "Points forts agricoles",
    "en": "Agricultural capabilities"
  },
  "applications.copy.applications-par-secteur-equip-drones": {
    "fr": "Applications par secteur — Equip Drones",
    "en": "Applications by sector — Equip Drones"
  },
  "applications.copy.applications-par-secteur": {
    "fr": "Applications par secteur",
    "en": "Applications by sector"
  },
  "applications.copy.un-drone-na-dinteret-que-la-ou": {
    "fr": "Un drone est utile lorsqu’il répond à un besoin que le matériel existant ne couvre pas, ou pas assez vite. Découvrez les contraintes du terrain, le rôle possible du drone et les modèles DJI proposés comme point de départ pour chaque secteur.",
    "en": "A drone is useful when it solves a problem that existing equipment cannot address, or cannot address quickly enough. Explore the field constraints, the role a drone can play and suggested DJI models for each sector."
  },
  "applications.copy.500-m-ha": {
    "fr": "500 M ha",
    "en": "500 M ha"
  },
  "applications.copy.surfaces-agricoles-traitees-par-drone-dans-le": {
    "fr": "Hectares traités dans le monde — repère historique de filière",
    "en": "Hectares treated worldwide — historical industry figure"
  },
  "applications.copy.drones-agricoles-en-service-dans-le-monde": {
    "fr": "Drones agricoles en service — repère historique de filière",
    "en": "Agricultural drones in service — historical industry figure"
  },
  "applications.copy.appareils-dji-references-a-notre-catalogue": {
    "fr": "Appareils DJI référencés à notre catalogue",
    "en": "DJI aircraft listed in our catalogue"
  },
  "applications.copy.secteurs-dapplication-traites-sur-cette-page": {
    "fr": "Secteurs d’application traités sur cette page",
    "en": "Application sectors covered on this page"
  },
  "applications.copy.les-deux-premiers-chiffres-decrivent-la-filiere": {
    "fr": "Les deux premiers chiffres sont des repères historiques de la filière mondiale, pas les résultats d’exploitation d’Equip Drones.",
    "en": "The first two figures are historical worldwide industry figures, not Equip Drones' operating results."
  },
  "applications.copy.traiter-de-grandes-surfaces-dans-une-fenetre": {
    "fr": "Traiter de grandes surfaces dans une fenêtre de quelques jours",
    "en": "Covering large areas in a short treatment window"
  },
  "applications.copy.sur-les-hauts-plateaux-la-cerealiculture-se": {
    "fr": "Sur les Hauts Plateaux, la céréaliculture se joue sur des fenêtres d’intervention courtes. L’application d’un fongicide contre la rouille ou la septoriose doit être adaptée au stade de la culture : montaison, dernière feuille ou épiaison, notamment.",
    "en": "Cereal farming in the High Plateaus involves short treatment windows. Fungicide application for rust or septoria must be timed to the crop's growth stage, such as stem extension, flag leaf or heading."
  },
  "applications.copy.le-probleme": {
    "fr": "LE PROBLÈME",
    "en": "THE PROBLEM"
  },
  "applications.copy.cest-le-sol-qui-fixe-le-calendrier": {
    "fr": "C’est le sol qui fixe le calendrier",
    "en": "Ground conditions dictate the schedule"
  },
  "applications.copy.quand-la-fenetre-agronomique-tombe-apres-un": {
    "fr": "Lorsqu’une fenêtre de traitement suit de fortes pluies, un sol gorgé d’eau peut empêcher le passage du pulvérisateur. Les roues risquent de laisser des ornières, de tasser le sol et d’abîmer les cultures. Attendre le ressuyage peut retarder le traitement, tandis que les grandes surfaces compliquent la couverture à temps.",
    "en": "When a treatment window follows heavy rain, waterlogged ground can prevent a sprayer from entering the field. Wheels can leave ruts, compact soil and damage emerging crops. Waiting for the ground to dry may delay treatment, while large areas make timely coverage harder."
  },
  "applications.copy.ce-que-fait-le-drone": {
    "fr": "CE QUE FAIT LE DRONE",
    "en": "HOW A DRONE HELPS"
  },
  "applications.copy.il-ne-touche-jamais-le-sol": {
    "fr": "Il travaille au-dessus de la culture",
    "en": "It works above the crop"
  },
  "applications.copy.lappareil-decolle-du-bord-de-champ-et": {
    "fr": "L’appareil décolle du bord du champ et traite sans rouler sur la culture. Selon le modèle et les réglages de mission, le suivi du relief et les commandes d’application aident à maintenir la couverture. La pulvérisation à bas volume peut réduire l’eau à acheminer jusqu’au champ.",
    "en": "The aircraft takes off from the field edge and treats the crop without driving over it. Depending on the model and mission settings, terrain-following and application controls help maintain coverage. Low-volume spraying can reduce the water that needs to be transported to the field."
  },
  "applications.copy.ce-que-loperateur-y-gagne-la-fenetre": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> davantage de souplesse lorsque le sol humide empêche l’accès des véhicules, sans ornières ni dégâts liés au passage des roues. La météo, les exigences du produit et les conditions de vol restent déterminantes. Un équipement compatible permet aussi l’épandage de granulés ou de semences.",
    "en": "<span class=\"strong\">What the operator gains:</span> more flexibility when wet ground prevents vehicle access, without wheel ruts or crop damage from traffic. Weather, product requirements and flight conditions still determine when treatment is suitable. Compatible equipment can also spread granular fertiliser or seed."
  },
  "applications.copy.modeles-recommandes": {
    "fr": "Modèles recommandés",
    "en": "Suggested models"
  },
  "applications.copy.voir-tout-le-catalogue": {
    "fr": "Voir tout le catalogue →",
    "en": "View the full catalogue →"
  },
  "applications.copy.atteindre-la-couronne-dun-palmier-sans-y": {
    "fr": "Atteindre la couronne d’un palmier sans y monter",
    "en": "Reaching a palm canopy without climbing the tree"
  },
  "applications.copy.dans-les-palmeraies-du-sud-le-traitement": {
    "fr": "Dans les palmeraies du Sud, les traitements contre le boufaroua ou la pyrale des dattes doivent atteindre la couronne et les régimes, parmi les parties les moins accessibles de l’arbre.",
    "en": "In southern date palm groves, treatments for date palm mites or date moths need to reach the canopy and fruit bunches, among the least accessible parts of the tree."
  },
  "applications.copy.un-travail-en-hauteur-lent-et-dangereux": {
    "fr": "Un travail en hauteur, lent et exigeant",
    "en": "Slow, demanding work at height"
  },
  "applications.copy.depuis-le-sol-une-lance-perd-lessentiel": {
    "fr": "Traiter un palmier adulte depuis le sol peut rendre difficile l’accès au centre de la couronne. La montée à l’arbre est pénible et expose aux chutes. Dans les vergers, des rangs serrés et l’irrigation peuvent aussi limiter l’accès du matériel au sol.",
    "en": "Spraying a mature palm from the ground can make it difficult to reach the centre of the canopy. Climbing trees is physically demanding and exposes workers to falls. In orchards, narrow rows and irrigation can also restrict access for ground equipment."
  },
  "applications.copy.il-traite-par-le-dessus": {
    "fr": "Il traite par le dessus",
    "en": "It applies treatment from above"
  },
  "applications.copy.le-souffle-des-helices-ouvre-la-couronne": {
    "fr": "Le souffle des hélices peut aider à faire pénétrer la pulvérisation dans la couronne. Un vol planifié permet de couvrir les arbres sans que les opérateurs y montent et réduit la dépendance à l’accès au sol. La couverture doit être contrôlée selon la culture, la densité du feuillage, le produit et les réglages.",
    "en": "Rotor airflow can help move spray into the canopy. A planned flight can cover trees without requiring operators to climb them, while reducing dependence on ground access. Coverage must be checked for the crop, canopy density, product and application settings."
  },
  "applications.copy.ce-que-loperateur-y-gagne-le-travail": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> moins d’interventions en hauteur et une autre façon d’organiser le traitement de la palmeraie. La couverture et le débit réels dépendent des arbres, du terrain et des conditions d’exploitation.",
    "en": "<span class=\"strong\">What the operator gains:</span> fewer tasks at height and a way to organise treatment across the grove. Actual coverage and work rate depend on the trees, terrain and operating conditions."
  },
  "applications.copy.des-rangs-en-pente-une-pression-mildiou": {
    "fr": "Des rangs en pente, une pression mildiou qui n’attend pas",
    "en": "Sloping rows and disease pressure that will not wait"
  },
  "applications.copy.une-grande-partie-du-vignoble-algerien-est": {
    "fr": "Les vignobles en coteaux peuvent être difficiles d’accès après la pluie. Le mildiou et l’oïdium progressent rapidement dans des conditions favorables : le calendrier de traitement reste essentiel.",
    "en": "Hillside vineyards can be difficult to access after rain. Downy mildew and powdery mildew can spread quickly in favourable conditions, making treatment timing important."
  },
  "applications.copy.la-pente-au-pire-moment": {
    "fr": "La pente complique l’accès au bon moment",
    "en": "Slopes complicate timely access"
  },
  "applications.copy.le-moment-ou-il-faut-absolument-repasser": {
    "fr": "Un sol glissant, les dévers et les tournières humides peuvent compliquer le travail du tracteur et augmenter le risque de renversement. Les rangs étroits rendent aussi le placement du produit délicat, tandis que les passages répétés peuvent tasser l’inter-rang.",
    "en": "Slippery ground, side slopes and wet headlands can make tractor work difficult and increase rollover risk. Narrow rows also make spray placement challenging, and repeated traffic can compact the soil between vines."
  },
  "applications.copy.la-pente-ne-change-rien-pour-lui": {
    "fr": "Il dépend moins de l’adhérence au sol",
    "en": "It reduces dependence on ground traction"
  },
  "applications.copy.le-drone-na-pas-de-probleme-dadherence": {
    "fr": "Un drone peut travailler au-dessus de rangs en pente avec les fonctions de suivi du relief adaptées au modèle. Le souffle des hélices peut aider à déplacer le produit dans le feuillage, mais le dépôt et la dérive doivent être évalués. Un plan cartographié peut cibler certaines zones lorsque cela convient au traitement.",
    "en": "A drone can work above sloping rows with terrain-following features appropriate to the model. Rotor airflow can help move spray through foliage, but deposition and drift must be assessed. A mapped treatment plan can target specific areas where suitable."
  },
  "applications.copy.ce-que-loperateur-y-gagne-la-protection": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> une solution lorsque l’accès au sol est difficile, moins d’exposition au renversement du tracteur et moins d’eau à transporter sur les chemins contraints. L’intervention reste soumise à une météo sûre et à des conditions d’application adaptées.",
    "en": "<span class=\"strong\">What the operator gains:</span> an alternative when ground access is difficult, less exposure to tractor rollover and less spray water to move along difficult tracks. Work still depends on safe weather and suitable application conditions."
  },
  "applications.copy.piloter-un-bloc-de-serres-traiter-le": {
    "fr": "Observer les serres et traiter les cultures de plein champ",
    "en": "Monitoring greenhouses and treating outdoor crops"
  },
  "applications.copy.disons-le-franchement-un-multirotor-ne-vole": {
    "fr": "Les usages présentés ici concernent des vols extérieurs, au-dessus et autour des serres, plutôt que des vols à l’intérieur. Le drone peut aider à observer le site et à intervenir sur les cultures de plein champ voisines.",
    "en": "The applications described here concern outdoor flights above and around greenhouses, rather than flights inside them. Drones can help monitor the site and support work on nearby open-field crops."
  },
  "applications.copy.un-site-trop-vaste-pour-etre-vu": {
    "fr": "Un site difficile à inspecter entièrement à pied",
    "en": "A site too large to inspect easily on foot"
  },
  "applications.copy.une-exploitation-maraichere-ce-sont-des-dizaines": {
    "fr": "Une exploitation maraîchère peut associer des rangées de tunnels et des cultures irriguées en plein champ. Contrôler les bâches abîmées, les écarts de croissance ou les problèmes d’irrigation sur tout le site demande des visites répétées et du temps.",
    "en": "Market gardens may combine rows of polytunnels with irrigated outdoor crops. Checking damaged covers, uneven crop growth or irrigation problems across the whole site can require repeated, time-consuming visits."
  },
  "applications.copy.un-vol-de-controle-puis-un-vol": {
    "fr": "Observer, puis intervenir là où c’est nécessaire",
    "en": "Survey first, treat where needed"
  },
  "applications.copy.au-dessus-des-serres-une-camera-thermique": {
    "fr": "Des capteurs visuels, thermiques ou multispectraux adaptés peuvent révéler des écarts à vérifier au sol. Un drone de pulvérisation peut, séparément, traiter des parcelles extérieures difficiles d’accès et épandre de l’engrais ou des semences avec l’équipement approprié. Ces tâches nécessitent des appareils ou des configurations de capteurs différents.",
    "en": "Suitable visual, thermal or multispectral sensors can help identify differences that warrant a closer ground inspection. Separately, a spraying drone can treat outdoor plots where ground access is difficult and, with the right equipment, spread fertiliser or seed. These tasks require different aircraft or payload configurations."
  },
  "applications.copy.ce-que-loperateur-y-gagne-un-etat": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> des observations datées et géolocalisées pour orienter les inspections, ainsi qu’une autre façon de traiter le plein champ sans rouler sur le sol.",
    "en": "<span class=\"strong\">What the operator gains:</span> dated, geolocated observations to guide inspections and an additional way to treat outdoor crops without driving over the soil."
  },
  "applications.copy.voir-un-defaut-sur-un-ouvrage-sans": {
    "fr": "Inspecter un ouvrage en limitant les perturbations",
    "en": "Inspecting infrastructure with less disruption"
  },
  "applications.copy.lignes-de-transport-delectricite-canalisations-dhydrocarbures-conduites": {
    "fr": "Lignes électriques, canalisations, réseaux d’eau, postes et sites industriels traversent souvent des zones difficiles d’accès. Les premiers signes de dégradation peuvent être peu visibles depuis le sol.",
    "en": "Power lines, pipelines, water networks, substations and industrial sites often extend through hard-to-access areas. Early signs of damage can be difficult to spot from the ground."
  },
  "applications.copy.inspecter-coute-un-arret-un-acces-ou": {
    "fr": "Inspecter peut demander un accès spécifique ou un arrêt",
    "en": "Inspection can require access equipment or downtime"
  },
  "applications.copy.un-connecteur-qui-chauffe-un-isolateur-fissure": {
    "fr": "Un connecteur qui chauffe, un isolateur fissuré, une corrosion naissante ou un mouvement de terrain peuvent être difficiles à évaluer depuis une piste. L’inspection classique peut nécessiter de longues patrouilles, une consignation, une nacelle ou une montée sur l’ouvrage, avec du temps et une exposition au travail en hauteur.",
    "en": "A hot connector, cracked insulator, early corrosion or ground movement may be difficult to assess from an access road. Conventional inspections can require long patrols, isolation of equipment, elevated platforms or climbing, adding time and exposure to work at height."
  },
  "applications.copy.il-monte-a-hauteur-douvrage-louvrage-reste": {
    "fr": "Il place la caméra à hauteur de l’ouvrage",
    "en": "It brings the camera to the asset"
  },
  "applications.copy.la-camera-zoom-lit-letat-dun-isolateur": {
    "fr": "Une caméra zoom aide à examiner les détails depuis une distance adaptée ; une caméra thermique peut révéler des anomalies de température. Des images géolocalisées et horodatées facilitent la comparaison entre inspections. Des stations automatisées compatibles peuvent permettre des missions planifiées à distance, dans le cadre d’exploitation autorisé.",
    "en": "Zoom cameras help inspect details from a suitable distance, while thermal cameras can reveal temperature anomalies. Geolocated, timestamped images support comparisons between inspections. Compatible automated docks can support scheduled remote operations within the authorised operating framework."
  },
  "applications.copy.ce-que-loperateur-y-gagne-pas-de": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> moins de tâches en hauteur dans certains cas et un dossier d’images pour orienter la maintenance. Le maintien en service dépend de l’ouvrage et de la procédure d’inspection.",
    "en": "<span class=\"strong\">What the operator gains:</span> less need for some tasks at height and an image record to support maintenance decisions. Whether equipment can remain in service depends on the asset and inspection procedure."
  },
  "applications.copy.un-leve-continu-la-ou-le-terrain": {
    "fr": "Un levé continu là où le terrain se parcourt mal",
    "en": "Surveying terrain that is difficult to cross"
  },
  "applications.copy.perimetres-irrigues-carrieres-emprises-routieres-lotissements-regularisation": {
    "fr": "Périmètres irrigués, carrières, emprises routières, lotissements et projets fonciers ont besoin de données de levé. Le levé au sol reste important, mais chaque point prend du temps, surtout sur un terrain difficile.",
    "en": "Irrigation areas, quarries, road corridors, housing developments and land projects all need survey data. Ground surveying remains important, but collecting each point takes time, especially in difficult terrain."
  },
  "applications.copy.le-temps-par-point-et-le-terrain": {
    "fr": "Le temps par point, et le terrain qu’on ne parcourt pas",
    "en": "Time per point and hard-to-reach ground"
  },
  "applications.copy.un-front-de-taille-une-sebkha-un": {
    "fr": "Fronts de taille, sebkhas, talus instables et terrains accidentés peuvent être lents ou risqués à parcourir. Des observations trop espacées laissent des lacunes à interpoler ou imposent une nouvelle visite avant d’évaluer les volumes ou les limites de façon fiable.",
    "en": "Quarry faces, salt flats, unstable slopes and rough terrain can be slow or risky to survey on foot. Sparse observations may leave gaps that require interpolation or another site visit before volumes or boundaries can be assessed reliably."
  },
  "applications.copy.il-restitue-la-surface-pas-seulement-des": {
    "fr": "Il restitue une surface continue",
    "en": "It captures a continuous surface"
  },
  "applications.copy.un-vol-photogrammetrique-ou-lidar-produit-une": {
    "fr": "La photogrammétrie ou le LiDAR peuvent produire, après traitement, des orthophotographies, des modèles de terrain, des courbes de niveau et des nuages de points. Le RTK géoréférence les observations ; les points de contrôle et les vérifications indépendantes restent nécessaires à l’évaluation de la précision. Ces données peuvent servir aux terrassements, au suivi de chantier et à la cartographie.",
    "en": "Photogrammetry or LiDAR surveys can produce orthophotos, terrain models, contours and point clouds after processing. RTK-equipped aircraft georeference observations, while ground control and independent checks remain part of the accuracy workflow. The resulting data can support earthworks, progress monitoring and mapping."
  },
  "applications.copy.ce-que-loperateur-y-gagne-un-aller": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> une couverture plus large, des observations reproductibles et des livrables pour les études, sous réserve de la méthode de levé et des contrôles qualité.",
    "en": "<span class=\"strong\">What the operator gains:</span> broader site coverage, repeatable observations and deliverables for engineering workflows, subject to the survey method and quality checks."
  },
  "applications.copy.une-vue-densemble-avant-dengager-les-equipes": {
    "fr": "Une vue d’ensemble avant d’engager les équipes",
    "en": "An overview before committing teams"
  },
  "applications.copy.feu-de-vegetation-en-ete-recherche-dune": {
    "fr": "Feux de végétation, recherches de personnes, accidents routiers et grands sites industriels partagent une difficulté : les équipes au sol ne voient pas facilement toute la situation.",
    "en": "Wildfires, missing-person searches, road incidents and large industrial sites share a challenge: teams on the ground cannot easily see the whole situation."
  },
  "applications.copy.decider-sans-voir": {
    "fr": "Décider avec une visibilité incomplète",
    "en": "Decisions based on incomplete visibility"
  },
  "applications.copy.les-equipes-engagees-travaillent-sur-des-informations": {
    "fr": "Les équipes peuvent manquer d’une vue claire du front de feu, des accès ou des points chauds restants. L’obscurité et la fumée limitent la visibilité, tandis que la reconnaissance au sol prend du temps lorsque la décision est urgente.",
    "en": "Teams may lack a clear view of a fire front, access routes or remaining hot spots. Darkness and smoke can limit visibility, while ground reconnaissance takes time when decisions are urgent."
  },
  "applications.copy.il-donne-limage-thermique-en-quelques-minutes": {
    "fr": "Il apporte une vue thermique aérienne",
    "en": "It provides an aerial thermal view"
  },
  "applications.copy.un-appareil-thermique-montre-ce-quaucune-equipe": {
    "fr": "Une caméra thermique adaptée peut aider à localiser des signatures de chaleur, des fronts de feu ou des points chauds résiduels, dans les limites de visibilité, de végétation et du capteur. La vidéo en direct apporte au poste de commandement une source d’information complémentaire aux observations au sol.",
    "en": "A suitable thermal camera can help locate heat signatures, fire edges or residual hot spots, subject to visibility, vegetation and sensor limits. Live video gives the command team another source of information alongside reports from the ground."
  },
  "applications.copy.ce-que-loperateur-y-gagne-une-reconnaissance": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> des observations lorsque l’accès au sol est difficile, des informations pour orienter les équipes et une vue enregistrée pour analyser l’intervention.",
    "en": "<span class=\"strong\">What the operator gains:</span> observations where ground access is difficult, information to help direct teams, and a recorded view for reviewing the response."
  },
  "applications.copy.cartographier-letat-reel-dune-parcelle-avant-de": {
    "fr": "Cartographier l’état réel d’une parcelle avant de décider",
    "en": "Mapping field variability before making decisions"
  },
  "applications.copy.un-manque-dazote-un-stress-hydrique-naissant": {
    "fr": "Un stress nutritif ou hydrique naissant peut être difficile à repérer par la seule observation visuelle. Les observations aériennes peuvent aider à prioriser les contrôles au sol avant que les pertes deviennent plus visibles.",
    "en": "Early nutrient or water stress can be difficult to identify consistently through visual checks alone. Aerial observations can help prioritise ground checks before losses become more apparent."
  },
  "applications.copy.on-echantillonne-quelques-points-on-extrapole-le": {
    "fr": "On échantillonne quelques points, on extrapole le reste",
    "en": "Sampling a few points and extrapolating the rest"
  },
  "applications.copy.a-pied-on-observe-une-bordure-et": {
    "fr": "Quelques observations peuvent manquer une zone sableuse, un défaut d’irrigation ou une levée irrégulière. Une dose uniforme risque alors d’apporter trop dans certaines zones et pas assez dans d’autres.",
    "en": "A few observations may miss sandy patches, uneven irrigation or variable establishment across a field. A uniform application rate can then supply too much in some areas and too little in others."
  },
  "applications.copy.il-rend-visibles-les-ecarts-avec-leurs": {
    "fr": "Il cartographie les différences dans la parcelle",
    "en": "It maps differences across the field"
  },
  "applications.copy.un-capteur-multispectral-enregistre-en-plus-du": {
    "fr": "Les capteurs multispectraux enregistrent des bandes visibles et non visibles réfléchies par la végétation. Les cartes d’indices révèlent des différences de couverture ou de vigueur. Des contrôles au sol et une interprétation agronomique sont nécessaires pour en établir la cause avant de préparer une carte de prescription pour un matériel d’application compatible.",
    "en": "Multispectral sensors record visible and non-visible bands reflected by vegetation. Processed index maps highlight differences in crop cover or vigour. Ground checks and agronomic interpretation are needed to establish their cause before turning them into a prescription map for compatible application equipment."
  },
  "applications.copy.ce-que-loperateur-y-gagne-un-diagnostic": {
    "fr": "<span class=\"strong\">Ce que l’opérateur y gagne :</span> des observations datées pour orienter les inspections et les décisions d’apport, ainsi qu’une base de comparaison entre passages et entre saisons.",
    "en": "<span class=\"strong\">What the operator gains:</span> dated observations to guide inspections and input decisions, plus a basis for comparing fields across visits and seasons."
  },
  "applications.copy.parlons-de-votre-parcellaire": {
    "fr": "Parlons de votre projet",
    "en": "Let's discuss your project"
  },
  "applications.copy.quel-appareil-pour-votre-exploitation": {
    "fr": "Quel équipement pour vos besoins ?",
    "en": "Which equipment fits your needs?"
  },
  "applications.copy.decrivez-nous-votre-surface-vos-cultures-et": {
    "fr": "Décrivez votre site, les tâches prévues et votre calendrier. Nous échangerons sur une configuration adaptée et préparerons un devis.",
    "en": "Tell us about your site, intended tasks and schedule. We will discuss a suitable configuration and prepare a quote."
  },
  "applications.meta.description": {
    "fr": "Céréaliculture, palmeraies, viticulture, maraîchage, inspection de réseaux, topographie : le problème réel du terrain, ce que le drone y change et les modèles DJI recommandés par Equip Drones.",
    "en": "Cereal farming, palm groves, vineyards, market gardening, infrastructure inspection and surveying: field constraints, drone applications and suggested DJI models from Equip Drones."
  },
  "applications.a11y.drone-de-pulverisation-au-travail-au-dessus": {
    "fr": "Drone de pulvérisation au travail au-dessus d’une parcelle en fin de journée",
    "en": "Spraying drone working over a field in the late afternoon"
  },
  "camera.copy.dji-camera-loisir-drones-photo-video-en": {
    "fr": "DJI Caméra & Loisir — Drones Photo & Vidéo en Algérie | Equip Drones",
    "en": "DJI Camera Drones — Aerial Photo and Video in Algeria | Equip Drones"
  },
  "camera.copy.drones-camera-creation-video": {
    "fr": "Drones caméra pour la <span class=\"accent\">vidéo aérienne</span>",
    "en": "Camera drones for <span class=\"accent\">aerial video</span>"
  },
  "camera.copy.stabilite-de-vol-qualite-dimage-et-technologies": {
    "fr": "Les drones caméra DJI proposent des solutions pour les débutants comme pour les créateurs expérimentés. Comparez la qualité d’image, la stabilisation, les formats d’enregistrement et les aides au vol du modèle choisi.",
    "en": "DJI camera drones offer options for beginners and experienced creators. Compare image quality, stabilisation, recording formats and flight assistance for the specific model you choose."
  },
  "camera.copy.video-4k": {
    "fr": "Vidéo 4K",
    "en": "4K video"
  },
  "camera.copy.qualite-dimage-exceptionnelle": {
    "fr": "Qualité d’image de niveau professionnel",
    "en": "Professional grade image quality"
  },
  "camera.copy.legers": {
    "fr": "Transportable",
    "en": "Portable"
  },
  "camera.copy.compacts-et-faciles-a-transporter": {
    "fr": "Des modèles légers et compacts pour le voyage",
    "en": "Light and compact models for travel"
  },
  "camera.copy.securitaires": {
    "fr": "Assistance au vol",
    "en": "Flight assistance"
  },
  "camera.copy.detection-intelligente-des-obstacles": {
    "fr": "Vol en sécurité pour les débutants",
    "en": "Safe flight for beginners"
  },
  "camera.copy.30-a-50-min": {
    "fr": "Jusqu’à 52 min",
    "en": "Up to 52 min"
  },
  "camera.copy.autonomie-de-vol-par-batterie": {
    "fr": "Autonomie de vol",
    "en": "Flight time"
  },
  "camera.copy.photo-video-aerienne": {
    "fr": "Photo et vidéo aériennes",
    "en": "Aerial photography and video"
  },
  "camera.copy.tous-les-drones-camera-dji": {
    "fr": "Drones caméra DJI",
    "en": "DJI camera drones"
  },
  "camera.copy.comparer-les-appareils": {
    "fr": "Comparer les appareils →",
    "en": "Compare aircraft →"
  },
  "camera.copy.aucun-appareil-ne-correspond-a-cette-selection": {
    "fr": "Aucun appareil ne correspond à cette sélection.",
    "en": "No aircraft match this selection."
  },
  "camera.copy.reinitialiser-les-filtres": {
    "fr": "Réinitialiser les filtres",
    "en": "Reset filters"
  },
  "camera.copy.trouvez-le-modele-adapte-a-votre-usage": {
    "fr": "Trouvez le modèle adapté à votre usage",
    "en": "Find the model for your needs"
  },
  "camera.copy.a-chaque-projet-son-aeronef": {
    "fr": "Un équipement pour votre projet",
    "en": "Equipment for your project"
  },
  "camera.copy.voyage-nomade": {
    "fr": "VOYAGE & NOMADE",
    "en": "TRAVEL AND PORTABILITY"
  },
  "camera.copy.dji-mini-neo-series": {
    "fr": "Séries DJI Mini et Neo",
    "en": "DJI Mini and Neo series"
  },
  "camera.copy.moins-de-249-grammes-ultra-portables-pliables": {
    "fr": "Des appareils compacts pour le voyage et les usages quotidiens. Le poids, le pliage, les modes de commande et les fonctions disponibles dépendent du modèle et de la batterie.",
    "en": "Compact aircraft for travel and everyday use. Weight, folding design, control methods and available features depend on the model and battery."
  },
  "camera.copy.pro-createurs": {
    "fr": "PRO & CRÉATEURS",
    "en": "PROFESSIONALS AND CREATORS"
  },
  "camera.copy.dji-air-mavic-series": {
    "fr": "Séries DJI Air et Mavic",
    "en": "DJI Air and Mavic series"
  },
  "camera.copy.double-et-triple-capteurs-optiques-video-10": {
    "fr": "Des systèmes d’image pour les travaux photo et vidéo exigeants. Le nombre de caméras, les profils colorimétriques, la détection des obstacles et la transmission varient selon le modèle.",
    "en": "Imaging systems for demanding photo and video work. Camera count, colour profiles, obstacle sensing and transmission capabilities vary by model."
  },
  "camera.copy.immersion-fpv": {
    "fr": "IMMERSION FPV",
    "en": "IMMERSIVE FPV"
  },
  "camera.copy.vol-en-vue-subjective-avec-casque-immersif": {
    "fr": "Vol en vue subjective avec casque et radiocommande compatibles. Les protections d’hélices aident à protéger l’appareil, mais ne remplacent pas une préparation sûre du vol.",
    "en": "First-person flight with compatible goggles and controllers. Propeller guards help protect the aircraft, but do not remove the need for safe flight planning."
  },
  "camera.copy.photographes-medias-createurs": {
    "fr": "Photographes, médias & créateurs",
    "en": "Photographers, media teams and creators"
  },
  "camera.copy.equipez-votre-agence-de-production-media-ou": {
    "fr": "Équipez votre société de production, votre média ou votre club avec du matériel DJI officiel. La garantie suit les conditions applicables du constructeur.",
    "en": "Equip your production company, media team or club with official DJI equipment. Warranty coverage follows the applicable manufacturer terms."
  },
  "camera.copy.demander-un-devis": {
    "fr": "Demander un devis",
    "en": "Request a quote"
  },
  "camera.copy.nous-contacter": {
    "fr": "Nous contacter",
    "en": "Contact us"
  },
  "camera.meta.description": {
    "fr": "Drones caméra DJI distribués en Algérie : Mavic, Air, Mini, Neo, Avata, Flip et autres modèles. Comparez le matériel pour la photo et la vidéo aériennes.",
    "en": "DJI camera drones distributed in Algeria: Mavic, Air, Mini, Neo, Avata, Flip and other models. Compare equipment for aerial photography and video."
  },
  "camera.a11y.drone-camera-dji-en-vol-au-coucher": {
    "fr": "Drone caméra DJI en vol au coucher du soleil",
    "en": "DJI camera drone flying at sunset"
  },
  "camera.a11y.performances-photo-et-video": {
    "fr": "Performances photo et vidéo",
    "en": "Photography and video capabilities"
  },
  "catalogue.copy.catalogue-equip-drones": {
    "fr": "Catalogue — Equip Drones",
    "en": "Catalogue — Equip Drones"
  },
  "catalogue.copy.appareils-dji-professionnels-pulverisation-et-epandage-agricoles": {
    "fr": "Matériel DJI pour la pulvérisation et l’épandage agricoles, l’inspection, la topographie et la sécurité civile, distribué en Algérie par SARL Equip Drones. Les services de formation et de maintenance concernent les drones agricoles. <span>Chaque configuration fait l’objet d’un devis personnalisé ; aucun prix n’est affiché sur ce site.</span>",
    "en": "DJI equipment for agricultural spraying and spreading, inspection, surveying and public safety, distributed in Algeria by SARL Equip Drones. Training and maintenance services focus on agricultural drones. <span>Each configuration is quoted individually; no prices are displayed on this site.</span>"
  },
  "catalogue.copy.ces-nacelles-et-stations-se-montent-sur": {
    "fr": "Ces nacelles et stations se montent sur les appareils Entreprise compatibles. Elles s’ajoutent au devis comme un appareil ; les filtres ci-dessus ne portent que sur les appareils.",
    "en": "These payloads and stations work with compatible Enterprise aircraft. They can be added to a quote like an aircraft; the filters above apply only to aircraft."
  },
  "catalogue.meta.description": {
    "fr": "Catalogue des drones DJI professionnels distribués en Algérie par SARL Equip Drones : Agras agricoles, Matrice et Mavic Entreprise, charges utiles Zenmuse. Vente sur devis, sans prix affiché.",
    "en": "DJI professional drone catalogue in Algeria: Agras agricultural drones, Matrice and Mavic Enterprise aircraft, and Zenmuse payloads. Tailored quotations from SARL Equip Drones."
  },
  "comparateur.copy.comparateur-de-modeles-equip-drones": {
    "fr": "Comparateur de modèles — Equip Drones",
    "en": "Model comparison — Equip Drones"
  },
  "comparateur.copy.besoin-daide-pour-choisir": {
    "fr": "Besoin d’aide pour choisir ?",
    "en": "Need help choosing?"
  },
  "cycle-operationnel-agras.copy.cycle-operationnel-dji-agras-traitement-agricole-en": {
    "fr": "Cycle opérationnel DJI Agras — Organisation du chantier | Equip Drones",
    "en": "DJI Agras Operating Cycle — Field Operations | Equip Drones"
  },
  "cycle-operationnel-agras.copy.agriculture-methodologie-terrain": {
    "fr": "<span>Agriculture</span> — Organisation du chantier",
    "en": "<span>Agriculture</span> — Field workflow"
  },
  "cycle-operationnel-agras.copy.cycle-operationnel-dji-agras": {
    "fr": "Cycle opérationnel <span class=\"accent\">DJI Agras</span>",
    "en": "<span class=\"accent\">DJI Agras</span> operating cycle"
  },
  "cycle-operationnel-agras.copy.traitement-haute-performance-sans-interruption-de-chantier": {
    "fr": "Organisez les vols, le remplissage et la recharge comme un seul cycle de travail. Une rotation de quatre batteries peut réduire l’attente lorsque l’appareil, le chargeur et la source d’alimentation sont adaptés au chantier.",
    "en": "Plan flights, refilling and battery charging as one workflow. A four-battery rotation can reduce waiting time when the aircraft, charger and power source are correctly matched to the work."
  },
  "cycle-operationnel-agras.copy.voir-les-modeles-agras": {
    "fr": "Voir les modèles Agras",
    "en": "View Agras models"
  },
  "cycle-operationnel-agras.copy.architecture-du-flux-de-travail": {
    "fr": "Organisation du travail",
    "en": "Organising the workflow"
  },
  "cycle-operationnel-agras.copy.schema-global-du-cycle-operationnel": {
    "fr": "Le cycle opérationnel en un coup d’œil",
    "en": "The operating cycle at a glance"
  },
  "cycle-operationnel-agras.copy.de-la-sortie-de-vol-a-la": {
    "fr": "Suivez l’appareil du décollage à l’atterrissage, au remplissage et au remplacement de batterie, pendant que les batteries utilisées sont préparées pour le prochain vol.",
    "en": "Follow the aircraft from takeoff through landing, refilling and battery replacement, while used batteries are prepared for the next flight."
  },
  "cycle-operationnel-agras.copy.diagramme-officiel-du-cycle-operationnel-equip-drones": {
    "fr": "Exemple de cycle à quatre batteries. Les durées de charge et de vol dépendent du matériel et des conditions d’exploitation.",
    "en": "Example four-battery workflow. Charging and flight times depend on the equipment and operating conditions."
  },
  "cycle-operationnel-agras.copy.deroulement-pas-a-pas": {
    "fr": "Étape par étape",
    "en": "Step by step"
  },
  "cycle-operationnel-agras.copy.les-4-phases-de-la-rotation-continue": {
    "fr": "Les quatre phases du cycle opérationnel",
    "en": "Four stages of the operating cycle"
  },
  "cycle-operationnel-agras.copy.decollage-pulverisation-1015-min": {
    "fr": "Décollage et application",
    "en": "Takeoff and application"
  },
  "cycle-operationnel-agras.copy.l-aeronef-dji-agras-execute-automatiquement-son": {
    "fr": "L’appareil Agras suit le plan de mission avec les fonctions de positionnement et d’assistance du modèle choisi. Réglez la dose, la hauteur et la vitesse selon le travail. Les procédures d’atterrissage et de retour dépendent des paramètres de mission et de la batterie ou du produit restant.",
    "en": "The Agras aircraft follows the mission plan using the positioning and flight-assistance features of the selected model. Set the application rate, height and speed for the task. Landing and return procedures depend on the mission settings and remaining battery or material."
  },
  "cycle-operationnel-agras.copy.atterrissage-remplissage-express": {
    "fr": "Atterrissage et remplissage",
    "en": "Landing and refilling"
  },
  "cycle-operationnel-agras.copy.l-operateur-accueille-le-drone-sur-la": {
    "fr": "Posez l’appareil dans une zone d’avitaillement préparée. Remplissez la cuve de pulvérisation ou la trémie d’épandage en respectant les capacités et les procédures de manipulation du matériel et du produit appliqué.",
    "en": "Land in a prepared servicing area. Refill the spray tank or spreading hopper using the capacity limits and handling procedures for the equipment and material being applied."
  },
  "cycle-operationnel-agras.copy.changement-de-batterie-rapide": {
    "fr": "Remplacement de la batterie",
    "en": "Battery replacement"
  },
  "cycle-operationnel-agras.copy.la-batterie-dechargee-est-retiree-en-un": {
    "fr": "Remplacez la batterie utilisée par une batterie chargée compatible et effectuez les contrôles requis avant le prochain vol. Le temps de rotation dépend du remplissage, du matériel et de l’équipe.",
    "en": "Replace the used battery with a suitable charged battery and complete the required checks before the next flight. Turnaround time depends on the refill process, equipment and crew."
  },
  "cycle-operationnel-agras.copy.station-de-charge-inverter-rotation-4-batteries": {
    "fr": "Station de charge et rotation des batteries",
    "en": "Charging station and battery rotation"
  },
  "cycle-operationnel-agras.copy.la-batterie-retiree-est-placee-sur-le": {
    "fr": "Rechargez les batteries avec un équipement approuvé pour l’appareil et la batterie choisis. <strong>La durée dépend de la batterie, du chargeur, de l’alimentation, de la température et du niveau de charge.</strong> Une rotation de quatre batteries doit aussi prévoir le refroidissement et les manipulations sûres ; elle ne garantit pas une activité sans interruption.",
    "en": "Charge used batteries with equipment approved for the selected aircraft and battery. <strong>Charging time depends on the battery, charger, power supply, temperature and charge level.</strong> A four-battery rotation must also allow for cooling and safe handling; it does not guarantee uninterrupted operation."
  },

  "cycle-operationnel-agras.copy.gamme-dji-agras": {
    "fr": "Gamme DJI Agras",
    "en": "DJI Agras range"
  },
  "cycle-operationnel-agras.copy.drones-de-la-gamme-agricole": {
    "fr": "Modèles de drones agricoles",
    "en": "Agricultural drone models"
  },
  "cycle-operationnel-agras.copy.voir-le-catalogue-complet": {
    "fr": "Voir le catalogue complet →",
    "en": "View the full catalogue →"
  },
  "cycle-operationnel-agras.copy.equipez-votre-exploitation-d-un-pack-agras": {
    "fr": "Équipez votre exploitation d'un pack Agras complet",
    "en": "Equip your farm with a complete Agras package"
  },
  "cycle-operationnel-agras.copy.recevez-un-conseil-personnalise-sur-le-dimensionnement": {
    "fr": "Recevez un conseil personnalisé sur le dimensionnement des batteries, des chargeurs et des générateurs adaptés à votre surface.",
    "en": "Get advice on sizing compatible batteries, chargers and generators for your working area."
  },
  "cycle-operationnel-agras.meta.description": {
    "fr": "Organisez votre chantier DJI Agras en Algérie : vols, remplissage, rotation des batteries et équipements de charge compatibles. Un cycle adapté à votre exploitation.",
    "en": "Plan DJI Agras field operations in Algeria: flights, refilling, battery rotation and compatible charging equipment. A workflow tailored to your operation."
  },
  "cycle-operationnel-agras.a11y.drone-dji-agras-en-operation-de-pulverisation": {
    "fr": "Drone DJI Agras en opération de pulvérisation agricole",
    "en": "DJI Agras drone spraying crops"
  },
  "cycle-operationnel-agras.a11y.schema-du-cycle-operationnel-des-drones-dji": {
    "fr": "Cycle DJI Agras : décollage, application, atterrissage, remplacement de batterie, remplissage et recharge",
    "en": "DJI Agras workflow: takeoff, application, landing, battery replacement, refilling and charging"
  },
  "devis.copy.demande-de-devis-equip-drones": {
    "fr": "Demande de devis — Equip Drones",
    "en": "Quote request — Equip Drones"
  },
  "devis.copy.selectionnez-vos-appareils-renseignez-vos-coordonnees-puis": {
    "fr": "Sélectionnez vos appareils, renseignez vos coordonnées, puis transmettez votre demande par WhatsApp ou par e-mail. Nous revenons vers vous avec une proposition détaillée.",
    "en": "Select your equipment, enter your details, then send your prepared request through WhatsApp or email. We will reply with a detailed proposal."
  },
  "devis.copy.nom-complet": {
    "fr": "<span>Nom complet</span> <span class=\"req\">*</span>",
    "en": "<span>Full name</span> <span class=\"req\">*</span>"
  },
  "devis.copy.societe-exploitation": {
    "fr": "<span>Société / exploitation</span>",
    "en": "<span>Company / farm</span>"
  },
  "devis.copy.e-mail": {
    "fr": "<span>E-mail</span> <span class=\"req\">*</span>",
    "en": "<span>Email</span> <span class=\"req\">*</span>"
  },
  "devis.copy.telephone": {
    "fr": "<span>Téléphone</span> <span class=\"req\">*</span>",
    "en": "<span>Phone</span> <span class=\"req\">*</span>"
  },
  "devis.copy.wilaya": {
    "fr": "<span>Wilaya</span>",
    "en": "<span>Wilaya</span>"
  },
  "devis.copy.type-dactivite": {
    "fr": "<span>Type d’activité</span>",
    "en": "<span>Type of activity</span>"
  },
  "devis.copy.selectionnez-votre-activite": {
    "fr": "Sélectionnez votre activité",
    "en": "Select your activity"
  },
  "devis.copy.exploitation-agricole": {
    "fr": "Exploitation agricole",
    "en": "Farm"
  },
  "devis.copy.prestataire-de-services-agricoles": {
    "fr": "Prestataire de services agricoles",
    "en": "Agricultural service provider"
  },
  "devis.copy.bureau-detudes": {
    "fr": "Bureau d’études",
    "en": "Engineering consultancy"
  },
  "devis.copy.collectivite-ou-administration": {
    "fr": "Collectivité ou administration",
    "en": "Local authority or public administration"
  },
  "devis.copy.industrie-ou-energie": {
    "fr": "Industrie ou énergie",
    "en": "Industry or energy"
  },
  "devis.copy.autre": {
    "fr": "Autre",
    "en": "Other"
  },
  "devis.copy.superficie-a-traiter-ha": {
    "fr": "<span>Superficie à traiter (ha)</span>",
    "en": "<span>Area to treat (ha)</span>"
  },
  "devis.copy.message": {
    "fr": "<span>Message</span>",
    "en": "<span>Message</span>"
  },
  "devis.meta.description": {
    "fr": "Composez votre demande de devis DJI : sélectionnez vos appareils, indiquez vos coordonnées, puis envoyez-nous votre demande par WhatsApp ou par e-mail. SARL Equip Drones, distributeur officiel DJI en Algérie.",
    "en": "Prepare a DJI quote request: select equipment, enter your details and send your request via WhatsApp or email. SARL Equip Drones, official DJI distributor in Algeria."
  },
  "enterprise.copy.dji-entreprise-drones-professionnels-industriels-en-algerie": {
    "fr": "DJI Entreprise — Drones Professionnels & Industriels en Algérie | Equip Drones",
    "en": "DJI Enterprise — Professional and Industrial Drones in Algeria | Equip Drones"
  },
  "enterprise.copy.solutions-aeriennes-dji-entreprise": {
    "fr": "Solutions aériennes <span class=\"accent\">DJI Enterprise</span>",
    "en": "Aerial solutions from <span class=\"accent\">DJI Enterprise</span>"
  },
  "enterprise.copy.plateformes-industrielles-certifiees-ip55-pour-les-operations": {
    "fr": "Des équipements pour l’inspection d’infrastructures, la photogrammétrie, la sécurité civile et le transport de charges. Choisissez l’appareil et le capteur selon votre mission ; les indices de protection et les performances varient selon le modèle.",
    "en": "Equipment for infrastructure inspection, photogrammetry, public safety and cargo transport. Choose the aircraft and payload for your mission; protection ratings and performance vary by model."
  },
  "enterprise.copy.ip55": {
    "fr": "IP55",
    "en": "IP55"
  },
  "enterprise.copy.resistance-pluie-vent-et-poussieres-extremes": {
    "fr": "Indice de protection sur les modèles concernés",
    "en": "Protection rating on applicable models"
  },
  "enterprise.copy.vision-thermique": {
    "fr": "Vision thermique",
    "en": "Thermal Vision"
  },
  "enterprise.copy.capteur-thermique-sur-les-modeles": {
    "fr": "Capteur thermique sur les modèles concernés",
    "en": "Thermal sensor on select models"
  },
  "enterprise.copy.vision-nocturne": {
    "fr": "Vision nocturne",
    "en": "Night Vision"
  },
  "enterprise.copy.cameras-haute-resolution-et-vision-nocturne": {
    "fr": "Caméras haute résolution et vision nocturne",
    "en": "High Resolution and Night Vision Cameras"
  },
  "enterprise.copy.charges-utiles-jusqu-a-30-kg": {
    "fr": "Charge utile maximale (FlyCart 100)",
    "en": "Maximum payload (FlyCart 100)"
  },
  "enterprise.copy.jusqu-a-30-kg": {
    "fr": "100 kg",
    "en": "100 kg"
  },
  "enterprise.copy.flotte-entreprise": {
    "fr": "Flotte Entreprise",
    "en": "Enterprise aircraft"
  },
  "enterprise.copy.vecteurs-aeriens-plateformes-industrielles": {
    "fr": "Appareils et plateformes industriels",
    "en": "Industrial aircraft and platforms"
  },
  "enterprise.copy.ouvrir-le-comparateur": {
    "fr": "Ouvrir le comparateur →",
    "en": "Open the comparison →"
  },
  "enterprise.copy.aucun-appareil-entreprise-ne-correspond-a-cette": {
    "fr": "Aucun appareil entreprise ne correspond à cette sélection.",
    "en": "No Enterprise aircraft match this selection."
  },
  "enterprise.copy.reinitialiser-les-filtres": {
    "fr": "Réinitialiser les filtres",
    "en": "Reset filters"
  },
  "enterprise.copy.nacelles-interchangeables": {
    "fr": "Nacelles interchangeables",
    "en": "Interchangeable payloads"
  },
  "enterprise.copy.charges-utiles-zenmuse-stations-sol": {
    "fr": "Charges utiles Zenmuse et stations au sol",
    "en": "Zenmuse payloads and ground stations"
  },
  "enterprise.copy.nacelles-optiques-haute-resolution-capteurs-thermiques-radiometriques": {
    "fr": "Nacelles optiques haute résolution, capteurs thermiques radiométriques, LiDAR et stations RTK pour les appareils compatibles et les besoins de la mission.",
    "en": "High-resolution optical payloads, radiometric thermal sensors, LiDAR and RTK stations for compatible aircraft and mission requirements."
  },
  "enterprise.copy.missions-couvertes": {
    "fr": "Missions couvertes",
    "en": "Mission types"
  },
  "enterprise.copy.cas-d-usage-industriels-institutionnels": {
    "fr": "Applications industrielles et institutionnelles",
    "en": "Industrial and public-sector applications"
  },
  "enterprise.copy.inspection": {
    "fr": "INSPECTION",
    "en": "INSPECTION"
  },
  "enterprise.copy.reseaux-energie-ouvrages": {
    "fr": "Réseaux, Énergie & Ouvrages",
    "en": "Networks, energy and infrastructure"
  },
  "enterprise.copy.inspection-de-lignes-electriques-haute-tension-pylones": {
    "fr": "Inspection de lignes électriques, pylônes télécoms, panneaux solaires et structures industrielles en réduisant certaines tâches en hauteur. Les procédures du site déterminent si l’équipement peut rester en service.",
    "en": "Inspect power lines, telecom towers, solar panels and industrial structures while reducing some tasks at height. Site procedures determine whether equipment can remain in service."
  },
  "enterprise.copy.topographie": {
    "fr": "TOPOGRAPHIE",
    "en": "SURVEYING"
  },
  "enterprise.copy.geometres-mines-cadastre": {
    "fr": "Géomètres, Mines & Cadastre",
    "en": "Surveying, mining and land mapping"
  },
  "enterprise.copy.releves-topographiques-3d-calculs-volumetriques-de-carrieres": {
    "fr": "Relevés 3D, calculs de volumes en carrière et cartographie avec un équipement RTK compatible. La précision des livrables dépend de la méthode, du traitement et des contrôles au sol.",
    "en": "3D surveys, quarry volume calculations and mapping with compatible RTK equipment. Deliverable accuracy depends on the survey method, processing and ground checks."
  },
  "enterprise.copy.securite-fret": {
    "fr": "SÉCURITÉ CIVILE ET TRANSPORT",
    "en": "PUBLIC SAFETY AND CARGO"
  },
  "enterprise.copy.secours-surveillance-logistique": {
    "fr": "Secours, Surveillance & Logistique",
    "en": "Emergency response, monitoring and logistics"
  },
  "enterprise.copy.recherche-thermique-de-personnes-disparues-surveillance-d": {
    "fr": "Recherche thermique, surveillance des feux, coordination des secours et transport aérien de matériel d’urgence, selon les capacités de l’appareil et les conditions d’exploitation.",
    "en": "Thermal search, wildfire monitoring, response coordination and aerial transport of emergency equipment, subject to the aircraft's capabilities and operating requirements."
  },
  "enterprise.copy.besoin-d-une-configuration-industrielle-specifique": {
    "fr": "Besoin d'une configuration industrielle spécifique ?",
    "en": "Need a specific industrial configuration?"
  },
  "enterprise.copy.nos-ingenieurs-d-application-vous-accompagnent-dans": {
    "fr": "Décrivez vos besoins en appareils et en capteurs à notre équipe commerciale. Les produits Enterprise sont proposés à la vente ; l’intégration et les services opérationnels nécessitent un accord séparé.",
    "en": "Tell our sales team about your aircraft and payload requirements. Enterprise products are supplied on a sales-only basis; integration and operational services require a separate agreement."
  },
  "enterprise.copy.demander-un-devis-entreprise": {
    "fr": "Demander un devis Entreprise",
    "en": "Request an Enterprise quote"
  },
  "enterprise.copy.contacter-notre-equipe-technique": {
    "fr": "Contacter notre équipe commerciale",
    "en": "Contact our sales team"
  },
  "enterprise.meta.description": {
    "fr": "Drones industriels DJI Matrice et FlyCart distribués en Algérie par SARL Equip Drones : Matrice 400, Matrice 350 RTK, Matrice 4E/4T/30T/4TD, FlyCart 30/100 et nacelles Zenmuse.",
    "en": "DJI Matrice and FlyCart industrial drones in Algeria: Matrice 400, 350 RTK, 4E, 4T, 30T and 4TD, FlyCart 30 and 100, and Zenmuse payloads. Equipment sales by SARL Equip Drones."
  },
  "enterprise.a11y.operateur-de-drone-dji-matrice-sur-site": {
    "fr": "Opérateur de drone DJI Matrice sur site industriel",
    "en": "DJI Matrice drone operator at an industrial site"
  },
  "enterprise.a11y.performances-industrielles": {
    "fr": "Performances industrielles",
    "en": "Industrial capabilities"
  },
  "index.copy.le-drone-revolutionne-l-agriculture": {
    "fr": "Le drone révolutionne l'agriculture.",
    "en": "Drones are changing agriculture."
  },
  "index.copy.sarl-equip-drones-equipe-les-exploitations-et": {
    "fr": "SARL Equip Drones équipe les exploitations et les prestataires algériens en drones DJI pour une gestion précise des cultures. Formation des pilotes agricoles, maintenance et pièces détachées sont proposées localement en Algérie.",
    "en": "SARL Equip Drones equips Algerian farms and service providers with DJI drones for precision crop management. Agricultural pilot training, maintenance and spare parts are available locally in Algeria."
  },
  "index.copy.decouvrir-les-gammes": {
    "fr": "Découvrir les drones agricoles",
    "en": "Explore agricultural drones"
  },
  "index.copy.dhectares-traites-par-drone-dans-le-monde": {
    "fr": "hectares traités dans le monde — repère historique de filière",
    "en": "hectares treated worldwide — historical industry figure"
  },
  "index.copy.drones-agricoles-en-operation-dans-le-monde": {
    "fr": "drones agricoles en service — repère historique de filière",
    "en": "agricultural drones in service — historical industry figure"
  },
  "index.copy.officiel": {
    "fr": "Officiel",
    "en": "Official"
  },
  "index.copy.distributeur-officiel-et-exclusif-dji-pour-lalgerie": {
    "fr": "Distributeur officiel et agréé DJI pour l’Algérie",
    "en": "Official and authorised DJI distributor in Algeria"
  },
  "index.copy.agree": {
    "fr": "Agréé",
    "en": "Accredited"
  },
  "index.copy.par-le-centre-national-des-systemes-daeronefs": {
    "fr": "par le Centre National des Systèmes d’Aéronefs Sans Pilote à bord",
    "en": "by the Centre National des Systèmes d’Aéronefs Sans Pilote à bord"
  },
  "index.copy.agrement-partenariat": {
    "fr": "Agrément & partenariat",
    "en": "Accreditation and partnership"
  },
  "index.copy.premiere-compagnie-algerienne-partenaire-de-dji": {
    "fr": "Première compagnie algérienne partenaire de DJI.",
    "en": "Algeria's first company to partner with DJI."
  },
  "index.copy.equip-drones-est-la-premiere-compagnie-algerienne": {
    "fr": "<span class=\"strong\">Equip Drones se présente comme la première compagnie algérienne partenaire de DJI</span> et dispose d’un agrément du <span class=\"strong\">Centre National des Systèmes d’Aéronefs Sans Pilote à bord</span>. Ces engagements soutiennent la traçabilité du matériel et l’accompagnement proposé par l’entreprise.",
    "en": "<span class=\"strong\">Equip Drones presents itself as Algeria's first company to partner with DJI</span> and holds accreditation from the <span class=\"strong\">Centre National des Systèmes d’Aéronefs Sans Pilote à bord</span>. These commitments support equipment traceability and the company's service offering."
  },
  "index.copy.concretement-un-appareil-achete-chez-nous-est": {
    "fr": "Notre matériel est fourni par le canal officiel DJI. Nous proposons des pièces d’origine et un interlocuteur local pour l’accompagnement technique agricole. Le périmètre de garantie et les modalités de service sont confirmés pour le produit choisi.",
    "en": "Our equipment is supplied through DJI's official distribution channel. We provide genuine parts and a local contact for agricultural technical support. Warranty scope and service arrangements are confirmed for the selected product."
  },
  "index.copy.la-mission-dequip-drones-est-de-mener": {
    "fr": "La mission d’Equip Drones est d’accompagner l’adoption de la technologie dans l’agriculture algérienne et de contribuer à l’autosuffisance alimentaire du pays.",
    "en": "Equip Drones' mission is to support technology adoption in Algerian agriculture and contribute to the country's food self-sufficiency."
  },
  "index.copy.en-savoir-plus-sur-la-societe": {
    "fr": "<a class=\"link-arrow\" href=\"a-propos.html\">En savoir plus sur la société →</a>",
    "en": "<a class=\"link-arrow\" href=\"a-propos.html\">Learn more about the company →</a>"
  },
  "index.copy.methodologie-agricole": {
    "fr": "Organisation du chantier",
    "en": "Field operations"
  },
  "index.copy.cycle-operationnel-du-dji-agras": {
    "fr": "Cycle opérationnel DJI Agras",
    "en": "DJI Agras operating cycle"
  },
  "index.copy.decouvrez-comment-optimiser-vos-operations-grace-a": {
    "fr": "Découvrez comment organiser les vols, le remplissage et une rotation de quatre batteries avec des équipements de charge compatibles.",
    "en": "Explore how to organise flights, refilling and a four-battery rotation with compatible charging equipment."
  },
  "index.copy.voir-le-schema-du-cycle": {
    "fr": "Voir le schéma du cycle →",
    "en": "View the operating cycle →"
  },
  "index.copy.catalogue": {
    "fr": "Catalogue",
    "en": "Catalogue"
  },
  "index.copy.une-gamme-pour-chaque-type-d-operation": {
    "fr": "Une gamme pour chaque type d'opération.",
    "en": "Equipment for each type of operation."
  },
  "index.copy.appareils-agricoles-agras-plateformes-dentreprise-ou-drones": {
    "fr": "Appareils agricoles Agras, plateformes Enterprise et drones légers pour la photo aérienne. Importés par le canal officiel <br>et distribués localement.",
    "en": "Agras agricultural aircraft, Enterprise platforms and lightweight camera drones. Imported through the official channel <br>and distributed locally."
  },
  "index.copy.applications": {
    "fr": "Applications",
    "en": "Applications"
  },
  "index.copy.ce-que-nos-clients-traitent-cartographient-et": {
    "fr": "Des usages pour traiter, cartographier et inspecter.",
    "en": "Tasks you can spray, map and inspect."
  },
  "index.copy.le-meme-appareil-ne-convient-pas-a": {
    "fr": "Le même appareil ne convient pas à une plaine céréalière et à une palmeraie. Chaque secteur a ses contraintes de relief, de dose et de fenêtre d’intervention.",
    "en": "A cereal plain and a palm grove need different equipment. Each sector has its own terrain, application-rate and timing constraints."
  },
  "index.copy.ble-orge-et-avoine-couvrir-de-grandes": {
    "fr": "Blé, orge et avoine : couvrir de grandes surfaces dans des fenêtres météo courtes, sans tasser les sols ni écraser de rangs au passage.",
    "en": "Wheat, barley and oats: cover large areas in short weather windows without driving over the soil or crop rows."
  },
  "index.copy.traiter-en-hauteur-et-en-terrain-irregulier": {
    "fr": "Traiter en hauteur et en terrain irrégulier, là où un pulvérisateur tracté n’accède pas ou n’atteint pas la couronne des arbres.",
    "en": "Reach tree canopies and uneven terrain where ground sprayers struggle to gain access."
  },
  "index.copy.application-rang-par-rang-sur-parcelles-en": {
    "fr": "Application rang par rang sur parcelles en pente ou en terrasses, avec des réglages de suivi du relief adaptés.",
    "en": "Row-by-row application on sloping or terraced plots, using suitable terrain-following settings."
  },
  "index.copy.parcelles-morcelees-abords-de-serres-et-interventions": {
    "fr": "Parcelles morcelées, abords de serres et interventions courtes : le format compact prime sur la capacité de cuve.",
    "en": "Small plots, greenhouse surroundings and short jobs: a compact aircraft may matter more than tank capacity."
  },
  "index.copy.inspection-d-infrastructure": {
    "fr": "Inspection d'infrastructure",
    "en": "Infrastructure inspection"
  },
  "index.copy.lignes-electriques-tours-telecom-et-constructions-inspectes": {
    "fr": "Inspection de lignes électriques, de tours télécoms et de constructions avec des capteurs LiDAR, thermiques et zoom compatibles.",
    "en": "Inspect power lines, telecom towers and structures with compatible LiDAR, thermal and zoom payloads."
  },
  "index.copy.releves-photogrammetriques-et-orthophotos-georeferencees-pour-le": {
    "fr": "Relevés photogrammétriques et orthophotos géoréférencées pour le cadastre, l’irrigation et les projets d’aménagement.",
    "en": "Photogrammetric surveys and georeferenced orthophotos for mapping, irrigation and development projects."
  },
  "index.copy.tous-les-secteurs-dapplication": {
    "fr": "<a class=\"link-arrow\" href=\"applications.html\">Tous les secteurs d’application →</a>",
    "en": "<a class=\"link-arrow\" href=\"applications.html\">Explore all application sectors →</a>"
  },
  "index.copy.services-pour-drones-agricols": {
    "fr": "Services pour drones agricoles",
    "en": "Agricultural drone services"
  },
  "index.copy.un-drone-agricol-livre-nest-pas-toujours": {
    "fr": "La livraison est la première étape vers un drone opérationnel.",
    "en": "Delivery is only the first step towards an operational drone."
  },
  "index.copy.la-vente-nest-quune-etape-formation-maintenance": {
    "fr": "Formation, maintenance et pièces accompagnent l’appareil pendant sa durée d’utilisation et contribuent à sa valeur opérationnelle.",
    "en": "Training, maintenance and parts support the aircraft throughout its working life and help determine its operating value."
  },
  "index.copy.vente-et-conseil": {
    "fr": "Vente et conseil",
    "en": "Sales and advice"
  },
  "index.copy.choix-du-modele-dimensionnement-de-la-flotte": {
    "fr": "Choix du modèle, dimensionnement de la flotte et des batteries selon vos cultures, vos surfaces et votre calendrier de traitement.",
    "en": "Model selection, fleet sizing and batteries matched to your crops, working area and treatment schedule."
  },
  "index.copy.formation-et-certification-de-pilotes": {
    "fr": "Formation des pilotes",
    "en": "Pilot training"
  },
  "index.copy.formation-des-operateurs-au-pilotage-aux-procedures": {
    "fr": "Formation des opérateurs au pilotage, aux procédures de traitement et à la réglementation applicable aux aéronefs sans pilote à bord.",
    "en": "Operator training in flight procedures, application methods and the operating rules for unmanned aircraft."
  },
  "index.copy.maintenance-et-reparation": {
    "fr": "Maintenance et réparation",
    "en": "Maintenance and repair"
  },
  "index.copy.diagnostic-reparation-et-entretien-periodique-par-nos": {
    "fr": "Diagnostic, réparation et entretien périodique par nos techniciens, pour limiter l’immobilisation en pleine campagne.",
    "en": "Diagnostics, repairs and scheduled servicing by our technicians to help reduce downtime during the season."
  },
  "index.copy.pieces-detachees": {
    "fr": "Pièces détachées",
    "en": "Spare parts"
  },
  "index.copy.approvisionnement-en-pieces-dorigine-et-elements-dusure": {
    "fr": "Approvisionnement en pièces d’origine et éléments d’usure — hélices, buses, pompes, batteries — pour garder vos appareils en vol.",
    "en": "Genuine parts and wear items, including propellers, nozzles, pumps and batteries, to keep your equipment working."
  },
  "index.copy.en-savoir-plus": {
    "fr": "<a class=\"link-arrow\" href=\"services.html\">En savoir plus →</a>",
    "en": "<a class=\"link-arrow\" href=\"services.html\">Learn more →</a>"
  },
  "index.copy.parlons-de-votre-projet": {
    "fr": "Parlons de votre projet",
    "en": "Let's discuss your project"
  },
  "index.copy.dites-nous-ce-que-vous-voulez-realiser": {
    "fr": "Dites-nous ce que vous voulez réaliser",
    "en": "Tell us what you want to achieve"
  },
  "index.copy.nous-revenons-vers-vous-avec-une-configuration": {
    "fr": "Nous échangeons sur une configuration adaptée, préparons un devis détaillé et confirmons le délai de livraison prévu.",
    "en": "We will discuss a suitable configuration, provide a detailed quote and confirm the expected delivery time."
  },
  "index.meta.description": {
    "fr": "SARL Equip Drones, distributeur officiel et agréé de DJI en Algérie : drones agricoles Agras, plateformes d’entreprise, formation de pilotes, maintenance et pièces détachées. Devis sur demande.",
    "en": "SARL Equip Drones, official and authorised DJI distributor in Algeria: Agras agricultural drones, Enterprise equipment, agricultural pilot training, maintenance and spare parts. Quotes on request."
  },
  "index.a11y.drone-dji-agras-en-pulverisation-au-dessus": {
    "fr": "Drone DJI Agras en pulvérisation au-dessus d’une parcelle cultivée",
    "en": "DJI Agras drone spraying a cultivated field"
  },
  "index.a11y.chiffres-cles": {
    "fr": "Chiffres clés",
    "en": "Key figures"
  },
  "produit.copy.produit-equip-drones": {
    "fr": "Produit — Equip Drones",
    "en": "Product — Equip Drones"
  },
  "services.copy.services-vente-formation-maintenance-pieces-equip-drones": {
    "fr": "Services : vente, formation, maintenance, pièces — Equip Drones",
    "en": "Sales, training, maintenance and parts — Equip Drones"
  },
  "services.copy.services": {
    "fr": "Services pour drones agricoles",
    "en": "Agricultural drone services"
  },
  "services.copy.vendre-un-drone-est-la-partie-facile": {
    "fr": "La réussite d’un chantier dépend du bon dimensionnement du matériel, d’un opérateur formé, de l’entretien et des pièces adaptées. Equip Drones accompagne ces besoins pour les drones agricoles, du choix à la révision.",
    "en": "Successful field work depends on correctly sized equipment, a trained operator, maintenance and suitable parts. Equip Drones supports these needs for agricultural drones, from selection through to servicing."
  },
  "services.copy.vente-et-conseil": {
    "fr": "Vente et conseil",
    "en": "Sales and advice"
  },
  "services.copy.formation-et-certification": {
    "fr": "Formation des pilotes",
    "en": "Pilot training"
  },
  "services.copy.maintenance-et-reparation": {
    "fr": "Maintenance et réparation",
    "en": "Maintenance and repair"
  },
  "services.copy.pieces-detachees": {
    "fr": "Pièces détachées",
    "en": "Spare parts"
  },
  "services.copy.pourquoi-un-distributeur-agree": {
    "fr": "Pourquoi un distributeur agréé",
    "en": "Why choose an authorised distributor"
  },
  "services.copy.01-vente-et-conseil": {
    "fr": "01 — VENTE ET CONSEIL",
    "en": "01 — SALES AND ADVICE"
  },
  "services.copy.choisir-lappareil-qui-correspond-reellement-au-chantier": {
    "fr": "Choisir l’appareil qui correspond réellement au chantier",
    "en": "Choose equipment that fits the work"
  },
  "services.copy.un-drone-agricole-se-choisit-comme-un": {
    "fr": "Un drone agricole se choisit comme un pulvérisateur : à partir de la surface à traiter, du nombre de passages annuels, du relief, de la distance au point de remplissage et de la logistique de charge. Pas à partir d’une fiche technique lue seule.",
    "en": "Choose an agricultural drone around your working area, annual treatment frequency, terrain, distance to the refill point and charging logistics. A specification sheet alone cannot define the right setup."
  },
  "services.copy.une-exploitation-de-quelques-dizaines-dhectares-en": {
    "fr": "Un verger de quelques dizaines d’hectares n’a pas les mêmes besoins qu’un prestataire travaillant sur de grandes parcelles céréalières. Le premier peut privilégier la compacité et le transport ; le second, le débit, la rotation des batteries et l’alimentation sur site. Le dimensionnement comprend donc l’appareil, les batteries, la station de charge, la trémie et les équipements d’application.",
    "en": "An orchard covering a few dozen hectares has different needs from a contractor working across large cereal fields. One may prioritise a compact aircraft and easy transport; the other needs work rate, battery rotation and field power. Sizing therefore includes the aircraft, batteries, charging station, spreading hopper and application equipment."
  },
  "services.copy.nous-vendons-dans-le-canal-officiel-dji": {
    "fr": "Nous fournissons du matériel par le canal officiel DJI, dans une configuration adaptée à la commande. Le devis précise la garantie applicable et les modalités de livraison.",
    "en": "We supply equipment through DJI's official channel, with a configuration suited to the equipment ordered. The quote specifies the applicable warranty and delivery arrangements."
  },
  "services.copy.ce-que-cela-couvre": {
    "fr": "Ce que cela couvre",
    "en": "What this covers"
  },
  "services.copy.analyse-du-parcellaire-des-cultures-et-du": {
    "fr": "<span class=\"accent mono\">—</span> Analyse du parcellaire, des cultures et du calendrier de traitement",
    "en": "<span class=\"accent mono\">—</span> Review of fields, crops and treatment schedule"
  },
  "services.copy.dimensionnement-de-lappareil-du-jeu-de-batteries": {
    "fr": "<span class=\"accent mono\">—</span> Dimensionnement de l’appareil, du jeu de batteries et de la station de charge",
    "en": "<span class=\"accent mono\">—</span> Aircraft, battery and charging-station sizing"
  },
  "services.copy.choix-des-buses-et-des-accessoires-selon": {
    "fr": "<span class=\"accent mono\">—</span> Choix des buses et des accessoires selon les produits appliqués",
    "en": "<span class=\"accent mono\">—</span> Nozzles and accessories suited to the application"
  },
  "services.copy.epandage-granules-et-semences-configuration-de-la": {
    "fr": "<span class=\"accent mono\">—</span> Épandage granulés et semences : configuration de la trémie",
    "en": "<span class=\"accent mono\">—</span> Hopper configuration for granules and seed"
  },
  "services.copy.devis-detaille-et-chiffre-configuration-par-configuration": {
    "fr": "<span class=\"accent mono\">—</span> Devis détaillé et chiffré configuration par configuration",
    "en": "<span class=\"accent mono\">—</span> A detailed, itemised quote for each configuration"
  },
  "services.copy.livraison-en-canal-officiel-dji-garantie-constructeur": {
    "fr": "<span class=\"accent mono\">—</span> Livraison en canal officiel DJI, garantie constructeur applicable",
    "en": "<span class=\"accent mono\">—</span> Official DJI supply with the applicable manufacturer warranty"
  },
  "services.copy.prise-en-main-de-lappareil-au-moment": {
    "fr": "<span class=\"accent mono\">—</span> Prise en main de l’appareil au moment de la livraison",
    "en": "<span class=\"accent mono\">—</span> Equipment handover and initial familiarisation"
  },
  "services.copy.aucun-prix-nest-affiche-sur-ce-site": {
    "fr": "Aucun prix n’est affiché sur ce site : chaque configuration fait l’objet d’un devis.",
    "en": "No prices are displayed on this site: each configuration receives an individual quote."
  },
  "services.copy.voir-les-applications-par-secteur": {
    "fr": "Voir les applications par secteur →",
    "en": "Explore applications by sector →"
  },
  "services.copy.02-formation-et-certification-des-pilotes": {
    "fr": "02 — FORMATION DES PILOTES",
    "en": "02 — PILOT TRAINING"
  },
  "services.copy.un-operateur-forme-dans-le-cadre-reglementaire": {
    "fr": "Un opérateur formé qui comprend le cadre d’exploitation",
    "en": "A trained operator who understands the operating framework"
  },
  "services.copy.un-drone-de-pulverisation-est-une-machine": {
    "fr": "Un drone de pulvérisation est une machine agricole de plusieurs dizaines de kilogrammes qui manipule des produits phytosanitaires. Savoir le faire décoller ne suffit pas : il faut connaître le cadre dans lequel on vole et la manière de travailler proprement.",
    "en": "A spraying drone is agricultural equipment that can weigh tens of kilograms and handle crop-protection products. Taking off is only one part of the work: operators also need to understand the operating requirements and application procedures."
  },
  "services.copy.equip-drones-est-la-premiere-compagnie-algerienne": {
    "fr": "Notre formation au pilotage agricole aborde le cadre d’exploitation en Algérie et les responsabilités de l’opérateur. Consultez notre équipe pour connaître le programme, les prérequis et les documents remis à l’issue de la formation.",
    "en": "Equip Drones' agricultural pilot training covers the operating framework in Algeria and the responsibilities of the operator. Ask our team about the programme, prerequisites and documents issued on completion."
  },
  "services.copy.la-partie-pratique-se-fait-sur-lappareil": {
    "fr": "La pratique couvre la mise en œuvre de l’appareil, la cartographie, les obstacles et zones exclues, la planification, la dose et la largeur de travail, les batteries, le remplissage et les procédures d’urgence. La préparation du mélange, les équipements de protection et le rinçage font aussi partie du travail agricole.",
    "en": "Practical training covers aircraft setup, field mapping, obstacles and exclusion zones, mission planning, application rate and working width, batteries and refilling, and emergency procedures. Handling the spray mixture, protective equipment and rinsing are also part of the agricultural workflow."
  },
  "services.copy.cadre-reglementaire-applicable-en-algerie-et-responsabilites": {
    "fr": "<span class=\"accent mono\">—</span> Cadre réglementaire applicable en Algérie et responsabilités de l’exploitant",
    "en": "<span class=\"accent mono\">—</span> Operating requirements in Algeria and operator responsibilities"
  },
  "services.copy.mise-en-uvre-de-lappareil-et-controles": {
    "fr": "<span class=\"accent mono\">—</span> Mise en œuvre de l’appareil et contrôles avant vol",
    "en": "<span class=\"accent mono\">—</span> Aircraft setup and preflight checks"
  },
  "services.copy.cartographie-de-parcelle-obstacles-zones-exclues": {
    "fr": "<span class=\"accent mono\">—</span> Cartographie de parcelle, obstacles, zones exclues",
    "en": "<span class=\"accent mono\">—</span> Field mapping, obstacles and exclusion zones"
  },
  "services.copy.planification-de-mission-et-vol-en-mode": {
    "fr": "<span class=\"accent mono\">—</span> Planification de mission et vol en mode automatique",
    "en": "<span class=\"accent mono\">—</span> Mission planning and automated flight"
  },
  "services.copy.reglage-de-la-dose-de-la-largeur": {
    "fr": "<span class=\"accent mono\">—</span> Réglage de la dose, de la largeur de travail et des buses",
    "en": "<span class=\"accent mono\">—</span> Application rate, working width and nozzle settings"
  },
  "services.copy.gestion-des-batteries-du-remplissage-et-du": {
    "fr": "<span class=\"accent mono\">—</span> Gestion des batteries, du remplissage et du rinçage",
    "en": "<span class=\"accent mono\">—</span> Battery management, refilling and rinsing"
  },
  "services.copy.procedures-durgence-perte-de-liaison-retour-automatique": {
    "fr": "<span class=\"accent mono\">—</span> Procédures d’urgence : perte de liaison, retour automatique, atterrissage forcé",
    "en": "<span class=\"accent mono\">—</span> Emergency procedures: lost link, return to home and forced landing"
  },
  "services.copy.maintenance-de-premier-niveau-a-la-charge": {
    "fr": "<span class=\"accent mono\">—</span> Maintenance de premier niveau à la charge de l’opérateur",
    "en": "<span class=\"accent mono\">—</span> Routine operator maintenance"
  },
  "services.copy.notre-agrement-et-nos-coordonnees": {
    "fr": "Notre agrément et nos coordonnées →",
    "en": "Our accreditation and contact details →"
  },
  "services.copy.03-maintenance-et-reparation": {
    "fr": "03 — MAINTENANCE ET RÉPARATION",
    "en": "03 — MAINTENANCE AND REPAIR"
  },
  "services.copy.entretenir-une-machine-qui-travaille-dans-la": {
    "fr": "Entretenir un matériel exposé à la poussière et aux produits",
    "en": "Maintaining equipment exposed to dust and spray products"
  },
  "services.copy.un-drone-agricole-vieillit-vite-sil-est": {
    "fr": "Un drone agricole nécessite un entretien régulier. Poussière, vibrations, chaleur et résidus de produit peuvent affecter les moteurs, les batteries, les pompes et les buses.",
    "en": "Agricultural drones need regular maintenance. Dust, vibration, heat and product residue can affect motors, batteries, pumps and nozzles."
  },
  "services.copy.nous-assurons-la-maintenance-et-la-reparation": {
    "fr": "Nous entretenons et réparons les équipements DJI agricoles que nous distribuons. Le diagnostic peut comprendre les journaux de vol, les contrôles mécaniques et électriques, le circuit de pulvérisation, les capteurs et l’état des batteries. Les travaux nécessaires sont confirmés après inspection.",
    "en": "We maintain and repair the agricultural DJI equipment we distribute. Diagnostics may include flight logs, mechanical and electrical checks, the spray circuit, sensors and battery condition. The required work is confirmed after inspection."
  },
  "services.copy.la-revision-entre-deux-saisons-est-la": {
    "fr": "La révision d’inter-saison prépare le matériel à la campagne suivante : nettoyage du circuit, remplacement des joints, filtres et buses usés, contrôle des pompes, des hélices et du train, vérification du firmware. Des résidus laissés dans le circuit peuvent provoquer des obstructions et de la corrosion évitables.",
    "en": "Off-season servicing helps prepare equipment for the next campaign: cleaning the spray circuit, replacing worn seals, filters and nozzles, checking pumps, propellers and landing gear, and reviewing firmware. Leaving product residue in the circuit can cause avoidable blockages and corrosion."
  },
  "services.copy.diagnostic-a-partir-des-journaux-de-vol": {
    "fr": "<span class=\"accent mono\">—</span> Diagnostic à partir des journaux de vol",
    "en": "<span class=\"accent mono\">—</span> Flight-log diagnostics"
  },
  "services.copy.remplacement-des-pieces-dusure-et-des-elements": {
    "fr": "<span class=\"accent mono\">—</span> Remplacement des pièces d’usure et des éléments accidentés",
    "en": "<span class=\"accent mono\">—</span> Replacement of worn or damaged components"
  },
  "services.copy.controle-et-rincage-du-circuit-de-pulverisation": {
    "fr": "<span class=\"accent mono\">—</span> Contrôle et rinçage du circuit de pulvérisation, remplacement des buses",
    "en": "<span class=\"accent mono\">—</span> Spray-circuit checks, rinsing and nozzle replacement"
  },
  "services.copy.etalonnage-des-capteurs-et-du-radar-apres": {
    "fr": "<span class=\"accent mono\">—</span> Étalonnage des capteurs et du radar après intervention",
    "en": "<span class=\"accent mono\">—</span> Sensor and radar calibration after servicing"
  },
  "services.copy.controle-des-batteries-cycles-equilibrage-etat-physique": {
    "fr": "<span class=\"accent mono\">—</span> Contrôle des batteries : cycles, équilibrage, état physique",
    "en": "<span class=\"accent mono\">—</span> Battery checks: cycles, cell balance and physical condition"
  },
  "services.copy.revision-inter-saison-complete-avant-la-campagne": {
    "fr": "<span class=\"accent mono\">—</span> Révision inter-saison complète avant la campagne suivante",
    "en": "<span class=\"accent mono\">—</span> Full off-season servicing before the next campaign"
  },
  "services.copy.mise-a-jour-du-firmware-et-verification": {
    "fr": "<span class=\"accent mono\">—</span> Mise à jour du firmware et vérification de la configuration",
    "en": "<span class=\"accent mono\">—</span> Firmware updates and configuration checks"
  },
  "services.copy.pieces-detachees-dorigine": {
    "fr": "Pièces détachées d’origine →",
    "en": "Genuine spare parts →"
  },
  "services.copy.04-pieces-detachees": {
    "fr": "04 — PIÈCES DÉTACHÉES",
    "en": "04 — SPARE PARTS"
  },
  "services.copy.des-pieces-dorigine-parce-que-le-reste": {
    "fr": "Des pièces d’origine adaptées à votre matériel",
    "en": "Genuine parts matched to your equipment"
  },
  "services.copy.sur-un-multirotor-il-ny-a-pas": {
    "fr": "La compatibilité des composants est essentielle sur un multirotor. Une hélice déséquilibrée peut introduire des vibrations ; une batterie inadaptée peut présenter un risque ou mal fonctionner avec l’appareil.",
    "en": "Component compatibility matters on a multirotor. An unbalanced propeller can introduce vibration, while an unsuitable battery can create a safety risk or fail to work correctly with the aircraft."
  },
  "services.copy.nous-fournissons-les-pieces-dji-dorigine-des": {
    "fr": "Nous fournissons les pièces DJI d’origine des appareils que nous distribuons : hélices, bras et moteurs, électronique de puissance, batteries intelligentes et stations de charge, pompes et circuits de pulvérisation, buses et jeux de buses selon les débits, filtres et joints, cuves et systèmes d’épandage, antennes et modules RTK.",
    "en": "We supply genuine DJI parts for the equipment we distribute: propellers, arms, motors, power electronics, batteries, charging stations, spray pumps and circuits, nozzles, filters, seals, tanks, spreading systems and RTK components."
  },
  "services.copy.passer-par-le-canal-officiel-garantit-deux": {
    "fr": "Il est important de choisir la pièce pour la version exacte du matériel : un même modèle peut utiliser plusieurs révisions de composants au fil du temps. Le canal officiel aide à établir la bonne référence et sa traçabilité.",
    "en": "Matching the part to the exact equipment version matters: a model may use different component revisions over its lifetime. The official supply channel helps establish the correct reference and traceability."
  },
  "services.copy.ce-que-nous-fournissons": {
    "fr": "Ce que nous fournissons",
    "en": "What we supply"
  },
  "services.copy.pieces-dusure-helices-buses-filtres-joints": {
    "fr": "<span class=\"accent mono\">—</span> Pièces d’usure : hélices, buses, filtres, joints",
    "en": "<span class=\"accent mono\">—</span> Wear parts: propellers, nozzles, filters and seals"
  },
  "services.copy.bras-moteurs-et-electronique-de-puissance": {
    "fr": "<span class=\"accent mono\">—</span> Bras, moteurs et électronique de puissance",
    "en": "<span class=\"accent mono\">—</span> Arms, motors and power electronics"
  },
  "services.copy.batteries-intelligentes-et-stations-de-charge": {
    "fr": "<span class=\"accent mono\">—</span> Batteries intelligentes et stations de charge",
    "en": "<span class=\"accent mono\">—</span> Intelligent batteries and charging stations"
  },
  "services.copy.pompes-circuits-de-pulverisation-et-cuves": {
    "fr": "<span class=\"accent mono\">—</span> Pompes, circuits de pulvérisation et cuves",
    "en": "<span class=\"accent mono\">—</span> Pumps, spray circuits and tanks"
  },
  "services.copy.systemes-et-tremies-depandage": {
    "fr": "<span class=\"accent mono\">—</span> Systèmes et trémies d’épandage",
    "en": "<span class=\"accent mono\">—</span> Spreading systems and hoppers"
  },
  "services.copy.antennes-et-modules-rtk": {
    "fr": "<span class=\"accent mono\">—</span> Antennes et modules RTK",
    "en": "<span class=\"accent mono\">—</span> RTK antennas and modules"
  },
  "services.copy.consommables-de-saison-a-anticiper-avant-la": {
    "fr": "<span class=\"accent mono\">—</span> Consommables de saison, à anticiper avant la campagne",
    "en": "<span class=\"accent mono\">—</span> Seasonal consumables to plan before the campaign"
  },
  "services.copy.voir-les-appareils-au-catalogue": {
    "fr": "Voir les appareils au catalogue →",
    "en": "View the equipment catalogue →"
  },
  "services.copy.canal-officiel": {
    "fr": "Canal officiel",
    "en": "Official distribution"
  },
  "services.copy.pourquoi-passer-par-un-distributeur-agree": {
    "fr": "Pourquoi passer par un distributeur agréé",
    "en": "Why choose an authorised distributor"
  },
  "services.copy.le-meme-appareil-peut-arriver-en-algerie": {
    "fr": "Avant d’acheter, comparez aussi l’origine du matériel, la garantie applicable, l’accès aux pièces et l’interlocuteur qui vous aidera en cas de problème.",
    "en": "Before buying, compare more than the aircraft: check the equipment's origin, applicable warranty, parts access and who will support you if a problem occurs."
  },
  "services.copy.canal-officiel-equip-drones": {
    "fr": "CANAL OFFICIEL — EQUIP DRONES",
    "en": "OFFICIAL CHANNEL — EQUIP DRONES"
  },
  "services.copy.un-appareil-rattache-a-quelquun": {
    "fr": "Un interlocuteur clairement identifié",
    "en": "A clearly identified point of contact"
  },
  "services.copy.garantie-constructeur-applicable-en-algerie-traitee-localement": {
    "fr": "<span class=\"accent mono\">✓</span> Garantie constructeur selon les conditions applicables au produit",
    "en": "<span class=\"accent mono\">✓</span> Manufacturer warranty subject to applicable product terms"
  },
  "services.copy.appareil-neuf-destine-au-marche-algerien-firmware": {
    "fr": "<span class=\"accent mono\">✓</span> Matériel fourni par le canal officiel DJI",
    "en": "<span class=\"accent mono\">✓</span> Equipment supplied through DJI's official channel"
  },
  "services.copy.pieces-dorigine-referencees-pour-votre-version-exacte": {
    "fr": "<span class=\"accent mono\">✓</span> Pièces d’origine référencées pour votre version exacte d’appareil",
    "en": "<span class=\"accent mono\">✓</span> Genuine parts matched to your equipment version"
  },
  "services.copy.formation-a-la-prise-en-main-et": {
    "fr": "<span class=\"accent mono\">✓</span> Prise en main et formation agricoles selon le devis convenu",
    "en": "<span class=\"accent mono\">✓</span> Agricultural equipment handover and training as agreed in the quote"
  },
  "services.copy.diagnostic-et-reparation-sur-place-sans-expedition": {
    "fr": "<span class=\"accent mono\">✓</span> Diagnostic et réparation agricoles locaux, selon l’intervention nécessaire",
    "en": "<span class=\"accent mono\">✓</span> Local agricultural diagnostics and repair, subject to the intervention required"
  },
  "services.copy.un-interlocuteur-identifie-une-facture-un-recours": {
    "fr": "<span class=\"accent mono\">✓</span> Un fournisseur identifié, une facture et un contact d’assistance",
    "en": "<span class=\"accent mono\">✓</span> An identified supplier, invoice and support contact"
  },
  "services.copy.import-parallele": {
    "fr": "AUTRES CIRCUITS D’APPROVISIONNEMENT",
    "en": "OTHER SUPPLY CHANNELS"
  },
  "services.copy.un-appareil-qui-nappartient-a-aucun-reseau": {
    "fr": "Les points à vérifier avant l’achat",
    "en": "Points to verify before buying"
  },
  "services.copy.garantie-le-plus-souvent-inapplicable-lappareil-na": {
    "fr": "<span class=\"mono\">—</span> Applicabilité de la garantie sur votre marché",
    "en": "<span class=\"mono\">—</span> Whether the warranty applies in your market"
  },
  "services.copy.appareil-parfois-deja-active-ou-configure-pour": {
    "fr": "<span class=\"mono\">—</span> État du matériel, activation et configuration régionale",
    "en": "<span class=\"mono\">—</span> Equipment condition, activation and regional configuration"
  },
  "services.copy.pieces-dorigine-incertaine-references-approximatives": {
    "fr": "<span class=\"mono\">—</span> Origine des pièces et références exactes des composants",
    "en": "<span class=\"mono\">—</span> Genuine parts and exact component references"
  },
  "services.copy.aucune-formation-aucune-remise-en-main-aucun": {
    "fr": "<span class=\"mono\">—</span> Modalités de formation, de prise en main et de suivi",
    "en": "<span class=\"mono\">—</span> Training, handover and follow-up arrangements"
  },
  "services.copy.la-moindre-panne-devient-un-probleme-de": {
    "fr": "<span class=\"mono\">—</span> Lieu de réparation et éventuelles expéditions",
    "en": "<span class=\"mono\">—</span> Repair location and any shipping requirements"
  },
  "services.copy.aucun-recours-identifie-si-lappareil-arrive-non": {
    "fr": "<span class=\"mono\">—</span> Interlocuteur et procédure en cas de livraison non conforme",
    "en": "<span class=\"mono\">—</span> The contact and process for a non-conforming delivery"
  },
  "services.copy.le-jour-ou-il-faut-une-pompe": {
    "fr": "Lorsqu’une pièce est nécessaire pendant une fenêtre de traitement, les questions sont concrètes : quelle référence convient, qui peut la fournir et dans quel délai ? Confirmez la disponibilité et les modalités de service avant de vous engager sur le matériel.",
    "en": "When a part is needed during a treatment window, the useful questions are practical: which reference fits the aircraft, who can supply it, and when? Confirm availability and the service process before committing to the equipment."
  },
  "services.copy.un-projet-une-panne-une-formation": {
    "fr": "Un projet, une panne, une formation",
    "en": "A project, a repair or training"
  },
  "services.copy.dites-nous-ce-dont-vous-avez-besoin": {
    "fr": "Dites-nous ce dont vous avez besoin",
    "en": "Tell us what you need"
  },
  "services.copy.vente-formation-entretien-ou-pieces-decrivez-votre": {
    "fr": "Vente, formation, entretien ou pièces : décrivez votre situation, nous vous répondons avec une proposition concrète.",
    "en": "Sales, training, maintenance or parts: describe your situation and we will discuss a practical proposal."
  },
  "services.meta.description": {
    "fr": "Vente et conseil en drones agricoles, formation des pilotes, maintenance, réparation et pièces d’origine : les services d’Equip Drones, distributeur officiel DJI en Algérie.",
    "en": "Agricultural drone sales and advice, pilot training, maintenance, repairs and genuine spare parts from Equip Drones, official DJI distributor in Algeria."
  },
  "services.a11y.maintenance-formation-et-support-technique-equip-drones": {
    "fr": "Maintenance, formation et support technique Equip Drones",
    "en": "Equip Drones maintenance, training and technical support"
  }
});

/* Dynamic copy and accessible controls. */
Object.assign(window.ED_STRINGS, {
  "nav.language": {
    "fr": "Langue",
    "en": "Language"
  },
  "nav.breadcrumb": {
    "fr": "Fil d’Ariane",
    "en": "Breadcrumb"
  },
  "qty.decrease": {
    "fr": "Diminuer la quantité",
    "en": "Decrease quantity"
  },
  "qty.increase": {
    "fr": "Augmenter la quantité",
    "en": "Increase quantity"
  },
  "filter.missions": {
    "fr": "Toutes les missions",
    "en": "All missions"
  },
  "filter.availability": {
    "fr": "Toutes les disponibilités",
    "en": "All availability"
  },
  "filter.mission": {
    "fr": "Mission / secteur",
    "en": "Mission / sector"
  },
  "filter.availLabel": {
    "fr": "Disponibilité",
    "en": "Availability"
  },
  "count.enterprise": {
    "fr": "produit(s) entreprise",
    "en": "enterprise product(s)"
  },
  "count.camera": {
    "fr": "modèle(s) caméra",
    "en": "camera model(s)"
  },
  "quote.items": {
    "fr": "article(s)",
    "en": "item(s)"
  },
  "message.quote": {
    "fr": "Nouvelle demande de devis — Equip Drones",
    "en": "New quote request — Equip Drones"
  },
  "message.contact": {
    "fr": "Coordonnées",
    "en": "Contact details"
  },
  "message.equipment": {
    "fr": "Matériel demandé",
    "en": "Requested equipment"
  },
  "message.general": {
    "fr": "Demande générale (aucun produit sélectionné)",
    "en": "General enquiry (no products selected)"
  },
  "message.subject": {
    "fr": "Demande de devis",
    "en": "Quote request"
  },
  "message.contactTitle": {
    "fr": "Message depuis le site Equip Drones",
    "en": "Message from the Equip Drones website"
  },
  "message.contactSubject": {
    "fr": "Contact depuis le site",
    "en": "Website enquiry"
  },
  "contact.needName": {
    "fr": "Merci d’indiquer votre nom pour que nous sachions à qui répondre.",
    "en": "Please enter your name so we know whom to reply to."
  },
  "contact.needChannel": {
    "fr": "Merci de laisser au moins un e-mail ou un numéro de téléphone.",
    "en": "Please provide an email address or phone number."
  },
  "contact.needMessage": {
    "fr": "Merci de décrire votre besoin en quelques mots.",
    "en": "Please briefly describe what you need."
  },
  "contact.badEmail": {
    "fr": "Merci de saisir une adresse e-mail valide.",
    "en": "Please enter a valid email address."
  },
  "contact.badPhone": {
    "fr": "Merci de saisir un numéro de téléphone valide.",
    "en": "Please enter a valid phone number."
  },
  "cta.copyManual": {
    "fr": "Sélectionnez le texte et utilisez la commande Copier de votre appareil.",
    "en": "Select the text and use your device’s Copy command."
  },
  "index.title": {
    "fr": "Equip Drones — Distributeur officiel DJI en Algérie",
    "en": "Equip Drones — Official DJI distributor in Algeria"
  }
});

Object.assign(window.ED_STRINGS, {
  'camera.avata': { fr: 'Série DJI Avata', en: 'DJI Avata series' },
  'cycle.svg.spraying': { fr: 'Pulvérisation ~10-15 min', en: 'Spraying ~10-15min' },
  'cycle.svg.landing': { fr: 'Atterrissage', en: 'Landing' },
  'cycle.svg.takeoff': { fr: 'Décollage', en: 'Takeoff' },
  'cycle.svg.batteryChange': { fr: 'Changement de batterie', en: 'Battery Change' },
  'cycle.svg.rotation1': { fr: 'Rotation continue', en: 'Continuous Rotation' },
  'cycle.svg.rotation2': { fr: 'de 4 batteries', en: 'of 4 Batteries' },
  'cycle.svg.refill': { fr: 'Remplissage', en: 'Payload Refill' },
  'cycle.svg.generator1': { fr: 'Générateur', en: 'Fuel Generator' },
  'cycle.svg.generator2': { fr: 'pour charger les batteries', en: 'for Charging Batteries' },
  'cycle.svg.chargeTime': { fr: 'Charge complète en 10 min', en: 'Full Charge in 10min' }
});

Object.assign(window.ED_STRINGS, {
  'applications.empty': {
    fr: 'Aucun appareil n’est référencé pour ce secteur dans notre catalogue. Contactez-nous pour étudier votre besoin.',
    en: 'No aircraft are listed for this sector in our catalogue. Contact us to discuss your needs.'
  }
});

Object.assign(window.ED_STRINGS, {
  'parts.eyebrow': {
    fr: 'Pièces d’origine et accessoires',
    en: 'Original spare parts and accessories'
  },
  'parts.title': {
    fr: 'Batteries, hélices et accessoires',
    en: 'Batteries, Propellers & Accessories'
  },
  'parts.lead': {
    fr: 'Consultez les batteries de rechange, hélices et équipements compatibles avec vos appareils DJI et ajoutez-les directement à votre demande de devis.',
    en: 'Browse spare batteries, propellers, and accessories compatible with your DJI aircraft and add them directly to your quote request.'
  },
  'parts.tabAll': {
    fr: 'Toutes les pièces',
    en: 'All parts'
  },
  'parts.tabBatteries': {
    fr: 'Batteries',
    en: 'Batteries'
  },
  'parts.tabPropellers': {
    fr: 'Hélices de rechange',
    en: 'Spare Propellers'
  },
  'parts.tabAgrasAccessories': {
    fr: 'Accessoires Agras',
    en: 'Agras Accessories'
  },
  'parts.filterDrone': {
    fr: 'Filtrer par appareil',
    en: 'Filter by aircraft'
  },
  'parts.allDrones': {
    fr: 'Tous les appareils',
    en: 'All aircraft'
  },
  'parts.searchPlaceholder': {
    fr: 'Rechercher une référence ou un modèle...',
    en: 'Search part number or model...'
  },
  'parts.colType': {
    fr: 'Type',
    en: 'Type'
  },
  'parts.colItem': {
    fr: 'Désignation',
    en: 'Item'
  },
  'parts.colModel': {
    fr: 'Réf. modèle',
    en: 'Model #'
  },
  'parts.colDrones': {
    fr: 'Appareils compatibles',
    en: 'Compatible aircraft'
  },
  'parts.colAvail': {
    fr: 'Disponibilité',
    en: 'Availability'
  },
  'parts.colAction': {
    fr: 'Devis',
    en: 'Quote'
  },
  'parts.typeBattery': {
    fr: 'Batterie',
    en: 'Battery'
  },
  'parts.typePropeller': {
    fr: 'Hélice',
    en: 'Propeller'
  },
  'parts.typeChargingStation': {
    fr: 'Station de recharge',
    en: 'Charging Station'
  },
  'parts.typeGenerator': {
    fr: 'Générateur',
    en: 'Generator'
  },
  'parts.typeSpreadingSystem': {
    fr: 'Système d’épandage',
    en: 'Spreading System'
  },
  'parts.typeCable': {
    fr: 'Câble adaptateur',
    en: 'Adapter Cable'
  },
  'parts.empty': {
    fr: 'Aucune pièce ne correspond à ces critères.',
    en: 'No parts match these criteria.'
  },
  'parts.results': {
    fr: 'pièces trouvées',
    en: 'parts found'
  },
  'parts.reset': {
    fr: 'Réinitialiser les filtres',
    en: 'Reset filters'
  },
  'prod.compatibleParts': {
    fr: 'Batteries, hélices et accessoires compatibles',
    en: 'Compatible batteries, propellers & accessories'
  }
});
