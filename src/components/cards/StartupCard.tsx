import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

interface Props {
  name: string;
}

const StartupCard = ({ name }: Props) => {
  return (
    <Box
      sx={{ backgroundColor: "#D9F3A9", width: "100%", aspectRatio: "1/1" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Typography
        variant="h2"
        fontWeight={600}
        fontSize="4rem"
        sx={{ color: "#333333E5" }}
      >
        {name}
      </Typography>
      <Image
        src="/assets/icons/card-arrow.svg"
        alt="card arrow"
        width={46}
        height={43}
        style={{ position: "absolute", left: 0, bottom: 0 }}
      />
    </Box>
  );
};

export default StartupCard;
