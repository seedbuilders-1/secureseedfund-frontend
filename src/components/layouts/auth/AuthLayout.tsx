import { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          flexBasis: "50%",
          marginRight: "50%",
          padding: 4,
          overflowY: "auto",
        }}
      >
        {children}
      </Box>
      <Box
        sx={{
          flexBasis: "50%",
          backgroundColor: "primary.main",
          position: "fixed",
          height: "100%",
          width: "50%",
          overflow: "hidden",
          marginLeft: "50%",
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image
          src="/assets/images/auth-bg.png"
          width={648}
          height={515}
          alt="Auth Background Image"
          style={{ objectFit: "contain" }}
        />
        <Typography color="white" variant="h6">
          Securing the perfect Seedfund for your company
        </Typography>
        <Typography color="white" variant="body2" align="center">
          We're reshaping the startup ecosystem, making it better, <br />{" "}
          faster, and more efficient.
        </Typography>
      </Box>
    </Box>
  );
};

export default AuthLayout;
