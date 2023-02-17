import Hidder from "./component/hidder";
// import MotivateBar from "./component/motifatebar";
import Layerpremier from "./layer/layerpremier";
import MotivateBar from "./component/motifatebar";
import './index.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Layerpremier/>}/>
        </Routes>
      </Router>
  );
}

export default App;
