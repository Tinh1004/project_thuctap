import { FC } from 'react';
import { Button, FormControl, InputAdornment, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

export default function FormInputSearch(props) {
    const [searchInput, setSearchInput] = useState("");
    console.log(searchInput);
    const Input = styled(InputBase)(() => ({
        fontSize: 16,
        '& .MuiInputBase-input': {
            borderRadius: 50,
            position: 'relative',
            padding: '8px 20px 8px 20px',
            color: '#f21980',
            '&::-webkit-input-placeholder': {
                color: 'white',
            },
        },
    }));
    return (
        <FormControl
            sx={{ border: '1px solid #38444d', borderRadius: 25, width: '100%' }}
            variant="standard"
        >
            <Input
                onChange={(e) => {
                    setSearchInput(e.target.value)
                }}
                value={searchInput}
                fullWidth
                placeholder="Enter name or post..."
                endAdornment={
                    <InputAdornment position="end">
                        <Button
                            disabled={false}
                            size="small"
                            type="submit"
                            sx={{
                                color: '#f91880',
                                borderRadius: 25,
                                cursor: 'pointer',
                                '&:disabled': {
                                    color: '#999ea3',
                                },
                            }}
                        >
                            <SearchIcon />
                        </Button>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

