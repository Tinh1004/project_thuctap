import "./styles.scss";
import CardSinger from './CardSinger/CardSinger';
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default function SearchSinger(props) {
    return (
        <div className="search-body">
            <div class="list_songs">
                <div class="media_left">
                    <p
                        className="search-title"
                        style={{ fontSize: "20px", fontWeight: "500", padding: "15px 0" }}
                    >
                        Nghệ sĩ
                    </p>
                </div>
                <div className="list_card_singer">
                    {
                        array.map((item, index) => (<CardSinger key={index} />))
                    }
                </div>
            </div>
        </div>
    );
}
