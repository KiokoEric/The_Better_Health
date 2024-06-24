import React from 'react';

interface ResultProps {
    figureStyle: string;
    image: string;
    imageStyle: string;
    TitleStyle: string;
    Title: string;
    Description?: string;
    children?: any;
}

const Output: React.FC<ResultProps> = ({ figureStyle, image, imageStyle, TitleStyle, Title, Description, children }) => {
return (
    <figure className={figureStyle} >
        <img src={image} alt="" className={imageStyle} /> 
        <figcaption>
            <h2 className={TitleStyle}>{Title} (<span>{Description}</span>)</h2>
            {children}
        </figcaption>
    </figure>
)
}

export default React.memo(Output)
