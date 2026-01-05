import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  
  
  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  
  return (
    <Box width={"200px"}>
      <TextField
        label="Select-Country"
        select
        fullWidth
        placeholder="Select Country"
        value={country}
        onChange={handleChange}
      >
        <MenuItem value="pk">Pakistan</MenuItem>
        <MenuItem value="in">India</MenuItem>
        <MenuItem value="us">USA</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
