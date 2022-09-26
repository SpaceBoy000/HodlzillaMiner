import { BrowserRouter as Router, Routes, Route }  from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import BSC from './bsc';
import LANDING_PAGE from "./landing";

AOS.init({ duration: 2000 });
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LANDING_PAGE />} />
          <Route path='/binance' element={<BSC />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
