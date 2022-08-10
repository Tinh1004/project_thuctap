import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import dataSlice from "../../../../redux/dataSlice/dataSlice";
import AddDropdown from "../../add/AddDropdown"
export default function ItemResutlSong({ item }) {
    const [duration, setDuration] = useState(0);

    const dispatch = useDispatch();

    const handleChangeSong = (id) => {
        dispatch(dataSlice.actions.audioChangeSong(id))
    }

    const getVal = (audio) => {
        var val = audio.duration;
        setDuration(val);
    }
    const convertDuration = (url) => {
        return `${Math.round(duration / 60)}:${Math.floor(duration % 60) >= 10 ? Math.floor(duration % 60) : `0${Math.floor(duration % 60)}`}`;
    }


    useEffect(() => {
        var audio = new Audio();
        audio.src = item.url;
        audio.addEventListener("durationchange", () => getVal(audio));
        return () => {
            audio.removeEventListener("durationchange", () => getVal(audio));
        }
    }, [])


    return (
        <div className="results-item" >
            <div className="item-content">
                <div className="image-item" onClick={() => { handleChangeSong(item.id) }}>
                    <div className="khongtrong"></div>
                    <img src={item.images[1].url} />
                </div>
                <div className="name-item">
                    <p onClick={() => { handleChangeSong(item.id) }}>{item.title}</p>
                    <span>{item.singer}</span>
                </div>
            </div>
            <div className="time-item">
                <div className="add-item">
                    <AddDropdown idSong={item.id} />
                </div>
                <span>{convertDuration(item.url)}</span>
            </div>
        </div>
    )
}