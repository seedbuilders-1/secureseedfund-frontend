import ShadowCard from "@/components/cards/ShadowCard";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import EditIcon from "@/components/assets/svg/EditIcon";

const Security = () => {
  return (
    <Box width="100%" maxWidth="100%">
      <ShadowCard>
        <Stack spacing={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="1rem"
                color="#333333"
                fontWeight={400}
              >
                Update Password
              </Typography>
              <Typography variant="caption" color="#33333366">
                Change your old password to a new one
              </Typography>
            </Box>
            <EditIcon />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                fontSize=".9rem"
                lineHeight="1rem"
                color="#333333"
                fontWeight={400}
              >
                Update Transactional PIN
              </Typography>
              <Typography variant="caption" color="#33333366">
                Change your Transactional Pin
              </Typography>
            </Box>
            <EditIcon />
          </Box>
        </Stack>
      </ShadowCard>
    </Box>
  );
};

export default Security;
