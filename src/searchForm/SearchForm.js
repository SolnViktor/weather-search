import React, {useEffect, useState} from "react";
import styles from "./SearchForm.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addCity, errorHandler, getWeather} from "../redux/weather-reducer";
import Autocomplete from '@material-ui/lab/Autocomplete';


export const SearchForm = (props) => {

    let [input, setInput] = useState('');

    useEffect(() => {
        const data = localStorage.getItem('cities')
        if (data) {
            const dataCities = JSON.parse(data);
            props.addCity(dataCities);
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('cities', JSON.stringify(props.cities));
    }, [props.cities])

    const onChangeHandler = (e) => {
        setInput(e.currentTarget.value)
        props.errorHandler(false);
    }
    const onFocusHandler = () => {
        props.errorHandler(false);
    }


    const setCity = () => {
        let trimmedCity = input.trim();
        if (trimmedCity !== '') {
            props.addCity([trimmedCity]);
            props.getWeather(trimmedCity);
            setInput('');
        } else props.errorHandler(true)

    }
    const enterValueOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            setCity();
        }
    }
    const enterValueOnClick = () => {
        setCity();
    }


    return (
        <div className={styles.container}>
            <Autocomplete
                className={styles.input}
                onInputChange={(event, newInputValue) => {
                    setInput(newInputValue);
                }}


                id="Enter a city"
                freeSolo
                options={props.cities}
                renderInput={(params) => (
                    <TextField {...params}
                               error={props.isError}
                               onKeyPress={enterValueOnKeyPress}
                               onChange={onChangeHandler}
                               className={styles.input}
                               onFocus={onFocusHandler}
                               id="outlined-basic" label="Enter a city" variant="outlined"
                    />
                )}
            />
            <Button className={styles.btn} onClick={enterValueOnClick} variant="contained" color="primary">
                Search
            </Button>
        </div>
    )
}


let mapStateToProps = (state) => ({
    cities: state.weather.cities,
    isError: state.weather.isError,
});

export const SearchFormContainer = connect(mapStateToProps, {getWeather, addCity, errorHandler})(SearchForm)