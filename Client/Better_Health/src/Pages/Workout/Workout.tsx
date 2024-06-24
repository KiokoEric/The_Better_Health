import Axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { MdDelete } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import loadingGif from "../../assets/Exercise.gif";
import WorkoutImages  from "../../assets/Workout.jpg";
import Output from "../../Components/Common/Output/Output";
import Heading from '../../Components/Common/Heading/Heading';
import { useGetUserID } from "../../Components/Hooks/useGetUserID";


const Workout:React.FC = () => {

    const [Cookie, _] = useCookies(["auth_token"]);
    const [isLoading, setIsLoading] = useState(true);
    const [Exercises, setExercises] = useState([])

    const userID = useGetUserID();

    useEffect(() => {

        const fetchExercise = async () => {
            Axios.get(`https://better-health-server.onrender.com/Exercise/${userID}/Workout`, { 
            headers: { authorization: Cookie.auth_token }
            }) 
            .then((Data) => {
                setExercises(Data.data)
            })
            setTimeout(() => {
                setIsLoading(false); 
            }, 1000);
        }

        fetchExercise()
    
        
        },[userID])

return (
    <div>
        <Heading
            idName='MyWorkout'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading='My Workout'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='flex flex-auto items-center justify-center gap-5 px-10'>
        {isLoading ? (
                <div className='flex flex-col items-center justify-center'>
                    <img src={loadingGif} alt="Loading..." className="w-max" />
                </div>
            ) : (
                (Exercises.length > 0) ?  
                Exercises.map((Exercise: any) => {
                return (
                    <Link to={`/WorkoutDetails/${Exercise._id}`} className='flex flex-col gap-3 text-black no-underline' key={Exercise.Name} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={WorkoutImages}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-black text-center text-3xl'
                            Title={Exercise.Name} 
                            Description={Exercise.Category}
                        />
                        <div className="flex gap-3 justify-end">
                            <MdEditSquare size="1rem" className="bg-Blue" color="black" />
                            <MdDelete size="1rem" className="bg-Blue" color="black" />
                        </div>
                    </Link>
                )
                }) : <h2 className='font-bold text-red-700 text-center text-3xl'>No Workouts Found.</h2> 
            )
            }
        </section>
    </div>
)
}

export default Workout