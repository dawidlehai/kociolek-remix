// Google Fonts

export const googleFonts = [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,400;0,500;0,700;1,400&display=swap",
  },
];

// Favicons

const faviconsPath = "img/favicons";

const generateFavicons = (sizes: number[]) =>
  sizes.map((size) => ({
    rel: "icon",
    type: "image/png",
    href: `${faviconsPath}/favicon-${size}.png`,
    sizes: `${size}`,
  }));

export const favicons = [
  ...generateFavicons([16, 32, 96, 128, 196, 228]),
  {
    rel: "icon",
    type: "image/svg+xml",
    href: `${faviconsPath}/favicon.svg`,
  },
  {
    rel: "apple-touch-icon",
    href: `${faviconsPath}/apple-touch-icon.png`,
    sizes: "180",
  },
  {
    rel: "manifest",
    href: "manifest.webmanifest",
  },
];
