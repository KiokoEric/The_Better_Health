import axios from "axios";
import { useCookies } from "react-cookie";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Input from "../../Components/Common/Input/Input";
import Select from "../../Components/Common/Select/Select";
import Button from '../../Components/Common/Button/Button';
import Heading from '../../Components/Common/Heading/Heading';
import TextArea from "../../Components/Common/TextArea/TextArea";
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const EditWorkout:React.FC = () => {

    const { _id } = useParams()
    const userID = useGetUserID();
    const [Cookie,_] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [Name, setName] = useState<string>("")
    const [Image, setImage] = useState<string>("")
    const [Muscle, setMuscle] = useState<string>("")
    const [Success, setSuccess] = useState<string>("")
    const [Category, setCategory] = useState<string>("")
    const [userOwner, setuserOwner] = useState<any>(userID)
    const [Instructions, setInstructions] = useState<[]>([])
    
    // CALLING CREATED WORKOUT DATA

    useEffect(() => {
        axios.get(`http://localhost:4000/Exercise/MyWorkouts/${_id}`, {
                headers: { authorization: Cookie.auth_token },
            }) 
        .then((Data) => { 
            setName(Data.data.Name)
            setImage(Data.data.Image) 
            setMuscle(Data.data.Muscle)
            setCategory(Data.data.Category)
            setInstructions(Data.data.Instructions) 
        })
    }, [])
    
    // WORKOUT EDIT FUNCTION
    
    const EditWorkout = async (e:any) => {
        e.preventDefault()

        const data = {
            Name, Category, Muscle, Instructions, Image, userOwner
        }
        axios.put(`http://localhost:4000/Exercise/${_id}`, data , {
            headers: { authorization: Cookie.auth_token },
        }) 
        .then(() => {
            setSuccess('Workout has been successfully edited.') 
        })
    };


return (
    <div>
        <Heading
            idName='Customise'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='Edit Workout'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='flex flex-col items-center mb-5'>
            <form method="post" onSubmit={EditWorkout} encType="multipart/form-data" className='flex flex-col gap-5'>
                <Input 
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Name'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'  
                    Value={Name}
                    Change={(e: any) => setName(e.target.value)}
                />
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Muscle</label>
                    <Select SelectStyle='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96' Search={Muscle} onSearch={(e: any) => setMuscle(e.target.value)}>
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
                    </Select>
                </div>
                <TextArea 
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Instructions'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-20 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'   
                    Value={Instructions}
                    Change={(e: any) => setInstructions(e.target.value)}
                />
                <div className='flex flex-col gap-2'>
                    <label className='font-bold' htmlFor="">Category</label>
                    <Select SelectStyle='border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96' Search={Category} onSearch={(e: any) => setCategory(e.target.value)}>
                        <option value="">Search among the categories below</option>
                        <option value="Weight and Reps">Weight and Reps</option>
                        <option value="Reps">Reps</option>
                        <option value="Distance and Time">Distance and Time</option>
                        <option value="Time">Time</option>
                    </Select>
                </div>
                <Input
                    ContainerStyle = 'flex flex-col gap-2'
                    Label = 'Exercise Image'
                    LabelStyle = 'font-bold'
                    inputStyle = 'border-black border-b h-8 outline-none truncate px-1 py-1 text-black w-80 sm:w-96'   
                    Value={Image}
                    Change={(e: any) => setImage(e.target.value)}
                />
                <div className='mt-10'>
                    <h4 className='font-bold text-center text-green-700'>{Success}</h4>
                    <Button
                        ButtonText='Create Workout'
                        ButtonStyle='bg-black cursor-pointer text-center text-white px-3 py-1 rounded'
                        onClick={EditWorkout}
                    />
                </div>
            </form>
        </section>
    </div>
)
}

export default EditWorkout