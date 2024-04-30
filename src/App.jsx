import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import { createContext, useState } from "react";
import "./app.css";

export const Context = createContext();

export default function App() {
  const [data, setData] = useState();
  const [ok, setOk] = useState();

  return (
    <div className="container">
      <Context.Provider value={[data, setData, ok, setOk]}>
        <Form />
        <article className="weather">
          <Weather />
        </article>
      </Context.Provider>
    </div>
  );
}
