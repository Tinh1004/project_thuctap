import AppDefault from './app_default/AppDefault';
import Data from '../components/category/page1/Data';
import Datapage2 from '../components/category/page2/Datapage2';
// import { useParams } from 'react-router-dom';


export default function CategoryPage() {
    return (
        <AppDefault>
            <section className="home">
                <Data></Data>
                {/* <Datapage2></Datapage2> */}
            </section>
        </AppDefault>

    )
}