"use client";
import { Dispatch, SetStateAction } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import Image from "next/image";
import { VentureCapitalistProfileDetailsValidation } from "@/lib/validations/onboarding";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

import CustomInputWrapper from "@/components/ui/input";
import countries from "@/lib/data/countries";
import dynamic from "next/dynamic";

const DynamicMuiPhoneNumber = dynamic(
  () => import("material-ui-phone-number"),
  {
    ssr: false,
    loading: () => <p>Loading phone input...</p>,
  }
);

interface Props {
  form: UseFormReturn<VentureCapitalistProfileDetailsValidation>;
  setStep: Dispatch<SetStateAction<number>>;
}

const VentureCapitalistProfileDetailsForm = ({ form, setStep }: Props) => {
  const onNext = () => {
    setStep(1);
  };
  return (
    <Box
      component="form"
      noValidate
      onSubmit={form.handleSubmit(onNext)}
      sx={{
        display: "grid",
        gridTemplateColumns: { sm: "1fr 1fr" },
        columnGap: 4,
        rowGap: 2,
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
            <InputLabel>Email</InputLabel>
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
        name="country"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Country</InputLabel>
            <Autocomplete
              id="country-select"
              options={countries}
              autoHighlight
              onBlur={onBlur}
              onChange={(e, newValue) => {
                if (!newValue) return;
                form.setValue("country", newValue);
              }}
              value={value}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  key={option.label}
                  {...props}
                >
                  <Image
                    loading="lazy"
                    width={20}
                    height={20}
                    style={{ objectFit: "contain" }}
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    alt="Country flag"
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  error={Boolean(error)}
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password", // disable autocomplete and autofill
                  }}
                />
              )}
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
        name="phoneNumber"
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

      <Box sx={{ gridColumn: "span 2 / span 2" }}>
        <Button fullWidth variant="contained" type="submit">
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default VentureCapitalistProfileDetailsForm;
