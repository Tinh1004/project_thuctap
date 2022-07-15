import AppDefault from '../app_default/AppDefault';
import SearchContent from '../../components/searchpage_content/index'
import { Routes, Route} from 'react-router-dom';

export default function SearchPage(props) {
    return (
        <AppDefault>
            <section className="home">
                <SearchContent></SearchContent>
            </section>
        </AppDefault>
    )
}