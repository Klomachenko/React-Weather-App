import { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, currentCity }) => {
  const [cityName, setCityName] = useState(currentCity)
  const handleClick = (city) => {
    setCity(city)
    setCityName(city)
  }
  return (
    <div>
      <Button variant={`${cityName == 'Gwangju' ? 'outline-warning' : 'warning'}`} onClick={() => handleClick(currentCity)} >Current Location</Button>
      {
        cities.map((item) => (
          <Button variant={`${cityName == item ? "outline-warning" : "warning"}`} onClick={() => handleClick(item)}>
            {item}
          </Button>
        ))
      }
    </div >
  );
};

export default WeatherButton;
