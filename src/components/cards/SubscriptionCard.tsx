import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CheckMarkGreen from "../assets/svg/CheckMarkGreen";
import CheckMarkWhite from "../assets/svg/CheckMarkWhite";
import Button from "@mui/material/Button";
import { Chip, useTheme } from "@mui/material";

interface Props {
  recommended?: boolean;
}

const SubscriptionCard = ({ recommended = false }: Props) => {
  const { palette } = useTheme();
  return (
    <Box
      width="100%"
      p={4}
      borderRadius="10px"
      sx={{
        backgroundColor: recommended ? palette.primary.main : "white",
        boxShadow: recommended
          ? "0px 25px 60px -6px rgba(0, 0, 0, 0.17)"
          : "0px 25px 60px -6px #00000014",
        height: "60vh",
      }}
      display="flex"
      flexDirection="column"
    >
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color={recommended ? "white" : "#333333E5"}
          variant="h5"
          fontWeight={600}
          marginBottom="5px"
        >
          Basic
        </Typography>

        {recommended && (
          <Chip
            label="Recommended"
            size="small"
            sx={{
              backgroundColor: "#D9F3A9",
              borderRadius: "0.375rem",
              fontSize: ".7rem",
              //   padding: 0,
            }}
          />
        )}
      </Box>
      <Typography color={recommended ? "white" : "#333333E5"} variant="body2">
        Lorem ipsum dolor sit amet consectetur.
      </Typography>

      <Typography
        variant="h4"
        marginY={4}
        fontWeight={500}
        color={recommended ? "white" : "#333333E5"}
      >
        Free
      </Typography>

      <Box display="flex" flexDirection="column" gap="10px">
        <Box display="flex" alignItems="center" gap="5px">
          {recommended ? <CheckMarkWhite /> : <CheckMarkGreen />}
          <Typography
            color={recommended ? "white" : "#333333E5"}
            variant="body2"
          >
            Lorem ipsum dolor
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          {recommended ? <CheckMarkWhite /> : <CheckMarkGreen />}
          <Typography
            color={recommended ? "white" : "#333333E5"}
            variant="body2"
          >
            Lorem ipsum dolor
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="5px">
          {recommended ? <CheckMarkWhite /> : <CheckMarkGreen />}
          <Typography
            color={recommended ? "white" : "#333333E5"}
            variant="body2"
          >
            Lorem ipsum dolor
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        sx={{
          marginTop: "auto",
          backgroundColor: recommended ? "white" : "primary.main",
          color: !recommended ? "white" : "primary.main",
        }}
      >
        Current Plan
      </Button>
    </Box>
  );
};

export default SubscriptionCard;
