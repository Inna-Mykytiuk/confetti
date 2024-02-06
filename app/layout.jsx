import "../public/assets/styles/globals.css";

export const metadata = {
  title: "Confetti",
  description: "We create unique and unique balloon decorations for events",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
