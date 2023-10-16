"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import { DEFAULT_VIEWPORT, defaultVariant } from "@/lib/variants";
import PersonalDetails from "@/components/sections/startup/PersonalDetails";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  title: string;
  description: string;
  width?: string;
}

function CustomTabPanel(props: TabPanelProps) {
  const {
    children,
    value,
    index,
    title,
    description,
    width = "50vw",
    ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ width: "100%" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="center"
        marginY={3}
      >
        <Typography color="grey.600" variant="h5" fontWeight={500}>
          {title}
        </Typography>
        <Typography color="grey.600" variant="body2">
          {description}
        </Typography>
      </Box>
      {value === index && <Box sx={{ width }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StartupProfilePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      variants={defaultVariant({})}
      initial="hidden"
      whileInView="visible"
      viewport={DEFAULT_VIEWPORT}
      component={motion.section}
      width="100%"
      display="flex"
      alignItems="start"
      justifyContent="center"
      flexDirection="column"
      //   margin="3rem 0rem"
    >
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Startup profile page"
        >
          <Tab label="Personal Details" {...a11yProps(0)} />
          <Tab label="Pitch Deck" {...a11yProps(1)} />
          <Tab label="Security" {...a11yProps(2)} />
          <Tab label="Settings & Preferences" {...a11yProps(2)} />
        </Tabs>
        <CustomTabPanel
          title="Personal details"
          description="All personal information about your company"
          value={value}
          index={0}
          width="100%"
        >
          <PersonalDetails />
        </CustomTabPanel>
      </Box>
    </Box>
  );
};

export default StartupProfilePage;
