import './App.css';
import Header from "./Header";
import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './Coin';

function App() {

  const [getData, setData] = useState([]);
  const [getSearch, setSearch] = useState('');


  useEffect(() => {
    try {
      async function fetchData() {
        try {
          const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false");
          // console.log(response.data);
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
      /*
        // Set a timeout to fetch prices every minute
        const interval = setInterval(fetchData, 60000);

        // Clean up the interval when the component unmounts
        return () => {
        clearInterval(interval);
        };
      */
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }


  return (
    <div className="App">
      <div className="navigation-bar">
        <div className="nav-container">
          <div className="nav-holder flex">
            <div className="nav-brand">
              <h3>Crypto watcher</h3>
            </div>
            <div className="nav-search">
              <input type="text" className="search-box" placeholder="Search..." onChange={handleSearch} />
            </div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <Header />
        {getData && getData.filter((currentCoin) => {
          return currentCoin.name.toLowerCase().includes(getSearch.toLowerCase())
        }).map((currentElement) => {
          return (
            <div key={currentElement.id}>
              <Coin
                image={currentElement.image}
                name={currentElement.name}
                currentPrice={currentElement.current_price}
                changeIn={currentElement.price_change_percentage_24h.toFixed(2)}
              />
            </div>
          );
        })
        }
      </div>

    </div>
  );
}

export default App;
