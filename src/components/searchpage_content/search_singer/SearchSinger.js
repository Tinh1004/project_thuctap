import "./styles.scss";
import CardSinger from './CardSinger/CardSinger';
import { useDispatch, useSelector } from 'react-redux';
import { arraySearchSinger, searchTextSelector } from "../../../redux/selectors";

export default function SearchSinger(props) {
    const array = useSelector(arraySearchSinger);
    const search = useSelector(searchTextSelector);

    return (
        <>
            <div className="search-body">
                {array.length !== 0 ?
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
                                array.map((item, index) => (<CardSinger item={item} key={index} />))
                            }
                        </div>
                    </div>
                    :
                    <div className="search-not_found">
                        <p>Không có kết quả nào dành cho "{search}"</p>
                    </div>
                }

            </div>

        </>
    );
}
