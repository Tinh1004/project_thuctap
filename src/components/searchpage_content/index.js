import './styles.scss';
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import { useContext, useLayoutEffect } from 'react';
import { TagsContext } from '../../contexts/TagsContext';
import { useDispatch } from 'react-redux';
import filterSlice from '../../redux/filterSlice/filterSlice';
import { linkSearch } from '../../commons/link_search';
export default function SearchContent(props) {
    const { search } = useParams();
    const dispatch = useDispatch();
    const context = useContext(TagsContext);

    useLayoutEffect(() => {
        dispatch(filterSlice.actions.searchFilterChange(search));
        const pathTag = window.location.href.split('/');
        const path = pathTag[pathTag.length - 1];
        const m = linkSearch.filter((item, index) => {
            if (item.content == path) {
                context.toggleSetValueTag(index);
            }
        });

    }, []);

    return (
        <Routes>
            {linkSearch.map((item, index) => <Route path={item.content} element={item.component} />)}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}