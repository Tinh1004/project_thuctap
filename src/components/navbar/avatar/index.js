import './styles.css';
import { useState } from 'react';
import ListContent from './listContent/index';
import Image from './image_name/Image'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors'


const IMAGE_AVATAR = "https://i.scdn.co/image/ab6761610000e5eb8ae7f2aaa9817a704a87ea36";


export default function AvatarUser() {
    const [isClick, setIsClick] = useState(false);
    // console.log(isClick);
    const userData = useSelector(userDataSelector);
    // console.log("userData: ", userData);
    const handleClickSetClick = () => {
        setIsClick(prev => !prev);
    }
    return (
        <div className="nav-right">
            {/* <Image
                IMAGE_AVATAR={IMAGE_AVATAR}
                handleClickSetClick={handleClickSetClick}
            /> */}
            {/* <Avatar alt="Avatart" src={IMAGE_AVATAR} onClick={handleClickSetClick} /> */}

            {userData._id
                ? <Avatar alt="Avatart" src={IMAGE_AVATAR} onClick={handleClickSetClick} />
                :
                <Avatar alt="Avatart" onClick={handleClickSetClick} >?</Avatar>
            }
            <ListContent isClick={isClick} />
        </div>
    );
}
