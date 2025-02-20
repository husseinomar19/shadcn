"use client"
import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';


const QrCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text to generate QR code"
      />
      <QRCodeCanvas value={inputValue} />
    </div>
  );
};

export default QrCodeGenerator;