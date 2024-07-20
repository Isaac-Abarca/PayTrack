// src/App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDebt from './pages/AddDebtPage';
import DebDetails from './pages/DebDetails';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ListDeb from './pages/ListDeb';
import { DebtProvider } from './contexts/DebtContext';


const App = () => {
  return (
    <AuthProvider>
      <DebtProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/Home" element={<ProtectedRoute element={<Home />} />} />
              <Route path="/add-debt" element={<ProtectedRoute element={<AddDebt />} />} />
              <Route path="/debtdetails/:id" element={<ProtectedRoute element={<DebDetails />} />} />
              <Route path="/listdeb" element={<ProtectedRoute element={<ListDeb />} />} />
            </Routes>
          </div>
        </Router>
      </DebtProvider>
    </AuthProvider>
  );
};

export default App;




