import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import CardItem from "../../../commons/CardItem";

function LibraryPlaylistContent() {
  return (
    <Box>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={3}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
              height: "40vh",
              border: 1,
              borderColor: "#0000001a",
              borderRadius: 2,
              cursor: "pointer",
              "&:hover": {
                color: "#6b3483",
                borderColor: "#6b3483",
              },
            }}
          >
            <AddCircleOutlineOutlinedIcon
              sx={{ fontSize: "3rem", paddingRight: "4px" }}
            />
            <Typography sx={{ fontWeight: 300 }}>Tạo playlist mới</Typography>
          </Box>
        </Grid>

        <Grid item xs={4} sm={4} md={3}>
          <Link className="card_playlist" to="/ca-nhan/detail">
            <CardItem
              firstIcon={<ClearOutlinedIcon />}
              firstTitle="Xóa"
              secondIcon={
                <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 50 }} />
              }
              threeIcon={<MoreHorizOutlinedIcon />}
              secondTitle="Khác"
              nameItem="Mặt trời của em"
              nameAuthor="Phương Ly"
            />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LibraryPlaylistContent;
