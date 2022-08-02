import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userSlice from '../../../redux/userSlice/userSlice';
import { myPlayListsSelector } from '../../../redux/selectors';
import { toast } from "react-toastify";
export default function ItemPlaylist({ handleChangeWidth, item }) {
    const [width, setWidth] = useState(0);
    const itemRef = useRef();
    const dispatch = useDispatch();
    const myPlayLists = useSelector(myPlayListsSelector);

    const handleClickAddPlayList = () => {
        const checkItemPlayList = myPlayLists.filter((e) => e.id === item.id);
        if (checkItemPlayList.length === 0) {
            dispatch(userSlice.actions.addPlayList(item));
            toast.success("Thêm Playlist thành công!", {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            toast.error("Đã tồn tại...", {
                position: toast.POSITION.TOP_RIGHT,
            });
        }
    }


    useEffect(() => {
        const handleResize = () => {
            setWidth(itemRef.current.offsetWidth);
            handleChangeWidth(itemRef.current.offsetWidth);
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <div className="playList-item" ref={itemRef}>
            <div className="image-item" style={{ height: width ? `${width + 10}px` : `${300 - 60}px` }}
                onClick={handleClickAddPlayList}
            >
                <div className="khongtrong"></div>
                <img src={item.image || "https://i.scdn.co/image/ab67616d0000b27394ae8395433c0c7521ac25ba"} />
            </div>
            <div className="content-item">
                <Link className="card_playlist" to={`/ca-nhan/detail/${item.id}`}>
                    <h5>{item.name}</h5>
                </Link>
                <p>{item.discription}</p>
            </div>
        </div>
    )
}