import type { Metadata } from "next";
import "./globals.css";
import PageTransitionEffect from '@/components/PageTransitionEffect';
import TransitionOverlay from '@/components/TransitionOverlay';
import { TransitionProvider } from '@/context/TransitionContext';


export const metadata: Metadata = {
  title: "Rosey - Next generation advertising and branding",
  description: "a marketing agency in Edmonton, Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
      </head>
      <body className="antialiased">
        <TransitionProvider>
          <PageTransitionEffect />
          <TransitionOverlay />
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
