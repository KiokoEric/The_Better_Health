import Axios from "axios";
import React, { useEffect, useState } from 'react';
import { useCookies } from "react-cookie";
import { useParams } from 'react-router-dom';
import { useGetUserID } from "../../Components/Hooks/useGetUserID";
import Output from '../../Components/Common/Output/Output';

const WorkoutDetails:React.FC = () => {

    const [Cookie, _] = useCookies(["auth_token"]);
    const [Exercises, setExercises] = useState([])
    const [Workouts, setWorkouts] = useState([])
    const [WorkoutName, setWorkoutName] = useState("")
    const [WorkoutImages, setWorkoutImages] = useState("")
    const [Videos, setVideos] = useState([])
    const { _id } = useParams();

    const userID = useGetUserID();

    useEffect(() => {

    const fetchExercise = async () => {
        Axios.get(`https://localhost:4000/Exercise/MyWorkouts/${_id}`, {
        headers: { authorization: Cookie.auth_token }
        }) 
        .then((Data) => {
            setExercises(Data.data)
            setWorkouts(Data.data.Image)
        })
    }

    if (userID) {
        fetchExercise()
    }
    
    },[userID])

    useEffect(() => {

        const fetchImage = async () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${Workouts}`;
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            };
    
            try {
                await fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setWorkoutName(data.name)
                    setWorkoutImages(data.gifUrl)
            })
            } catch (error) {
                console.error(error);
            }
        }

        fetchImage()
        
    }, [Exercises])

    let Link = WorkoutName

    useEffect(() => {

        const YouTube = async () => {

            const url = `https://youtube-search-and-download.p.rapidapi.com/search?query=${Link}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
            };
    
            try {
                fetch(url, options)
                .then (response => response.json()) 
                .then((data) => {
                    setVideos(data.contents)
                })
            } catch (error) {
                console.error(error);
            }
        }

        if(WorkoutName){
            YouTube()
        }

    }, [WorkoutName])

return (
    <div className="flex flex-col gap-5" >
        <Output
            figureStyle='flex flex-col gap-5 mb-5'
            image={WorkoutImages}
            imageStyle='rounded w-11/12'
            TitleStyle='capitalize font-bold text-black text-center text-3xl'
            Title={Exercise.Name} 
            Description={Exercise.Category}
        >
            <div className="flex gap-3">
                <h2 className="font-bold text-2xl">Target Muscle: {Exercises.Muscle}</h2>
                <h3 className="font-bold text-2xl">Instructions</h3>
                <li>{Exercises.Instructions}</li>
            </div>
        </Output>
        <h2 className="capitalize font-bold text-black text-center text-4xl" >YouTube Videos</h2>
        <section className="grid grid-cols-3 gap-5 items-center justify-center" >
            {Videos ? (
                Videos?.slice(0,3).map((Video: any) => {
                    let ExerciseLink = Video.video.videoId  
                    return(
                        <a href={`https://www.youtube.com/watch?v=${ExerciseLink}`} target='_blank' rel='noreferrer' className='no-underline text-black'>
                            <img src={Video.video.thumbnails[0].url} alt="" width="350px" />
                            <h3 className="font-bold text-center text-2xl" >{Video.title}</h3>   
                        </a>
                    )
                })
            ) : (
                <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> 
            )
            }
        </section>
    </div>
)
}

export default WorkoutDetails
