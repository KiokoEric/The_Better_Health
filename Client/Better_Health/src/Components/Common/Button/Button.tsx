import React from 'react';

interface ButtonProps {
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    Icon?: string;
    ButtonText: string;
    ButtonStyle: string;
}

const Button: React.FC<ButtonProps> = ({ Icon, ButtonText, ButtonStyle, onClick }) => {
return (
    <div onClick={onClick} className={ButtonStyle}> {Icon} { ButtonText }</div>
)
}

export default React.memo(Button);