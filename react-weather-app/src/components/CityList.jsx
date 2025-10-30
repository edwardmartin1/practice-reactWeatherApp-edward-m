/*
function CityList({city, setCity})
*/
const CityList = ({city, setCity, setCurrentPage}) =>
{
    const handleChange = (event) =>
    {
        setCity(event.target.value);
        setCurrentPage("CityForecast");
    }

    return (
        <main>
            <label>
                Select City:
                <select onChange={handleChange}>
                    <option value=""></option>
                    <option value="New York">New York</option>
                    <option value="London">London</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Paris">Paris</option>
                </select>

            </label>
        </main>
    );

}


export default CityList;

