import "./form.css";
import { useContext, useState } from "react";
import { Context } from "./App";

export default function Form() {
  const [city, setCity] = useState();
  const [data, setData, ok, setOk] = useContext(Context);
  const API_KEY = "c5a9b951f52e4acc959141311242904";

  function handleChange(e) {
    e.preventDefault();
    setCity(e.target.value);
  }

  async function api() {
    const request = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    const data = await request.json();

    setData(data);
    setOk(request.ok);
  }

  function handleSubmit(e) {
    e.preventDefault();
    api();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter the city" onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
