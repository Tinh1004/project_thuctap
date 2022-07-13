import './styles.css';
import { useState } from 'react';

const IMAGE_AVATAR = "https://lh3.googleusercontent.com/-qDBbDmVUjxw/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmmw_MgrRjrwrPsqDMLjlq_b0a6zA/photo.jpg?sz=46";

export default function Avatar() {
    const [isClick, setIsClick] = useState(false);
    console.log(isClick)
    return (

        <div className="nav-right">
            <div className="avatar" onClick={()=>{setIsClick(prev=> !prev)}}>
                <div className="navbar-avatar">
                    <img alt="avarta" src={IMAGE_AVATAR} />
                </div>
                <div className="avatar-name">
                    <p id="name">Pham Ngoc Tinh</p>
                </div>
            </div>
            <ul className={`options ${isClick ? " active" : ""}`}>
                <li className="option">
                    <i className=" bx bxl-deezer"></i>
                    <span className="option-text">Cá nhân</span>
                </li>
                <li className="option">
                    <i className="bx bx-log-out"></i>
                    <span className="option-text">Đăng xuất</span>
                </li>
            </ul>
        </div>
    );
}
