import React from 'react';

interface ResultProps {
    image: string;
    Title: string;
    children?: any;
    Description?: any;
    imageStyle: string;
    TitleStyle: string;
    figureStyle: string;
    DescriptionStyle?: string;
}

const Output: React.FC<ResultProps> = ({ figureStyle, image, imageStyle, TitleStyle, Title, DescriptionStyle, Description, children }) => {
return (
    <figure className={figureStyle} >
        <img src={image} alt="" className={imageStyle} /> 
        <figcaption>
            <h2 className={TitleStyle}>{Title} <span className={DescriptionStyle} >({Description})</span></h2>
            {children}
        </figcaption>
    </figure>
)
}

export default React.memo(Output)
