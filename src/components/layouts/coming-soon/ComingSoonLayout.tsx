import Box from "@mui/material/Box";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ComingSoonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      width="100vw"
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: "#F3F7F6" }}
    >
      <Header />
      <Box component="main" width="100%">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default ComingSoonLayout;
