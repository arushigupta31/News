import React, { useState, useContext, useEffect } from "react";
import { CategoryData } from "../Dashboard";
// import { Card , Container, Col, Row} from 'react-bootstrap';
// import "bootstrap/dist/css/bootstrap.css";

const CatCard = () => {
  const [data, setData] = useState(null);
  const cdata = useContext(CategoryData);

  useEffect(async () => {
    const url =
      "https://newsapi.org/v2/top-headlines?category=" +
      cdata +
      "&apiKey=6d2ccf7c3c21484dbd059939c2649eda";
    const response = await fetch(url);
    const responseData = await response.json();
    setData(responseData.articles);
  }, [cdata]);

  return (
    <div className={"card-main"}>
      {data &&
        data.map((item) => (
          <div className="card-container">
            <div className="image-container">
              <img
                src={item.urlToImage}
                alt="cardImage"
                className="card-img-top"
              />
            </div>
            <div className="card-title">
              <h4>{item.title}</h4>
            </div>
            <div className="card-desc">
              <p>{item.description}</p>
            </div>
            <div className="footer-content">
              <div className="news-author">{item.author}</div>
              <div>{item.publishedAt}</div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default CatCard;
