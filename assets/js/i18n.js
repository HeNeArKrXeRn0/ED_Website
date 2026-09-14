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
  'cat.results':     { fr: 'appareil(s)', en: 'aircraft' },
  'cat.empty':       { fr: 'Aucun appareil ne correspond à ces filtres.', en: 'No aircraft match these filters.' },
  'cat.reset':       { fr: 'Réinitialiser les filtres', en: 'Reset filters' },

  /* ---- Fiche produit ---- */
  'prod.usage':      { fr: 'À quoi sert cet appareil',  en: 'What this aircraft is for' },
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
  'quote.submit':    { fr: 'Envoyer ma demande',en: 'Send my request' },
  'quote.how':       { fr: 'Comment souhaitez-vous nous transmettre votre demande ?', en: 'How would you like to send us your request?' },
  'quote.sentTitle': { fr: 'Votre demande est prête', en: 'Your request is ready' },
  'quote.sentBody':  { fr: 'Choisissez WhatsApp ou l’e-mail pour nous l’envoyer. Vous pouvez aussi copier le message et nous l’adresser par le canal de votre choix.', en: 'Choose WhatsApp or email to send it. You can also copy the message and send it however you prefer.' },
  'quote.newRequest':{ fr: 'Faire une nouvelle demande', en: 'Start a new request' },
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
  'foot.tagline':    { fr: 'Distributeur agréé, officiel et exclusif de DJI en Algérie.', en: 'Authorised, official and exclusive DJI distributor in Algeria.' },
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

