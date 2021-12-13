import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
const First = (props) => {
  const [state, setstate] = useState({
    address: "",
  });
  const onChange = (event) => {
    setstate({ ...state, [event.target.id]: event.target.value });
  };
  return (
    <div
      role="tabpanel"
      hidden={props.value !== props.index}
      id={`simple-tabpanel-${props.index}`}
      aria-labelledby={`simple-tab-${props.index}`}
    >
      <h1>Shipping Info</h1>
      <TextField
        variant="standard"
        id="address"
        label="Address"
        multiline
        rows={4}
        onChange={onChange}
      />
      <div>
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            console.log(state);
            props.newPage(1);
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default First;
