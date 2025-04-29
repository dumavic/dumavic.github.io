import './shopitem.css';

const InventoryItem = (shopItem) => {

return (
<section className='inventory-item'>
    <div className='inventory-item-img'>
<img src={shopItem.img_name} />
    </div>
    <div className='inventory-item-info'>
        <h4>{shopItem.item_name}</h4>
        <p>${shopItem.price}.00</p>
        <p>Description:</p>
        <p>{shopItem.description}</p>
        <p>Collection Type: {shopItem.collectionType}</p> 
        <header className='columnns'>
            <section id="change-buttons">
                <a href='#'>
                    &#9998;
                </a>
                <a href='#'>
                    &#x2715;
                </a>
            </section>
        </header>
    </div>
</section>
  );
}

export default InventoryItem;
