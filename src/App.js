import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Vehicle from './components/Vehicle';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/vehicle" element={<Vehicle />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
