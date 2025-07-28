export interface Venue {
  id: string;
  name: string;
  category: VenueCategory;
  city: string;
  country: string;
  address: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  reviewCount: number;
  priceLevel: 1 | 2 | 3 | 4;
  openNow: boolean;
  openingHours: string;
  description: string;
  features: string[];
  imageUrl: string;
  specialOffers?: string[];
  upcomingEvents?: string[];
  atmosphereLevel: number; // 1-5 how busy/active
  ageRestriction: number;
  dressCode: string;
  verified: boolean;
}

export type VenueCategory = 
  | "strip-club"
  | "nightclub" 
  | "adult-lounge"
  | "burlesque"
  | "gentlemens-club"
  | "vip-club"
  | "cocktail-lounge"
  | "dance-club";

export const VENUE_CATEGORIES = {
  "strip-club": {
    name: "Strip Clubs",
    icon: "🌹",
    color: "neon-pink",
    description: "Klassiske striplokaler med underholdning"
  },
  "nightclub": {
    name: "Nattklubb",
    icon: "🎵",
    color: "neon-turquoise", 
    description: "Nattklubb med voksenunderholdning"
  },
  "adult-lounge": {
    name: "Voksen Lounger",
    icon: "🥂",
    color: "neon-gold",
    description: "Eksklusive voksenlounger og barer"
  },
  "burlesque": {
    name: "Burlesque",
    icon: "🎭",
    color: "neon-purple",
    description: "Burlesque show og variety underholdning"
  },
  "gentlemens-club": {
    name: "Gentlemen's Club",
    icon: "🎩",
    color: "neon-pink",
    description: "Eksklusive gentlemen's clubs"
  },
  "vip-club": {
    name: "VIP Klubber",
    icon: "👑",
    color: "neon-gold",
    description: "Private VIP klubber og lounger"
  },
  "cocktail-lounge": {
    name: "Cocktail Lounger",
    icon: "🍸",
    color: "neon-turquoise",
    description: "Sofistikerte cocktailbarer med show"
  },
  "dance-club": {
    name: "Danseklubb",
    icon: "💃",
    color: "neon-purple",
    description: "Danseklubb med voksenunderholdning"
  }
} as const;

export const MOCK_VENUES: Venue[] = [
  // Oslo venues
  {
    id: "oslo-1",
    name: "Red Light Lounge",
    category: "strip-club",
    city: "Oslo",
    country: "Norge",
    address: "Grønlands Torg 15, 0133 Oslo",
    coordinates: { lat: 59.9139, lng: 10.7522 },
    rating: 4.2,
    reviewCount: 89,
    priceLevel: 3,
    openNow: true,
    openingHours: "20:00 - 03:00",
    description: "Oslos mest eksklusive striplokale med internasjonale performere og VIP-opplevelser.",
    features: ["VIP-rom", "Champagne-service", "Private dances", "Live shows"],
    imageUrl: "/venues/red-light-oslo.jpg",
    specialOffers: ["Happy hour 20-22", "VIP-pakke inkludert champagne"],
    upcomingEvents: ["International Night - Lørdag"],
    atmosphereLevel: 4,
    ageRestriction: 20,
    dressCode: "Smart casual / Business",
    verified: true
  },
  {
    id: "oslo-2", 
    name: "Neon Nights",
    category: "nightclub",
    city: "Oslo",
    country: "Norge",
    address: "Aker Brygge 7, 0150 Oslo",
    coordinates: { lat: 59.9094, lng: 10.7297 },
    rating: 4.5,
    reviewCount: 156,
    priceLevel: 3,
    openNow: false,
    openingHours: "22:00 - 04:00 (Fre-Lør)",
    description: "Trendy nattklubb med DJ-sets og spesielle voksenshow på weekender.",
    features: ["DJ booth", "Dansegulv", "Tematiske show", "Cocktailbar"],
    imageUrl: "/venues/neon-nights-oslo.jpg",
    specialOffers: ["Gratis inngang før 23:00"],
    upcomingEvents: ["Ladies Night - Fredag", "International DJs - Lørdag"],
    atmosphereLevel: 5,
    ageRestriction: 21,
    dressCode: "Trendy / Fashionable",
    verified: true
  },
  {
    id: "oslo-3",
    name: "Velvet Room",
    category: "gentlemens-club",
    city: "Oslo", 
    country: "Norge",
    address: "Frogner Park Gate 2, 0268 Oslo",
    coordinates: { lat: 59.9267, lng: 10.7053 },
    rating: 4.7,
    reviewCount: 67,
    priceLevel: 4,
    openNow: true,
    openingHours: "19:00 - 02:00",
    description: "Oslos mest prestisjetunge gentlemen's club med eksklusiv medlemsordning.",
    features: ["Medlemskap påkrevd", "Cigarbiblitek", "Premium alkohol", "Private suiter"],
    imageUrl: "/venues/velvet-oslo.jpg",
    specialOffers: ["Prøvemedlemskap tilgjengelig"],
    atmosphereLevel: 3,
    ageRestriction: 25,
    dressCode: "Formelt / Jacket required",
    verified: true
  },

  // Stockholm venues
  {
    id: "stockholm-1",
    name: "Stockholm Nights",
    category: "strip-club",
    city: "Stockholm",
    country: "Sverige",
    address: "Södermalm 12, 116 20 Stockholm",
    coordinates: { lat: 59.3165, lng: 18.0649 },
    rating: 4.1,
    reviewCount: 134,
    priceLevel: 3,
    openNow: true,
    openingHours: "20:00 - 03:00",
    description: "Stockholms ledende stripklubb med skandinaviske og internasjonale performere.",
    features: ["Live performances", "VIP-lounger", "Champagne-service", "Pole dancing"],
    imageUrl: "/venues/stockholm-nights.jpg",
    specialOffers: ["Student-rabatt onsdager", "VIP-oppgradering gratis før 21:00"],
    upcomingEvents: ["Scandinavian Beauties - Torsdag"],
    atmosphereLevel: 4,
    ageRestriction: 18,
    dressCode: "Smart casual",
    verified: true
  },
  {
    id: "stockholm-2",
    name: "Blue Diamond",
    category: "vip-club",
    city: "Stockholm",
    country: "Sverige", 
    address: "Östermalm 45, 114 36 Stockholm",
    coordinates: { lat: 59.3345, lng: 18.0969 },
    rating: 4.6,
    reviewCount: 89,
    priceLevel: 4,
    openNow: false,
    openingHours: "21:00 - 04:00 (Tors-Lør)",
    description: "Eksklusiv VIP-klubb med private rom og personlig concierge-service.",
    features: ["Private rom", "Concierge", "Gourmet catering", "Premium bar"],
    imageUrl: "/venues/blue-diamond-stockholm.jpg",
    specialOffers: ["Medlemskap med fordeler"],
    atmosphereLevel: 2,
    ageRestriction: 23,
    dressCode: "Black tie optional",
    verified: true
  },
  {
    id: "stockholm-3",
    name: "Burlesque Palace",
    category: "burlesque",
    city: "Stockholm",
    country: "Sverige",
    address: "Gamla Stan 8, 111 29 Stockholm", 
    coordinates: { lat: 59.3251, lng: 18.0719 },
    rating: 4.4,
    reviewCount: 201,
    priceLevel: 2,
    openNow: true,
    openingHours: "19:00 - 01:00",
    description: "Autentisk burlesque-teater med vintage atmosfære og varieté-show.",
    features: ["Burlesque shows", "Vintage dekor", "Cocktailbar", "Live musikk"],
    imageUrl: "/venues/burlesque-stockholm.jpg",
    specialOffers: ["Show + middag pakke"],
    upcomingEvents: ["Vintage Cabaret - Lørdag", "Amateur Night - Tirsdag"],
    atmosphereLevel: 3,
    ageRestriction: 18,
    dressCode: "Vintage inspired / Creative",
    verified: true
  },

  // København venues  
  {
    id: "copenhagen-1",
    name: "Copenhagen Dolls",
    category: "strip-club",
    city: "København",
    country: "Danmark",
    address: "Vesterbro 23, 1620 København",
    coordinates: { lat: 55.6681, lng: 12.5515 },
    rating: 4.3,
    reviewCount: 167,
    priceLevel: 3,
    openNow: true,
    openingHours: "20:00 - 04:00",
    description: "Københavns mest populære stripklubb med dansk hygge og international flair.",
    features: ["Danmarks største scene", "International cast", "VIP-pakker", "Champagne-bar"],
    imageUrl: "/venues/copenhagen-dolls.jpg", 
    specialOffers: ["Grupperabatter", "Birthday packages"],
    upcomingEvents: ["Nordic Nights - Fredag"],
    atmosphereLevel: 4,
    ageRestriction: 18,
    dressCode: "Casual / Neat",
    verified: true
  },
  {
    id: "copenhagen-2",
    name: "The Gentleman",
    category: "gentlemens-club",
    city: "København", 
    country: "Danmark",
    address: "Nyhavn 14, 1051 København",
    coordinates: { lat: 55.6798, lng: 12.5912 },
    rating: 4.8,
    reviewCount: 78,
    priceLevel: 4,
    openNow: false,
    openingHours: "18:00 - 02:00",
    description: "Eksklusiv gentlemen's club ved Nyhavn med tradisjonell dansk eleganse.",
    features: ["Cigar lounge", "Whisky-bibliotek", "Private dining", "Business facilities"],
    imageUrl: "/venues/gentleman-copenhagen.jpg",
    specialOffers: ["Business lunch tilgjengelig"],
    atmosphereLevel: 2,
    ageRestriction: 25,
    dressCode: "Business attire required",
    verified: true
  },
  {
    id: "copenhagen-3",
    name: "Midnight Lounge",
    category: "cocktail-lounge",
    city: "København",
    country: "Danmark",
    address: "Indre By 56, 1207 København",
    coordinates: { lat: 55.6867, lng: 12.5700 },
    rating: 4.2,
    reviewCount: 143,
    priceLevel: 2,
    openNow: true,
    openingHours: "19:00 - 02:00",
    description: "Sofistikert cocktaillounge med live jazz og diskrete private områder.",
    features: ["Craft cocktails", "Live jazz", "Private booths", "Late night menu"],
    imageUrl: "/venues/midnight-copenhagen.jpg",
    specialOffers: ["Jazz night specials", "Cocktail tasting menu"],
    upcomingEvents: ["Jazz Quartet - Onsdag", "Cocktail Masterclass - Søndag"],
    atmosphereLevel: 3,
    ageRestriction: 20,
    dressCode: "Smart casual / Jazz club attire",
    verified: true
  },

  // Göteborg venues
  {
    id: "goteborg-1", 
    name: "Scandinavian Dreams",
    category: "adult-lounge",
    city: "Göteborg",
    country: "Sverige",
    address: "Avenyn 89, 411 36 Göteborg",
    coordinates: { lat: 57.7072, lng: 11.9668 },
    rating: 4.0,
    reviewCount: 92,
    priceLevel: 2,
    openNow: true,
    openingHours: "21:00 - 03:00",
    description: "Göteborgs mest avslappede voksenlounge med skandinavisk design og intimitet.",
    features: ["Skandinavisk design", "Intimate atmosfære", "Premium drinks", "Soft entertainment"],
    imageUrl: "/venues/scandi-dreams-goteborg.jpg",
    specialOffers: ["Local resident discount"],
    atmosphereLevel: 3,
    ageRestriction: 20,
    dressCode: "Casual / Comfortable",
    verified: true
  },

  // Malmö venues
  {
    id: "malmo-1",
    name: "Pink Paradise",
    category: "dance-club", 
    city: "Malmö",
    country: "Sverige",
    address: "Gamla Väster 15, 211 21 Malmö",
    coordinates: { lat: 55.6050, lng: 13.0038 },
    rating: 3.9,
    reviewCount: 156,
    priceLevel: 2,
    openNow: false,
    openingHours: "22:00 - 04:00 (Fre-Lør)",
    description: "Energisk danseklubb med temakveld og interaktive show på weekendene.",
    features: ["LED-dansegulv", "Theme nights", "Interactive shows", "Student-vennlig"],
    imageUrl: "/venues/pink-paradise-malmo.jpg",
    specialOffers: ["Student nights", "Pre-party packages"],
    upcomingEvents: ["Neon Party - Fredag", "Retro Night - Lørdag"],
    atmosphereLevel: 5,
    ageRestriction: 18,
    dressCode: "Party / Colorful",
    verified: true
  },

  // Bergen venues
  {
    id: "bergen-1",
    name: "Northern Lights Club",
    category: "vip-club",
    city: "Bergen",
    country: "Norge", 
    address: "Bryggen 7, 5003 Bergen",
    coordinates: { lat: 60.3975, lng: 5.3241 },
    rating: 4.5,
    reviewCount: 34,
    priceLevel: 3,
    openNow: false,
    openingHours: "20:00 - 02:00 (Tors-Lør)",
    description: "Bergens mest eksklusive VIP-klubb med utsikt over fjorden og premium service.",
    features: ["Fjordutsikt", "VIP-service", "Premium location", "Exclusive membership"],
    imageUrl: "/venues/northern-lights-bergen.jpg",
    specialOffers: ["Tourist packages available"],
    atmosphereLevel: 2,
    ageRestriction: 23,
    dressCode: "Upscale / Elegant",
    verified: true
  }
];