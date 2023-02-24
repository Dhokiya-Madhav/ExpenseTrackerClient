import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Login from './components/login';
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
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
