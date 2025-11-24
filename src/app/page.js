import Image from "next/image";
import Home from "../app/home/page";
import seoKeywords from "./seoKeywords";

export const metadata = {
  title: "Digital Elite Service | Home",
  description:
    "Welcome to Digital Elite Service. We provide social media marketing, SEO, and professional web development solutions in Bangalore.",
  keywords: seoKeywords,
  openGraph: {
    title: "Digital Elite Service | Home",
    description:
      "Boost your business with our expert digital marketing, SEO, and web development services.",
    url: "https://digitaleliteservices.in/",
    siteName: "Digital Elite Service",
    images: [
      {
        url: "https://digitaleliteservices.in/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Elite Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function index() {
  return (
    <div>
      <Home />
    </div>
  );
}
