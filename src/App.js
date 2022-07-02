import "./scss/App.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [personData, setPersonData] = useState();
  const [newPersonData, setNewPersonData] = useState(false);
  const url = "https://randomuser.me/api/";
  const getDataFromAPI = async () => {
    const { data } = await axios.get(url);
    console.log(data.results[0]);
    setPersonData(data.results[0]);
  };

  useEffect(() => {
    getDataFromAPI();
  }, [newPersonData]);
  return (
    <div className="App">
      {personData && (
        <Card
          {...personData}
          setNewPersonData={setNewPersonData}
          newPersonData={newPersonData}
        />
      )}
    </div>
  );
}

export default App;
