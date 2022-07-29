import './styles.css';
import { useState } from 'react';
import ListContent from './listContent/index';
import Image from './image_name/Image'
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import { userDataSelector } from '../../../redux/selectors'


const IMAGE_AVATAR = "https://lh3.googleusercontent.com/-qDBbDmVUjxw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmmw_MgrRjrwrPsqDMLjlq_b0a6zA/photo.jpg?sz=46";


export default function AvatarUser() {
    const [isClick, setIsClick] = useState(false);
    console.log(isClick);
    const userData = useSelector(userDataSelector);
    const handleClickSetClick = () => {
        setIsClick(prev => !prev);
    }
    return (
        <div className="nav-right">
            {/* <Image
                IMAGE_AVATAR={IMAGE_AVATAR}
                handleClickSetClick={handleClickSetClick}
            /> */}
            <Avatar alt="Name" src={userData._id ? IMAGE_AVATAR : ""} onClick={handleClickSetClick} >{userData._id ? "" : "?"}</Avatar>
            <ListContent isClick={isClick} />
        </div>
    );
}
