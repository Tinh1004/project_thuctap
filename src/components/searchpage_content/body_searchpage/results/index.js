import { useDispatch, useSelector } from 'react-redux';
import { arraySearchSong } from "../../../../redux/selectors";
import ItemResutlSong from './ItemResutlSong';
import dataSlice from '../../../../redux/dataSlice/dataSlice';

export default function ResultSearch(props) {
    const arraySong = useSelector(arraySearchSong);
    const array = [...arraySong].splice(0, 4);
    console.log("title: ", array);
    const dispatch = useDispatch();

    const handleChangeSong = (id) => {
        dispatch(dataSlice.actions.audioChangeSong(id))
    }

    return (
        <>
            {array.length !== 0 ?
                (
                    <div className="search-results">
                        <div className="results-left" onClick={() => handleChangeSong(array[0].id)}>
                            <h3>Kết quả hàng đầu</h3>
                            <div className="container-top">
                                <div className="music-top-image">
                                    <img src={array[0].images[1].url} />
                                </div>
                                <div className="music-top-title">
                                    <h4 id="title-music">{array[0].title}</h4>
                                    <p>{array[0].singer} <span>Bài hát</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="results-right">
                            <h3>Bài hát</h3>
                            <div className="results-list">
                                {array.map((item, index) => (
                                    <ItemResutlSong item={item} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                )
                : (<h1>Khong co data</h1>)}
        </>
    )
}