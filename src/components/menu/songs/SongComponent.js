import React from "react";
import CardSong from "./card_song/CardSong";
import { Box, Typography } from "@mui/material";
import ButtonCustom, {
  ButtonCustomActive,
} from "../../../commons/ButtonCustom";

function SongComponent() {
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
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
        <CardSong />
      </Box>
    </Box>

    // <div id="songs" class="songs page_content">
    //   <div class="songs_button">
    //     <a href="#" class="item active">
    //       Yêu thích
    //     </a>
    //     <a href="#" class="item">
    //       Đã tải lên
    //     </a>
    //   </div>

    //   <div class="list_songs">
    //     <div class="song_tag">
    //       <div class="media">
    //         <div class="media_left">
    //           <p>Bài hát</p>
    //         </div>
    //         <div class="media_content">
    //           <p>Album</p>
    //         </div>
    //         <div class="media_right">
    //           <p>Thời gian</p>
    //         </div>
    //       </div>
    //     </div>
    //     <CardSong />
    //     <CardSong />
    //     <CardSong />
    //     <CardSong />
    //   </div>
    // </div>
  );
}

export default SongComponent;
