import React from 'react';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    Icon?: any;
    ID?: string;
    Children?: any;
    ButtonText?: string;
    ButtonStyle?: string;
}

const Button: React.FC<ButtonProps> = ({ ID, Icon, Children, ButtonText, ButtonStyle, onClick }) => {
return (
    <div id={ID} onClick={onClick} className={ButtonStyle}> {Icon} {Children} { ButtonText }</div>
)
}

export default React.memo(Button);