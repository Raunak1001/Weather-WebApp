/**
 * Created by raunak on 3/6/17.
 */
import React from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'


class WeatherList extends React.Component{



    renderWeatherData(cityData){
        const CityName=cityData.city.name;
        const temps=cityData.list.map((weather)=>{
            return weather.main.temp;
        });
        const pressures=cityData.list.map((weather)=>{
            return weather.main.pressure
        });

        const humidity=cityData.list.map((weather)=>{
            return weather.main.humidity
        });
        console.log(temps);
        return(
            <tr>
                <td>{CityName}</td>
                <td><Chart data={temps} color='blue' unit="k"/></td>
                <td><Chart data={pressures} color='red' unit ="hPa"/></td>
                <td><Chart data={humidity} color="black" unit ="%"/></td>
            </tr>


        )
    }

render(){
    return(<table className="table table-hover">
        <thead>
        <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeatherData)}
        </tbody>


    </table>)


}



}

function mapStatetoProps(state){
    return({
        weather:state.weather
    })
}
export default connect(mapStatetoProps)(WeatherList);