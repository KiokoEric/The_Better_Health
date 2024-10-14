import axios from "axios";
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import loadingGif from "../../assets/Exercise.gif";
import React, { useEffect, useState } from 'react';
import WorkoutImages  from "../../assets/Workout.jpg";
import Button from "../../Components/Common/Button/Button";
import Output from "../../Components/Common/Output/Output";
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Heading from "../../Components/Common/Heading/Heading";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useGetUserID } from "../../Components/Hooks/useGetUserID"; 

const Workout:React.FC = () => {

    const userID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"]);

    // USESTATE HOOK

    const [Exercises, setExercises] = useState<[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true);

    // CALLING ON THE USER'S CREATED EXERCISE(S)

    useEffect(() => {

        const fetchExercise = async () => {
            axios.get(`http://localhost:4000/Exercise/${userID}/Workout`, { 
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

    // DELETE WORKOUT

    const handleDelete= (_id: any) => {
        axios.delete(`http://localhost:4000/Exercise/${_id}`, {
            headers: { authorization: Cookie.auth_token }
        }) 
        .then(
            window.location.reload()
        )
    }

return (
    <div>
        <Heading
            idName='MyWorkout'
            ContainerStyle='flex flex-col items-center justify-center gap-5 mb-4 text-center text-white'
            Heading='My Workout'
            HeadingStyle='font-bold text-5xl'
        />
        <section className='grid grid-cols-1 items-center justify-center gap-5 px-10 sm:grid-cols-3'>
        {isLoading ? (
                <div className='flex flex-col items-center justify-center w-custom'>
                    <img src={loadingGif} alt="Loading..." />
                </div>
            ) : (
                (Exercises.length > 0) ?  
                Exercises.map((Exercise: any) => {
                return (
                <div>
                    <Link to={`/WorkoutDetails/${Exercise._id}`} className='flex flex-col gap-1 text-black no-underline' key={Exercise.Name} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={WorkoutImages}
                            imageStyle='rounded w-11/12'
                            TitleStyle='capitalize font-bold text-black text-center text-3xl'
                            Title={Exercise.Name} 
                            Description={Exercise.Category}
                        />
                    </Link> 
                    <div className="flex gap-3 items-center justify-center">
                        <Link id="Edit" to={`/Edit/${Exercise._id}`} key={Exercise._id}>
                            <FontAwesomeIcon icon={faPenToSquare} className="bg-Blue cursor-pointer font-bold p-3 rounded-full text-xl" />
                        </Link>
                        <Button
                            ID="Delete"
                            onClick={() => handleDelete(Exercise._id)}
                            Children={<FontAwesomeIcon icon={faTrash} className="bg-Blue cursor-pointer font-bold p-3 rounded-full text-xl" />}
                        />
                    </div> 
                </div>
                )
                }) : <h2 className='font-bold m-auto text-red-700 text-center text-5xl w-custom'>No Workouts Found.</h2> 
            )
            }
        </section>
    </div>
)
}

export default Workout
