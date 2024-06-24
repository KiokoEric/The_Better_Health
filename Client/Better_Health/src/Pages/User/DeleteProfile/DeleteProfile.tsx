import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const DeleteProfile:React.FC = () => {
return (
    <div id='DeleteProfile' className='flex flex-col gap-5 justify-center items-center' >
        <h1 className='font-bold text-5xl text-white'>We are sorry to see you go, but hope to see you again!</h1>
        <button className='bg-black cursor-pointer flex items-center justify-center gap-4 text-center text-white px-2 py-1.5 rounded w-40' ><FontAwesomeIcon icon={faTrash} />Delete My Profile</button> 
    </div>
)
}

export default DeleteProfile