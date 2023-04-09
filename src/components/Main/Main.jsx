import React, { useState, useEffect } from "react";
import "../../style.css";
import LoadingScreen from "../loading/loading";
import ItemsService from "../../services/ItemsService";
import CategorySection from "./CategorySection";

function Main() {
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  //const { store } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    //const checkAuthentication = async () => {
    //await store.checkAuth();
    // console.log(store.isAuthenticated);
    //  if (store.isAuthenticated) {
    //   setIsLoggedIn(true);
    //} else {
    //    console.log("Авторизуйтеся");
    //  }
    // };
    setIsLoading(true);
    //checkAuthentication();
    getData();
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData() {
    const newData = ItemsService.getAllProducts();
    setData((await newData).data);
    console.log(data);
  }

  return (
    <div className="main">
      {isLoading && <LoadingScreen />}

      <CategorySection
        category="outerwears"
        titleTop="Верхній"
        titleBottom="одяг"
        data={data}
      />

      <CategorySection
        category="underwear"
        titleTop="Нижній"
        titleBottom="одяг"
        data={data}
      />

      <CategorySection
        category="footwear"
        titleTop="Взуття"
        titleBottom=""
        data={data}
      />
      <CategorySection
        category="accessory"
        titleTop="Аксесуари"
        titleBottom=""
        data={data}
      />
      <div className="space">
        
      </div>
    </div>
  );
}

export default Main;
