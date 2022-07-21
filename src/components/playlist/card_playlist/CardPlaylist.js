import {
  Box,
  CardActionArea,
  CardMedia,
  Grid,
  Item,
  Tooltip,
  Typography,
} from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import React from "react";
import { Card } from "react-bootstrap";

function CardPlaylist() {
  return (
    // <div className="carousel_playlist">
    //   <div className="image">
    //     <img
    //       src="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
    //       alt="image playlist"
    //     />
    //     <div className="media">
    //       <div className="tooltip_custom">
    //         <i className="fa-solid fa-x"></i>
    //         <span className="tooltip_text">Xóa</span>
    //       </div>
    //       <i className="fa-solid fa-play"></i>
    //       <div className="tooltip_custom">
    //         <i className="fa-solid fa-ellipsis"></i>
    //         <span className="tooltip_text">Khác</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="name">
    //     <a href="/" className="name_playlist">
    //       English music
    //     </a>
    //     <p className="name_author">Phương Ly</p>
    //   </div>
    // </div

    <Card
      style={{
        border: "none",
        boxShadow: "none",
        marginRight: 20,
        marginBottom: 20,
        height: "40vh",
        overflow: "hidden",
      }}
    >
      <Box
        mb={1}
        sx={{
          width: "100%",
          height: "80%",
          overflow: "hidden",
          borderRadius: 2,
          cursor: "pointer",
          position: "relative",
          "&:hover .media": {
            visibility: "visible",
          },

          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Box
          className="media"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            visibility: "hidden",
            zIndex: 1,
          }}
        >
          <Tooltip title="Xóa" arrow placement="top" sx={{ fontSize: 30 }}>
            <ClearOutlinedIcon />
          </Tooltip>
          <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 50 }} />
          <Tooltip title="Khác" arrow placement="top" sx={{ fontSize: 30 }}>
            <MoreHorizOutlinedIcon />
          </Tooltip>
        </Box>

        <CardMedia
          component="img"
          height="100%"
          image="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
          alt="playlist image"
          sx={{
            borderRadius: 2,
            transition: "0.5s all ease-in-out",
          }}
        />
      </Box>

      <Box sx={{ width: "100%", height: "20%" }}>
        <Typography sx={{ fontSize: "1rem", color: "black" }}>
          English music
        </Typography>
        <Typography sx={{ fontSize: "0.9rem", color: "#00000099" }}>
          Phương Ly
        </Typography>
      </Box>
    </Card>
  );
}

export default CardPlaylist;
