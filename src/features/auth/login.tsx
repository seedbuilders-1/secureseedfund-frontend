import LoginForm from "@/components/forms/auth/LoginForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const AuthLogin = () => {
  return (
    <Box
      width="70%"
      sx={{ marginX: "auto" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        width="8rem"
        height="3rem"
        sx={{ position: "relative", marginBottom: "2rem" }}
      >
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          fill
          className="object-contain"
        />
      </Box>
      <Typography color="grey.600" variant="h5" fontWeight={500}>
        Log into Exisiting Account
      </Typography>
      <Typography color="grey.600" variant="body2" marginBottom="3rem">
        Kindly provide your account credentials
      </Typography>

      <LoginForm />
    </Box>
  );
};

export default AuthLogin;
