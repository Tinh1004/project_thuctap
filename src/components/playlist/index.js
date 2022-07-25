import { Link } from "react-router-dom";

import PlaylistTitle from "./play_list_title/PlaylistTitle";
import { Box, Grid } from "@mui/material";
import CardItem from "../../commons/CardItem";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

export default function PlayList() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        padding: "70px 40px 0 60px",
      }}
    >
      <PlaylistTitle />

      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
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
        ))}
      </Grid>
    </Box>
  );
}
