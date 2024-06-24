import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Heading from '../../../Components/Common/Heading/Heading';
import Input from '../../../Components/Common/UserInput/Input';

const Profile:React.FC = () => {

return (
    <div>
        <Heading
            idName='Profile'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-black'
            Heading='My Profile'
            HeadingStyle='font-bold text-5xl'
        />
        <form encType="multipart/form-data" className='flex flex-col items-center gap-5'>
            <Input 
                ContainerStyle = 'flex flex-col gap-1'
                Label = 'Name'
                LabelStyle = 'font-bold'
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'         
            />
            <Input 
                ContainerStyle = 'flex flex-col gap-1'
                Label = 'Email'
                LabelStyle = 'font-bold'
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'         
            />
            <Input 
                ContainerStyle = 'flex flex-col gap-1'
                Label = 'Password'
                LabelStyle = 'font-bold'
                inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96'         
            />
            <div className='flex gap-16 mt-5'>
                <button className='bg-black cursor-pointer flex items-center justify-center gap-4 text-center text-white px-2 py-1.5 rounded w-40' ><FontAwesomeIcon icon={faPenToSquare} />Edit Details</button>
                <button className='bg-black cursor-pointer flex items-center justify-center gap-4 text-center text-white px-2 py-1.5 rounded w-40' ><FontAwesomeIcon icon={faTrash} />Delete My Profile</button>
            </div>
        </form>
    </div>
)
}

export default Profile

