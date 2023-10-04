import { AngelInvestorProfileDetailsValidation } from "@/lib/validations/onboarding";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { Controller, UseFormReturn } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import CustomInputWrapper from "@/components/ui/input";
import countries from "@/lib/data/countries";
import Image from "next/image";

interface Props {
  form: UseFormReturn<AngelInvestorProfileDetailsValidation>;
}

const ProfileDetails = ({ form }: Props) => {
  const onNext = () => {
    // TODO: Go to next step
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
              onChange={onChange}
              value={value}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
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

export default ProfileDetails;
