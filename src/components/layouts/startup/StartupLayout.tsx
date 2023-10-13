import Box from "@mui/material/Box";
import { ReactNode } from "react";
import LeftSidebar from "./LeftSidebar";
import Topbar from "./Topbar";

const StartupLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Topbar />
      <Box component="main" display="flex" flexDirection="row">
        {/* LeftSidebar */}
        <LeftSidebar />
        <Box
          component="section"
          sx={{
            display: "flex",
            minHeight: "100vh",
            flex: "1 1 0%",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "7rem",
            paddingBottom: "2rem",
            paddingX: "2rem",
          }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "56rem",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default StartupLayout;
