import React from 'react';
import './qr.css';

function GenerateQRButton(props) {
    return (
        <div class="qr">
            <button className="generate-qr-button" onClick={props.onClick}>
                Generate QR
            </button>
        </div>
    );
}

export default GenerateQRButton;
