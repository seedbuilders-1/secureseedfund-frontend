import ComingSoonHeroSection from "@/components/sections/coming-soon/ComingSoonHeroSection";
import StartupListSection from "@/components/sections/coming-soon/StartupListSection";
import Box from "@mui/material/Box";

const HomePage = () => {
  return (
    <Box width="100%">
      <ComingSoonHeroSection />
      <StartupListSection />
    </Box>
  );
};
export default HomePage;
