import { useEffect, useState, useRef } from 'react';
export default function ItemPlaylist({ handleChangeWidth, item }) {
    const [width, setWidth] = useState(0);
    const itemRef = useRef();
    useEffect(() => {
        const handleResize = () => {
            console.log(itemRef.current.offsetWidth);
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
            <div className="image-item" style={{ height: width ? `${width + 10}px` : `${300 - 60}px` }}>
                <div className="khongtrong"></div>
                <img src={item.image} />
            </div>
            <div className="content-item">
                <h5>{item.name}</h5>
                <p>{item.singer}</p>
            </div>
        </div>
    )
}