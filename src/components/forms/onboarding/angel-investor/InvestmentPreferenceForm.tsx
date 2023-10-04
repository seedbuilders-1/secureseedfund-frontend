"use client";
import { Controller, UseFormReturn } from "react-hook-form";
import { InvestmentPreferenceValidation } from "@/lib/validations/onboarding";

import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CustomInputWrapper from "@/components/ui/input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";

const sectorsOfInterest = [
  "E-commerce",
  "Agriculture",
  "Fintech",
  "Fashion Business",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface Props {
  form: UseFormReturn<InvestmentPreferenceValidation>;
}

const InvestmentPreferenceForm = ({ form }: Props) => {
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
        gridTemplateColumns: { sm: "1fr" },
        columnGap: 4,
        rowGap: 2,
      }}
    >
      <Controller
        name="sectorsOfInterest"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Sectors of Interest</InputLabel>
            <Select
              value={value}
              multiple
              displayEmpty
              onChange={onChange}
              placeholder="Search for preferences"
              onBlur={onBlur}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) =>
                selected.length ? (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        sx={{ backgroundColor: "#19A65724", color: "#19A657" }}
                        label={value}
                      />
                    ))}
                  </Box>
                ) : (
                  <MenuItem disabled value="">
                    Search for preferences
                  </MenuItem>
                )
              }
              MenuProps={MenuProps}
            >
              {sectorsOfInterest.map((sector) => (
                <MenuItem key={sector} value={sector}>
                  {sector}
                </MenuItem>
              ))}
            </Select>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
                marginTop: "8px",
              }}
            >
              {sectorsOfInterest.map((val) => (
                <Chip
                  key={val}
                  label={val}
                  sx={{ backgroundColor: "#19A65724", color: "#19A657" }}
                  onClick={() => {
                    if (form.watch("sectorsOfInterest").includes(val)) return;
                    const curVals = form.watch("sectorsOfInterest");
                    form.setValue("sectorsOfInterest", [...curVals, val]);
                  }}
                  onDelete={
                    form.watch("sectorsOfInterest").includes(val)
                      ? () => {
                          const curVals = form.watch("sectorsOfInterest");
                          const filtedCurVals = curVals.filter(
                            (curVal) => curVal !== val
                          );
                          form.setValue("sectorsOfInterest", filtedCurVals);
                        }
                      : undefined
                  }
                />
              ))}
            </Box>
          </CustomInputWrapper>
        )}
      />
    </Box>
  );
};

export default InvestmentPreferenceForm;
