import React, { useState, useEffect } from "react";
import "./Feature.css";
import { FiArrowUpRight, FiArrowDown, FiArrowDownRight } from "react-icons/fi";
import axios from "axios";

const Feature = () => {
  const [data, setData] = useState(null);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [""]);

  // IF statement is when the Api fails me again, it will just block it off

  if (!data) return null;

  console.log(data);

  return (
    <div className="feature" id="feature">
      <div className="container">

        {/* Left Side*/}
        <div className="left">
          <h2> Explore crypto currencies like Bitcoin, Solana and Ethereum</h2>
          <p> See all our supported currencies! </p>
          <button className="btn"> See it all</button>
        </div>

        {/* Right Side*/}
        <div className="right">
          <div className="card">
            <div className="top">
              <img src={data[0].image} alt="" />
            </div>
            <div>
              <h5>{data[0].name}</h5>
              <p>${data[0].current_price.toLocaleString()}</p>
            </div>

            {data[0].price_change_percentage_24h < 0 ? (
              <span className="red">
              
                <FiArrowDownRight className="icon"/>
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[0].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={data[1].image} alt="" />
            </div>
            <div>
              <h5>{data[1].name}</h5>
              <p>${data[1].current_price.toLocaleString()}</p>
            </div>

            {data[1].price_change_percentage_24h < 1 ? (
              <span className="red">
            
                <FiArrowDownRight className="icon"/>
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[1].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={data[2].image} alt="" />
            </div>
            <div>
              <h5>{data[2].name}</h5>
              <p>${data[2].current_price.toLocaleString()}</p>
            </div>

            {data[2].price_change_percentage_24h < 2 ? (
              <span className="red">
                {" "}
                <FiArrowDownRight className="icon"/>
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[2].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={data[3].image} alt="" />
            </div>
            <div>
              <h5>{data[3].name}</h5>
              <p>${data[3].current_price.toLocaleString()}</p>
            </div>

            {data[3].price_change_percentage_24h < 3 ? (
              <span className="red">
                {" "}
                <FiArrowDownRight className="icon" />
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight  className="icon"/>
                {data[3].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={data[4].image} alt="" />
            </div>
            <div>
              <h5>{data[4].name}</h5>
              <p>${data[4].current_price.toLocaleString()}</p>
            </div>

            {data[4].price_change_percentage_24h < 4 ? (
              <span className="red">
                {" "}
                <FiArrowDownRight className="icon"/>
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon"/>
                {data[4].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
          <div className="card">
            <div className="top">
              <img src={data[5].image} alt="" />
            </div>
            <div>
              <h5>{data[5].name}</h5>
              <p>${data[5].current_price.toLocaleString()}</p>
            </div>

            {data[5].price_change_percentage_24h < 5 ? (
              <span className="red">
                {" "}
                <FiArrowDownRight className="icon"/>
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            ) : (
              <span className="green">
                <FiArrowUpRight className="icon" />
                {data[5].price_change_percentage_24h.toFixed(2)}%
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
