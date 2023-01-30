import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/HomePage'


function App() {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path='/home' element={<Home />} />
          {/* <Route path="/:username/homePage" element={<HomePage />} >
            <Route path="/:username/homePage/info" element={<Info />} />
            <Route path="/:username/homePage/posts" element={<Posts />} />
            <Route path="/:username/homePage/todos" element={<Todos />} />
          </Route> */}
        </Routes>
      </Router>
    

  );
}

export default App;