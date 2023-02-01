import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/HomePage';
import GetProductCollections from './Components/collectionProducts';
import ProductPage from "./Components/ProductPage";
import CheckOutPage from "./Components/CheckOutPage";
import AdminHome from "./Components/Admin";
import ConfirmOrder from "./Components/confirmOrder";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/:collection/:productName' element={<ProductPage  />} />
        <Route path='/home/:collection' element={<GetProductCollections />} />
        <Route path='/checkout' element={<CheckOutPage />} />
        <Route path='/confirmorder' element={<ConfirmOrder />} />

        
        


        {/* ADMIN ROUTES */}
        <Route path='admin/:username' element={<AdminHome />} />

      </Routes>
    </Router>
  );
}

export default App;
