import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        zIndex: 30,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        paddingX: "1rem",
        paddingY: "1.5rem",
      }}
    >
      <Link href="/onboarding">
        <Box width="8rem" height="3rem" sx={{ position: "relative" }}>
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Box>
      </Link>
    </Box>
  );
};

export default Topbar;
