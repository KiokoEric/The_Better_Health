import * as z from 'zod';
import axios from "axios";
import React from 'react';
import { useSnackbar } from 'notistack';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../../Components/Common/Button/Button';
import Heading from '../../../Components/Common/Heading/Heading';

const Registration: React.FC = () => {

    interface FormValues {
        Name: string;
        Email: string;
        Password: string;
    };

    // CREATION OF THE REGISTRATION ZOD SCHEMA

    const RegistrationSchema = z.object({
        Name: z.string().min(1, { message: 'Name is required'}),
        Email: z.string().email({ message: "Invalid email address" }),
        Password: z.string().min(1, { message: 'Password is required'})
    });

    const { enqueueSnackbar } = useSnackbar();

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RegistrationSchema)
    });

    type UserData = z.infer<typeof RegistrationSchema>

    // ONREGISTRATION FUNCTION

    const onRegistration : SubmitHandler<FormValues> = async (data: UserData) => {
        try {
            await axios.post(`https://better-health-server.onrender.com/Users/Registration`, data) 
            .then(() => {
                enqueueSnackbar("Registration Completed! Kindly Log in", {variant: "success"})
            })
        } catch (error) { 
            enqueueSnackbar("Registration unsuccessful!" , {variant: "error"})
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
                <input placeholder="Enter Name..." {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="Email">Email</label> 
                <input placeholder="Enter Email..." {...register('Email', { required: 'Email is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                {errors.Email && <p className="text-center text-red-700">{errors.Email.message}</p>}
            </div>
            <div className='flex flex-col gap-2'>
                <label className='font-bold' htmlFor="Password">Password</label> 
                <input placeholder="Enter Password..." {...register('Password', { required: 'Password is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-2 text-black w-80 sm:w-96' required />
                {errors.Password && <p className="text-center text-red-700">{errors.Password.message}</p>}
            </div>
            <Button
                ButtonText='Sign Up'
                ButtonStyle='bg-Blue cursor-pointer mt-1 text-center text-white px-3 py-1 rounded w-40 hover:bg-black'
                onClick={handleSubmit(onRegistration)}
            />
        </form>
    </div>
)
}

export default Registration
