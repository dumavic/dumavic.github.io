import './popup.css';
import React, {useState} from 'react';

const Popup = (props) => {

    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState({});

    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("sending...")

        const formData = new FormData(event.target);
        const response = await fetch("https://react-backend-dbmn.onrender.com/api/items", {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
            setResult("item successfully added");
            event.target.reset();
            props.addItem(await response.json());
            props.closeAddDialog();
        }
        else {
            console.log("ERROR: ADDING ITEM",response);
            setResult(response.message);
        }
    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value } ));
    }


    return (
        <div className='form-container'>
            <span id="dialog-close" 
            className='close-btn' 
            onClick={props.closeAddDialog}>
                &times;
            </span>
            <form id='add-item-form' onSubmit={onSubmit}>
                <p>
                    <label htmlFor="item_name">Item Name</label>
                    <input type="text" id="item_name" name="item_name" 
                    value={inputs.item_name || ""} 
                    onChange={handleChange}
                    required />
                </p>

                <p>
                    <label htmlFor='price'>Price</label>
                    <input type="number" id="price" name="price" 
                    value={inputs.price || ""}
                    onChange={handleChange}
                    required/>
                </p>

                <p id='img-prev-section'>
                    <img
                    id='img-prev'
                    src={inputs.img_name != null ? URL.createObjectURL(inputs.img_name) : null}
                    alt=""
                    />
                </p>

                <p id="img-upload">
                    <label htmlFor="img_name">Upload Image:</label>
                    <input 
                    type="file" 
                    id="img_name" 
                    name="img_name" // The name must match the one used in backend
                    onChange={handleImageChange} 
                    accept="image/*" 
                    />
                </p>

                <p>
                    <label htmlFor='description'>Description</label>
                    <input type="text" id='description' name="description" 
                    value={inputs.description || ""}
                    onChange={handleChange}
                    required />
                </p>

                <p>
                    <label htmlFor='collectionType'>Collection Type</label>
                    <input type="text" id="collectionType" name="collectionType" 
                    value={inputs.collectionType || ""} 
                    onChange={handleChange}
                     />
                </p>

                <p>
                    <label htmlFor='best_seller'>Best Seller</label>
                    <input type="checkbox" id="best_seller" name="best_seller" 
                    value={inputs.best_seller || ""} 
                    onChange={handleChange}
                    />
                </p>

                <p>
                    <label htmlFor='newest_arrival'>Newest Arrival</label>
                    <input type="checkbox" id="newest_arrival" name="newest_arrival" 
                    value={inputs.newest_arrival || ""} 
                    onChange={handleChange}
                    />
                </p>

                <p>
                    <button type="submit" onClick={props.addItem}>Submit</button>
                </p>
            </form>
        </div>
    )

}


export default Popup;