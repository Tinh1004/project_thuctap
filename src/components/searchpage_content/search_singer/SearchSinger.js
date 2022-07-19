import './styles.scss'
export default function SearchSong(props) {
    return (
        <div className="search-body">
            <div class="list_songs">
                <div class="media_left">
                    <p className="search-title" style={{fontSize: '20px', fontWeight: '500', padding: '15px 0'}}>Nghệ sĩ</p>
                </div>
                <div className="list_card_singer">
                    <div className="card_singer">
                        <div className="card_singer_image">
                            
                        </div>
                        <div className="card_singer_content">
                            <h3 className="singer_name">Cao tùng Anh</h3>
                            <p className="singer_like">89k quan tâm</p>
                            <button className="btn_plus_like">+1 Quan tâm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}