import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();
  const getData = async () => {
    const { data } = await axios.get("/api/data");
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  return <h1>I am hungry</h1>;
}

export default App;
