import React from 'react';
import Heading from '../../../Components/Common/Heading/Heading';
import Input from '../../../Components/Common/UserInput/Input';
import Button from '../../../Components/Common/Button/Button';

const EditProfile:React.FC = () => {
return (
    <div>
        <Heading
            idName='EditProfile'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Edit Profile'
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
            <Button
                ButtonText='Save Changes'
                ButtonStyle='bg-black cursor-pointer mt-1 text-center text-white px-3 py-1 rounded w-40'
            />
        </form>
    </div>
)
}

export default EditProfile