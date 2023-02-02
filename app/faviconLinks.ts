const faviconsPath = "/img/favicons";

const generateFavicons = (sizes: number[]) =>
  sizes.map((size) => ({
    rel: "icon",
    type: "image/png",
    href: `${faviconsPath}/favicon-${size}.png`,
    sizes: `${size}`,
  }));

export default [
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
    href: "/manifest.webmanifest",
  },
];
