import Box from "@mui/material/Box";
import { ReactNode } from "react";
import Header from "./Header";

const OnboardingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: "white" }}
    >
      <Header />
      <Box component="main" width="100%">
        {children}
      </Box>
    </Box>
  );
};

export default OnboardingLayout;
