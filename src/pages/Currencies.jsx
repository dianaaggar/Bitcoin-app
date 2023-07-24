import React from "react";
import { Link } from "react-router-dom";

function Currencies(props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Dogecoin", symbol: "DOGE" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];

  return (
    <div className="currencies">
      {currencies.map((coin, i) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/price/${symbol}`} key={i}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Currencies;
