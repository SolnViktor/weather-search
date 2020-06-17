import {weatherAPI} from "../api/api";

const ADD_CITY = 'weather-reducer/ADD_CITY';
const UPDATE_WEATHER = 'weather-reducer/UPDATE_WEATHER';
const IS_FETCHING = 'weather-reducer/IS_FETCHING';
const IS_ERROR = 'weather-reducer/IS_ERROR';

let initialState = {
    cities: [],
    isFetching: false,
    isError: false,
    currentWeather: [
        {
            "coord": {
                "lon": 37.62,
                "lat": 55.75
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 295.44,
                "feels_like": 296.5,
                "temp_min": 294.15,
                "temp_max": 296.48,
                "pressure": 1019,
                "humidity": 73
            },
            "visibility": 10000,
            "wind": {
                "speed": 2,
                "deg": 140
            },
            "clouds": {
                "all": 100
            },
            "dt": 1592290415,
            "sys": {
                "type": 1,
                "id": 9029,
                "country": "RU",
                "sunrise": 1592268262,
                "sunset": 1592331374
            },
            "timezone": 10800,
            "id": 524901,
            "name": "Moscow",
            "cod": 200
        },
    ]
}


function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CITY:
            if (action.payload) {
                return {
                    ...state,
                    cities: [...state.cities, ...action.payload]
                }
            } else return state
        case UPDATE_WEATHER:
            return {
                ...state,
                currentWeather: [...state.currentWeather, action.payload.data]
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }
        case IS_ERROR:
            return {
                ...state,
                isError: action.payload
            }
        default:
            return state;
    }
}

export const addCity = (city) => ({type: ADD_CITY, payload: city});
export const updateWeather = (payload) => ({type: UPDATE_WEATHER, payload});
export const isFetching = (payload) => ({type: IS_FETCHING, payload});
export const errorHandler = (payload) => ({type: IS_ERROR, payload})

export const getWeather = (city) => async (dispatch) => {
    try {
        dispatch(isFetching(true));
        let response = await weatherAPI.getWeatherForCity(city);
        dispatch(updateWeather(response));
        dispatch(isFetching(false));
    } catch (error) {
        dispatch(errorHandler(true));
        dispatch(isFetching(false));
    }

}


export default weatherReducer;