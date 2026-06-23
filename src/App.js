import { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  console.log(coins);
  return (
    <div>
      <h1>Coin List {loading ? "" : coins.length}</h1>
      {loading ? "loading" : null}
      <ul>
        {coins.map((coin) =>
          <li key={coin.id}>
            <img src={coin.image} alt={coin.name} width="16" />
            {coin.name} ({coin.symbol}) : $ {coin.current_price}
          </li>)}
      </ul>
    </div>
  );
}

export default App;
