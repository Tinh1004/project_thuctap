import './styles.scss';
import { linkSearch } from '../../../commons/link_search';
import ItemContentSearch from './item_search';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function MenuSearch({ search }) {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const handleClickMovePage = (search, item) => {
        console.log("Move");
        navigate(`/search/${search}/${item.content}`);
    }

    return (
        <div className="search-content">
            <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                value={value}
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