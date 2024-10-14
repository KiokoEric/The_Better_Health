import React from 'react';

interface ResultProps {
    image: string;
    Title: string;
    children?: any;
    imageStyle: string;
    TitleStyle: string;
    figureStyle: string;
    Description?: string;
}

const Output: React.FC<ResultProps> = ({ figureStyle, image, imageStyle, TitleStyle, Title, Description, children }) => {
return (
    <figure className={figureStyle} >
        <img src={image} alt="" className={imageStyle} /> 
        <figcaption>
            <h2 className={TitleStyle}>{Title} <span>({Description})</span></h2>
            {children}
        </figcaption>
    </figure>
)
}

export default React.memo(Output)
