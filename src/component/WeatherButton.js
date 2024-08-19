import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, setCity, currentCity }) => {
  console.log(currentCity)
  return (
    <div>
      <Button variant='warning' onClick={() => setCity(currentCity)}>Current Location</Button>
      {cities.map((item) => (
        <Button variant='warning' onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
