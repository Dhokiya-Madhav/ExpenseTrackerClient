import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Login from './components/login';
import Signup from './components/signup';
import Expenses from './components/expense';
import AddExpense from './components/addExpense';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Expenses/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/addExp" element={<AddExpense/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
