import './shop.css'
import ShopItem from '../components/ShopItem';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Outlet, Link } from 'react-router-dom';


function Shop() {

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
    <section id="shop-page-mid">
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
    <section id="item-container">

        <div className="shop-type-tag">
            <b>Best Sellers:</b>
        </div>
        <div id="shop-items-top">
        {shopItems.map((shopItem) => {
            const imgSrcName = `https://dumavic.github.io/projects/part6/images/${shopItem.img_name}`;
            if(shopItem.best_seller) {
                return <Link to={`/pages/${shopItem.item_page}`}>
                 <ShopItem key={shopItem.item_id} img_name={imgSrcName} item_name={shopItem.item_name} price={shopItem.price} />
                 </Link>
            }
        })}
        </div>

        <div className="shop-type-tag">
            <b>Newest Arrvials:</b>
        </div>
        <div id="shop-items-bot">
        {shopItems.map((shopItem) => {
                const imgSrcName = `https://dumavic.github.io/projects/part6/images/${shopItem.img_name}`;

                if(shopItem.newest_arrival) {
                    return <Link to={`/pages/${shopItem.item_page}`}>
                    <ShopItem key={shopItem.item_id} img_name={imgSrcName} item_name={shopItem.item_name} price={shopItem.price} />
                    </Link>
                }
        })}
        </div>

    </section>
</section>
    )
}

export default Shop;