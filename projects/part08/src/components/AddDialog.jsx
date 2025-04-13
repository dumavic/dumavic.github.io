import './adddialog.css';
import React, {useState} from 'react';

const AddDialog = (props) => {
    const onSubmit = () => {};

    return (
        <div className='add-item'>
            <div className='modal-content'>
                <div className='modal-container'>
                    <span id='dialog-close'>
                    &times;
                    </span>
                    
                </div>
            </div>
            
        </div>


    )
}

export default AddDialog;