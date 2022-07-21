export default function CardSinger({ item }) {
    return (
        <div className="card_singer">
            <div className="card_singer_image">
                <img src={item.images[0].url} alt="avatar" />
            </div>
            <div className="content-item card_singer_content">
                <h5 className="singer_name">{item.singer}</h5>
                <p className="singer_like">89k quan tâm</p>
                <button className="btn_plus_like">+1 Quan tâm</button>
            </div>
        </div>
    );
}
