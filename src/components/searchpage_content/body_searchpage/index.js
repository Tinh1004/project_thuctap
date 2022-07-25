import ResultSearch from "../body_searchpage/results/index";
import PlayList from "../body_searchpage/playList/index";
import ListSinger from "./listSinger/ListSinger";
import { listItems, listSinger } from "../../../commons/list_item";
import { useDispatch, useSelector } from 'react-redux';
import { arraySearchSong, searchTextSelector } from "../../../redux/selectors";

export default function SearchSinger(props) {
    const search = useSelector(searchTextSelector);
    const array = useSelector(arraySearchSong);

    return (
        <div className="search-body">

            {array.length !== 0 ? (
                <>
                    <ResultSearch />
                    <ListSinger />
                </>
            ) : (
                <div className="search-not_found">
                    <p>Không có kết quả nào dành cho "{search}"</p>
                </div>
            )}

            <PlayList data={listItems.playlist} />
            <PlayList data={listItems.album} />
        </div>
    )
}
