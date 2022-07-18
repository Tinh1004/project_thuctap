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
                <Routes>
                    <Route path="/tat-ca/:search" element={<SearchContent />} />
                    <Route path="/ca-si/:search" element={<SearchContent />} />
                    <Route path="/bai-hat/:search" element={<SearchContent />} />
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </section>
        </AppDefault>
    )
}