import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';
import Web from './responsive/Web'
function App() {
  return (
    <div className='body'>
      <Router>
        <Routes>
          <Route path='/'element={<Web />}></Route>
          <Route path='/login'element={<Login/>}></Route>
          <Route path='/dashboard'element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
