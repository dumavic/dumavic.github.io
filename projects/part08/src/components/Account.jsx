import './account.css';
import axios from 'axios';
import Tshirt from '../images/black-jacket.jpg'
import { useEffect, useState } from 'react';
import accountData from '../json/accounts.json';
import PaymentPop from './PaymentPop';

import AddDialog from './AddDialog';
import InventoryItem from './InventoryItem';
import Popup  from './Popup';

const Account = (props) => {
    const [shopItems, setShopItems] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const [showPopup, setShowPopup] = useState(false);
    const [accounts, setAccounts] = useState([]);
    const [paymentMethods, setPaymentMethods] = useState([]);

    const handleAddPayment = (newMethod) => {
    setPaymentMethods([...paymentMethods, newMethod]);
    };

    useEffect(() => {
        (async () => {
          try {
            const response = await axios.get("http://localhost:3001/api/payment_methods");

            const responseItem = await axios.get("https://react-backend-dbmn.onrender.com/api/items");

            setShopItems(responseItem.data);
            setPaymentMethods(response.data);

            console.log(responseItem.data, "response");
          } catch (error) {
            console.error("Error fetching payment methods:", error.message || error);
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
                        <Popup closeAddDialog={closeAddDialog} addItem={addItem} props={shopItems} />
                    ) : "" }
                </div>

                <div className='inventory-bot'>
                    <div className='inventory-items'>
                {shopItems.map((shopItem) => {
            const imgSrcName = `https://dumavic.github.io/projects/part6/images/${shopItem.img_name}`;  
            return <InventoryItem key={shopItem.item_id} img_name={imgSrcName} item_name={shopItem.item_name} price={shopItem.price} description={shopItem.description} collectionType={shopItem.collectionType} addItem={addItem}/>
        })}
                    </div>
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

        </div>

        </div>

            </section>
        );
    }

    if (props.name === "payment-methods") {
        return (
            <section className='account-page' id={props.name}>
                <div className='payment-methods-top'>
                    <h2>PAYMENT METHODS</h2>
                    <span onClick={() => setShowPopup(true)}>ADD NEW PAYMENT METHOD</span>
                    
                    {showPopup && (
                    <PaymentPop onClose={() => setShowPopup(false)} onAdd={handleAddPayment} props={paymentMethods} />
                    )}
                </div>

                <div className='payment-methods-bot'>
                <div className='cards'>
                    {paymentMethods.map((method, index) => (
                        <div className='card' key={index}>
                            <div className='card-img'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 576 512">
                                    <path d="M470.1 231.3s7.6 37.2..."/>
                                </svg>
                            </div>
                            <div className='card-info'>
                                {method.payment_type !== "N/A" && (
                                <p className='card-type'>
                                {method.payment_type.toUpperCase()} Ending in {method.card_number.slice(-4)}
                                </p>
                                )}
                                <p className='expire'>Exp: {method.exp}</p>
                                <p className='card-name'>{method.card_holder_name}</p>
                            </div>
                            <div className='delete-btn'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M135.2 17.7L128 32..."/>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            </section>
        );
    }

    return null;
}

export default Account;