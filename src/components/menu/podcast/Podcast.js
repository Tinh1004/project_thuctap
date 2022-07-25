import { Box, Typography } from "@mui/material";
import React from "react";
import ButtonCustom, {
  ButtonCustomActive,
} from "../../../commons/ButtonCustom";

import PodcastsOutlinedIcon from "@mui/icons-material/PodcastsOutlined";
import EmptyComponent from "../../../commons/EmptyComponent";

function Podcast() {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ButtonCustomActive text="Tập mới" />
        <ButtonCustom text="Tập đã lưu" />
        <ButtonCustom text="Chương trình" />
      </Box>
      <EmptyComponent
        icon={<PodcastsOutlinedIcon sx={{ fontSize: "8rem" }} />}
        text={<Typography>Không có tập mới</Typography>}
      />
    </Box>
  );
}

export default Podcast;
