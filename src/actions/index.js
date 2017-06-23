/**
 * Created by raunak on 2/6/17.
 */
import axios from 'axios';
export const FETCH_WEATHER='FETCH_WEATHER';
const API_KEY='ef04def44ffe0b6025fd9d504c293f4e';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export default function fetchWeather(cityName) {

    const URL=`${ROOT_URL}&q=${cityName},IN`;
console.log(URL);
const response=axios.get(URL)
    return {
        type:FETCH_WEATHER,
        payload:response
    }

}