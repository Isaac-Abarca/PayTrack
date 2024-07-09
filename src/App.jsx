// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDebt from './pages/AddDebtPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-debt" element={<AddDebt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




