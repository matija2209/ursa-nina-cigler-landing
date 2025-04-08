import { Metadata } from "next";

// Define the metadata structure for each language
type LocalizedMetadata = {
  [locale: string]: {
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
      title: string;
      description: string;
      locale: string;
      siteName: string;
    };
    twitter: {
      title: string;
      description: string;
      card: "summary" | "summary_large_image" | "app" | "player";
    };
  };
};

// Define the metadata for each supported language
const localizedMetadata: LocalizedMetadata = {
  sl: {
    title: "Poslovno Mentorstvo za Ustvarjalke | Urša Nina Cigler - Od Kaosa do Jasnosti",
    description:
      "Urša Nina Cigler (Ursanina) nudi individualno mentorstvo za ustvarjalke in rokodelke. Premagajte preobremenjenost, najdite jasnost in zgradite uspešen posel. Rezervirajte brezplačen spoznavni posvet.",
    keywords: [
        "mentorstvo za ustvarjalke",
        "coaching za rokodelke",
        "poslovno svetovanje za kreativce",
        "podpora podjetnicam",
        "Urša Nina Cigler",
        "Ursanina mentorstvo",
        "kako prodajati ročne izdelke",
        "razvoj posla za ustvarjalce",
        "premagovanje podjetniških ovir",
        "jasnost v poslu",
        "rast podjetja",
        "podjetništvo Slovenija",
        "brezplačen posvet podjetništvo",
        "kreativno podjetništvo",
        "žensko podjetništvo",
        "mentorstvo 1 na 1",
        "Human Design v poslu" // Keep if relevant/mentioned
    ],
    openGraph: {
      title: "Poslovno Mentorstvo za Ustvarjalke | Urša Nina Cigler - Od Kaosa do Jasnosti",
      description:
        "Ste ustvarjalka ali rokodelka in se počutite izgubljeno? Urša Nina Cigler nudi podporo za jasnost in rast vašega posla. Rezervirajte brezplačen posvet.",
      locale: "sl_SI",
      siteName: "Urša Nina Cigler - Mentorstvo", // Or just "Urša Nina Cigler"
    },
    twitter: {
      title: "Poslovno Mentorstvo za Ustvarjalke | Urša Nina Cigler",
      description:
        "Preobremenjeni? Urša Nina Cigler pomaga ustvarjalkam najti jasnost in zgraditi uspešen posel. Kliknite za brezplačen spoznavni posvet!",
      card: "summary_large_image",
    },
  },
  en: {
    title: "Business Mentoring for Female Creators | Urša Nina Cigler - From Chaos to Clarity",
    description:
      "Urša Nina Cigler (Ursanina) offers 1:1 mentoring for female creators & makers. Overcome overwhelm, find clarity, and build a thriving business. Book your free introductory call.",
    keywords: [
        "business mentoring for creators",
        "coaching for makers",
        "business consulting for creatives",
        "female entrepreneur support",
        "Urša Nina Cigler",
        "Ursanina mentoring",
        "how to sell handmade products",
        "creative business growth",
        "overcoming business challenges",
        "business clarity",
        "business growth",
        "entrepreneurship Slovenia",
        "free business consultation",
        "creative entrepreneurship",
        "women entrepreneurship",
        "1:1 mentoring",
        "Human Design for business" // Keep if relevant/mentioned
    ],
    openGraph: {
      title: "Business Mentoring for Female Creators | Urša Nina Cigler - From Chaos to Clarity",
      description:
        "Feeling lost as a female creator or maker? Urša Nina Cigler offers support for clarity and growth in your business. Book a free consultation call.",
      locale: "en_US", // Or en_GB depending on target
      siteName: "Urša Nina Cigler - Mentoring", // Or just "Urša Nina Cigler"
    },
    twitter: {
      title: "Business Mentoring for Female Creators | Urša Nina Cigler",
      description:
        "Overwhelmed? Urša Nina Cigler helps female creators find clarity and build a successful business. Click for a free introductory call!",
      card: "summary_large_image",
    },
  },
};

// Helper function to get metadata for a specific locale
export function getLocalizedMetadata(locale: string): Metadata {
  // *** IMPORTANT: Update this URL to Urša's actual domain ***
  const baseUrl = "https://www.primer-domena-urse.si"; // <--- CHANGE THIS
  const metadata = localizedMetadata[locale] || localizedMetadata.sl; // Default to Slovenian

  return {
    metadataBase: new URL(baseUrl),
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.openGraph.title,
      description: metadata.openGraph.description,
      locale: metadata.openGraph.locale,
      siteName: metadata.openGraph.siteName,
      type: "website",
      url: baseUrl, // Canonical URL for the base site
      images: [
        {
          // *** Use Urša's hero image path ***
          url: `${baseUrl}/ursa_nina_hero.jpg`, // <--- Ensure this image exists in /public
          width: 1200,
          height: 630, // Standard OG image size ratio
          alt: metadata.openGraph.title,
        },
      ],
    },
    twitter: {
      card: metadata.twitter.card,
      title: metadata.twitter.title,
      description: metadata.twitter.description,
       // *** Use Urša's hero image path ***
      images: [`${baseUrl}/ursa_nina_hero.jpg`], // <--- Ensure this image exists
    },
    alternates: {
      // Assuming the landing page is at the root for each locale path
      canonical: `${baseUrl}/${locale}`,
      languages: Object.fromEntries(
        Object.keys(localizedMetadata).map((l) => [l, `${baseUrl}/${l}`])
      ),
    },
  };
}

// Function to generate page-specific metadata (might be less needed for a single landing page)
// Kept for potential future expansion, ensures base metadata is used correctly.
export function generatePageMetadata(
  locale: string,
  pageTitle?: string, // e.g., if you add a blog section later
  pageDescription?: string,
  pageSpecificImage?: string // e.g., for a blog post image
): Metadata {
  // *** IMPORTANT: Update this URL to Urša's actual domain ***
  const baseUrl = "https://www.primer-domena-urse.si"; // <--- CHANGE THIS
  const baseMetadata = getLocalizedMetadata(locale);

  // If no page-specific title or description, return base metadata for the landing page
  if (!pageTitle && !pageDescription) {
    return baseMetadata;
  }

  // Deep clone the base metadata - safer approach if modifying
  const metadata = JSON.parse(JSON.stringify(baseMetadata)) as Metadata;

  const siteNamePart = localizedMetadata[locale]?.siteName || localizedMetadata.sl.siteName;
  const defaultImageUrl = `${baseUrl}/ursa_nina_hero.jpg`; // Default image
  const imageUrl = pageSpecificImage ? `${baseUrl}${pageSpecificImage}` : defaultImageUrl;
  const imageAlt = pageTitle || metadata.openGraph?.title || siteNamePart;


  if (pageTitle) {
    const fullTitle = `${pageTitle} | ${siteNamePart}`;
    metadata.title = fullTitle;
    if (metadata.openGraph) {
      metadata.openGraph.title = fullTitle;
      metadata.openGraph.images = [ { url: imageUrl, width: 1200, height: 630, alt: imageAlt as string, }, ];
    }
    if (metadata.twitter) {
      metadata.twitter.title = fullTitle;
      metadata.twitter.images = [imageUrl];
    }
  }

  if (pageDescription) {
    metadata.description = pageDescription;
    if (metadata.openGraph) metadata.openGraph.description = pageDescription;
    if (metadata.twitter) metadata.twitter.description = pageDescription;
  }

  // Update canonical/OG URL for specific pages if needed (adjust slug logic)
  if (metadata.alternates?.canonical && pageTitle) {
      const slug = pageTitle.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
      const pageUrl = `${baseUrl}/${locale}/${slug}`; // Adjust structure if needed
      metadata.alternates.canonical = pageUrl;
      if(metadata.openGraph) metadata.openGraph.url = pageUrl;
  } else if (metadata.openGraph) {
      // Ensure OG URL points to the correct locale root for the main landing page
      metadata.openGraph.url = `${baseUrl}/${locale}`;
  }


  return metadata;
}