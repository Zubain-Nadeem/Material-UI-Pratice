import { Stack, TextField, InputAdornment } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EmailIcon from '@mui/icons-material/Email';
import React from "react";

const MuiTextField = () => {
  return (
    <Stack>
      <Stack direction={"row"} spacing={2} sx={{ marginBottom: 2 }}>
        <TextField variant="filled" label="Filled" />
        <TextField variant="outlined" label="Outlined" />
        <TextField variant="standard" label="Standard" />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          variant="outlined"
          label="Outlined"
          color="secondary"
          helperText="Dont share you password"
          required
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="small"
          size="small"
          variant="outlined"
          color="success"
        />
        <TextField
          label="medium"
          size="medium"
          variant="outlined"
          color="success"
        />
      </Stack>
      <Stack direction={"row"} spacing={2}>
        <TextField
          label="Amount"
          variant="outlined"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        />
        <TextField variant="outlined" color="success" label= 'weight' slotProps={{
            input : {
                endAdornment : <InputAdornment position="end">kg</InputAdornment>
            }
        }} />
        <TextField variant="outlined" color="success" label= 'email' slotProps={{
            input : {
                startAdornment : <InputAdornment position="start"><EmailIcon /></InputAdornment>
            }
        }} />
        <TextField variant = 'outlined' label = 'password' slotProps={{
            input : {
                endAdornment : <InputAdornment position="end"><RemoveRedEyeIcon /></InputAdornment>
            }
        }} />
      </Stack>
     
    </Stack>
  );
};

export default MuiTextField;
