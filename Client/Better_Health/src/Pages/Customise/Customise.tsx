import * as z from 'zod';
import Axios from "axios";
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Heading from '../../Components/Common/Heading/Heading';
import Button from '../../Components/Common/Button/Button';

interface FormValues {
    Name: string;
    Muscle: string;
    Instructions: string;
    Category: string;
    Image: string;
};

const Customise:React.FC = () => {

    const [ Cookie,_ ] = useCookies(["auth_token"]);
    const [ Success, setSuccess ] = useState('')

    const RecipeSchema = z.object({
        Name: z.string().min(1, 'Name is required'),
        Muscle: z.string().min(1, 'Muscle is required'),
        Instructions: z.string().min(1, 'Instructions are required'),
        Category: z.string().min(1, 'Category is required'),
        Image: z.string().min(1, 'Image link is required'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        resolver: zodResolver(RecipeSchema),
    });

    const AddWorkout: SubmitHandler<FormValues> = async (data) => {
        await Axios.post("https://localhost:4000/Recipe/AddRecipe", data, {
            headers: { authorization: Cookie.auth_token },
        }) 
        console.log(data)
        setSuccess('Recipe has been successfully added.') 
    };

return (
    <div>
        <Heading
            idName='Customise'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Create Workout'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='flex flex-col items-center mb-5'>
            <form method="post" onSubmit={handleSubmit(AddWorkout)} encType="multipart/form-data" className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Name</label> 
                    <textarea placeholder="Enter Name..." {...register('Name', { required: 'Name is required' })} className='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-96' required />
                    {errors.Name && <p className="text-center text-red-700">{errors.Name.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Muscle</label>
                    <select id="Select" className='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-96' {...register('Muscle', { required: 'Muscle is required' })} required >
                        <option value="">Search among the bodyparts below</option>
                        <option value="back">Back</option>
                        <option value="cardio">Cardio</option>
                        <option value="chest">Chest</option>
                        <option value="lower arms">Lower Arms</option>
                        <option value="lower legs">Lower Legs</option>
                        <option value="neck">Neck</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="upper arms">Upper Arms</option>
                        <option value="upper legs">Upper Legs</option>
                        <option value="waist">Waist</option>
                    </select>
                    {errors.Muscle && <p className="text-center text-red-700">{errors.Muscle.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Instructions</label>
                    <textarea placeholder='Enter Instructions...' className="border-black border-b h-20 outline-none px-1 py-2 w-96" {...register('Instructions', { required: 'Instructions are required' })} required ></textarea>
                    {errors.Instructions && <p className="text-center text-red-700">{errors.Instructions.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Category</label>
                    <select id="Select" className='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-96' {...register('Category', { required: 'Category is required' })} required >
                        <option value="">Search among the categories below</option>
                        <option value="Weight and Reps">Weight and Reps</option>
                        <option value="Reps">Reps</option>
                        <option value="Distance and Time">Distance and Time</option>
                        <option value="Time">Time</option>
                    </select>
                    {errors.Category && <p className="text-center text-red-700">{errors.Category.message}</p>}
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Exercise Image <span className='font-bold' >(Copy Exercise Image Link from Exercise Section)</span></label>
                    <textarea placeholder='Enter Image Link...' {...register('Image', { required: 'Image is required' })} className='border-black border-b h-8 outline-none px-2 py-1 truncate text-black w-96' required />
                    {errors.Image && <p className="text-center text-red-700">{errors.Image.message}</p>}
                </div>
                <div className='mt-10'>
                    <h4 className='font-bold text-center text-green-700'>{Success}</h4>
                    <Button
                        ButtonText='Create Workout'
                        ButtonStyle='bg-black cursor-pointer text-center text-white px-3 py-1 rounded'
                        onClick={handleSubmit(AddWorkout)}
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default Customise