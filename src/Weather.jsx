import { useContext, useEffect } from "react";
import { Context } from "./App";
import "./weather.css";

export default function Weather() {
  const [result, setResult, ok, setOk] = useContext(Context);

  function WeatherComponent() {
    console.log(result);
    return (
      <>
        {ok ? (
          <div className="information">
            <div className="title">
              <h2>
                <span>{result.location.name}</span>, {result.location.country}
              </h2>
            </div>
            <div className="img-information">
              <img src={result.current.condition.icon} alt="weather image" />
              <p>{result.current.condition.text}</p>
            </div>
            <div className="temperature">
              <h2>
                {result.current.temp_c}&deg;c | {result.current.temp_f}&deg;f
              </h2>
            </div>
            <div className="day">
              <p>Is it day: {result.current.is_day == 0 ? "no" : "yes"}</p>
            </div>
          </div>
        ) : (
          <>
            <h1>{result.error.message}</h1>
            <span>Error code: {result.error.code}</span>
          </>
        )}
      </>
    );
  }

  return ok !== undefined ? (
    <WeatherComponent />
  ) : (
    <h1>Enter a country to get started</h1>
  );
}
