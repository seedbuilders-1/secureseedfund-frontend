import SectionContainer from "../SectionContainer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StartupCard from "@/components/cards/StartupCard";

const startups = ["brass", "Mono", "kudi", "spleet", "grey", "brass"];

const StartupListSection = () => {
  return (
    <SectionContainer>
      <Box width="100%" marginBottom="5rem">
        <Typography variant="subtitle2" sx={{ color: "#333333" }}>
          10,000+ Business Trust
        </Typography>
        <Typography
          variant="h2"
          fontWeight={600}
          fontSize="4rem"
          sx={{ color: "#333333" }}
        >
          Your success, our <br /> reputation
        </Typography>

        <Box width="80%" marginX="auto" sx={{ marginTop: "3rem" }}>
          <Grid container spacing={2}>
            {startups.map((startup, i) => {
              return (
                <Grid item xs={4} key={startup + i}>
                  <StartupCard name={startup} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default StartupListSection;
