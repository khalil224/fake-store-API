import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AllProduct from './components/AllProducts/AllProduct';
import Menubar from './components/Menubar/Menubar';


function App() {

  const [count, setCount] = useState(0)
  const setCartCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <Menubar count={count}></Menubar>
      <AllProduct setCartCount={setCartCount}></AllProduct>
    </div>
  );
}

export default App;
