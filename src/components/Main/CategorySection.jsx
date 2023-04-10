import React from "react";
import "../../style.css";
import { Link } from "react-router-dom";

function CategorySection({ category, titleTop, titleBottom, data }) {
  return (
    <div className={`cloth--section`} id={category}>
      <div className="title">
        <h1 className="title--block">
          <p className="title--text">{titleTop}</p>
          <hr className="title--line" />
          <p className="title--text bottom--title-text">{titleBottom}</p>
        </h1>
      </div>
      <div className="cards--block">
        {data
          ?.filter((item) => item.category === category)
          .map((item) => (
            <Link to={`/items/${item.category}/${item._id}`} className="card--href" key={item._id}>
              <div key={item._id} className="card">
                <img src={item.photo} className="card--photo" alt="" loading="lazy"/>
                <span className="card--title">{item.name}</span>
                <span className="card--sizes">{item.availableSizes}</span>
                <span className="card--price">{item.price} грн.</span>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategorySection;
