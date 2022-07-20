import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import filterSlice from '../../../redux/filterSlice/filterSlice';
export default function Search() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleClearInput = () => {
        setInput("");
    }
    const handleChangeInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // window.alert("input: "+input);
        if (input.trim().length > 0) {
            dispatch(filterSlice.actions.searchFilterChange(input))
            navigate(`/search/${input}/tat-ca`, { replace: true });
        } else {
            window.alert("Nhập vào");
        }
        inputRef.current.focus();

    }
    return (
        <form className="search" onSubmit={handleSubmitForm}>
            <a onClick={handleSubmitForm}><div className="icon"></div></a>
            <div className="input">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    id="mysearch"
                    value={input}
                    onChange={handleChangeInput}
                />
            </div>
            {input && <span className="clear" onClick={() => { handleClearInput() }}></span>}
        </form>
    );
}
