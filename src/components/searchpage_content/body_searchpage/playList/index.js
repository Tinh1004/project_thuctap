import './styles.scss';
import ListItemPlaylist from './listItem/ListItemPlaylist';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { searchTextSelector } from "../../../../redux/selectors";

export default function PlayList({ data, title }) {
    const search = useSelector(searchTextSelector);
    return (
        <div className="playList">
            <div className="top">
                <h3>{title}</h3>
                <Link to={`/search/${search}/playlist`}>
                    <span>Tất cả <i className='bx bx-chevron-right icon'></i></span>
                </Link>
            </div>
            <div className="bottom">
                <ListItemPlaylist array={data} />
            </div>
        </div>
    )
}