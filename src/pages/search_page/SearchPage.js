import AppDefault from '../app_default/AppDefault';
import SearchContent from '../../components/searchpage_content/index'
import {useParams} from 'react-router-dom'
export default function SearchPage(props) {
    const { search } = useParams();
    return (
        <AppDefault>
            <section className="home">
                <SearchContent></SearchContent>
            </section>
        </AppDefault>
    )
}