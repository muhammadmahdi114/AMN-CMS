import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Login from './Components/Login/login';
import Dashboard from './Components/Dashboard/dashboard';
import Munasibaat from './Components/Munasibaat/munasibaat';
import Taaruf from './Components/Taaruf/taaruf';
import Mujjalah from './Components/Tableeghat/mujjalah';
import Noor from './Components/Tableeghat/noor';
import NoorDiary from './Components/Tableeghat/noorDiary';
import Tazakuraat from './Components/Tazakuraat/tazakuraat';

function App() {
  useEffect(() => {
    document.title = 'AMN | CMS';
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/munasibaat" element={<Munasibaat />} />
        <Route path="/taaruf" element={<Taaruf />} />
        <Route path='/mujjalah' element={<Mujjalah />} />
        <Route path='/noor' element={<Noor />} />
        <Route path='/noor-diary' element={<NoorDiary />} />
        <Route path='/tazakuraat' element={<Tazakuraat />} />
      </Routes>
    </Router>
  );
}

export default App;
