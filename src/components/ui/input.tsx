import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { SxProps, Theme } from "@mui/material";

const CustomInputWrapper = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme> | undefined;
}) => {
  return (
    <Box display="flex" flexDirection="column" gap="5px" sx={sx}>
      {children}
    </Box>
  );
};

export default CustomInputWrapper;
