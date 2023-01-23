import { useEffect, useState } from "react";

export function ZipCountry() {
  const [zip, setZip] = useState("");
  const [tempZip, setTempZip] = useState("8000");
  const [tempCountry, setTempCountry] = useState("DK");
  const [country, setCountry] = useState("");
  const [weatherData, setWeatherData] = useState();

  // array of objects
  const initialGeo = {
    lat: 56.162939,
    lon: 10.203921,
  };

  //initialise to initialgeo as default
  const [geo, setGeo] = useState(initialGeo);

  const apiKey = "b8642f6a6885b73b64fe78b8c6e4631e";

  // useEffect er en sideeffekt, som kører efter man har opdateret state
  useEffect(
    () => {
      const fetchData = async () => {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},${country}&appid=${apiKey}`
        );
        if (response.ok) {
          const newgeo = await response.json();
          setGeo(newgeo);
        }
      };
      fetchData();
    },
    [zip],
    [country]
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}&units=metric`
      );
      if (response.ok) {
        const weatherData = await response.json();
        setWeatherData(weatherData);
      }
    };
    fetchData();
  }, [geo]);

  function update() {
    setZip(tempZip);
    setCountry(tempCountry);
  }
  return (
    <div>
      <h1>Weather Data with Country and Zip</h1>
      <label>
        Country &nbsp;
        <input
          type="text"
          placeholder="DK"
          value={tempCountry}
          onChange={(e) => setTempCountry(e.target.value)}
        />
      </label>
      <label>
        Zip &nbsp;
        <input
          type="text"
          placeholder="8000"
          value={tempZip}
          onChange={(e) => setTempZip(e.target.value)}
        />
      </label>
      <button type="button" onClick={() => update()}>
        Search
      </button>
      <p>
        Weather: <br />
        {JSON.stringify(weatherData)}
      </p>
    </div>
  );
}
