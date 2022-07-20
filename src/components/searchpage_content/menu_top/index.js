import './styles.scss';
import {linkSearch} from '../../../commons/link_search';
import ItemContentSearch from './item_search';
export default function MenuSearch({search}) {
    return (
        <div className="search-content">
            <ul className="list-content">
                {linkSearch.map((item, index)=><ItemContentSearch search={search} key={index} item={item}/>)}
            </ul>
        </div>
    )
}