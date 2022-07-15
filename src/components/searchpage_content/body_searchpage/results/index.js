const array = [
    {
        title: "Người ta có thương mình đâu",
        image: "https://i.scdn.co/image/ab67616d00001e02f453c61bb20a63b5ffb4cf28",
        singer: "Trúc Nhân"
    },
    {
        title: "Người Ta Có Thương Mình Đâu (Piano Version)",
        image: "https://i.scdn.co/image/ab67616d000048513c5f03e0550b7421d0c70c54",
        singer: "An Coong"

    },
    {
        title: "Người Ta Đâu Có Thương em",
        image: "https://i.scdn.co/image/ab67616d00004851c777f7f72a9abc483de69ab4",
        singer: "Melomix,hbaoan,Fu,KLG"

    },
    {
        title: "Người Ta Nói",
        image: "https://i.scdn.co/image/ab67616d00004851b1b37da47ae63570021c0624",
        singer: "Ưng Hoàng Phúc"

    },
];
export default function ResultSearch(props) {
    return (
        <div className="search-results">
                    <div className="results-left">
                        <h3>Kết quả hàng đầu</h3>
                        <div className="container-top">
                            <div className="music-top-image">
                                <img src="https://i.scdn.co/image/ab67616d00001e02f453c61bb20a63b5ffb4cf28"/>
                            </div>
                            <div className="music-top-title">
                                <h4 id="title-music">Người ta có thương mình đâu</h4>
                                <p>Trúc nhân <span>Bài hát</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="results-right">
                        <h3>Bài hát</h3>
                        <div className="results-list">
                            {array.map((item, index)=>(
                            <div key={index} className="results-item">
                                <div className="item-content">
                                    <div className="image-item">
                                        <div className="khongtrong"></div>
                                        <img src={item.image}/>
                                    </div>
                                    <div className="name-item">
                                        <p>{item.title}</p>
                                        <span>{item.singer}</span>
                                    </div>
                                </div>
                                <div className="time-item">
                                    <span>3:48</span>
                                </div>
                            </div>))}
                        </div>
                    </div>
                </div>
    )
}