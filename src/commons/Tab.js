import { Button } from "@mui/material";
import React from "react";

function Tab({ text = "", onClick, ...rest }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "#000",
        transition: "all 100ms ease-in-out",
        borderRadius: 0,
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: 400,

        "&:disabled": {
          color: "#7200a1",
          borderBottom: "1px solid #7200a1",
        },
        "&:hover": {
          color: "#7200a1",
        },
        ...rest,
      }}
    >
      {text}
    </Button>
  );
}

export function TabActive({ text = "", onClick, ...rest }) {
  return (
    <Button
      onClick={onClick}
      sx={{
        color: "#7200a1",
        borderRadius: 0,
        textTransform: "uppercase",
        fontSize: 16,
        fontWeight: 400,
        borderBottom: "1px solid #7200a1",
        ...rest,
      }}
    >
      {text}
    </Button>
  );
}

export default Tab;
