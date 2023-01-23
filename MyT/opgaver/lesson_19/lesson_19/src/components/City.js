import react, { useEffect, useState, json } from "react";

export function City() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();
  const apiKey = "b8642f6a6885b73b64fe78b8c6e4631e";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (response.ok) {
        const weatherData = await response.json();
        setWeatherData(weatherData);
      }
    };
    fetchData();
  }, [city]);

  return (
    <div>
      <h1>Weather Data with City</h1>
      <label>
        City &nbsp;
        <input
          type="text"
          name="city"
          placeholder="Aarhus"
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <p>
        Weather: <br />
        {JSON.stringify(weatherData)}
      </p>
    </div>
  );
}
