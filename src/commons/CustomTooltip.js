import { Tooltip } from "@mui/material";
import React from "react";

function CustomTooltip({ titleTooltip, icon }) {
  return (
    <Tooltip title={titleTooltip} arrow placement="top" sx={{ fontSize: 30 }}>
      {icon}
    </Tooltip>
  );
}

export default CustomTooltip;
