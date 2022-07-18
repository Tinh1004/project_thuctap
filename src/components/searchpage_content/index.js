import './styles.scss';
import { useParams } from "react-router-dom";
import SearchBody from "./body_searchpage/index";
import MenuSearch from "../../components/searchpage_content/menu_top/index";

export default function SearchContent(props) {
    const { search } = useParams();
    return (
        <>
            <div className="search-question">
                <h2 className="seatch-title">Tìm Kiếm: {search}</h2>
            </div>
            <MenuSearch search={search} />
            <SearchBody/>
        </>
    )
}