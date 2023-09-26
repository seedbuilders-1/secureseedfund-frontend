import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Image from "next/image";

const LINKS = [
  { text: "Company", href: "/company" },
  { text: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <Box
      component="header"
      width="100%"
      height="10vh"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      paddingX="3rem"
      alignItems="center"
      sx={{ backgroundColor: "#FFFFFF66" }}
    >
      <Box width="8rem" height="3rem" sx={{ position: "relative" }}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </Box>
      <List sx={{ display: "flex", gap: "10px" }}>
        {LINKS.map(({ text, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Header;
