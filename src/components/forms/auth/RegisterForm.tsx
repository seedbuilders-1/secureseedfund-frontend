"use client";
import { Controller, useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";

import CustomInputWrapper from "@/components/ui/input";
import FormHelperText from "@mui/material/FormHelperText";
import { RegisterSchema, RegisterValidation } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { DynamicMuiPhoneNumber } from "../onboarding/angel-investor/ProfileDetailsForm";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const form = useForm<RegisterValidation>({
    resolver: zodResolver(RegisterSchema),
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
        name="firstName"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>First Name</InputLabel>
            <TextField
              name="firstName"
              placeholder="Input text"
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
        name="lastName"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Last Name</InputLabel>
            <TextField
              name="lastName"
              placeholder="Input text"
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
        name="phone"
        control={form.control}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Phone Number</InputLabel>
            <DynamicMuiPhoneNumber
              placeholder="98765432"
              onChange={onChange}
              //   inputRef={ref}
              defaultCountry="ng"
              onBlur={onBlur}
              error={Boolean(error)}
              fullWidth
              value={value}
              variant="outlined"
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
      <Controller
        name="confirmPassword"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Re-enter Password</InputLabel>
            <TextField
              name="confirmPassword"
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
        Already have an account?{" "}
        <Typography
          component="a"
          href="/auth/login"
          color="primary.main"
          fontWeight={600}
          variant="caption"
          sx={{
            cursor: "pointer",
            textDecoration: "none",
          }}
        >
          Login
        </Typography>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
