import { Box, Button } from "@mui/material";
import React from "react";

function EmptyComponent({ icon, text, textButton, display = "none", ...rest }) {
  return (
    <Box
      mt={6}
      sx={{
        display: "flex",
        width: "100%",
        height: "30vh",
        alignItems: "center",
        flexDirection: "column",
        color: "#00000099",
      }}
    >
      {icon}
      {text}
      <Button
        sx={{
          display: { display },
          marginTop: 2,
          backgroundColor: "#7200a1",
          color: "#fff",
          padding: "6px 24px",
          borderRadius: 999,
          "&:hover": {
            backgroundColor: "#7200a1",
            opacity: 0.8,
          },
        }}
      >
        {textButton}
      </Button>
    </Box>
  );
}

export default EmptyComponent;
