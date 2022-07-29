import { Box, Grid } from "@mui/material";
import React from "react";
import EmptyComponent from "../../../commons/EmptyComponent";
import AlbumIcon from "@mui/icons-material/Album";
import { Link } from "react-router-dom";
import CardItem from "../../../commons/CardItem";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function Album({ arrayPlaylist }) {
  return (
    <Box>
      {arrayPlaylist.length <= 0 ? (
        <EmptyComponent
          icon={<AlbumIcon sx={{ fontSize: "8rem" }} />}
          text="Chưa có album trong thư viện cá nhân"
        />
      ) : (
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          {arrayPlaylist.map((data, index) => (
            <Grid item xs={4} sm={4} md={3} key={index}>
              <Link className="card_playlist" to="/ca-nhan/detail">
                <CardItem
                  data={data}
                  firstIcon={<FavoriteOutlinedIcon />}
                  firstTitle="Xóa khỏi thư viện"
                  secondIcon={
                    <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 50 }} />
                  }
                  threeIcon={<MoreHorizOutlinedIcon />}
                  secondTitle="Khác"
                  nameItem={data.name}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Album;
