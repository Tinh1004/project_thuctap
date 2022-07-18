import MenuSearch from "../menu_top/index";
import ResultSearch from "../body_searchpage/results/index";
import PlayList from "../body_searchpage/playList/index";
export default function SearchBody(props) {
  return (
    <div className="search-body">
      <MenuSearch search={props.search} />
      <ResultSearch />
      <PlayList />
      <div className="nghe-si"></div>
    </div>
  );
}
