import Home from "@/screens/home/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | SecureSeedFund",
};

export default function HomePage() {
  return <Home />;
}
