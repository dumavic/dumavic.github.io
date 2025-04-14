import React, { useState } from 'react';
import './popup.css';

const PaymentPop = ({ onClose, onAdd }, props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState({});
    const [formData, setFormData] = useState({
        payment_type: '',
        card_number: '',
        card_holder_name: '',
        exp: '',
    });


    const onSubmit = async (event) => {
        event.preventDefault()
        setResult("sending...")

        const formData = new FormData(event.target);

        const response = await fetch("http://localhost:3001/api/payment_methods", {
            method: "POST",
            body: formData,
        });

        if (response.status === 200) {
            setResult("item successfully added");
            event.target.reset();
            props.closeDialog();
        }
        else {
            console.log("ERROR: ADDING ITEM", response);
            setResult(response.message);
        }

    };

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData);
        onClose();
    };

    return (
        <div className="form-container" id="popup-overlay">
            <div className="popup">
                <h3>Add Payment Method</h3>
                <form id='add-payment-form' onSubmit={handleSubmit}>
                    <p>
                        <label htmlFor="payment_type">Payment Type: </label>
                        <select
                            id="payment_type"
                            name="payment_type"
                            value={inputs.payment_type || ""}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select</option>
                            <option value="visa">Visa</option>
                            <option value="mastercard">MasterCard</option>
                            <option value="amex">Amex</option>
                        </select>
                    </p>

                    <p>
                        <label htmlFor="card_number">Card Number: </label>
                        <input
                            type="text"
                            id="card_number"
                            name="card_number"
                            maxLength="16"
                            value={inputs.card_number || ""}
                            onChange={handleChange}
                            required
                        />
                    </p>

                    <p>
                        <label htmlFor="card_holder_name">Card Holder Name: </label>
                        <input
                            type="text"
                            id="card_holder_name"
                            name="card_holder_name"
                            value={inputs.card_holder_name || ""}
                            onChange={handleChange}
                            required
                        />
                    </p>

                    <p>
                        <label htmlFor="exp">Expiration Date: </label>
                        <input
                            type="text"
                            id="exp"
                            name="exp"
                            placeholder="MM/YY"
                            value={inputs.exp || ""}
                            onChange={handleChange}
                            required
                        />
                    </p>

                    <p>
                        <button type="submit" onSubmit={onSubmit} >Add</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default PaymentPop;
