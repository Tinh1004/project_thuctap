import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSelector } from '../../../../redux/selectors';
import userSlice from '../../../../redux/userSlice/userSlice';
import { useNavigate } from "react-router-dom";
export default function ListContent({ isClick }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(userDataSelector);
    console.log("userData: ", userData);
    const handleLogout = () => {
        dispatch(userSlice.actions.resetLogout())
        navigate('/');
    }
    return (
        <ul className={`options ${isClick ? " active" : ""}`}>
            <div className="avatar-name">
                <p id="name">{userData.name ? userData.name : "..."}</p>
            </div>
            {userData.name ?
                <>
                    <li className="option">
                        <Link to="/ca-nhan">
                            <i className=" bx bxl-deezer"></i>
                            <span className="option-text">Cá nhân</span>
                        </Link>
                    </li>
                    <li className="option">
                        <Link to="/change">
                            <i className=''></i>
                            <span className='option-text'>Đổi mật khẩu</span>
                        </Link>
                    </li>
                    <li className="option" onClick={handleLogout}>
                        <i className="bx bx-log-out"></i>
                        <span className="option-text">Đăng xuất</span>
                    </li>
                </>
                :
                <>
                    <li className="option">
                        <Link to="/login">
                            <i className=''></i>
                            <span className='option-text'>Đăng nhập</span>
                        </Link>
                    </li>
                    <li className="option">
                        <Link to={`/signup`}>
                            <i className="bx bx-log-out"></i>
                            <span className="option-text">Đăng ký</span>
                        </Link>
                    </li>
                </>
            }
        </ul>
    );
}
