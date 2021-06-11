import './App.css';
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import Body from "./Body.js";
import Bodyfoot from './Bodyfoot';
import Footer from './Footer';
import Information from './Information';
import FooterBorder from './FooterBorder';

function App() {
  return (
    <div className="app">
      <Header />
      <NavBar />
      <Body />
      <Bodyfoot />
      <Information />
      <Footer />
      <FooterBorder />
    </div>
  );
}

export default App;
