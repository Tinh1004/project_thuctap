import AppDefault from '../app_default/AppDefault';
import SearchContent from '../../components/searchpage_content/index';
import {useParams, Routes, Route, Navigate } from 'react-router-dom';
import MenuSearch from "../../components/searchpage_content/menu_top/index";


export default function SearchPage(props) {
    const { search } = useParams();
    console.log(search)
    return (
        <AppDefault>
            <section className="home">
                <div className="search-question">
                    <h2 className="seatch-title">Tìm Kiếm: {search}</h2>
                </div>
                <MenuSearch search={search} />
                <SearchContent />
                
            </section>
        </AppDefault>
    )
}