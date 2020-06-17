import React, {useState} from "react";
import styles from "./SearchForm.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addCity, getWeather} from "../redux/weather-reducer";
import Autocomplete from '@material-ui/lab/Autocomplete';


export const SearchForm = (props) => {

    let [input, setInput] = useState('');



    const onChangeHandler = (e) => {
        setInput(e.currentTarget.value)
    }
    const enterValueOnKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            let trimmedValue = input.trim();
            setInput('');
            props.addCity(trimmedValue);
            props.getWeather(trimmedValue);
            localStorage.setItem(trimmedValue, trimmedValue);

        }
    }
    const enterValueOnClick = () => {
        let trimmedValue = input.trim();

        props.addCity(trimmedValue);
        props.getWeather(trimmedValue);
        localStorage.setItem(trimmedValue, trimmedValue);
        setInput('');

    }


    return (
        <div className={styles.container}>
            <Autocomplete
                className={styles.input}
                id="Enter a city"
                freeSolo
                options={props.cities}
                renderInput={(params) => (
                    <TextField {...params}
                               onKeyPress={enterValueOnKeyPress}
                               onChange={onChangeHandler} className={styles.input}
                               id="outlined-basic" label="Enter a city" variant="outlined" value={input}/>

                )}
            />
            <Button className={styles.btn} onClick={enterValueOnClick} variant="contained" color="primary">
                Search
            </Button>
        </div>
    )
}
// <TextField onKeyPress={enterValueOnKeyPress}
//            options={["samara", "moscow", "london", "carrot"]}
//            autoComplete='on'
//            name='on'
//            autoCorrect={'on'}
//            onChange={onChangeHandler} className={styles.input}
//            id="outlined-basic" label="Enter a city" variant="outlined" value={input}/>

let mapStateToProps = (state) => ({
    cities: state.weather.cities,
});

export const SearchFormContainer = connect(mapStateToProps, {getWeather, addCity})(SearchForm)