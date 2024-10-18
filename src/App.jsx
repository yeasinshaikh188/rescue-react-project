
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Dashboard from "./components/Dashboard";
import Incidents from "./components/Incidents";
import Locations from "./components/Locations";
import Incident2 from "./components/Incident2";
import Incident3 from "./components/Incident3";
import Incident4 from "./components/Incident4";
import NewIncidents from "./components/NewIncidents";
import Error from "./components/error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navbar as the layout component */}
        <Route path="/" element={<Navbar/>}>
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/Incidents' element={<Incidents />} />
          <Route path='/Locations' element={<Locations />} />
          <Route path='/Incidents2' element={<Incident2/>} />
          <Route path='/Incidents3' element={<Incident3/>} />
          <Route path='/Incidents4' element={<Incident4/>} />
          <Route path='/NewIncidents' element={<NewIncidents/>} />
          <Route path='*' element={<Error/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;