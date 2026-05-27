import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function SelectorPublish(props) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    props.setAge(event.target.value);
    console.log(age)
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Category"
          onChange={handleChange}
        >
            {props.catList.map((item)=>{    
                return <MenuItem key={item} value={item.namee}>{item.namee}</MenuItem>
            }
            )}
        </Select>

      </FormControl>
    </Box>
  );
}