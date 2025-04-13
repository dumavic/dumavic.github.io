import './shopitem.css';

const ShopItem = (shopItem) => {

return (
<section className='shop-item'>
    <div className='shop-item-img'>
<img src={shopItem.img_name} />
    </div>
    <div className='shop-item-info'>
        <h4>{shopItem.item_name}</h4>
        <p>${shopItem.price}.00</p>
    </div>
</section>
  );
}

export default ShopItem;
