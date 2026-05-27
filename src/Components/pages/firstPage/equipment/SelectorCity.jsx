import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MainSelector } from "../../secondPage/equpment/mainSelector";

export function SelectorCity(props) {
  const [cityId, setCityId] = React.useState();

 const valueCity = props.cityes[cityId];

  const handleCityChange = (event) => {
    props.setProv(event.target.value[0]);
    setCityId(event.target.value[1]);
    props.setCity(event.target.value);
    console.log(props.cityes[cityId]);
  };

  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">PROVENCE-NAME</InputLabel>
          <Select
            id="demo-simple-select"
            label="Provence"
            onChange={handleCityChange}
          >
            {props.provance.map((item, index) => {
              
              return (
                <MenuItem key={index} value={item}>
                  {item[0]}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">CITY-NAME</InputLabel>
          <Select
            id="demo-simple-select"
            label="cityes"
          >
             {valueCity?.map((item, index)=>{
              return(<MenuItem key={index} value={item}>{item}</MenuItem>);
            })} 
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
