import React from "react";
import { Box, Grid } from "@mui/material";

import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import EmptyComponent from "../../../commons/EmptyComponent";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import CardItem from "../../../commons/CardItem";

function MvComponent({ arrayData }) {
  return (
    <Box>
      {arrayData.length <= 0 ? (
        <EmptyComponent
          icon={<LiveTvOutlinedIcon sx={{ fontSize: "8rem" }} />}
          text="Chưa có MV nào trong thư viện"
          textButton="Khám phá ngay"
          display="block"
        />
      ) : (
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          {arrayData.map((data, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <CardItem
                data={data}
                firstIcon={<FavoriteOutlinedIcon />}
                firstTitle="Xóa khỏi thư viện"
                secondIcon={
                  <PlayCircleOutlineOutlinedIcon sx={{ fontSize: "4rem" }} />
                }
                threeIcon={<MoreHorizOutlinedIcon />}
                secondTitle="Khác"
                display="block"
                nameItem={data.name}
                nameAuthor={data.author}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default MvComponent;
