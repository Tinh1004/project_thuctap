import { useState, useRef, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import filterSlice from '../../../redux/filterSlice/filterSlice';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { dataSelector } from "../../../redux/selectors";
import { Button, FormControl, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
    const [input, setInput] = useState("");
    let navigate = useNavigate();
    const inputRef = useRef();
    const dispatch = useDispatch();
    let data = useSelector(dataSelector);


    const handleClearInput = () => {
        setInput("");
    }
    const handleChangeInput = (value) => {
        setInput(value);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        // window.alert("input: "+input);
        if (input.trim().length > 0) {
            dispatch(filterSlice.actions.searchFilterChange(input))
            navigate(`/search/${input}/tat-ca`, { replace: true });
        }
    }

    return (
        <form className="search" onSubmit={handleSubmitForm}>
            <Stack spacing={2} sx={{ width: 400, padding: 0 }}>
                <Autocomplete
                    sx={{ padding: 0 }}
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={data.map((option) => option.name)}
                    getOptionLabel={(option) => {
                        console.log("option: ", option);
                        return (option ? option : "");
                    }}
                    value={input}
                    // onChange={handleChangeInput}
                    onChange={(event, value) => handleChangeInput(value)}
                    renderInput={(params) => (
                        <TextField
                            className="input-search"
                            sx={{ padding: 0 }}
                            {...params}
                            label="Search..."
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                                style: {
                                    fontSize: 16,
                                    padding: 0,
                                    paddingLeft: 10,
                                    borderRadius: 50,
                                },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button
                                            disabled={false}
                                            size="small"
                                            type="submit"
                                            sx={{
                                                // color: '#f91880',
                                                borderRadius: 25,
                                                cursor: 'pointer',
                                                '&:disabled': {
                                                    color: '#999ea3',
                                                },
                                            }}
                                        >
                                            <SearchIcon />
                                        </Button>
                                    </InputAdornment>)
                            }

                            }

                        />
                    )}

                />
            </Stack>
        </form>

    );
}
