import React from 'react';

import SingleWeatherComp from '../WeatherComponents/SingleWeatherComponent.js';

const weatherList = (props) => {
    return (
        <div id="weather_list">
            {props.results.map((singleWeatherDetail, index)=>{
                if(index === 0){singleWeatherDetail.applicable_date = "Today!"};
                if(index === 1){singleWeatherDetail.applicable_date = "Tomorrow"};
                return <div>
                    <SingleWeatherComp data={singleWeatherDetail}/>
                    <hr></hr>
                </div>
            })}
        </div>
    )
};

export default weatherList;