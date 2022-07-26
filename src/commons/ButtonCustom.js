import { Button } from "@mui/material";
import React from "react";

export default function ButtonCustom({ active, text = "", onClick, ...rest }) {
  return (
    <Button
      onClick={onClick}
      disabled={active}
      sx={{
        color: "#000",
        borderRadius: 999,
        textTransform: "uppercase",
        fontSize: 12,
        fontWeight: 400,
        marginRight: 4,
        border: "1px solid",
        height: "25px",
        "&:disabled": {
          color: "#fff",
          backgroundColor: " #7200a1",
          border: "none",
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
