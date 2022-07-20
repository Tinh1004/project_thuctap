export default function CardSinger(props) {
    return (
        <div className="card_singer">
            <div className="card_singer_image">
                <img src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_webp/avatars/e/e/ee58fcc0ff45002b8d416bd7685809ce_1487040461.jpg" alt="avatar" />
            </div>
            <div className="content-item card_singer_content">
                <h5 className="singer_name">Cao tùng Anh</h5>
                <p className="singer_like">89k quan tâm</p>
                <button className="btn_plus_like">+1 Quan tâm</button>
            </div>
        </div>
    );
}
