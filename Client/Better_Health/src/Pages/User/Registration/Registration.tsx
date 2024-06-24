import * as z from 'zod';
import Axios from "axios";
import React from 'react';
import { useSnackbar } from 'notistack';
import { useCookies } from "react-cookie";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Heading from '../../../Components/Common/Heading/Heading';
import Button from '../../../Components/Common/Button/Button';

const Registration: React.FC = () => {

    interface FormValues {
        Name: string;
        Email: string;
        Password: string;
    };

    const RegistrationSchema = z.object({
        Name: z.string().min(1, { message: 'Name is required'}),
        Email: z.string().email({ message: "Invalid email address" }),
        Password: z.string().min(1, { message: 'Password is required'})
    });

    const [_,setCookie] = useCookies(["auth_token"]);
    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RegistrationSchema)
    });

    const onRegistration : SubmitHandler<FormValues> = async (data) => {
        try {
            const response = await Axios.post("https://localhost:4000/Users/Registration", data) 
                setCookie("auth_token", response.data.Token)
                window.localStorage.setItem("UserID", response.data.UserID)
                enqueueSnackbar("Logged in successfully!", {variant: "success"}) 
                setTimeout(() => {
                    window.location.reload();
                }, 1500);
        } catch (error) { 
            enqueueSnackbar("Login unsuccessful!" , {variant: "error"})
            console.log(error)
        }
    }

return (
    <div>
        <Heading
            idName='Registration'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Sign Up'
            HeadingStyle='font-bold text-5xl'
        />
        <form method="post" onSubmit={handleSubmit(onRegistration)} encType="multipart/form-data" className='flex flex-col items-center gap-2'>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="">Name</label> 
                <input placeholder="Enter Name..." {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96' required />
                {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="Email">Email</label> 
                <input placeholder="Enter Email..." {...register('Email', { required: 'Email is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96' required />
                {errors.Email && <p className="text-center text-red-700">{errors.Email.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="Password">Passowrd</label> 
                <input placeholder="Enter Password..." {...register('Password', { required: 'Password is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-96' required />
                {errors.Password && <p className="text-center text-red-700">{errors.Password.message}</p>}
            </div>
            <Button
                ButtonText='Sign Up'
                ButtonStyle='bg-black cursor-pointer mt-1 text-center text-white px-3 py-1 rounded w-40'
                onClick={handleSubmit(onRegistration)}
            />
        </form>
    </div>
)
}

export default Registration