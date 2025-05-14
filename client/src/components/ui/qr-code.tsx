import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  value: string;
  size?: number;
  level?: 'L' | 'M' | 'Q' | 'H';
}

const QRCode: React.FC<QRCodeProps> = ({ 
  value, 
  size = 128, 
  level = 'M' 
}) => {
  return (
    <QRCodeSVG
      value={value}
      size={size}
      level={level}
      fgColor="#000000"
      bgColor="#FFFFFF"
    />
  );
};

export default QRCode;
