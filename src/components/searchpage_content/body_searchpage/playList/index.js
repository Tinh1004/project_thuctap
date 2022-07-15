import './styles.scss';
import {useEffect, useState, useRef} from 'react';
export default function PlayList(props) {
    const [width, setWidth] = useState(0);

    const itemRef = useRef();
    const itemListRef = useRef();
    useEffect(()=>{
        window.addEventListener("resize", () => {
            console.log(itemRef.current.offsetWidth)
            setWidth(itemRef.current.offsetWidth);
        })
    },[])
    return (
        <div className="playList">
            <div className="top">
                <h3>Nghệ Sĩ</h3>
                <span>Tất cả <i className='bx bx-chevron-right icon'></i></span>
            </div>
            <div className="bottom">
                <div className="list-playList-items" ref={itemListRef} style={{height: width?`${width + 60}px`:'248px'}}>
                    <div className="playList-item" ref={itemRef}>
                        <div className="image-item" style={{height: width?`${width+10}px`:`${248-60}px`}}>
                            <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/a/0/6fa057bf9204516bc4148a0bc947be82.jpg'/>
                        </div>
                        <div className="content-item">
                            <h5>Người ta có thương mình đâu</h5>
                            <p>Anh Quân Idol, Thanh Hưng, Đỉnh Tùng</p>
                        </div>
                    </div>
                    <div className="playList-item" ref={itemRef}>
                        <div className="image-item" style={{height: width?`${width+10}px`:`${248-60}px`}}>
                            <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/a/0/6fa057bf9204516bc4148a0bc947be82.jpg'/>
                        </div>
                        <div className="content-item">
                            <h5>Người ta có thương mình đâu</h5>
                            <p>Anh Quân Idol, Thanh Hưng, Đỉnh Tùng</p>
                        </div>
                    </div>
                    <div className="playList-item" ref={itemRef}>
                        <div className="image-item" style={{height: width?`${width+10}px`:`${248-60}px`}}>
                            <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/a/0/6fa057bf9204516bc4148a0bc947be82.jpg'/>
                        </div>
                        <div className="content-item">
                            <h5>Người ta có thương mình đâu</h5>
                            <p>Anh Quân Idol, Thanh Hưng, Đỉnh Tùng</p>
                        </div>
                    </div>
                    <div className="playList-item" ref={itemRef}>
                        <div className="image-item" style={{height: width?`${width+10}px`:`${248-60}px`}}>
                            <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/a/0/6fa057bf9204516bc4148a0bc947be82.jpg'/>
                        </div>
                        <div className="content-item">
                            <h5>Người ta có thương mình đâu</h5>
                            <p>Anh Quân Idol, Thanh Hưng, Đỉnh Tùng</p>
                        </div>
                    </div>
                    <div className="playList-item" ref={itemRef}>
                        <div className="image-item" style={{height: width?`${width+10}px`:`${248-60}px`}}>
                            <img src='https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/6/f/a/0/6fa057bf9204516bc4148a0bc947be82.jpg'/>
                        </div>
                        <div className="content-item">
                            <h5>Người ta có thương mình đâu</h5>
                            <p>Anh Quân Idol, Thanh Hưng, Đỉnh Tùng</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}