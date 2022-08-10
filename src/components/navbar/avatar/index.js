import "./styles.css";
import { useState } from "react";
import ListContent from "./listContent/index";
// import Image from "./image_name/Image";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { userDataSelector } from "../../../redux/selectors";

const IMAGE_AVATAR =
  "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36";

export default function AvatarUser() {
  const [isClick, setIsClick] = useState(false);
  const userData = useSelector(userDataSelector);
  const handleClickSetClick = () => {
    setIsClick(prev => !prev);
  }
  // console.log("userData: ", userData.image)

  return (
    <div className="nav-right">

      {userData._id ? (
        <Avatar
          alt="Avatart"
          src={userData.image ? userData.image : IMAGE_AVATAR}
          onClick={handleClickSetClick}
        />
      ) : (
        <Avatar alt="Avatart" onClick={handleClickSetClick}>
          ?
        </Avatar>
      )}
      <ListContent isClick={isClick} />
    </div>
  );
}
