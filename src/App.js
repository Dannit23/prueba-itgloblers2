import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useState } from 'react';
import Home from './Components/Home';

function App() {

  const [dataAirline, setDataAirline] = useState("")

  return (
    <div>
      <Navbar setDataAirline={setDataAirline} />
      <Form dataAirline={dataAirline} setDataAirline={setDataAirline} />
      <Home />
    </div>
  );
}

export default App;
