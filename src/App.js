import './App.css';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import { useState } from 'react';

function App() {

  const [dataAirline, setDataAirline] = useState("")

  return (
    <div>
      <Navbar setDataAirline={setDataAirline} />
      <Form dataAirline={dataAirline} setDataAirline={setDataAirline} />
    </div>
  );
}

export default App;
