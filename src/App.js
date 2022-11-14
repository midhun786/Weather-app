import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import { CounterDataContext, UserProvider } from './Context/Context';

function App() {
  return (
    <>

      <BrowserRouter>
        <CounterDataContext>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </CounterDataContext>
      </BrowserRouter>

    </>
  );
}

export default App;
