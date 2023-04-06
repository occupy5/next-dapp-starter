/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "next-dapp-starter",
  titleTemplate: "%s | next-dapp-starter",
  defaultTitle: "next-dapp-starter",
  description: "Next.js + chakra-ui + TypeScript template",
  canonical: "https://next-dapp-starter.5bang.top",
  openGraph: {
    url: "https://next-dapp-starter.5bang.top",
    title: "next-dapp-starter",
    description: "Next.js + chakra-ui + TypeScript template",
    images: [
      {
        url: "https://og-image.5bang.top/**next-dapp-starter**.5bang.top.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2F5bang.top%2Favataaars.svg&widths=250",
        alt: "next-dapp-starter.5bang.top og-image",
      },
    ],
    site_name: "next-dapp-starter",
  },
  twitter: {
    handle: "@silashenn",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
