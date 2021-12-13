import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";

const Second = (props) => {
  const [state, setstate] = useState({
    card: "",
    pin: "",
    cvv: "",
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
      <h1>Payment Info</h1>
      <div className="Form">
        <TextField
          id="card"
          label="Card No"
          variant="standard"
          type="number"
          onChange={onChange}
        />
      </div>
      <div className="Form">
        <TextField
          id="pin"
          type="number"
          label="pin"
          variant="standard"
          onChange={onChange}
        />
      </div>
      <div className="Form">
        <TextField
          id="cvv"
          type="number"
          label="cvv"
          variant="standard"
          onChange={onChange}
        />
      </div>
      <div className="Form">
        <Button
          size="large"
          variant="contained"
          onClick={() => {
            console.log(state);
            props.newPage(2);
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Second;
