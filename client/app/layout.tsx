import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adedeji Adeleke | Voice of the Streets, Sound of the Future",
  description:
    "Official portfolio of Adedeji Adeleke – Afrobeats singer, songwriter, and storyteller from Lagos. Explore music, shows, and the journey of a rising star blending Afrobeats, R&B, and soul.",
  openGraph: {
    title: "Adedeji Adeleke | Voice of the Streets, Sound of the Future",
    description:
      "Official portfolio of Adedeji Adeleke – Afrobeats singer, songwriter, and storyteller from Lagos. Explore music, shows, and the journey of a rising star blending Afrobeats, R&B, and soul.",
    url: "https://your-artist-portfolio.com/",
    siteName: "Adedeji Adeleke Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dkfmaqtpy/image/upload/v1751909610/Davido-7_e4rqd4.jpg",
        width: 1200,
        height: 630,
        alt: "Adedeji Adeleke Hero Image",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
