import React from 'react';

interface SelectProps {
    onSearch: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    Search: any;
    children: any;
    SelectStyle: any;
}

const Select: React.FC<SelectProps> = ({ Search, onSearch, SelectStyle, children}) => {
return (
    <select name="" className={SelectStyle} value={Search} onChange={onSearch}>{children}</select>
)
}

export default React.memo(Select);