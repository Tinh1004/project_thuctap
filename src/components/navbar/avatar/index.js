import './styles.css';
import { useState } from 'react';
import ListContent from './listContent/index';
import Image from './image_name/Image'

const IMAGE_AVATAR = "https://lh3.googleusercontent.com/-qDBbDmVUjxw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmmw_MgrRjrwrPsqDMLjlq_b0a6zA/photo.jpg?sz=46";

export default function Avatar() {
    const [isClick, setIsClick] = useState(false);
    console.log(isClick);
    const handleClickSetClick = () =>{
        setIsClick(prev => !prev);
    }
    return (

        <div className="nav-right">
            <Image 
                IMAGE_AVATAR={IMAGE_AVATAR} 
                handleClickSetClick={handleClickSetClick}
            />
            <ListContent isClick={isClick}/>
        </div>
    );
}
