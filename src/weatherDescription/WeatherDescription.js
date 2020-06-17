import React from "react";
import {connect} from "react-redux";
import {getWeather} from "../redux/weather-reducer";
import Paper from "@material-ui/core/Paper";
import styles from './WeatherDescription.module.scss'
import temperature from '../accets/weather-img/Temperature.png'
import clear from '../accets/weather-img/Clear.png'
import clouds from '../accets/weather-img/Cloud.png'
import rain from '../accets/weather-img/Rain.png'
import snow from '../accets/weather-img/Snow.png'
import thunderstorm from '../accets/weather-img/Thunderstorm.png'
import {styled} from "@material-ui/styles";


export const WeatherDescription = (props) => {


    // const currentCity = props.cities[props.cities.length -1];
    // const currentCityWeather = props.weather.find (item => item.name.toLowerCase() === currentCity.toLowerCase())
    const currentCityWeather = props.weather[props.weather.length -1]
    let {name, main, weather, wind} = currentCityWeather;
    const temp = Math.floor(main.temp/10);
    const tempFeelsLike = Math.floor(main.feels_like/10);
    const weatherPicture =
        weather[0].main === "Clouds" ? clouds
            : weather[0].main === "Clear" ? clear
            : weather[0].main === "Thunderstorm" ? thunderstorm
            : weather[0].main === "Rain" ? rain
            : weather[0].main === "Rain" ? snow : clear


    const MyPaper = styled(Paper)({
        backgroundImage: 'linear-gradient( 110.4deg,  rgba(255,196,254,1) 9.6%, rgba(251,229,123,1) 91% );',

    });

    return (
        <MyPaper elevation={3} className={styles.container}>
            <div className={styles.title}>Current weather in {name}</div>
            <hr className={styles.hr}/>
            <div className={styles.weather_item}> Sky:
                <img className={styles.weather_icon} src={weatherPicture} alt="temperature"/>
                {weather[0].description || 'sunny'}
            </div>
            <div className={styles.weather_item}>
                    <span className={styles.weather_temp}> Air temperature: {temp}&deg;
                        <img className={styles.weather_icon} src={temperature} alt="temperature"/>
                    </span>
                <span className={styles.weather_temp}> Feels like: {tempFeelsLike}&deg;
                    <img className={styles.weather_icon} src={temperature} alt="temperature"/>
                    </span>
            </div>
            <div className={styles.weather_item}>
                Pressure: {main.pressure} mm
            </div>


            <div className={styles.weather_item}>
                Humidity: {main.humidity}%
            </div>
            <div className={styles.weather_item}>
                Wind speed: {wind.speed} m/s
            </div>
            <div className={styles.weather_item}></div>

        </MyPaper>
    )
}

let mapStateToProps = (state) => ({
    weather: state.weather.currentWeather,
    // cities: state.weather.cities,
})

export const WeatherDescriptionContainer = connect(mapStateToProps, {getWeather})(WeatherDescription)