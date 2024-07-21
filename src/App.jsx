import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddDebt from './pages/AddDebtPage';
import DebtDetails from './pages/DebDetails';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ListDebts from './pages/ListDeb';
import { DebtProvider } from './contexts/DebtContext';
import AddPaymentForm from './pages/PaymentForm';

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
              <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
              <Route path="/add-debt" element={<ProtectedRoute element={<AddDebt />} />} />
              <Route path="/debtdetails/:id" element={<ProtectedRoute element={<DebtDetails />} />} />
              <Route path="/listdebs" element={<ProtectedRoute element={<ListDebts />} />} />
              <Route path="/debts/:id/payments" element={<ProtectedRoute element={<AddPaymentForm />} />} />
            </Routes>
          </div>
        </Router>
      </DebtProvider>
    </AuthProvider>
  );
};

export default App;





