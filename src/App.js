import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import ManageProducts from './Pages/Products/ManageProducts/ManageProducts';
import SingleProduct from './Pages/Products/SingleProduct/SingleProduct';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Login from './Pages/Login/Login/Login';
import Signup from './Pages/Login/Signup/Signup';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import MyProducts from './Pages/Products/MyProducts/MyProducts';
import AddProducts from './Pages/Products/AddProducts/AddProducts';
import Blog from './Pages/Blog/Blog';



function App() {
  return (
    <div className="container">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/manageproducts' element={
          <RequireAuth>
            <ManageProducts></ManageProducts>
          </RequireAuth>
        }></Route>
        <Route path='/myproducts' element={
          <RequireAuth>
            <MyProducts></MyProducts>
          </RequireAuth>
        }></Route>
        <Route path='/addproducts' element={
          <RequireAuth>
            <AddProducts></AddProducts>
          </RequireAuth>}></Route>
        <Route path='/productdetails/:productId' element={
          <RequireAuth>
            <SingleProduct></SingleProduct>
          </RequireAuth>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
