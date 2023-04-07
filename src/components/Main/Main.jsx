import React, { useContext, useState, useEffect } from "react";
import "../../style.css";
import DATA from "../jsons/Data.json";
import { Context } from "../../index";
import LoadingScreen from "../loading/loading";

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { store } = useContext(Context);  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true);
      await store.checkAuth();
      setIsLoading(false);
      console.log(store.isAuthenticated);
      if (store.isAuthenticated) {
        setIsLoggedIn(true);
      }
    };
    checkAuthentication();
  }, [store]);

  if (!store.isAuthenticated) {
    console.log("Авторизуйтеся для перегляду контенту")
  }

  return (
    <div className={`main ${isLoggedIn ? "" : "main blurred--div"}`}>
      {isLoading && <LoadingScreen />}
      <div className="cloth--section" id="topCloth">
        <div className="title">
          <h1 className="title--block">
            <p className="title--text">{DATA[0].topCloth[0].sectionTitleTop}</p>
            <hr className="title--line" />
            <p className="title--text bottom--title-text">
              {DATA[0].topCloth[0].sectionTitleBottom}
            </p>
          </h1>
        </div>
        <div className="cards--block">
          {DATA[0].topCloth[0].elements &&
            DATA[0].topCloth[0].elements.map((item) => (
              <a href="/" className="card--href">
                <div key={item.id} className="card">
                  <img src={item.img} className="card--photo" alt="" />
                  <span className="card--title">{item.title}</span>
                  <span className="card--sizes">{item.sizes}</span>
                  <span className="card--price">{item.price} грн.</span>
                </div>
              </a>
            ))}
        </div>
      </div>
      <div className="cloth--section" id="trousers">
        <div className="title">
          <h1 className="title--block">
            <p className="title--text">{DATA[1].trousers[0].sectionTitleTop}</p>
            <hr className="title--line" />
            <p className="title--text bottom--title-text">
              {DATA[1].trousers[0].sectionTitleBottom}
            </p>
          </h1>
        </div>
        <div className="cards--block">
          {DATA[1].trousers[0].elements &&
            DATA[1].trousers[0].elements.map((item) => (
              <a href="/" className="card--href">
                <div key={item.id} className="card">
                  <img src={item.img} className="card--photo" alt="" />
                  <span className="card--title">{item.title}</span>
                  <span className="card--sizes">{item.sizes}</span>
                  <span className="card--price">{item.price} грн.</span>
                </div>
              </a>
            ))}
        </div>
      </div>
      <div className="cloth--section" id="shoes">
        <div className="title">
          <h1 className="title--block">
            <p className="title--text">{DATA[2].shoes[0].sectionTitle}</p>
            <hr className="title--line shoose--line" />
          </h1>
        </div>
        <div className="cards--block">
          {DATA[2].shoes[0].elements &&
            DATA[2].shoes[0].elements.map((item) => (
              <a href="/" className="card--href">
                <div key={item.id} className="card">
                  <img src={item.img} className="card--photo" alt="" />
                  <span className="card--title">{item.title}</span>
                  <span className="card--sizes">{item.sizes}</span>
                  <span className="card--price">{item.price} грн.</span>
                </div>
              </a>
            ))}
        </div>
      </div>
      <div className="cloth--section" id="accessories">
        <div className="title">
          <h1 className="title--block">
            <p className="title--text">{DATA[3].accessories[0].sectionTitle}</p>
            <hr className="title--line accessories--line" />
          </h1>
        </div>
        <div className="cards--block">
          {DATA[3].accessories[0].elements &&
            DATA[3].accessories[0].elements.map((item) => (
              <a href="/" className="card--href">
                <div key={item.id} className="card">
                  <img src={item.img} className="card--photo" alt="" />
                  <span className="card--title">{item.title}</span>
                  <span className="card--sizes">{item.sizes}</span>
                  <span className="card--price">{item.price} грн.</span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
