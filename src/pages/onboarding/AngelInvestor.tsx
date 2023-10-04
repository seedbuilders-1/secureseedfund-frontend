"use client";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import ProfileDetails from "@/components/forms/onboarding/angel-investor/ProfileDetails";
import { useForm } from "react-hook-form";
import {
  AngelInvestorProfileDetailsValidation,
  AngelInvestorProfileDetailsSchema,
} from "@/lib/validations/onboarding";
import { zodResolver } from "@hookform/resolvers/zod";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, width: "50vw" }}>{children}</Box>}
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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
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
      <CustomTabPanel value={value} index={0}>
        <ProfileDetails form={profileDetailsform} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
};

export default AngelInvestor;
