import { useState, useRef, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import filterSlice from '../../../redux/filterSlice/filterSlice';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { dataSelector } from "../../../redux/selectors";

export default function Search() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();
    const inputRef = useRef();
    const dispatch = useDispatch();

    const handleClearInput = () => {
        setInput("");
    }
    const handleChangeInput = (e) => {
        console.log(e.target.value)
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
    }

    let data = useSelector(dataSelector);


    return (
        <form className="search" onSubmit={handleSubmitForm}>
            <Stack spacing={2} sx={{ width: 400, height: 35, padding: 0 }}>
                <Autocomplete
                    sx={{ padding: 0 }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={data.map((option) => option.name)}
                    getOptionLabel={(option) => {
                        console.log("option: ", option);
                        // setInput(option);
                        return (option ? option : "");
                    }}
                    value={input}
                    onChange={handleChangeInput}
                    renderInput={(params) => (
                        <TextField
                            sx={{ padding: 0 }}
                            {...params}
                            label="Search"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                style: {
                                    padding: 0,
                                    fontSize: 16,
                                }
                            }}
                        />
                    )}
                />
            </Stack>
        </form>

    );
}
