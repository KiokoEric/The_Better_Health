import Axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useGetUserID } from "../Hooks/useGetUserID";
import Logo from "../../assets/Header_Logo.webp";
import Button from '../Common/Button/Button';

const Header: React.FC = () => {

    const [ Name, setName ] = useState("")
    const [ Cookie,setCookie ] = useCookies(["auth_token"]);
    const UserID = useGetUserID()

    useEffect(() => {
        
        const FetchName  = async() => {
            await Axios.get(`http://localhost:4000/Users/${UserID}/Name`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((Response) => {
                setName(Response.data.Name)
            })
        } 
    
        FetchName()

    },[UserID])

    const navigate = useNavigate()

    const Logout = () => {
        setCookie("auth_token", "");
        window.localStorage.clear();
        navigate("/");
    }

return (
    <div className='flex items-center justify-between px-2 py-1 shadow-lg sticky text-black'>
        <section>
            <Link to="/" className='flex gap-4 items-center justify-center text-black no-underline'>
                <img src={Logo} alt="" width="45px" />
                <h1 className='font-bold text-3xl'>Better Health</h1>
            </Link>
        </section>
        <section>
            <nav className='flex gap-10 items-center justify-center' >
                <Link to="/" className='text-black no-underline'>
                    Home
                </Link>
                <Link to="/Exercise" className='text-black no-underline'>
                    Exercise
                </Link>
                <Link to="/Nutrition" className='text-black no-underline'>
                    Nutrition
                </Link>
                <Link to="/Fitness_Calculator" className='text-black no-underline'  >
                    Fitness Calculator
                </Link>
                <Link to="/Customise" className='text-black no-underline'>
                    Customise Workout
                </Link>
                <Link to="/MyWorkout" className='text-black no-underline'>
                    My Workout 
                </Link>
                <Link to="/Favourites" className='text-black no-underline sm: hidden'> 
                    Favourites
                </Link>
            </nav>
        </section>
        <section className="flex items-center justify-center gap-2" >
        <Link to="/Favourites" className='' >
            <Button ButtonText='Favourites Recipes' ButtonStyle='bg-lightOrange px-3 py-1 rounded text-base text-white' />
        </Link>
        {
            <Link to="/Registration">
                <Button
                    ButtonText='Sign Up'
                    ButtonStyle='bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded'
                />
            </Link>
            }
            {
            !Cookie.auth_token ?
            (
                <Link to="/Login">
                    <Button
                        ButtonText='Login'
                        ButtonStyle='bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded'
                    />
                </Link>
            ) : 
            (
                <Button
                    ButtonText='Logout'
                    ButtonStyle='bg-black cursor-pointer h-8 text-center text-base text-white px-3 py-1 rounded'
                    onClick={Logout}
                />
            )
        }
            <Link to={`/Profile`}>
                <FaUser size="2rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />
            </Link>
            { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
        </section>
    </div>
)
}

export default Header