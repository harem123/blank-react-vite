import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [zona, setZona] = React.useState('');

  const handleChange = (event) => {
    setZona(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Zona</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={zona}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>CENTRO</MenuItem>
          <MenuItem value={20}>OCCIDENTE</MenuItem>
          <MenuItem value={30}>SUR</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}