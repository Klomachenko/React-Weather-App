import { useEffect } from 'react';
import './App.css';

// 1. 앱 실행가 동시에 현재위치 기반 날씨 보여주기
// 2. 날씨정보 (도시, 섭씨, 화씨, 날씨상태)
// 3. 버튼5개 (1개 현재위치, 4개 다른도시)
// 4. 도시 버튼 클릭시 도시별 날씨 보여주기
// 5. 현재위치 버튼 클릭시 다시 현재위치 기반 날씨 보여주기
// 6. 데이터 들고오는 동안 로딩 스피너

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1e0e718b39000e667c0b9b33afb5126c`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div>hiiiii</div>;
}

export default App;
