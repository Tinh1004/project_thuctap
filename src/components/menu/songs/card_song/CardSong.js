import {
  Box,
  CardMedia,
  Checkbox,
  Link,
  Typography,
  Tooltip,
  Button,
} from "@mui/material";
import React from "react";

import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";

function CardSong() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomLeftRadius: 2,
          borderBottomRightRadius: 2,
          borderBottom: "1px solid #00000026",
          minHeight: "60px",
          "&:hover": {
            backgroundColor: "#00000026",
            borderRadius: 2,
          },
          "&:hover .media_left, &:hover .media_content, &:hover .media_right": {
            visibility: "hidden",
          },
          "&:hover .sub_card": {
            visibility: "visible",
          },
        }}
      >
        <Box
          className="media_left"
          sx={{ width: "47%", display: "flex", alignItems: "center" }}
        >
          <HeadsetMicOutlinedIcon
            sx={{
              color: "#32323d80",
              marginLeft: 1,
            }}
          />

          <CardMedia
            component="img"
            image="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
            alt="song card image"
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: 1,
              objectFit: "cover",
              marginLeft: 2,
              marginRight: 1.5,
            }}
          />

          <Box>
            <Typography paddingTop={1} lineHeight={0.8}>
              Mặt trời của em
            </Typography>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                fontSize: "0.8rem",
                color: "#32323d80",
                "&:hover": {
                  textDecoration: "underline",
                  color: "#c662ef",
                },
              }}
            >
              Phương Ly
            </Link>
          </Box>
        </Box>

        <Link
          className="media_content"
          href="#"
          sx={{
            width: "30%",
            lineHeight: "1.33",
            textDecoration: "none",
            fontSize: "0.8rem",
            color: "#32323d80",
            "&:hover": {
              textDecoration: "underline",
              color: "#c662ef",
            },
          }}
        >
          Mặt trời của em
        </Link>

        <Box
          className="media_right"
          sx={{
            marginRight: 1.5,
            width: "20%",
            display: "flex",
            justifyContent: "flex-end",
            lineHeight: "1.33",
            fontSize: "0.8rem",
            color: "#32323d80",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Tooltip title="Xóa khỏi thư viện" arrow placement="top">
              <Checkbox
                icon={<FavoriteOutlinedIcon />}
                sx={{ fontSize: "1.1rem", color: "#7200a1" }}
                checkedIcon={
                  <FavoriteBorderOutlinedIcon sx={{ color: "#32323d80" }} />
                }
              />

              
            </Tooltip> */}

            <Typography ml={3} sx={{ fontSize: "0.9rem" }}>
              4:17
            </Typography>
          </Box>
        </Box>

        {/* Sub Card */}
        <Box
          className="sub_card"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            visibility: "hidden",
          }}
        >
          <Box sx={{ width: "47%", display: "flex", alignItems: "center" }}>
            <Checkbox
              sx={{
                width: "40px",
                color: "#32323d80",
                "&.Mui-checked": {
                  color: "#32323d80",
                },
              }}
            />

            <CardMedia
              component="img"
              image="https://sohanews.sohacdn.com/160588918557773824/2020/8/18/ly2-15977220078411964556507.jpg"
              alt="song card image"
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: 1,
                objectFit: "cover",
                marginRight: 1.5,
                marginLeft: 1,
              }}
            />

            <Box>
              <Typography paddingTop={1} lineHeight={0.8}>
                Mặt trời của em
              </Typography>
              <Link
                href="#"
                sx={{
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  color: "#32323d80",
                  "&:hover": {
                    textDecoration: "underline",
                    color: "#c662ef",
                  },
                }}
              >
                Phương Ly
              </Link>
            </Box>
          </Box>

          <Link
            href="#"
            sx={{
              width: "30%",
              lineHeight: "1.33",
              textDecoration: "none",
              fontSize: "0.8rem",
              color: "#32323d80",
              "&:hover": {
                textDecoration: "underline",
                color: "#c662ef",
              },
            }}
          >
            Mặt trời của em
          </Link>

          <Box
            sx={{
              marginRight: 1.5,
              width: "20%",
              display: "flex",
              justifyContent: "flex-end",
              lineHeight: "1.33",
              textDecoration: "none",
              fontSize: "0.8rem",
              color: "#32323d80",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tooltip title="Thêm vào thư viện" arrow placement="top">
                <Checkbox
                  icon={<FavoriteBorderOutlinedIcon />}
                  sx={{ fontSize: "1rem" }}
                  checkedIcon={
                    <FavoriteOutlinedIcon sx={{ color: "#7200a1" }} />
                  }
                />
              </Tooltip>

              <Tooltip title="Khác" arrow placement="top" sx={{ fontSize: 30 }}>
                <Button
                  sx={{
                    color: "#32323d80",
                    fontSize: "1rem",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <MoreHorizOutlinedIcon />
                </Button>
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CardSong;
