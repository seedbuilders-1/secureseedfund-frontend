import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "@mui/icons-material";
import BellIcon from "@/components/assets/svg/BellIcon";

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
        paddingLeft: "1rem",
        paddingY: "1.5rem",
        paddingRight: "2rem",
      }}
    >
      <Link href="/startup/dashboard">
        <Box width="8rem" height="3rem" sx={{ position: "relative" }}>
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </Box>
      </Link>

      <Box sx={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Typography color="#333333E5" variant="body2">
          Startup Founder
        </Typography>
        <Box display="flex" alignItems="center" gap=".5rem">
          <Avatar
            sx={{ width: 40, height: 40, fontSize: "1rem" }}
            src="/assets/images/avatar.png"
          >
            V
          </Avatar>
          <ChevronRight sx={{ rotate: "90deg", fontSize: "1.3rem" }} />
        </Box>
        <BellIcon />
      </Box>
    </Box>
  );
};

export default Topbar;
