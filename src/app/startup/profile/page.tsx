import StartupProfilePage from "@/pages/startup/StartupProfilePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Start up",
};

export default function StartupProfile() {
  return <StartupProfilePage />;
}
