import logo from './logo.svg';
import './App.css';
import { NextUIProvider } from '@nextui-org/react';
import Nav from "./Components/Nav";
import Footer from './Components/Footer';
import Routing from './Routes/router';
function App() {
  return (
    <NextUIProvider>
      < Nav/>
      < Routing/>
      < Footer/>
    </NextUIProvider>
  );
}

export default App;
