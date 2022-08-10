import SearchContent from '../../components/searchpage_content/index';
import { useParams } from 'react-router-dom';
import MenuSearch from "../../components/searchpage_content/menu_top/index";
import { TagsProvider } from '../../contexts/TagsContext'

export default function SearchPage(props) {
    const { search } = useParams();
    console.log(search)
    return (
        <TagsProvider>
            <section className="home">
                <div className="search-question">
                    <h2 className="seatch-title">Tìm Kiếm: {search}</h2>
                </div>
                <MenuSearch search={search} />
                <SearchContent />
            </section>
        </TagsProvider>

    )
}