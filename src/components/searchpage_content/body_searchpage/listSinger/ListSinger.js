import './styles.scss';
import ListCardItem from './list_card_singer/ListCardItem';
import { useSelector } from 'react-redux';
import { arraySearchSinger, searchTextSelector } from "../../../../redux/selectors";
import { Link } from 'react-router-dom'

export default function ListSinger({ data }) {
    const arraySinger = useSelector(arraySearchSinger);
    const search = useSelector(searchTextSelector);

    const array = [...arraySinger].splice(0, 5);
    console.log(array)

    return (
        <div className="playList">
            <div className="top">
                <h3>Nghệ sĩ</h3>
                <Link to={`/search/${search}/ca-si`}>
                    <span>Tất cả <i className='bx bx-chevron-right icon'></i></span>
                </Link>
            </div>
            <div className="bottom">
                <ListCardItem array={array} />
            </div>
        </div>
    )
}