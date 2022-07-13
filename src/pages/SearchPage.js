import AppDefault from './app_default/AppDefault';

import { useParams } from "react-router-dom"

export default function SearchPage(props) {
    const { search } = useParams();
    return (
        <AppDefault>
            <section className="home">
                <div className="text">
                    Search Page + {search}
                </div>
            </section>
        </AppDefault>

    )
}