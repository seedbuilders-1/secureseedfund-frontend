"use client";
import { Controller, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

import CustomInputWrapper from "@/components/ui/input";
import FormHelperText from "@mui/material/FormHelperText";
import { LoginSchema, LoginValidation } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const form = useForm<LoginValidation>({
    resolver: zodResolver(LoginSchema),
  });
  const router = useRouter();

  const onSubmit = () => {
    router.push("/onboarding");
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={form.handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Controller
        name="email"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper sx={{ gridColumn: "span 2 / span 2" }}>
            <InputLabel>Email Address</InputLabel>
            <TextField
              name="email"
              placeholder="jane@example.com"
              required
              inputRef={ref}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(error)}
              fullWidth
            />
            <FormHelperText
              sx={{
                color: "error.main",
              }}
            >
              {error?.message ?? ""}
            </FormHelperText>
          </CustomInputWrapper>
        )}
      />
      <Controller
        name="password"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Password</InputLabel>
            <TextField
              name="password"
              placeholder="********"
              type="password"
              required
              inputRef={ref}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={Boolean(error)}
              fullWidth
            />
            <FormHelperText
              sx={{
                color: "error.main",
              }}
            >
              {error?.message ?? ""}
            </FormHelperText>
          </CustomInputWrapper>
        )}
      />

      <Button fullWidth variant="contained" type="submit">
        Next
      </Button>
      <Typography variant="caption" align="center">
        Don't have an account?{" "}
        <Typography
          component="a"
          href="/auth/register"
          color="primary.main"
          fontWeight={600}
          variant="caption"
          sx={{
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Sign up
        </Typography>
      </Typography>
    </Box>
  );
};

export default LoginForm;
