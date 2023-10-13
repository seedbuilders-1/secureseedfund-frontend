import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LeftSidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        position: "sticky",
        left: 0,
        top: 0,
        zIndex: 20,
        display: "flex",
        height: "100vh",
        width: "fit-content",
        flexDirection: "column",
        paddingX: "2rem",
        paddingTop: "7rem",
      }}
    >
      <Box
        component="nav"
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <Box>
          <Typography>Dasboard</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LeftSidebar;
