import MenuSearch from "../menu_top/index";
import ResultSearch from "../body_searchpage/results/index";
import PlayList from "../body_searchpage/playList/index";
import {listItems} from "../../../commons/list_item"
export default function SearchBody(props) {
    return (
        <div className="search-body">
                <MenuSearch search={props.search}/>
                <ResultSearch/>
                <PlayList data={listItems.singer}/>
                <div className="nghe-si">
                </div>
                <PlayList data={listItems.album}/>
            </div>
    )
}