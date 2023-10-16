import Box from "@mui/material/Box";
import NavItem from "./NavItem";
import DashboardIcon from "@/components/assets/svg/DashboardIcon";
import FinanceIcon from "@/components/assets/svg/FinanceIcon";
import InvestorsIcon from "@/components/assets/svg/InvestorsIcon";
import SchedulesIcon from "@/components/assets/svg/SchedulesIcon";
import SecurityIcon from "@/components/assets/svg/SecurityIcon";
import ProfileIcon from "@/components/assets/svg/ProfileIcon";

const navItems = [
  {
    name: "Dashboard",
    route: "/startup/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Finance",
    route: "/startup/finance",
    icon: <FinanceIcon />,
  },
  {
    name: "Investors",
    route: "/startup/investors",
    icon: <InvestorsIcon />,
  },
  {
    name: "Schedules",
    route: "/startup/schedules",
    icon: <SchedulesIcon />,
  },
  {
    name: "Security",
    route: "/startup/security",
    icon: <SecurityIcon />,
  },
  {
    name: "Profile",
    route: "/startup/profile",
    icon: <ProfileIcon />,
  },
];

const LeftSidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        position: "sticky",
        left: 0,
        top: 0,
        zIndex: 20,
        display: "flex",
        height: "100vh",
        width: "fit-content",
        flexDirection: "column",
        paddingX: "2rem",
        paddingTop: "7rem",
      }}
    >
      <Box
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}
      >
        {navItems.map((nav) => {
          return (
            <NavItem
              key={nav.name}
              name={nav.name}
              route={nav.route}
              icon={nav.icon}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default LeftSidebar;
