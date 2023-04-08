import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemsService from "../../services/ItemsService";
import LoadingScreen from "../loading/loading";
import './style.css'

function ItemDetails() {
  const [item, setItem] = useState(null);
  const { category, itemId } = useParams();  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
        setIsLoading(true);
        const data = await ItemsService.getProductById(category, itemId);
        setItem(data.data);
        setIsLoading(false);
      }
  
      getData();
  }, [itemId, category]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  
  return (
    <div className="item-container">
      <img src={item.photo} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Price: {item.price} грн.</p>
      <p>Sizes: {item.availableSizes}</p>
      <p>Description: {item.fullDescription}</p>
      <button>Add to cart</button>
    </div>
  );
}

export default ItemDetails;
