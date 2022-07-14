import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Search() {
    const [input, setInput] = useState("");
    const handleClearInput = ()=>{
        setInput("");
    }
    const handleChangeInput =(e)=>{
        setInput(e.target.value);
    }
    return (
        <div className="search ">
            <Link to={`/search/${input}`}>
                <div className="icon"></div>
            </Link>
            <div className="input">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    id="mysearch" 
                    value={input}
                    onChange={handleChangeInput}
                />
            </div>
            <span className="clear" onClick={()=>{handleClearInput()}}></span>
        </div>
    );
}
