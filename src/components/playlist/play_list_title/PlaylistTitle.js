import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from 'react'
import { CloseContext } from '../../../contexts/CloseContext'

function PlaylistTitle() {
  const context = useContext(CloseContext);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "no-wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: 25,
          display: "flex",
          alignItems: "center",
        }}
      >
        Playlist
        <Tooltip title="Tạo playlist mới" arrow placement="top">
          <IconButton
            onClick={() => context.toggleSetIsClose(true)}
            sx={{ backgroundColor: "#e8e8e8", borderRadius: 99, marginLeft: 2 }}
          >
            <AddOutlinedIcon sx={{ fontSize: 22 }} />
          </IconButton>
        </Tooltip>
      </Typography>
      <Link to="/ca-nhan/library/playlist">
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#00000099",
            "&:hover": {
              color: "#c662ef",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "0.9rem",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Tất cả
          </Typography>
          <KeyboardArrowRightOutlinedIcon sx={{ fontSize: 30 }} />
        </Typography>
      </Link>
    </Box>
  );
}

export default PlaylistTitle;
