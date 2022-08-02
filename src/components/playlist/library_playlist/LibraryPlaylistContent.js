import React from "react";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

import { useContext } from "react";
import { useDispatch } from "react-redux";
import userSlice from "../../../redux/userSlice/userSlice";

import CardItem from "../../../commons/CardItem";
import { CloseContext } from "../../../contexts/CloseContext";

function LibraryPlaylistContent({ myArrayPlaylist }) {
  const context = useContext(CloseContext);
  const dispatch = useDispatch();
  return (
    <Box>
      <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={3}>
          <Box
            onClick={() => context.toggleSetIsClose(true)}
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

        {myArrayPlaylist.map((data, index) => (
          <Grid item xs={4} sm={4} md={3} key={index}>
            <Link className="card_playlist" to={`/ca-nhan/detail/${data.id}`}>
              <CardItem
                data={data}
                firstIcon={
                  <ClearOutlinedIcon
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(userSlice.actions.deletePlayList(index));
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

export default LibraryPlaylistContent;
