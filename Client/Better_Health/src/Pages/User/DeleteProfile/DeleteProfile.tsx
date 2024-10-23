import axios from "axios";
import React from 'react';
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../Components/Common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUserID } from "../../../Components/Hooks/useGetUserID";

const DeleteProfile:React.FC = () => {

    const userID = useGetUserID();
    const navigate = useNavigate();
    const [Cookie,setCookie] = useCookies(["auth_token"])  

    // DELETE USER FUNCTION

    const DeleteUser = (id: any) => {
        try{
            axios.delete(`http://localhost:4000/Users/Delete/${id}`, {
                headers: { authorization: Cookie.auth_token }
            })
            .then(() => { 
                navigate("/Registration")
                setCookie("auth_token", "");
                window.localStorage.clear()
            })
        }
        catch (Error){
            console.log(Error)
        }
    }

return (
    <div id='DeleteProfile' className='flex flex-col gap-5 justify-center items-center' >
        <h1 className='font-bold text-5xl text-center text-white'>We are sorry to see you go, but hope to see you again!</h1>
        <Button
            onClick={()=>DeleteUser(userID)}
            ButtonStyle="bg-black cursor-pointer flex items-center justify-center gap-4 text-center text-white px-2 py-1.5 rounded w-40"
            ButtonText="Delete My Profile"
            Children={<FontAwesomeIcon icon={faTrash} />}
        /> 
    </div>
)
}

export default DeleteProfile
