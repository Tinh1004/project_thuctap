import ResultSearch from "../body_searchpage/results/index";
import PlayList from "../body_searchpage/playList/index";
import ListSinger from "./listSinger/ListSinger";
import { listItems, listSinger } from "../../../commons/list_item"

export default function SearchBody(props) {
    return (
        <div className="search-body">
            <ResultSearch />
            <PlayList data={listItems.playlist} />
            <ListSinger data={listSinger} />
            <PlayList data={listItems.album} />
        </div>
    )
}
