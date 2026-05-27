import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MainSelector } from "../../secondPage/equpment/mainSelector";

export function MainSelector({ProvenceName, ProvenceLabel, provance, handleCityChange}) {
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{ProvenceName}</InputLabel>
          <Select
            id="demo-simple-select"
            label={ProvenceLabel}
            onChange={handleCityChange}
          >
            {{provance}.map((item, index) => {
              return (
                <MenuItem key={index} value={item}>
                  {item[0]}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
