import AppDefault from './app_default/AppDefault';

import { useParams } from "react-router-dom"

export default function SearchPage(props) {
    const { search } = useParams();
    return (
        <AppDefault>
            <section className="home">
                <div className="search-question">
                    <h2 className="seatch-title">Tìm Kiếm: {search}</h2>
                </div>
                <div className="search-page">
                    
                </div>
            </section>
        </AppDefault>
    )
}