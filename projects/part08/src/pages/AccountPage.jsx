import './accountpage.css';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import pfpImg from '../images/circle-user-solid.svg'
import Account from '../components/Account';


const AccountPage = () => {

    const [selectedItem, setSelectedItem] = useState("Inventory");
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        const nav = document.getElementById("acc-toggle");
        nav.classList.toggle("show-hide");
        setIsMenuOpen(prev => !prev);
    };

    const handleMenuClick = (item) => {
        setSelectedItem(item);
        setIsMenuOpen(false);
        const nav = document.getElementById("acc-toggle");
        nav.classList.remove("show-hide");
    };

    return (
        <div id='acc-container'>
            <h1 id='my-acc'>My Account</h1>
        <div className='acc-page'>

            <section className='profile'>

        <div className='profile-info'>
            <div className="profile-img">
                <img src={pfpImg} alt="pfp" />
            </div>

            <div className='profile-text'>
                <span>
            <p>Hello,</p>
                <h4>Victor</h4>
                </span>
            </div>
        </div>

        <section id="acc-mobile">
            <div className="selected-mobile" onClick={toggleMenu}>
                <h3>
                {selectedItem}
                </h3>
            </div>
        <nav className="acc-nav">
            <ul id="acc-toggle" className={isMenuOpen ? "show-hide" : ""}>
  {[
    "Inventory",
    "My Orders",
    "Address Book",
    "Payment Methods",
    "Change Password",
    "Sign Out"
  ]
//   .filter((item) => item !== selectedItem)
  .map((item) => (
    <li
      key={item}
      className={`${item.toLowerCase().replace(" ", "-")}`}
      onClick={() => handleMenuClick(item)}
    >
      {item}
    </li>
  ))}
    </ul>
        </nav>
        </section>

            <nav className='acc-nav' id="navigation-acc">
            <ul className='acc-options' id='acc-toggle'>
            
    <li 
        className={`invetory ${selectedItem === "Inventory" ? 'selected' : ''}`}
        onClick={() => setSelectedItem("Inventory")}
    >
        Inventory
    </li>
    <li 
        className={`my-orders ${selectedItem === "My Orders" ? 'selected' : ''}`}
        onClick={() => setSelectedItem("My Orders")}
    >
        My Orders
    </li>
    <li 
        className={`address-book ${selectedItem === "Address Book" ? 'selected' : ''}`}
        onClick={() => setSelectedItem("Address Book")}
    >
        Address Book
    </li>
    <li
  className={`payment-methods ${selectedItem === "Payment Methods" ? 'selected' : ''}`}
  onClick={() => setSelectedItem("Payment Methods")}
>
  Payment Methods
</li>
    <li 
        className={`change-password ${selectedItem === "Change Password" ? 'selected' : ''}`}
        onClick={() => setSelectedItem("Change Password")}
    >
        Change Password
    </li>
    <li 
        className={`sign-out ${selectedItem === "Sign Out" ? 'selected' : ''}`}
        onClick={() => setSelectedItem("Sign Out")}
    >
        Sign Out
    </li>
</ul>
        </nav>
            </section>

            <section className='acc-page-view'>
            {selectedItem === "Inventory" && <Account name="inventory" /> }
            {selectedItem === "My Orders" && <Account name="my-orders" />}
            {selectedItem === "Payment Methods" && <Account name="payment-methods" />}
            </section>

            </div>

        </div>
    )
}


export default AccountPage;