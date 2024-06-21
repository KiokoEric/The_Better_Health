import React, { ChangeEvent } from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";

interface SearchPageProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    idName: string;
    ContainerStyle: string;
    Heading: string;
    HeadingStyle: string;
    formStyle: string;
    Placeholder: string;
    inputStyle: string;
    Search: string;
    ButtonStyle: string;
    IconStyle: string;
    SearchError: string;
    ErrorStyle: string;
    Text: string;
    Results: string;
}

const SearchPage: React.FC<SearchPageProps> = ({ idName, ContainerStyle, Heading, HeadingStyle, onSubmit, formStyle, Placeholder, inputStyle, Search, onChange, onClick, ButtonStyle, IconStyle,  SearchError, ErrorStyle, Text, Results }) => {
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
        <p>{Results}</p>
    </div>
)
}

export default React.memo(SearchPage)

