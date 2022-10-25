
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartContainer from './components/CartContainer';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
            <Route  exact path='/' element={<ProductContainer />} />
            <Route  path='carts' element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
