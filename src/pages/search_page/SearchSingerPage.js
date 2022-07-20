import AppDefault from '../app_default/AppDefault';
import SearchContent from '../../components/searchpage_content/index';

export default function SearchSingerPage(props) {
    return (
        <AppDefault>
            <section className="home">
                <SearchContent></SearchContent>
            </section>
        </AppDefault>
    )
}