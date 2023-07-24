import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Price(props) {
  const apiKey = "5B225116-3EB0-4F3C-893A-218BD8EDE2CD";
  
  // Grabbing the Currency symbol from the URL Params
  const params = useParams();
  const symbol = params.symbol;
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null);

  const getCoin = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (e) {
      console.error(e);
    }
  }, [url]);

  useEffect(() => {
    const fetchCoinData = async () => {
      await getCoin();
    };
    fetchCoinData();
  }, [getCoin]);

  const loaded = () => {
    return (
      <div>
        <h1>
          {coin && coin.asset_id_base}/{coin && coin.asset_id_quote}
        </h1>
        <h2>{coin && coin.rate}</h2>
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return coin && coin.rate ? loaded() : loading();
}

export default Price;
