import { Link } from "react-router-dom";

import PlaylistTitle from "./play_list_title/PlaylistTitle";
import { Box, Grid } from "@mui/material";
import CardItem from "../../commons/CardItem";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useDispatch } from "react-redux";
import userSlice from "../../redux/userSlice/userSlice";

export default function PlayList({ myArrayPlaylist }) {
  const dispatch = useDispatch();
  // console.log(myArrayPlaylist);
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
        {myArrayPlaylist.map((data, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Link className="card_playlist" to={`/ca-nhan/detail/${data.id}`}>
              <CardItem
                data={data}
                firstIcon={
                  <ClearOutlinedIcon
                    onClick={(e) => {
                      e.preventDefault();
                      if (
                        window.confirm(
                          "Bạn có chắc chắn xóa Playlist này không?"
                        )
                      ) {
                        dispatch(userSlice.actions.deletePlayList(index));
                      }
                    }}
                  />
                }
                firstTitle="Xóa"
                secondIcon={
                  <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 50 }} />
                }
                threeIcon={<MoreHorizOutlinedIcon />}
                secondTitle="Khác"
                nameItem={data.name}
                nameAuthor={data.discription}
              />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
