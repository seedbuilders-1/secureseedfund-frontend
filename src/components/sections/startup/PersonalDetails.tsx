import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

const PersonalDetails = () => {
  return (
    <Box width="100%" maxWidth="100%">
      <Box
        width="100%"
        maxWidth="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ borderBottom: 1, borderColor: "divider", paddingBottom: "16px" }}
      >
        <Box display="flex" alignItems="center" gap="10px">
          <Avatar
            sx={{ width: 40, height: 40, fontSize: "1rem" }}
            src="/assets/images/avatar.png"
          >
            V
          </Avatar>
          <Box>
            <Typography variant="h6" fontSize=".9rem" lineHeight="1rem">
              Victor Whyte
            </Typography>
            <Typography variant="caption">Co-founder</Typography>
          </Box>
        </Box>

        <Chip
          label="Seeking fund"
          sx={{
            borderRadius: "6px",
            backgroundColor: "#D9F3A9",
            color: "#19A657",
          }}
        />
      </Box>

      <Box
        position="relative"
        width="100%"
        marginTop="2rem"
        maxWidth="100%"
        sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <Stack>
          <Grid container columnSpacing={2} width="100%" maxWidth="100%">
            <Grid item xs={6}>
              <Typography variant="caption" color="#33333366">
                Company Name
              </Typography>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="2rem"
                color="#333333"
                fontWeight={400}
              >
                SecureSeed Fund
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="caption" color="#33333366">
                Email
              </Typography>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="2rem"
                color="#333333"
                fontWeight={400}
              >
                Lesliealex@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack>
          <Grid container columnSpacing={2} width="100%" maxWidth="100%">
            <Grid item xs={6}>
              <Typography variant="caption" color="#33333366">
                Year of Incorpration
              </Typography>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="2rem"
                color="#333333"
                fontWeight={400}
              >
                2020
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="caption" color="#33333366">
                Expected fund to be raised
              </Typography>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="2rem"
                color="#333333"
                fontWeight={400}
              >
                $80,000
              </Typography>
            </Grid>
          </Grid>
        </Stack>

        <Stack>
          <Grid container columnSpacing={2} width="100%" maxWidth="100%">
            <Grid item xs={6}>
              <Typography variant="caption" color="#33333366">
                Address
              </Typography>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="2rem"
                color="#333333"
                fontWeight={400}
              >
                4517 Washington. Manchester, Kentucky 39495
              </Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography variant="caption" color="#33333366">
                Phone
              </Typography>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="2rem"
                color="#333333"
                fontWeight={400}
              >
                +2348109381262
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
