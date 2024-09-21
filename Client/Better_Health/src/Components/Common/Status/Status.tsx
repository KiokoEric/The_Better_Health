import React from 'react';

interface StatusProps {
    Label: any;
    Quantity: any;
    StatusStyle: string;
}

const Status: React.FC<StatusProps> = ({ StatusStyle, Label, Quantity }) => {
return (
    <div className={StatusStyle}>
        <li>{Label}</li>
        <li>{Quantity}</li>
    </div>
)
}

export default React.memo(Status);