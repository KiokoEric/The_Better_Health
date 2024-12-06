import axios from "axios";
import { FaUser } from "react-icons/fa6";
import { useCookies } from "react-cookie";
import Button from '../Common/Button/Button';
import { useNavigate } from "react-router-dom";
import { IoIosBookmark } from "react-icons/io";
import Logo from "../../assets/Header_Logo.webp";
import Navigate from "../Common/Navigate/Navigate";
import React, { useEffect, useState } from 'react';
import { useGetUserID } from "../Hooks/useGetUserID";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {

    const UserID = useGetUserID()
    const navigate = useNavigate()
    const [ Cookie,setCookie ] = useCookies(["auth_token"]);

    // USESTATE HOOK

    const [ Name, setName ] = useState<string>("")
    const [ExtendNavbar,setExtendNavbar ] = useState<boolean>(true) 

    // OPENING AND CLOSING OF THE MOBILE MENU

    const toggleMenu = () => {
        setExtendNavbar(!ExtendNavbar);
    };

    // RECEIVING THE NAME OF THE USER

    useEffect(() => {
        
        const FetchName  = async() => {
            await axios.get(`https://better-health-server.onrender.com/Users/${UserID}/Name`, {
            headers: { authorization: Cookie.auth_token },
            }) 
            .then((Response) => {
                setName(Response.data.Name)
            })
        } 
    
        FetchName()

    },[UserID])

    // LOGGING OUT OF ONE'S ACCOUNT

    const Logout = () => {
        setCookie("auth_token", "");
        window.localStorage.clear();
        navigate("/");
        window.location.reload();
    }

return (
    <div className='flex items-center justify-between px-2 py-1 shadow-lg sticky text-black'>
        <section>
            <Navigate
                Navigation="/Home"
                children={<img src={Logo} alt="" width="45px" />}
                NavigateStyle="flex gap-2 font-bold items-center justify-center text-black text-2xl no-underline sm:text-3xl"
                NavigateText="Better Health"
            />
        </section>
        {/* NAVIGATION LINKS (HIDDEN ON MOBILE)  */}
        <nav className='hidden xl:flex xl:gap-10 xl:items-center xl:justify-center'>
            <Navigate 
                Navigation='/Home'
                NavigateStyle="text-black no-underline hover:text-Blue"
                NavigateText="Home"
            />
            <Navigate 
                Navigation='/Exercise'
                NavigateStyle="text-black no-underline hover:text-Blue"
                NavigateText="Exercise"
            />
            <Navigate 
                Navigation='/Nutrition'
                NavigateStyle="text-black no-underline hover:text-Blue"
                NavigateText="Nutrition"
            />
            <Navigate 
                Navigation='/Fitness_Calculator'
                NavigateStyle="text-black no-underline hover:text-Blue"
                NavigateText="Fitness Calculator"
            />
            <Navigate 
                Navigation='/Customise'
                NavigateStyle="text-black no-underline hover:text-Blue"
                NavigateText="Customise Workout"
            />
            <Navigate 
                Navigation='/MyWorkout'
                NavigateStyle="text-black no-underline hover:text-Blue"
                NavigateText="My Workout"
            />
        </nav>
        <section className="hidden xl:flex xl:items-center xl:justify-center xl:gap-2">
        <Navigate
            Navigation="/Favourites"
            children={<IoIosBookmark size="1.2rem" />} 
            NavigateStyle="bg-Blue flex flex-row items-center justify-center gap-2 px-2 py-1 rounded-sm text-base text-white hover:bg-black"
            NavigateText="Favourite Exercises"
        />
        { !UserID ?
            <Navigate
                Navigation="/Registration"
                NavigateStyle="bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded"
                NavigateText="Sign Up"
            /> : null
        }
        {
        !Cookie.auth_token ?
        (
            <Navigate
                Navigation="/"
                NavigateStyle="bg-black cursor-pointer text-center text-base text-white px-5 py-1 rounded"
                NavigateText="Login"
            />
        ) : 
        (
        <Button
            ButtonText='Logout'
            ButtonStyle='bg-black cursor-pointer h-8 text-center text-base text-white px-3 py-1 rounded-sm'
            onClick={Logout}
        />
        )
        }
    {
    UserID ? 
        <Navigate
            ID='ProfileIcon'
            Navigation={`/Profile/${UserID}`}
            children={<FaUser size="2rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />}
        /> : null
}
    
    { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
</section>
<div className="xl:hidden flex items-center gap-3 pb-0.5">
    {
    UserID ?
        <Navigate
            ID='ProfileIcon'
            Navigation={`/Profile/${UserID}`}
            children={<FaUser size="1.8rem" className="bg-black text-white cursor-pointer px-1.5 py-1.5 rounded-full" />}
        /> : null
    }
    <Button
        Children={ExtendNavbar ? <FontAwesomeIcon icon={faX} className="text-sm" /> : <FontAwesomeIcon icon={faBars} className="text-base" />}
        ButtonStyle='focus:outline-none'
        onClick={toggleMenu}
    />
    { UserID ? <h4 className="font-bold flex flex-col text-center"><span>Welcome</span>{Name}</h4> : null }
</div>
{/* MOBILE MENU */}
{ExtendNavbar && (
    <nav className="bg-white absolute top-16 right-0 flex flex-col gap-4 m-auto pl-4 pt-2 pb-8 rounded-Header text-base text-black w-36 z-50 xl:hidden">
        <Navigate 
            Navigation='/Home'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="Home"
        />
        <Navigate 
            Navigation='/Exercise'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="Exercise"
        />
        <Navigate 
            Navigation='/Nutrition'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="Nutrition"
        />
        <Navigate 
            Navigation='/Fitness_Calculator'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="Fitness Calculator"
        />
        <Navigate 
            Navigation='/Customise'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="Customise Workout"
        />
        <Navigate 
            Navigation='/MyWorkout'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="My Workout"
        />
        <Navigate 
            Navigation='/Favourites'
            NavigateStyle="border-b border-black text-black no-underline w-28 hover:text-Blue"
            NavigateText="Favourites"
        />
        {
        !UserID? 
            <Navigate 
                Navigation='/Registration'
                NavigateStyle="border-b border-black text-black no-underline w-28"
                NavigateText="Sign Up"
            /> : null
        }
        {
            !Cookie.auth_token ?
            (
                <Navigate
                    Navigation="/"
                    NavigateStyle="border-b border-black text-black no-underline w-28"
                    NavigateText="Login"
                />
            ) : 
            (
                <Navigate
                NavigateStyle="border-b border-black text-black no-underline w-28"
                            NavigateText="Logout"
                            onClick={Logout}
                        />
                    )
                }
            </nav>
        )}
    </div>
)
}

export default Header
