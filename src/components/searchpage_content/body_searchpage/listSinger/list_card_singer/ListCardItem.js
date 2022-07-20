import { useState } from 'react';
import CardSinger from '../card_singer/CardSinger'

export default function ListCardItem({ array }) {
    const [width, setWidth] = useState(0);
    const handleChangeWidth = (data) => {
        setWidth(data);
    }
    return (
        <div className="list-playList-items" style={{ height: width ? `${width + 60}px` : '248px' }}>
            {array.map((item, index) => (<CardSinger key={index} item={item} handleChangeWidth={handleChangeWidth} />))}
        </div>
    )
}