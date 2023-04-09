import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from 'react-use-cart';
import ItemsService from "../../services/ItemsService";
import LoadingScreen from "../loading/loading";
import '../../style.css'

function ItemDetails() {
  const [item, setItem] = useState(null);
  const { category, itemId } = useParams();  
  const [isLoading, setIsLoading] = useState(true);
  const { addItem } = useCart();

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

  const handleAddToCart = () => {
    console.log(item)
    addItem({
      id: item._id,
      name: item.name,
      price: item.price,
      image: item.photo,
      description: item.shortDescription,
    });
  };
  
  return (
    <div className="item-container">
      <div className="main--info">
        <div className="main--info--photo">
          <img className="photo--info" src={item.photo} alt={item.name} />
        </div>
        <div className="order--info">
          <h2>{item.name}</h2>
          <p className="card--info--price">{item.price} грн.</p>
          <hr />
          <div>
            <p className="card--info--sizes--title">Розміри</p>
            <p className="card--info--sizes">{item.availableSizes}</p>
          </div>
          <button className="card--info--button" onClick={handleAddToCart}>Додати в корзину</button>
        </div>
      </div>
      <div className="description--info">
        <p className="description--info--title">Опис</p>
        <p className="description--info--text">{item.fullDescription}</p>
      </div>
    </div>
  );
}

export default ItemDetails;
