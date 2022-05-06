import { Route, Routes } from 'react-router-dom';
import './App.css';
import app from './firebase.init';
import Home from './Pages/Home/Home';
import ManageProducts from './Pages/Products/ManageProducts/ManageProducts';
import SingleProduct from './Pages/Products/SingleProduct/SingleProduct';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import { getAuth } from "firebase/auth";
import Notfound from './Pages/Shared/Notfound/Notfound';

const auth = getAuth(app);

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/manageproducts' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='/productdetails/:productId' element={<SingleProduct></SingleProduct>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
