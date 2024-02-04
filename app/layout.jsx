import "../public/assets/styles/globals.css";

export const metadata = {
  metadataBase: new URL("https://confetti-tau.vercel.app"),
  title: "Confetti",
  description: "We create unique and unique balloon decorations for events",
  openGraph: {
    images: '../public/assets/images/og-img.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
