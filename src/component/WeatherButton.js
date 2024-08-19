import { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, currentCity }) => {
  const [cityName, setCityName] = useState(currentCity)
  return (
    <div>
      <Button variant={`${cityName == 'Gwangju' ? 'outline-warning' : 'warning'}`} onClick={() => setCity(currentCity)} onClick={() => { setCityName(currentCity) }} >Current Location</Button>
      {
        cities.map((item) => (
          <Button variant={`${cityName == item ? "outline-warning" : "warning"}`} onClick={() => setCity(item)} onClick={() => { setCityName(item) }}>
            {item}
          </Button>
        ))
      }
    </div >
  );
};

export default WeatherButton;
