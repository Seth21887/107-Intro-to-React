
import './App.css';
import Navbar from './components/navbar'; //when we import JS file, don't include extension
import Footer from './components/footer';
import Catalog from './components/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


//components can be open and closed like <Footer /> instead of doing two tags.

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <h1>Cheese and Chocolates</h1>
      <Catalog />
      <Footer />
    </div>
  );
}

export default App;
