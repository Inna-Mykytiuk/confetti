import "../public/assets/styles/globals.css";

export const metadata = {
  title: "Confetti",
  description: "We create unique and unique balloon decorations for events",
  openGraph: {
    images: '../public/assets/images/og-img.png',
  },
  metadataBase: "https://confetti-tau.vercel.app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
