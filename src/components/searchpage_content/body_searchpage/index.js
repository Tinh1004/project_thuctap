import ResultSearch from "../body_searchpage/results/index";
import PlayList from "../body_searchpage/playList/index";
import ListSinger from "./listSinger/ListSinger";
import { listItems, listSinger } from "../../../commons/list_item";
import { useDispatch, useSelector } from 'react-redux';
import { arraySearchSong, searchTextSelector, arrayPlayLists, arraySearchPlayLists } from "../../../redux/selectors";

export default function SearchSinger(props) {
    const search = useSelector(searchTextSelector);
    const array = useSelector(arraySearchSong);
    const playList = useSelector(arrayPlayLists);
    const searchPlayLists = useSelector(arraySearchPlayLists);

    const arrayPlayList = [...playList].splice(0, 5);
    const arraySearchPlayListSplice = [...searchPlayLists].splice(0, 5);

    console.log("playList:", arrayPlayList);
    console.log("searchPlayLists:", searchPlayLists);
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
            {arraySearchPlayListSplice.length != 0 && <PlayList data={arraySearchPlayListSplice} title="Playlist" />}
            <PlayList data={arrayPlayList} title="Album" />
        </div>
    )
}
