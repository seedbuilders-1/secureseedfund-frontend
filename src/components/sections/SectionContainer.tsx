import Box from "@mui/material/Box";
import { ReactNode } from "react";

const SectionContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      component="section"
      sx={{
        marginX: "auto",
        width: "100%",
        maxWidth: "2000px",
        paddingX: "5rem",
      }}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
