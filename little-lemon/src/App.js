import './App.scss';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import About from './pages/About/About'
import Menu from './pages/Menu/Menu'
import { Home, Login, Order, Reservations } from './pages';
import Footer from './components/Footer/Footer';
import { images } from './contants';



function App() {
  return (
    <Router>
      <div className="container">
        <div className='app__navbar'>
          <div className="app__navbar-logo">
            <img src={images.logo} alt="logo" />
          </div>
          <nav className='app__navbar-links'>
            <Link to="/">HOME</Link>
            <Link to="About">ABOUT</Link>
            <Link to="Menu">MENU</Link>
            <Link to="Reservations">RESERVATIONS</Link>
            <Link to="Order">ORDER OUTLINE</Link>
            <Link to="Login">LOGIN</Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />

      </div>
    </Router>



  );
}

export default App;
