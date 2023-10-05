"use client";
import { Dispatch, SetStateAction } from "react";
import { Controller, UseFormReturn } from "react-hook-form";
import { VentureCapitalistInvestmentPreferenceValidation } from "@/lib/validations/onboarding";

import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CustomInputWrapper from "@/components/ui/input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const sectorsOfInterest = [
  "E-commerce",
  "Agriculture",
  "Fintech",
  "Fashion Business",
];

const typicalInvestmentSize = ["$25,000 - $40,000", "$40,000 - $100,000"];

const regions = ["Nigeria", "Uganda", "Ghana", "United Kingdom"];

const maturityStages = [
  "Pre-Seed",
  "Seed",
  "Expansion",
  "Merge & Acquisition ",
];

const expectedIRR = ["12% on $1000 - $5000", "22% on $10,000 - $50,000"];

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
  form: UseFormReturn<VentureCapitalistInvestmentPreferenceValidation>;
  setStep: Dispatch<SetStateAction<number>>;
}

const VCInvestmentPreferenceForm = ({ form, setStep }: Props) => {
  const onNext = () => {
    setStep(2);
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
        rowGap: 4,
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

      <Controller
        name="typicalInvestmentSize"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Typical Investment Size</InputLabel>
            <Select
              value={value}
              multiple
              displayEmpty
              onChange={onChange}
              placeholder="Search for ROI"
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
              {typicalInvestmentSize.map((sector) => (
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
              {typicalInvestmentSize.map((val) => (
                <Chip
                  key={val}
                  label={val}
                  sx={{ backgroundColor: "#19A65724", color: "#19A657" }}
                  onClick={() => {
                    if (form.watch("typicalInvestmentSize").includes(val))
                      return;
                    const curVals = form.watch("typicalInvestmentSize");
                    form.setValue("typicalInvestmentSize", [...curVals, val]);
                  }}
                  onDelete={
                    form.watch("typicalInvestmentSize").includes(val)
                      ? () => {
                          const curVals = form.watch("typicalInvestmentSize");
                          const filtedCurVals = curVals.filter(
                            (curVal) => curVal !== val
                          );
                          form.setValue("typicalInvestmentSize", filtedCurVals);
                        }
                      : undefined
                  }
                />
              ))}
            </Box>
          </CustomInputWrapper>
        )}
      />

      <Controller
        name="regions"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Regions</InputLabel>
            <Select
              value={value}
              multiple
              displayEmpty
              onChange={onChange}
              placeholder="Search for regions"
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
                    Search for regions
                  </MenuItem>
                )
              }
              MenuProps={MenuProps}
            >
              {regions.map((sector) => (
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
              {regions.map((val) => (
                <Chip
                  key={val}
                  label={val}
                  sx={{ backgroundColor: "#19A65724", color: "#19A657" }}
                  onClick={() => {
                    if (form.watch("regions").includes(val)) return;
                    const curVals = form.watch("regions");
                    form.setValue("regions", [...curVals, val]);
                  }}
                  onDelete={
                    form.watch("regions").includes(val)
                      ? () => {
                          const curVals = form.watch("regions");
                          const filtedCurVals = curVals.filter(
                            (curVal) => curVal !== val
                          );
                          form.setValue("regions", filtedCurVals);
                        }
                      : undefined
                  }
                />
              ))}
            </Box>
          </CustomInputWrapper>
        )}
      />

      <Controller
        name="maturityStages"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Maturity Stages</InputLabel>
            <Select
              value={value}
              multiple
              displayEmpty
              onChange={onChange}
              placeholder="Search for maturity stages"
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
                    Search for maturity stages
                  </MenuItem>
                )
              }
              MenuProps={MenuProps}
            >
              {maturityStages.map((sector) => (
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
              {maturityStages.map((val) => (
                <Chip
                  key={val}
                  label={val}
                  sx={{ backgroundColor: "#19A65724", color: "#19A657" }}
                  onClick={() => {
                    if (form.watch("maturityStages").includes(val)) return;
                    const curVals = form.watch("maturityStages");
                    form.setValue("maturityStages", [...curVals, val]);
                  }}
                  onDelete={
                    form.watch("maturityStages").includes(val)
                      ? () => {
                          const curVals = form.watch("maturityStages");
                          const filtedCurVals = curVals.filter(
                            (curVal) => curVal !== val
                          );
                          form.setValue("maturityStages", filtedCurVals);
                        }
                      : undefined
                  }
                />
              ))}
            </Box>
          </CustomInputWrapper>
        )}
      />

      <Controller
        name="expectedIRR"
        control={form.control}
        render={({
          field: { value, onChange, onBlur, ref },
          fieldState: { error },
        }) => (
          <CustomInputWrapper>
            <InputLabel>Expected IRR</InputLabel>
            <Select
              value={value}
              multiple
              displayEmpty
              onChange={onChange}
              placeholder="Search for risk tolerance"
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
                    Search for risk tolerance
                  </MenuItem>
                )
              }
              MenuProps={MenuProps}
            >
              {expectedIRR.map((sector) => (
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
              {expectedIRR.map((val) => (
                <Chip
                  key={val}
                  label={val}
                  sx={{ backgroundColor: "#19A65724", color: "#19A657" }}
                  onClick={() => {
                    if (form.watch("expectedIRR").includes(val)) return;
                    const curVals = form.watch("expectedIRR");
                    form.setValue("expectedIRR", [...curVals, val]);
                  }}
                  onDelete={
                    form.watch("expectedIRR").includes(val)
                      ? () => {
                          const curVals = form.watch("expectedIRR");
                          const filtedCurVals = curVals.filter(
                            (curVal) => curVal !== val
                          );
                          form.setValue("expectedIRR", filtedCurVals);
                        }
                      : undefined
                  }
                />
              ))}
            </Box>
          </CustomInputWrapper>
        )}
      />

      <Button variant="contained" type="submit">
        Next
      </Button>
    </Box>
  );
};

export default VCInvestmentPreferenceForm;
