import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { toast } from "react-toastify";
import userSlice from '../../../redux/userSlice/userSlice';
import { useSelector, useDispatch } from "react-redux";
import { arraySearchPlayLists, myPlayListsSelector } from "../../../redux/selectors";

import CardItem from "../../../commons/CardItem";

function SearchPlaylist(props) {
  const dispatch = useDispatch();
  const searchPlayLists = useSelector(arraySearchPlayLists);
  const myPlayLists = useSelector(myPlayListsSelector);

  const navigate = useNavigate();

  const handleClickAddPlayList = (item) => {
    const user = localStorage.getItem("user");
    if (user) {
      const checkItemPlayList = myPlayLists.filter((e) => e.id === item.id);
      if (checkItemPlayList.length === 0) {
        dispatch(userSlice.actions.addPlayList(item));
        toast.success("Thêm Playlist thành công!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Đã tồn tại...", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } else {
      navigate("/login");
    }

  }

  return (
    <Box sx={{ width: "100%", paddingLeft: 8, paddingRight: 2 }}>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        {searchPlayLists.map((data, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <CardItem
              data={data}
              firstIcon={<FavoriteBorderIcon onClick={() => handleClickAddPlayList(data)} />}
              firstTitle="thêm vào playlist"
              secondIcon={
                <PlayCircleOutlineOutlinedIcon sx={{ fontSize: 50 }} onClick={() => {
                  navigate(`/detail/${data.id}`)
                }} />
              }
              threeIcon={<></>}
              secondTitle=""
              nameItem={data.name}
              nameAuthor={data.discription}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SearchPlaylist;
