import './styles.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import SearchBody from "./body_searchpage/index";

export default function SearchContent(props) {
    return (
        <Routes>
            <Route path={`/tat-ca`} element={<SearchBody />} />
            <Route path={`/ca-si`} element={<h1>Ca si</h1>} />
            <Route path={`/bai-hat`} element={<h1>Bai hat</h1>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}