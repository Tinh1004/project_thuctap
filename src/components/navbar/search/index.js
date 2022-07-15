import {useState} from 'react';
import { Link,useNavigate   } from 'react-router-dom';

export default function Search() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();

    const handleClearInput = ()=>{
        setInput("");
    }
    const handleChangeInput =(e)=>{
        setInput(e.target.value);
    }

    const handleSubmitForm = (e)=>{
        e.preventDefault();
        navigate(`/search/tat-ca/${input}`, { replace: true });
    }
    return (
        <form className="search" onSubmit={handleSubmitForm}>
            <Link to={`/search/tat-ca/${input}`}>   
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
        </form>
    );
}
