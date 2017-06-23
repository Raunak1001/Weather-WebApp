/**
 * Created by raunak on 2/6/17.
 */
import WeatherReducer from './reducer_weather'
import { combineReducers } from 'redux'
const rootReducer=combineReducers({
    weather:WeatherReducer
});

export default rootReducer