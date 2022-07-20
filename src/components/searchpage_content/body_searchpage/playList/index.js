import './styles.scss';
import ListItemPlaylist from './listItem/ListItemPlaylist';
export default function PlayList({data}) {
    return (
        <div className="playList">
            <div className="top">
                <h3>{data.title}</h3>
                <span>Tất cả <i className='bx bx-chevron-right icon'></i></span>
            </div>
            <div className="bottom">
                <ListItemPlaylist array={data.array}/>
            </div>
        </div>
    )
}