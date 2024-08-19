import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, currentCity, city }) => {
  const [cityName, setCityName] = useState(city);

  useEffect(() => {
    setCityName(city);
  }, [city]);

  const handleClick = (city) => {
    setCity(city);
  };

  return (
    <div>
      <Button
        variant={cityName === currentCity ? 'outline-warning' : 'warning'}
        onClick={() => handleClick(currentCity)}
      >
        Current Location
      </Button>
      {cities.map((item) => (
        <Button
          key={item}
          variant={cityName === item ? 'outline-warning' : 'warning'}
          onClick={() => handleClick(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
