import './styles.scss';
import { linkSearch } from '../../../commons/link_search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import { TagsContext } from '../../../contexts/TagsContext';
export default function MenuSearch({ search }) {
    const context = useContext(TagsContext)
    const handleChange = (event, newValue) => {
        context.toggleSetValueTag(newValue);
    };

    const navigate = useNavigate();

    const handleClickMovePage = (search, item) => {
        navigate(`/search/${search}/${item.content}`);
    }

    return (
        <div className="search-content">
            <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                value={context.valueTag}
                onChange={handleChange}
                aria-label="Tinh">
                {linkSearch.map((item, index) => (
                    <Tab
                        key={index} label={item.title} onClick={() => handleClickMovePage(search, item)}></Tab>
                ))}
            </Tabs>
        </div>
    )
}