
import NewIncident from './component/NewIncident';
import Incidents from './component/Incidents';
import Navbar from './component/Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav2 from './component/Nav2';
import Dashboard from './component/Dashboard';
import IncidentData from './component/IncidentData';
import Getstartet from './component/Getstartet';
import Locations from './component/Locations';



function App() {
  return (
    <BrowserRouter>

<Navbar />
      <Routes>
        <Route path='' element={<Nav2/>}>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        </Route>
        
        <Route path='' element={<Nav2/>}>
        <Route path="/newincident" element={<Incidents/>} />
        <Route path="/newincident/new" element={<NewIncident/>} />
        <Route path='/newincident/new/item' element={<IncidentData />} />
        <Route path='/newincident/new/item/getstart' element={<Getstartet/>} />
        <Route path='/newincident/new/item/getstart/locations' element={<Locations/>} />
        </Route>


      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

