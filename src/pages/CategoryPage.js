import AppDefault from './app_default/AppDefault';
import Data from '../components/category/page1/Data';
export default function CategoryPage(props) {
    return (
        <AppDefault>
            <section className="home">
                <Data></Data>
            </section>
        </AppDefault>

    )
}