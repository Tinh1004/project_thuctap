import './styles.scss';
import { linkSearch } from '../../../commons/link_search';
import ItemContentSearch from './item_search';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function MenuSearch({ search }) {
    return (
        <div className="search-content">
            <ul className="list-content">
                {linkSearch.map((item, index) => <ItemContentSearch search={search} key={index} item={item} />)}
                {/* <Box sx={{ width: '100%' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
                        <LinkTab label="Page One" href="/drafts" />
                        <LinkTab label="Page Two" href="/trash" />
                        <LinkTab label="Page Three" href="/spam" />
                    </Tabs>
                </Box> */}
            </ul>
        </div>
    )
}