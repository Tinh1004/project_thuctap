import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import { useContext } from 'react'
import { CloseContext } from '../../../contexts/CloseContext';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSelector, myPlayListsSelector } from '../../../redux/selectors';
import userSlice from "../../../redux/userSlice/userSlice";

export default function AddDropdown({ idSong }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const context = useContext(CloseContext);
  const userData = useSelector(userDataSelector);
  const myPlayList = useSelector(myPlayListsSelector);


  const arrayDropdownPlaylist = myPlayList.filter((item, index) => {
    if (item.user) return item;
  })
  // console.log("arrayDropdownPlaylist: ",arrayDropdownPlaylist)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlerClick = () => {
    if (userData._id) {
      context.toggleSetIsClose(true);
    } else {
      navigate('/login');
    }
    // setVisible(true);
  };
  const handleAddSong = (idPlayList, idSong) => {
    dispatch(userSlice.actions.addSongInPlaylist({
      idPlaylist: idPlayList,
      idSong: idSong
    }))
  }
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Thêm vào playlist">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <AddCircleOutlineOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handlerClick}>
          <AddOutlinedIcon />
          Tạo PlayList
        </MenuItem>
        <Divider />
        {arrayDropdownPlaylist &&
          arrayDropdownPlaylist.map((item, index) =>
            <MenuItem key={index} onClick={() => handleAddSong(item.id, idSong)}>
              <QueueMusicIcon sx={{ paddingRight: 0.5 }} /> {item.name}
            </MenuItem>
          )}
      </Menu>
    </React.Fragment>
  );
}
