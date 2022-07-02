import "./scss/App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [personData, setPersonData] = useState();
  const url = "https://randomuser.me/api/";
  const getDataFromAPI = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setPersonData(data);
  };

  useEffect(() => {
    getDataFromAPI();
  }, []);
  return <div className="App"></div>;
}

export default App;
