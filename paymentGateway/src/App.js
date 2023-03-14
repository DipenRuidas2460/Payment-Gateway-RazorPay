import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home';
import PaymentSuccess from "./components/PaymentSuccess";

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/paymentsuccess' element={<PaymentSuccess/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
