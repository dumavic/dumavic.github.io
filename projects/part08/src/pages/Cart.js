import './cart.css';
import jacketImg from '../images/black-jacket.jpg'

function Cart() {
    return(
        <div id="cart-container">
        <section className="cart-items">
        <h1 id="shopping-cart">Shopping Cart</h1>

        {/* individual item */}
        <div className="cart-item">
        {/* cart item info */}
        <div className="cart-item-info">
            {/* image */}
            <div className="cart-item-img">
                <img src={jacketImg} alt="black jacket" />
            </div>

            {/* text info */}
            <div className='cart-item-text'>
                <h2><a href="./jacket.html">Black Jacket</a></h2>
                <p>Size: Large</p>
                <b>$80.00</b> 

            {/* quantity */}
                <div className='cart-item-quantity'>
                <span className="quantity-btn" id="minus-btn">-</span>
                <span id="quantity-count">1</span>
                <span className="quantity-btn" id="plus-btn">+</span>
                </div>

                </div>
                {/* end of  text */}

            </div>
            {/* end of info */}

        </div>
        {/* end of individual item */}

        {/* individual item */}
        <div className="cart-item">
        {/* cart item info */}
        <div className="cart-item-info">

            {/* image */}
            <div className="cart-item-img">
                <img src={jacketImg} alt="black jacket" />
            </div>

            {/* text info */}
            <div className='cart-item-text'>
                <h2><a href="./jacket.html">Black Jacket</a></h2>
                <p>Size: Large</p>
                <b>$80.00</b> 

            {/* quantity */}
                <div className='cart-item-quantity'>
                <span className="quantity-btn" id="minus-btn">-</span>
                <span id="quantity-count">1</span>
                <span className="quantity-btn" id="plus-btn">+</span>
                </div>

                </div>
                {/* end of  text */}

            </div>
            {/* end of info */}

        </div>
        {/* end of individual item */}
        
</section>
        {/* end of cart items */}


{/* total */}
<section id='cart-total'>
        <div>
            <div className='cart-total-top'>
                <p className='order-sum'>
                <h3>Order Summary</h3>
                <h3>2 Item(s)</h3>
                </p>

                <p className='order-cost'>
            <h4>Item(s) Cost</h4>
            <h4>$80.00</h4>
                </p>
                <p className='order-cost'>
            <h4>Shipping Cost</h4>
            <h4>$10.00</h4>
                </p>

                <p className='order-cost'>
            <h4>SUBTOTAL</h4>
            <h4>$90.00</h4>
                </p>  
            </div>

            <div className='cart-total-bottom'>
                <p className='cart-p'>The estimated tax will be confirmed once you added your shipping address in checkout.</p>
            <span className='checkout'>Checkout</span>

            <span className='login'>Login</span>
            <p className='cart-p'>Have an account? Log in to receive reward points!</p>
            </div>
        </div>
    </section>

</div>

    )
}

export default Cart;