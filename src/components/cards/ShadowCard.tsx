import { ReactNode } from "react";
import Box, { BoxProps } from "@mui/material/Box";

interface Props extends BoxProps {
  children: ReactNode;
}

const ShadowCard = ({ children, sx, ...other }: Props) => {
  return (
    <Box
      width="100%"
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 6px 50px 7px rgba(0, 0, 0, 0.04)",
        borderRadius: "0.875rem",
        padding: "1rem",
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
};

export default ShadowCard;
