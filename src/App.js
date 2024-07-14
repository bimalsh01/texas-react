import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Navbar from './components/Navbar';
import Search from './pages/search/Search';
import Test from './pages/test/Test';


function App() {
  return (
    <Router>
      <Navbar/>

      <Routes>

        <Route path='/home' element={<Homepage/>}/>
        <Route path='/login' element= {<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/search' element={<Search/>} />

        <Route path='/test' element={<Test/>} />

      </Routes>
    </Router>
  );
}

export default App;
