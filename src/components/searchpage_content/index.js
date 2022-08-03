import './styles.scss';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import SearchBody from "./body_searchpage/index";
import SearchSong from "./search_song/SearchSong";
import SearchSinger from "./search_singer/SearchSinger";
import SearchPlaylist from "./search_playlist/SearchPlaylist";
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import filterSlice from '../../redux/filterSlice/filterSlice';
export default function SearchContent(props) {
    const { search } = useParams();
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        dispatch(filterSlice.actions.searchFilterChange(search));
        console.log("search:", search)
    }, [])

    return (
        <Routes>
            <Route path={`/tat-ca`} element={<SearchBody />} />
            <Route path={`/ca-si`} element={<SearchSinger />} />
            <Route path={`/bai-hat`} element={<SearchSong />} />
            <Route path={`/playlist`} element={<SearchPlaylist />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}