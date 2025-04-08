import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getLocalizedMetadata } from "@/utils/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate metadata dynamically based on locale
export async function generateMetadata(): Promise<Metadata> {
  return getLocalizedMetadata("sl");
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div dangerouslySetInnerHTML={{
          __html: '<feedback-widget widgetid="67f540f5f4d8533554ab0b61"></feedback-widget>'
        }} />
        
        <script type="module" src="https://widget.fiidbakk.com/main.js"></script>
      </body>
    </html>
  );
}
