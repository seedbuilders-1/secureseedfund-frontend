"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  name: string;
  route: string;
  icon: ReactNode;
}

const NavItem = ({ name, route, icon }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const isActive =
    (pathname?.includes(route) && route.length > 1) || pathname === route;
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        cursor: "pointer",
        color: isActive ? "primary.main" : "#A3AED0E5",
        "&:hover": {
          color: "primary.main",
        },
        paddingRight: "4rem",
        borderRight: (theme) =>
          isActive ? `3px solid ${theme.palette.primary.main}` : "",
      }}
      onClick={() => {
        router.push(route);
      }}
    >
      {icon}
      <Typography
        fontWeight={500}
        sx={{
          textDecoration: "none",
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

export default NavItem;
