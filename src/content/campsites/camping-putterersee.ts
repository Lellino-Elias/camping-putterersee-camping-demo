import type { CampsiteConfig } from "../types";

const IMG = "/campsites/camping-putterersee";

const campingPutterersee: CampsiteConfig = {
  name: "Camping Putterersee",
  shortName: "Putterersee",
  slug: "camping-putterersee",
  ort: "Aigen im Ennstal",
  region: "Steiermark",
  brandKind: "Camping am See",
  see: "Putterersee",
  regionLong: "Putterersee · Aigen im Ennstal · Steiermark",

  heroVariant: "center",

  claim: "Dein Sommer am wärmsten Alpenmoorsee der Steiermark",
  claimEmphasis: "wärmsten Alpenmoorsee",
  emailDetail: "eure Lage direkt am Putterersee",
  intro:
    "Eben gelegene Stellplätze, ein eigener Badesteg und der wärmste Alpenmoorsee der Steiermark direkt vor der Tür — am Camping Putterersee verbringst du deinen Sommer mittendrin im sonnigen Ennstal.",

  logo: { src: `${IMG}/logo.png`, alt: "Camping Putterersee Logo" },

  statement: {
    text: "Bei uns liegt der Badesee direkt vor dem Zelt — und das Wasser ist wärmer als irgendwo sonst in der Steiermark.",
    emphasis: "direkt vor dem Zelt",
  },

  pillars: [
    {
      title: "Direkt am Badesee",
      text: "Der Platz liegt unmittelbar am Putterersee — dem wärmsten Alpenmoorsee der Steiermark. Baden, Badesteg und Seeblick gehören hier zum Alltag.",
      image: { src: `${IMG}/steg-putterersee.webp`, alt: "Holzsteg am Putterersee mit Blick auf die Berge" },
    },
    {
      title: "Stellplätze in der Wiese",
      text: "Ebene Plätze auf der Wiese zwischen See und Bergen, mit Strom und viel Raum für Zelt, Wohnwagen und Wohnmobil — mittendrin im Ennstal.",
      image: { src: `${IMG}/wiese-stellplaetze.webp`, alt: "Blühende Wiese mit Stellplätzen am Putterersee vor Bergkulisse" },
    },
    {
      title: "Familienbetrieb Steiner",
      text: "Familie Steiner führt den Platz persönlich und sorgt für die familiäre, freundliche Atmosphäre, wegen der viele Gäste Jahr für Jahr wiederkommen.",
      image: { src: `${IMG}/familie-steiner.webp`, alt: "Familie Steiner, die Gastgeber des Camping Putterersee" },
    },
  ],

  usps: [
    "Direkt am Putterersee",
    "Wärmster Moorsee der Region",
    "Neues Sanitärgebäude",
    "Brötchen & Pizza im Stüberl",
    "Moderne Camping-Pods",
    "Familienbetrieb Steiner",
  ],

  trust: {
    heading: "Warum Stammgäste jeden Sommer wiederkommen",
    headingEmphasis: "jeden Sommer",
    intro:
      "Solide Ausstattung nach internationalem Standard, ein neues Sanitärgebäude und Gastgeber, die selbst anpacken — viele Gäste kehren seit Jahren an den Putterersee zurück, weil hier einfach alles passt.",
  },

  awards: [],

  hero: {
    aerial: { src: `${IMG}/hero-luftbild.webp`, alt: "Luftbild: Camping Putterersee am See, eingebettet in die Berge des Ennstals" },
    sunset: { src: `${IMG}/see-abendstimmung.webp`, alt: "Abendstimmung am Putterersee mit goldenem Licht über dem Wasser" },
  },

  breather: {
    image: { src: `${IMG}/waschhaus.webp`, alt: "Ruhiger Blick über den Putterersee auf grüne Bergwiesen und bewaldete Hänge im Ennstal" },
    line: "Mittendrin im Ennstal — rundum Berge, Wiesen und Wasser.",
  },

  camping: {
    heading: "Alles da am Putterersee",
    intro:
      "Vom neuen Sanitärgebäude bis zur eigenen Mietbadekabine, von gemütlichen Camping-Pods bis zum Ferienhaus — hier findest du für jeden Urlaub die passende Ausstattung.",
    features: [
      {
        title: "Moderne Camping-Pods",
        text: "Zwei aus solidem Holz gebaute Pods sind eine gemütliche Alternative zu Zelt und Wohnwagen — mit Doppelbett, kleiner Kochnische und SAT-TV.",
        image: { src: `${IMG}/camping-pods.webp`, alt: "Zwei moderne Camping-Pods aus Holz auf der Wiese vor Bergkulisse" },
      },
      {
        title: "Neues Sanitärgebäude",
        text: "Pünktlich zum Saisonstart in Betrieb genommen: ein modernes Sanitär- und Waschgebäude, großzügig und gepflegt für alle Campinggäste.",
        image: { src: `${IMG}/sanitaergebaeude.webp`, alt: "Neues Sanitärgebäude aus Holz am Camping Putterersee" },
      },
      {
        title: "Private Mietbadekabine",
        text: "Du mietest deine eigene Kabine mit Dusche, Waschgelegenheit und WC — Privatsphäre wie im eigenen Bad, schon ab € 9 pro Tag.",
        image: { src: `${IMG}/mietbadekabine.webp`, alt: "Private Mietbadekabine mit Dusche und Waschbecken" },
      },
      {
        title: "Sonnige Terrasse am Pod",
        text: "Eigene Holzterrasse vor dem Pod: Sonnenschirm aufspannen, hinsetzen und den Blick ins grüne Ennstal genießen.",
        image: { src: `${IMG}/pod-terrasse.webp`, alt: "Gäste auf der sonnigen Terrasse vor einem Camping-Pod" },
      },
      {
        title: "Ferienhaus für Familien",
        text: "Das frisch renovierte Ferienhaus steht für deinen Urlaub bereit — viel Platz und Komfort für die ganze Familie, mitten in der Natur.",
        image: { src: `${IMG}/ferienhaus.webp`, alt: "Frisch renoviertes Ferienhaus am Camping Putterersee" },
      },
      {
        title: "Wohnlich eingerichtet",
        text: "Helles Holz, warme Farben und alles Nötige auf kleinem Raum: Die Pods sind liebevoll ausgestattet — zum Ankommen und Wohlfühlen.",
        image: { src: `${IMG}/pod-innen-bett.webp`, alt: "Wohnlich eingerichteter Camping-Pod mit Doppelbett" },
      },
    ],
  },

  anreise: {
    heading: "So kommst du ins Ennstal",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 Pyhrn-Autobahn bis Liezen, dann auf der B320 durchs Ennstal nach Aigen im Ennstal — der Platz ist ausgeschildert.",
      },
      {
        title: "Mit der Bahn",
        text: "Der Bahnhof Aigen-Irdning liegt nur wenige Minuten entfernt — die Bahn hält mitten im Ennstal.",
      },
      {
        title: "Mit dem Rad",
        text: "Der Ennsradweg R7 führt rund 10 Radminuten am Platz vorbei — ideal für eine Etappe oder einen Stopp.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Platz",
    headingEmphasis: "Eindrücke",
    intro:
      "Ein paar Blicke auf Ausstattung und Unterkünfte — vom hellen Pod-Interieur bis zu den modernen Waschräumen.",
    tag: "Camping Putterersee",
    images: [
      { src: `${IMG}/pod-innen-kueche.webp`, alt: "Camping-Pod von innen mit Kochnische und Essplatz" },
      { src: `${IMG}/sanitaer-dusche.webp`, alt: "Bodenebene Dusche im neuen Sanitärgebäude" },
      { src: `${IMG}/waschhaus-innen.webp`, alt: "Moderner Waschraum im neuen Sanitärgebäude mit Doppelwaschbecken und WC-Kabinen" },
      { src: `${IMG}/pod-detail.webp`, alt: "Liebevolles Detail im Camping-Pod" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz am Putterersee",
    headingEmphasis: "am Putterersee",
    intro:
      "Sag uns Zeitraum und Personenzahl — Familie Steiner meldet sich persönlich mit deiner Verfügbarkeit und dem genauen Preis.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise Nebensaison 2026 (ab) — Stellplatz inkl. 2 Personen & Strom; Mietobjekte für 2 Personen, zzgl. Endreinigung. Pro Person ab 15 J. € 2,50 Ortstaxe/Nacht. Hauptsaison etwas höher — Endpreis auf Anfrage.",
    highlight: { title: "Am wärmsten Moorsee", text: "Vom Stellplatz sind es nur wenige Schritte bis ins Wasser." },
    categories: [
      { id: "stellplatz", label: "Stellplatz · 2 Pers. inkl. Strom", perNight: 34, perExtraGuest: 10.5 },
      { id: "pod", label: "Camping-Pod", perNight: 48 },
      { id: "miethuette", label: "Miethütte", perNight: 40, perExtraGuest: 14 },
      { id: "ferienwohnung", label: "Ferienwohnung", perNight: 88, perExtraGuest: 15 },
    ],
  },

  kontakt: {
    coords: { lat: 47.520527, lng: 14.130566 },
    tel: "+43 664 4840061",
    telHref: "tel:+436644840061",
    mail: "office@camping-putterersee.at",
    adresse: "Hohenberg 2a · 8943 Aigen im Ennstal · Österreich",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Platz",
      href: "#camping",
      children: [
        { label: "Ausstattung", href: "#camping" },
        { label: "Unterkünfte", href: "#camping" },
      ],
    },
    { label: "Galerie", href: "#galerie" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default campingPutterersee;
