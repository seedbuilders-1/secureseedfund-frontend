import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  description: string;
}

const GetStartedOptionCard = ({ title, description }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        boxShadow: "0px 25px 50px -12px rgba(0, 0, 0, 0.10)",
        cursor: "pointer",
      }}
      padding="2rem 4rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap=".8rem"
    >
      <Typography variant="h5" fontWeight={600} color="#333333">
        {title}
      </Typography>
      <Typography textAlign="center" maxWidth="18rem" color="#33333399">
        {description}
      </Typography>
    </Box>
  );
};

export default GetStartedOptionCard;
