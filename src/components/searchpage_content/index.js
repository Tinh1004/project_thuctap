import './styles.scss';
import { Routes, Route, Navigate } from "react-router-dom";
import SearchBody from "./body_searchpage/index";
import SearchSong from "./search_song/SearchSong";
import SearchSinger from "./search_singer/SearchSinger";


export default function SearchContent(props) {
    return (
        <Routes>
            <Route path={`/tat-ca`} element={<SearchBody />} />
            <Route path={`/ca-si`} element={<SearchSinger />} />
            <Route path={`/bai-hat`} element={<SearchSong />} />
            <Route path={`/playlist`} element={<SearchBody />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}