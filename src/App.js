import logo from './logo.svg';
import './App.css';

import Footer from "./components/footer"
import Work from "./components/work"
import Quote from "./components/quote"
import Featured from "./components/featuredWork"

function App() {
  return (
    <div>
      <Featured />
      <Work />
      <Quote />
      <Footer />

    </div>
  );
}

export default App;
