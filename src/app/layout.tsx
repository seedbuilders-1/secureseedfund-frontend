import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans as IBMPlexSans } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import "@/styles/globals.css";

const DynamicReduxProvider = dynamic(() => import("@/redux/ReduxProvider"), {
  ssr: false,
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ibmPlexSans = IBMPlexSans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const neueHaas = localFont({
  src: [
    {
      path: "../assets/fonts/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayThin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayRoman.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayMediu.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/NeueHaasDisplayBlack.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neue-haas",
});

export const metadata: Metadata = {
  title: "Secure Seed Fund",
  description: "Secure the Next Seed Fund for your startup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${inter.variable} ${ibmPlexSans.variable} ${neueHaas.variable} bg-[#F7F8F6]`}
      >
        <DynamicReduxProvider>{children}</DynamicReduxProvider>
        <Toaster />
      </body>
    </html>
  );
}
