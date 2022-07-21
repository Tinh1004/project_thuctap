import CardSong from "./card_song/CardSong";
import { useDispatch, useSelector } from 'react-redux';
import { arraySearchSong, searchTextSelector } from "../../../redux/selectors";
export default function SearchSong(props) {
    const arraySong = useSelector(arraySearchSong);
    const search = useSelector(searchTextSelector);

    return (
        <div className="search-body">
            {arraySong.length !== 0 ? (
                <div class="list_songs">
                    <div class="media_left">
                        <p className="search-title" style={{ fontSize: '20px', fontWeight: '500', padding: '15px 0' }}>Bài hát</p>
                    </div>
                    {arraySong.map((item, index) => <CardSong item={item} key={index} />)}
                </div>
            ) : (
                <div className="search-not_found">
                    <p>Không có kết quả nào dành cho "{search}"</p>
                </div>
            )}
        </div>
    )
}