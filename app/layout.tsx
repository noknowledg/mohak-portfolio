import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Mohak Jha — Health Assistant · Aspiring Pharmacist",
  description:
    "Portfolio of Mohak Jha, a Health Assistant from Nepal with practical clinical experience and a growing interest in pharmaceutical sciences.",
  openGraph: {
    title: "Mohak Jha — Health Assistant · Aspiring Pharmacist",
    description: "Compassionate care. Practical experience. Continuous growth.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FBFAF7",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
