import { Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './Pages/Banner/Banner';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
