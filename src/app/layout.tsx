import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans as IBMPlexSans } from "next/font/google";
import dynamic from "next/dynamic";
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
      <body className={`${inter.variable} ${ibmPlexSans.variable}`}>
        <DynamicReduxProvider>{children}</DynamicReduxProvider>
      </body>
    </html>
  );
}
