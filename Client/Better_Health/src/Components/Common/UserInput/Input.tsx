import React from 'react';

interface InputProps {
    ContainerStyle: string;
    Label: string;
    LabelStyle: string,
    Placeholder?: string;
    inputStyle: string;
    error?: string;
}

const Input: React.FC<InputProps> = ({ ContainerStyle, Label, LabelStyle, Placeholder, inputStyle, error }) => {

return (
    <div className={ContainerStyle}>
        <label className={LabelStyle}>{Label}</label>
        <input type="text" placeholder={Placeholder} className={inputStyle} />
        {error && <p className="mb-0.5 mt-0.5 text-center text-red-700">{error}</p>}
    </div>
)
}

export default React.memo(Input)

