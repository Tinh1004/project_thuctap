import './styles.scss';
import ListCardItem from './list_card_singer/ListCardItem';
export default function ListSinger({ data }) {
    return (
        <div className="playList">
            <div className="top">
                <h3>Nghệ sĩ</h3>
                <span>Tất cả <i className='bx bx-chevron-right icon'></i></span>
            </div>
            <div className="bottom">
                <ListCardItem array={data} />
            </div>
        </div>
    )
}