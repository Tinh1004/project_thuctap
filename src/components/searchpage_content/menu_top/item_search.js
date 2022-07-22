import { Link} from 'react-router-dom';
export default function ItemContentSearch(props) {
    return ( 
        <Link to={`/search/${props.search}/${props.item.content}`}>
            <li className="item-search-content"><span>{props.item.title}</span></li>
        </Link>
    )
}