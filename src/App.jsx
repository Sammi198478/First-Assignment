
import NewIncident from './component/NewIncident';
import Incidents from './component/Incidents';
import Navbar from './component/Navbar';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav2 from './component/Nav2';
import Dashboard from './component/Dashboard';
import IncidentData from './component/IncidentData';



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
        </Route>

        <Route element={< Nav2/>}>
        <Route path='/newincident/new/dataitem' element={<IncidentData />} />
        </Route>


      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

