import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Tab from '@mui/material/Tab';

export default function ItemContentSearch({ search, item }) {
    const navigate = useNavigate();

    const handleClickMovePage = (search, item) => {
        console.log("Move");
        navigate(`/search/${search}/${item.content}`);
    }
    return (
        <Tab label={item.title} onClick={() => handleClickMovePage(search, item)}></Tab>
    )
}