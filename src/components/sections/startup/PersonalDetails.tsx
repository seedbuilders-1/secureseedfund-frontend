import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DocumentProfileIcon from "@/components/assets/svg/DocumentProfileIcon";
import FileUploadIcon from "@/components/assets/svg/FileUploadIcon";
import ShadowCard from "@/components/cards/ShadowCard";

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

      {/* Experiences */}
      <ShadowCard marginTop="2rem">
        <Typography color="#333" fontWeight={500}>
          Experiences
        </Typography>

        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "2rem",
          }}
        >
          <Stack>
            <Grid container columnSpacing={2} position="relative">
              <Grid item xs={4}>
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
                  Spleet
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" color="#33333366">
                  Position
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  lineHeight="2rem"
                  color="#333333"
                  fontWeight={400}
                >
                  Co-founder
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" color="#33333366">
                  Years
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  lineHeight="2rem"
                  color="#333333"
                  fontWeight={400}
                >
                  2yrs
                </Typography>
              </Grid>
            </Grid>
          </Stack>
          <Stack>
            <Grid container columnSpacing={2} position="relative">
              <Grid item xs={4}>
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
                  Eithad
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" color="#33333366">
                  Position
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  lineHeight="2rem"
                  color="#333333"
                  fontWeight={400}
                >
                  Coach
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="caption" color="#33333366">
                  Years
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  lineHeight="2rem"
                  color="#333333"
                  fontWeight={400}
                >
                  6yrs
                </Typography>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </ShadowCard>

      {/* Document uploads */}
      <ShadowCard marginTop="2rem">
        <Typography color="#333" fontWeight={500}>
          Documents Uploads
        </Typography>
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "2rem",
          }}
        >
          <Stack>
            <Grid
              container
              columnSpacing={2}
              position="relative"
              rowSpacing={2}
            >
              <Grid item xs={12}>
                <Typography variant="caption" color="#33333366" noWrap>
                  Evidence of company registration
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  lineHeight="2rem"
                  color="#333333"
                  fontWeight={400}
                >
                  CAC
                </Typography>
                <Box display="flex" gap="2rem">
                  <Box
                    sx={{
                      width: "2.3rem",
                      height: "2.3rem",
                      borderRadius: "1000px",
                      backgroundColor: "#3333331A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DocumentProfileIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "2.3rem",
                      height: "2.3rem",
                      borderRadius: "1000px",
                      backgroundColor: "#3333331A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileUploadIcon />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="caption" color="#33333366" noWrap>
                  Product Demo
                </Typography>
                <Typography
                  variant="h6"
                  fontSize=".9rem"
                  lineHeight="2rem"
                  color="#333333"
                  fontWeight={400}
                >
                  Spleet website demo
                </Typography>
                <Box display="flex" gap="2rem">
                  <Box
                    sx={{
                      width: "2.3rem",
                      height: "2.3rem",
                      borderRadius: "1000px",
                      backgroundColor: "#3333331A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DocumentProfileIcon />
                  </Box>
                  <Box
                    sx={{
                      width: "2.3rem",
                      height: "2.3rem",
                      borderRadius: "1000px",
                      backgroundColor: "#3333331A",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FileUploadIcon />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </ShadowCard>
    </Box>
  );
};

export default PersonalDetails;
