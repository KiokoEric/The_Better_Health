import React, { ChangeEvent } from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

interface SearchPageProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    Text: string;
    idName: string;
    Search: string;
    Heading: string;
    formStyle: string;
    IconStyle: string;
    ErrorStyle: string;
    inputStyle: string;
    Placeholder: string;
    ButtonStyle: string;
    SearchError: string;
    HeadingStyle: string;
    ContainerStyle: string;
}

const SearchPage: React.FC<SearchPageProps> = ({ idName, ContainerStyle, Heading, HeadingStyle, onSubmit, formStyle, Placeholder, inputStyle, Search, onChange, onClick, ButtonStyle, IconStyle,  SearchError, ErrorStyle, Text}) => {
return (
    <div id={idName} className={ContainerStyle} >
        <h1 className={HeadingStyle}>{Heading}</h1>
        <form onSubmit={onSubmit} className={formStyle}>
            <GiKnifeFork size="1.8rem" color="black" />
            <input type="text" placeholder={Placeholder} className={inputStyle} value={Search} onChange={onChange} />
            <button onClick={onClick} className={ButtonStyle}><IoSearchSharp size="1.8rem" color="white" className={IconStyle} /></button>
        </form> 
        <span className={ErrorStyle}>{SearchError}</span>
        <p>{Text}</p>
    </div>
)
}

export default React.memo(SearchPage)