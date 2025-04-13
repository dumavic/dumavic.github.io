import './account.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faBox } from '@fortawesome/free-solid-svg-icons';
import Tshirt from '../images/black-jacket.jpg'
import { useEffect, useState } from 'react';

import AddDialog from './AddDialog';
import InventoryItem from './InventoryItem';
import Popup  from './Popup';

const Account = (props) => {
    const [shopItems, setShopItems] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get("https://dumavic.github.io/projects/part6/json/items.json");
            setShopItems(response.data);
            console.log("shop Items", response.data);
          } catch (error) {
            console.error("Failed to fetch items:", error);
          }
        })();
      }, []);

      const addItem = (shopItem) => {
        setShopItems((shopItems) => [...shopItems, shopItem]);
      }
      

    const openAddDialog = () => {
        setShowAddDialog(true);
    } 

    const closeAddDialog = () => {
        setShowAddDialog(false);
    } 


    if(props.name === "inventory") {
        return (
            <section className='account-page' id={props.name}>
                <div className='inventory-top'>
                    <h2>Inventory</h2>
                    <span onClick={openAddDialog}>Add Item</span>
                    {showAddDialog ? (
                        <Popup />
                    ) : "" }
                </div>

                <div className='inventory-bot'>
                    <h2>hi</h2>
                {shopItems.map((shopItem) => {
            const imgSrcName = `https://dumavic.github.io/projects/part6/images/${shopItem.img_name}`;  
            return <InventoryItem key={shopItem.item_id} img_name={imgSrcName} item_name={shopItem.item_name} price={shopItem.price} description={shopItem.description} collectionType={shopItem.collectionType}/>
        })}
                    {/* <div className='inventory'>
                        <div className='inventory-item'>
                            <div className='inventory-item-info'>
                                <h4>Item: {props.item_name}</h4>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        )
    }

    if (props.name === "my-orders") {
        return (
            <section className='account-page' id={props.name}>
                <div className='my-orders-top'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160l208 0 0-128L93.7 32C75.5 32 58.9 42.3 50.7 58.5zM240 160l208 0L397.3 58.5C389.1 42.3 372.5 32 354.3 32L240 32l0 128zm208 32L0 192 0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224z"/></svg>
                <h2>MY ORDERS</h2>
                </div>

        <div className='my-orders-bot'>

        <div className='orders'>
            <div className='order'>
            <div className='order-info'>
                <h4>ORDER STATUS</h4>
                <p className='order-status'>SHIPPED</p>
                <p className='delivery-time'>Estimated delivery Thursday, November 10th 2025</p>

                <div className='order-img'>
                <img src={Tshirt} />
                </div>
                <div className='order-num'>
                    <h4>Order Number: #48349</h4>
                </div>
            </div>

            <div className='track-order-btn'>
            <span>TRACK ORDER</span>
            </div>

            </div>
    </div>

    </div>
            </section>
        );
    }

    if (props.name === "address-book") {
        return (
            <section className='account-page' id={props.name}>
                <div className='address-book-top'>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <h2>ADDRESS BOOK</h2>
                    <span>ADD NEW ADDRESS</span>
                </div>

        <div className='address-book-bot'>

        <div className='addresses'>
        <div className='address'>
        <div className='address-info'>
        <p className='address-name'>Victor Nguyen</p>
        <p className='address-line-one'></p>
        <p className='card-name'>Victor's Card</p>
        </div>
        <div className='delete-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>

        </div>

        <div className='card'>
            <div className='card-img'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/></svg>        
            </div>
        <div className='card-info'>
        <p className='card-type'>VISA Debit Ending in 6415</p>
        <p className='expire'>Exp: 08/21</p>
        <p className='card-name'>Victor's 2nd Card</p>
        </div>
        <div className='delete-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>

        </div>

        </div>

        </div>

            </section>
        );
    }

    if (props.name === "payment-methods") {
        return (
            <section className='account-page' id={props.name}>
                <div className='payment-methods-top'>
                    <FontAwesomeIcon icon={faCreditCard} />
                    <h2>PAYMENT METHODS</h2>
                    <span>ADD NEW PAYMENT METHOD</span>
                </div>

        <div className='payment-methods-bot'>

        <div className='cards'>
        <div className='card'>
        <div className='card-img'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/></svg>        
            </div>
        <div className='card-info'>
        <p className='card-type'>VISA Debit Ending in 9322</p>
        <p className='expire'>Exp: 08/21</p>
        <p className='card-name'>Victor's Card</p>
        </div>
        <div className='delete-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>

        </div>

        <div className='card'>
            <div className='card-img'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512"><path d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2 .3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4 .2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2 .2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2 .1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"/></svg>        
            </div>
        <div className='card-info'>
        <p className='card-type'>VISA Debit Ending in 6415</p>
        <p className='expire'>Exp: 08/21</p>
        <p className='card-name'>Victor's 2nd Card</p>
        </div>
        <div className='delete-btn'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>

        </div>

        </div>

        </div>

            </section>
        );
    }

    return null;
}

export default Account;