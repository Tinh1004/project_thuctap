import { useState } from 'react';
import ItemPlaylist from '../../../item_playlist/ItemPlaylist'

export default function ListItemPlaylist({array}) {
    const [width, setWidth] = useState(0);
    const handleChangeWidth = (data)=>{
        setWidth(data);
    }
    return (
        <div className="list-playList-items" style={{ height: width ? `${width + 60}px` : '248px' }}>
            {array.map((item, index) =>(<ItemPlaylist key={index} item={item} handleChangeWidth={handleChangeWidth}/>))}
        </div>
    )
}