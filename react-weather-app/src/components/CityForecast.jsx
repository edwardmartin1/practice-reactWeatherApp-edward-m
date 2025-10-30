import {useState, useEffect, useRef} from "react"
import {mockWeatherData} from "./data"
/*
function CityForecast ({city})
*/
const CityForecast = ({city, setCurrentPage}) =>
{
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true)
    const detailedWeatherRef = useRef(null);

    useEffect(() => 
    {
        setTimeout(() => 
        {      
            setWeatherData(mockWeatherData);
            setLoading(false);
        }, 5000);
    }, []);

    const scrollToDetailedWeather = () => {
        detailedWeatherRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleReturn = () => 
    {
        setCurrentPage("CityList");
    };

    /*
    let displaySummary = "";
    let displayDetails = "";
    */

    if (loading) 
    {
        return <p>Loading data...</p>;
    }


    if (!weatherData || !weatherData[city]) 
    {
        return !city ? <p>Please select a city.</p> : <p>Weather data for {city} not found.</p>
    }
/*
    useEffect(() =>
    {
        console.log(`City updated: ${city}`);
        displaySummary = weatherData[city].summary;
        displayDetails = weatherData[city].details;
    }, [city]

    );
*/



    return (
        <main>
            <div className="summary">
                <h2>The current weather for {city}</h2>
                <button onClick={scrollToDetailedWeather}>View Details</button>
                <button onClick={handleReturn}>Select a new city</button>
                <p>Summary: {weatherData[city].summary}</p>
            </div>

            <div className="spacer">
                
                Add lots of senseless advertising here...
            </div>
            
            <div ref={detailedWeatherRef} className="detail">
                <p>Detail: {weatherData[city].details}</p>
            </div>
            
            
        </main>
    )
}
/*
        <p>{weatherData[{city}].summary}</p>
*/

export default CityForecast;
