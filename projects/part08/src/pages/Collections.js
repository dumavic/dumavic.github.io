import React, {useState, useEffect} from 'react';
import './collections.css'
import ShopItem from '../components/ShopItem';
import axios from 'axios';
import { Outlet, Link } from 'react-router-dom';

const Collections = () => {
    const [shopItems, setShopItems] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "https://dumavic.github.io/projects/part6/json/items.json"
            );
            setShopItems(response.data);
        })();
    }, []);

    return(
        <div>
            <section id="collections-page-mid">
    <div className="filter">
        <p>FILTER:</p>
        <div className="dropdown">
            <span className="dropbtn">By Price</span>
            <div className="dropdown-content">
            <a href="#">Lowest to Highest</a>
            <a href="#">Highest to Lowest</a>
            </div>
          </div>
        </div>
        
        <div className="shop-type-tag">
          <b>Newest Collection: BLACK</b>
      </div>

    <div id="shop-top-row">
        {shopItems.map((shopItem) => {
            const imgSrcName = `https://dumavic.github.io/projects/part6/images/${shopItem.img_name}`;
            if(shopItem.collectionType === "black") {
                return <Link to={`/pages/${shopItem.item_page}`}>
                <ShopItem img_name={imgSrcName} item_name={shopItem.item_name} price={shopItem.price} />
                </Link>
            }        
            })}
    </div>
</section>

        </div>
    )
}

export default Collections;