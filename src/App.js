
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {useSelector} from 'react-redux';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';

function App() {
  const {open} = useSelector(state=>state.modal);
  return (
    <div className="App">
      <Navbar />
      <CartContainer />
      <Footer />
      {open && <Modal />}
    </div>
  );
}

export default App;
