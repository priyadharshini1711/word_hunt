import { createTheme, FormControl, InputLabel, MenuItem, Select, TextField, ThemeProvider } from '@mui/material';
import React from 'react';
import './Header.css'
import { supported_languages } from '../../services/supported_language'

const Header = ({ language, setLanguage, word, setWord }) => {


    const handleChange = (event) => {
        setLanguage(event.target.value);
        setWord("");
    };


    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff'
            },
            mode: 'dark',
        },
    });

    console.log(language)



    return (
        <div className='header'>
            <span className='title'> Word Hunt</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField className='search' id="standard-basic" label="Search Word" variant="standard" value={word} onChange={(e) => setWord(e.target.value)} />
                    <FormControl className='select' variant="standard" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">Language</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={language}
                            onChange={handleChange}
                            label="Select Language"
                        >
                            {supported_languages.map((language) => {
                                return (<MenuItem key={language.value} value={language.value}>{language.label}</MenuItem>)
                            })}
                        </Select>
                    </FormControl>



                </ThemeProvider>


            </div>

        </div>
    )
}

export default Header;