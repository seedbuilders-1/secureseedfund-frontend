import Image from "next/image";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  return (
    <Box
      component="footer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap=".5rem"
      width="100%"
      sx={{
        backgroundColor: "primary.main",
        marginTop: "auto",
        minHeight: "30vh",
        paddingY: "3rem",
      }}
    >
      <Box width="8rem" height="3rem" sx={{ position: "relative" }}>
        <Image
          src="/assets/icons/logo-v2.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </Box>

      <Typography
        variant="subtitle1"
        color="white"
        textAlign="center"
        width="65%"
      >
        <strong>Secure Seedfund is a product of</strong> consectetur. Adipiscing
        id dignissim sociis tincidunt dolor mattis ornare condimentum sit. Ut
        augue pulvinar scelerisque fermentum egestas faucibus consectetur. Ac
        posuere turpis amet feugiat nunc. Facilisi ut eget libero tempus at ut.
        Nunc arcu massa faucibus faucibus amet
      </Typography>

      <List sx={{ display: "flex", gap: "2rem", color: "white" }}>
        <Link href="#" style={{ color: "white" }}>
          <TwitterIcon />
        </Link>
        <Link href="#" style={{ color: "white" }}>
          <FacebookIcon />
        </Link>
        <Link href="#" style={{ color: "white" }}>
          <InstagramIcon />
        </Link>
        <Link href="#" style={{ color: "white" }}>
          <LinedInIcon />
        </Link>
      </List>
    </Box>
  );
};

export default Footer;
