import axios from 'axios';

const API = 'e26fa7822f75b67b0ffa43f37306b7dd'

export const weatherAPI = {

    getWeatherForCity(city) {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`)
    }
}

