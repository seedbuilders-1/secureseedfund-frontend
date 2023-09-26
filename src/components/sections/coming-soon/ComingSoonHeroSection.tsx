"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Mail } from "@mui/icons-material";
import Image from "next/image";
import { motion } from "framer-motion";
import { DEFAULT_VIEWPORT, defaultVariant } from "@/lib/variants";

const ComingSoonHeroSection = () => {
  return (
    <Box
      component={motion.section}
      variants={defaultVariant({})}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      width="100%"
      height="90vh"
      position="relative"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="subtitle2" sx={{ color: "#333333" }}>
        10,000+ Business Trust
      </Typography>
      <Box position="relative">
        <Typography
          textAlign="center"
          variant="h1"
          fontWeight={600}
          fontSize="4rem"
          sx={{ color: "#333333" }}
        >
          Securing the perfect <br /> Seedfund for your company
        </Typography>
        <Image
          src="/assets/icons/hero-vector-line.svg"
          alt="text line"
          width={300}
          height={20}
          style={{ position: "absolute", objectFit: "contain" }}
        />
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap="1rem"
        marginTop="2rem"
        width="30%"
      >
        <Typography variant="subtitle1" sx={{ color: "#333333B2" }}>
          Join our waitlist now
        </Typography>
        <TextField
          fullWidth
          placeholder="Email address"
          InputProps={{
            startAdornment: (
              <Mail
                color="inherit"
                style={{ color: "#33333399", marginRight: 10 }}
              />
            ),
          }}
          variant="outlined"
          sx={{ borderColor: "#D1D5DB", backgroundColor: "#F9FAFB" }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{ textTransform: "none", fontSize: "1rem" }}
        >
          Join the waiting list for Priority Access
        </Button>
      </Box>

      <Image
        src="/assets/images/left-cards-hero.png"
        alt="cards"
        width={252}
        height={369}
        style={{
          position: "absolute",
          left: -20,
          top: "15%",
          objectFit: "contain",
        }}
      />
      <Image
        src="/assets/images/right-cards-hero.png"
        alt="cards"
        width={273}
        height={488.99}
        style={{
          position: "absolute",
          right: -20,
          top: "10%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default ComingSoonHeroSection;
