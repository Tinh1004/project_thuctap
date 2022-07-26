import React from "react";
import CardSong from "./card_song/CardSong";
import { Box, Typography } from "@mui/material";
import ButtonCustom, {
  ButtonCustomActive,
} from "../../../commons/ButtonCustom";

function SongComponent({ arrayData }) {
  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ButtonCustomActive text="Yêu thích" />
        <ButtonCustom text=" Đã tải lên" />
      </Box>

      <Box mt={3}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomLeftRadius: 2,
            borderBottomRightRadius: 2,
            borderBottom: "1px solid #00000026",
            minHeight: "40px",
            textTransform: "uppercase",
          }}
        >
          <Typography ml={5} sx={{ fontSize: "0.9rem", fontWeight: 400 }}>
            Bài hát
          </Typography>
          <Typography sx={{ fontSize: "0.9rem", fontWeight: 400 }}>
            Album
          </Typography>
          <Typography mr={2} sx={{ fontSize: "0.9rem", fontWeight: 400 }}>
            Thời gian
          </Typography>
        </Box>
        {arrayData.map((data, index) => (
          <CardSong data={data} key={index} />
        ))}
      </Box>
    </Box>
  );
}

export default SongComponent;
