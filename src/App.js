import React, { useState } from "react";
import "./App.css";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import First from "./components/first";
import Second from "./components/second";
import Third from "./components/third";

function App() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const newPage = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label="Shipping Info" />
          <Tab label="Payment Info" />
          <Tab label="Order Placed" />
        </Tabs>
      </Box>
      <First value={value} index={0} newPage={newPage} />
      <Second value={value} index={1} newPage={newPage} />
      <Third value={value} index={2} />
    </div>
  );
}

export default App;
