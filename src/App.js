import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BestPrice from './components/BestPrice/BestPrice';
import CryptoDetails from './components/CryptoDetails/CryptoDetails';

const App = () => {
  // const [bestCryptoTitle, setBestCryptoTitle] = useState('btcinr');
  let bestCryptoTitle = "btcinr"
  const [data, setData] = useState();
  const [bestCrypto, setBestCrypto] = useState();

  useEffect(() => {
    axios.get('http://localhost:8000/api/insert')
      .then(response => {
        setData(response.data);
        setBestCrypto(response.data[bestCryptoTitle])
      })
    const interval = setInterval(() => {
      axios.get('http://localhost:8000/api/insert')
      .then(response => {
        setData(response.data);
      })
    }, 30000)
    return () => clearInterval(interval); 
  }, []);

  const crypto = (best) => {
    bestCryptoTitle = best
    setBestCrypto(data[best])
  }

  return (
    <div className="App">
      <Header crypto = {crypto}/>
      <BestPrice bestCrypto = {bestCrypto}/>
      <CryptoDetails data = {data}/>
      <Footer />
    </div>
  );
}

export default App;
