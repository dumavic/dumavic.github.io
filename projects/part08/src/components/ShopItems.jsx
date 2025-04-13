import { useState } from 'react';
import './shopitems.css';

const ShopItems = (shopItem) => {
    const [selectedSize, setSelectedSize] = useState(null);

      // Handle size click
  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update the selected size
  };

return (
<section className="item-showcase">
    <div className='shop-items'>
    <section className='shop-item'>
    <div className='shop-item-img'>
    <img src={shopItem.img_name} />
    </div>
    <div className="shop-item-info">
        <h2>{shopItem.item_name}</h2>
        <p className='price'>Price: ${shopItem.price}.00</p>
        <p className='shop-pay'>Or 4 interest-free installments of ${shopItem.price / 4}.00 with ShopPay</p>
        <div className="size-selection">
        <p>Size: {selectedSize}</p>
        <div className="size-option">
        <span
                  className={`sizes ${selectedSize === 'XS' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('XS')}
                >
                  XS
                </span>
                <span
                  className={`sizes ${selectedSize === 'S' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('S')}
                >
                  S
                </span>
                <span
                  className={`sizes ${selectedSize === 'M' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('M')}
                >
                  M
                </span>
                <span
                  className={`sizes ${selectedSize === 'L' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('L')}
                >
                  L
                </span>
                <span
                  className={`sizes ${selectedSize === 'XL' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('XL')}
                >
                  XL
                </span>
            </div>
          </div>
<span className="add-to-cart">Add to Cart</span>
    </div>
</section>
    </div>

<div className="item-description">
<h4>Description</h4>
<p>{shopItem.description}</p>
<ul>
    <li>100% Cotton</li>
    <li>Heavyweight</li>
    <li>Adjustable Straps</li>
</ul>
</div>
</section>
  );
}

export default ShopItems;
