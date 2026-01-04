import { React, useState } from "react";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const MuiButton = () => {
  const [formate, setFormate] = useState("");

  const handleChange = (e, currentVal) => {
    if (currentVal !== null) {
      setFormate(currentVal);
    }
    switch (currentVal) {
        case 'web':
            console.log(`website`);
            break;
        case 'android':
            console.log(`android Mobile`);
            break;
        case 'ios':
            console.log(`hello`);
        default:
            break;
    }

  };
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={3}>
        <Button variant="text">Button 1</Button>
        <Button variant="contained" onClick={() => alert("Hello")}>
          Button 2
        </Button>
        <Button variant="outlined">Button 3</Button>
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      <Stack spacing={2} direction={"row"}>
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={3} direction={"row"}>
        <Button variant="contained" color="secondary" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" color="secondary" endIcon={<DeleteIcon />}>
          Delete
        </Button>
      </Stack>

      <Stack direction={"row"} spacing={3}>
        <IconButton aria-label="delete" color="success">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="send" color="primary">
          <SendIcon fontSize="small" />
        </IconButton>
        <IconButton aria-label="send" color="secondary">
          <SendIcon fontSize="large" />
        </IconButton>
      </Stack>

      <Stack direction={"row"} spacing={2}>
        <ButtonGroup
          variant="contained"
          color="success"
          orientation="vertical"
          disableElevation
          aria-label="Basic Button Group"
          size="small"
        >
          <Button>Left</Button>
          <Button color="warning">Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="success"
          orientation="vertical"
          disableElevation
          aria-label="Basic Button Group"
          size="medium"
        >
          <Button>Left</Button>
          <Button color="warning">Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <ButtonGroup
          variant="contained"
          color="success"
          orientation="vertical"
          disableElevation
          aria-label="Basic Button Group"
          size="large"
        >
          <Button>Left</Button>
          <Button color="warning">Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          exclusive
          color="success"
          aria-label="Platform"
          onChange={handleChange}
          value={formate}
          orientation="vertical"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">ios</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
