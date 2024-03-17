import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminLogin } from './components/admin/Login';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='adminLogin' element={<AdminLogin/>}/>
        <Route path='user' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
