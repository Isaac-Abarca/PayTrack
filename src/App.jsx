// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDebt from './pages/AddDebtPage';
import DebDetails from './pages/DebDetails';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-debt" element={<AddDebt />} />
          <Route path="/debdetails" element={<DebDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




