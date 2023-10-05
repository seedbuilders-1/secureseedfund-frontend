"use client";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ProfileDetailsForm from "@/components/forms/onboarding/angel-investor/ProfileDetailsForm";
import { useForm } from "react-hook-form";
import {
  AngelInvestorProfileDetailsValidation,
  AngelInvestorProfileDetailsSchema,
  InvestmentPreferenceValidation,
  InvestmentPreferenceSchema,
} from "@/lib/validations/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";
import InvestmentPreferenceForm from "@/components/forms/onboarding/angel-investor/InvestmentPreferenceForm";
import SubscriptionCard from "@/components/cards/SubscriptionCard";
import { motion } from "framer-motion";
import { DEFAULT_VIEWPORT, defaultVariant } from "@/lib/variants";

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
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginY={3}
      >
        <Typography color="grey.600" variant="h4" fontWeight={500}>
          {title}
        </Typography>
        <Typography color="grey.600">{description}</Typography>
      </Box>
      {value === index && <Box sx={{ p: 3, width }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AngelInvestor = () => {
  const [value, setValue] = useState(0);

  const profileDetailsform = useForm<AngelInvestorProfileDetailsValidation>({
    resolver: zodResolver(AngelInvestorProfileDetailsSchema),
    defaultValues: {
      email: "",
    },
  });

  const investmentPreferenceForm = useForm<InvestmentPreferenceValidation>({
    resolver: zodResolver(InvestmentPreferenceSchema),
    defaultValues: {
      sectorsOfInterest: [],
      expectedROI: [],
      maturityStages: [],
      regions: [],
      riskTolerance: [],
    },
  });

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
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      margin="3rem 0rem"
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Profile Details" {...a11yProps(0)} />
          <Tab label="Investment Preference" {...a11yProps(1)} />
          <Tab label="Subscription" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel
        title="Profile Details"
        description="Kindly provide with the information below"
        value={value}
        index={0}
      >
        <ProfileDetailsForm form={profileDetailsform} />
      </CustomTabPanel>
      <CustomTabPanel
        title="Investment Preference"
        description="Kindly provide with the information below"
        value={value}
        index={1}
      >
        <InvestmentPreferenceForm form={investmentPreferenceForm} />
      </CustomTabPanel>
      <CustomTabPanel
        title="Subscription"
        description="Select your business subscription below"
        value={value}
        index={2}
        width="80vw"
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            columnGap: 4,
            rowGap: 4,
            // width: "80vw",
          }}
        >
          <SubscriptionCard title="Basic" amount="Free" />
          <SubscriptionCard recommended title="Regular" amount="$50" />
          <SubscriptionCard title="Premium" amount="$100" />
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default AngelInvestor;
