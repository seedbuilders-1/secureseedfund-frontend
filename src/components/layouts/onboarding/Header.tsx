"use client";
import Box from "@mui/material/Box";
import Image from "next/image";
import { motion } from "framer-motion";
import { DEFAULT_VIEWPORT, defaultVariant } from "@/lib/variants";
import Button from "@mui/material/Button";
import Link from "next/link";

const Header = () => {
  return (
    <Box
      component={motion.header}
      variants={defaultVariant({})}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      width="100%"
      height="10vh"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      paddingX="3rem"
      alignItems="center"
      sx={{ backgroundColor: "#FFFFFF66" }}
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
      <Button variant="contained">Log in</Button>
    </Box>
  );
};

export default Header;
