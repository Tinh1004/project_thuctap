import { useLayoutEffect, useState, useRef } from 'react';
export default function CardSinger({ handleChangeWidth, item }) {
    const [width, setWidth] = useState(0);
    const itemRef = useRef();
    useLayoutEffect(() => {
        setWidth(itemRef.current.offsetWidth);
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
            <div className="image-item" style={{ height: width, borderRadius: '50%' }}>
                <img src={item.images[0].url} />
            </div>
            <div className="content-item card_singer_content">
                <h5>{item.singer}</h5>
                <p>89K quan tâm</p>
                <button>+1 Quan tâm</button>
            </div>
        </div>
    )
}