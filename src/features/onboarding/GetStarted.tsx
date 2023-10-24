"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import GetStartedOptionCard from "@/components/cards/GetStartedOptionCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { DEFAULT_VIEWPORT, defaultVariant } from "@/lib/variants";

const GetStarted = () => {
  return (
    <Box
      variants={defaultVariant({})}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      component={motion.section}
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      margin="3rem 0rem"
    >
      <Typography variant="h3" fontWeight={500} color="#333333">
        Let's get started
      </Typography>
      <Typography variant="h6" fontWeight={400} marginTop=".5rem">
        Create your account as
      </Typography>

      <Box marginTop="3rem">
        <GetStartedOptionCard
          title="Startup Founder"
          description="Individuals who have founded startups and are looking for initial or additional funding."
        />
      </Box>

      <Box display="flex" gap="5rem" marginTop="2rem">
        <Link
          href="/onboarding/angel-investor"
          style={{ textDecoration: "none" }}
        >
          <GetStartedOptionCard
            title="Individual Investor"
            description="Private individuals with disposable income looking to invest in promising startups in exchange for equity or debt."
          />
        </Link>
        <Link
          href="/onboarding/venture-capitalist"
          style={{ textDecoration: "none" }}
        >
          <GetStartedOptionCard
            title="Venture Capitalists"
            description="Professionals representing firms that manage pooled funds from many investors to invest in startups."
          />
        </Link>
      </Box>
    </Box>
  );
};

export default GetStarted;
