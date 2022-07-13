import { Link } from 'react-router-dom';
import './styles.css';
export default function Item({ item }) {
    return (
        <li className="nav-link"> 
            <Link  to={item.url}>
                {item.icon}
                <span className="text nav-text">{item.title}</span>
            </Link>
        </li>
    )
}