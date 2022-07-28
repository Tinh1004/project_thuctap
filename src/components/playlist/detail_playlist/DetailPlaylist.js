import React from "react";
import {
  Button,
  CardMedia,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";

import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import ModeOutlinedIcon from "@mui/icons-material/ModeOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

import EmptyComponent from "../../../commons/EmptyComponent";
import CardSong from "../../menu/songs/card_song/CardSong";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { arrayPlayLists } from "../../../redux/selectors";

function DetailPlaylist({ arrayData, arrayPlaylist }) {
  const { id } = useParams();

  const arrayPlayListSong = arrayPlaylist[id].array;
  console.log("list song: ", arrayPlayListSong);
  console.log("list song 2: ", arrayData);

  const imageDetail = arrayPlaylist[id].image;

  return (
    <>
      <Box sx={{ flexGrow: 1, padding: "50px 40px 0 60px" }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box
              sx={{
                height: "40vh",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                overflow: "hidden",
                borderRadius: 2,

                "&:hover img": {
                  transform: "scale(1.1)",
                },
                "&:hover .icon_play": {
                  visibility: "visible",
                },
              }}
            >
              <CardMedia
                component="img"
                height="100%"
                image={imageDetail}
                alt="playlist image"
                sx={{
                  borderRadius: 2,
                  transition: "0.5s all ease-in-out",
                }}
              />

              <Box
                className="icon_play"
                sx={{
                  visibility: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                }}
              >
                <PlayCircleOutlineOutlinedIcon
                  sx={{
                    fontSize: "4rem",
                    color: "#fff",
                  }}
                />
              </Box>
            </Box>

            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">
                English music <ModeOutlinedIcon />
              </Typography>
              <Typography sx={{ fontSize: "0.8rem", color: "#00000099" }}>
                Tạo bởi
                <Typography
                  variant="span"
                  sx={{
                    fontSize: "0.9rem",
                    color: "#000",
                    paddingLeft: 0.5,
                    fontWeight: 300,
                  }}
                >
                  Tonny
                </Typography>
              </Typography>
              <Typography
                variant="span"
                sx={{ fontSize: "0.8rem", color: "#00000099" }}
              >
                Công khai
              </Typography>

              <Tooltip title="Khác" arrow placement="top">
                <IconButton
                  sx={{
                    width: "35px",
                    height: "35px",
                    color: "#00000099",
                    cursor: "pointer",
                    backgroundColor: "#0000000d",
                    marginTop: 2,
                  }}
                >
                  <MoreHorizOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Grid>

          <Grid item xs={8}>
            {arrayPlayListSong.length === 0 ? (
              <Box>
                <EmptyComponent
                  icon={<LibraryMusicOutlinedIcon sx={{ fontSize: "6rem" }} />}
                  text="Không có bài hát trong playlist của bạn"
                />
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ textTransform: "capitalize", fontWeight: 600 }}
                    >
                      Bài hát gợi ý
                    </Typography>

                    <Button
                      sx={{
                        color: "#fff",
                        backgroundColor: "#6b3483",
                        borderRadius: 4,
                        padding: "3px 15px",
                        fontWeight: 300,
                        "&:hover": {
                          color: "#fff",
                          backgroundColor: "#6b3483",
                          opacity: 0.8,
                        },
                      }}
                    >
                      <AutorenewOutlinedIcon />
                      Làm mới
                    </Button>
                  </Box>

                  {arrayData.map((data, index) => (
                    <CardSong data={data} key={index} />
                  ))}
                </Box>
              </Box>
            ) : (
              <Box>
                {arrayPlayListSong.map((data, index) => (
                  <CardSong data={data} key={index} />
                ))}
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DetailPlaylist;
