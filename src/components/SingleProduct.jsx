import { Navbar } from "./Navbar";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SingleProductList = () => {
  const { productId } = useParams();
  const [data, setData] = useState(null);
  // make a request to get the details

  useEffect(() => {
    axios({
      method: "get",
      url: `https://movie-fake-server.herokuapp.com/products/${productId}`,
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <h2>Single Product Page</h2>
      {data && (
        <>
          <h2>{data.brand}</h2>
          <img src={data.image} />
          <p>{data.price}</p>
        </>
      )}
    </>
  );
};
