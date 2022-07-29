import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userDataSelector } from '../../../../redux/selectors';
import userSlice from '../../../../redux/userSlice/userSlice';
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import InputIcon from '@mui/icons-material/Input';
export default function ListContent({ isClick }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector(userDataSelector);
    console.log("userData: ", userData);
    const handleLogout = () => {
        dispatch(userSlice.actions.resetLogout())
        navigate('/login');
    }
    return (
        <ul className={`options ${isClick ? " active" : ""}`}>
            <div className="avatar-name">
                <p id="name">{userData._id ? userData.fullName : "..."}</p>
            </div>
            {userData._id ?
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
                            <LoginIcon sx={{ paddingRight: 1, fontSize: '30px' }} />
                            <span className='option-text'>Đăng nhập</span>
                        </Link>
                    </li>
                    <li className="option">
                        <Link to={`/signup`}>
                            <InputIcon sx={{ paddingRight: 1, fontSize: '30px' }} />
                            <span className="option-text">Đăng ký</span>
                        </Link>
                    </li>
                </>
            }
        </ul>
    );
}
