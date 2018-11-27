import React from 'react';
import '../CSS/SingleWeatherComponentStyling.css';

const singleWeatherComp = (props) => {
return(
    <div id="single_weather_comp">
        <p className="weatherheader">Dato: {props.data.applicable_date}</p>

            <div className="myeInformasjon">
                <p>Minimum temperature: {Math.round(props.data.min_temp)/100}</p>
                <p>Maximum temperature: {Math.round(props.data.max_temp)/100}</p>
                <p>Air pressure: {Math.round(props.data.air_pressure)/100}</p>
            </div>
    </div>

)
};

export default singleWeatherComp;