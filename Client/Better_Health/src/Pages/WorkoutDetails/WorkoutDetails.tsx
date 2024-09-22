import axios from "axios";
import { useCookies } from "react-cookie";
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Output from '../../Components/Common/Output/Output';
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const WorkoutDetails:React.FC = () => {

    const { _id } = useParams();
    const userID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"]);

    // USESTATE HOOK

    const [Videos, setVideos] = useState<[]>([])
    const [Workouts, setWorkouts] = useState<[]>([])
    const [Exercises, setExercises] = useState<any>([])
    const [WorkoutName, setWorkoutName] = useState<string>("")
    const [WorkoutImages, setWorkoutImages] = useState<string>("")

    // CALLING ON THE DETAILS OF THE USER'S CREATED WORKOUT(S)

    useEffect(() => {

    const fetchExercise = async () => {
        axios.get(`http://localhost:4000/Exercise/MyWorkouts/${_id}`, {
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

    // CALLING ON THE DETAILS OF THE USER'S CREATED WORKOUT(S) FROM EXERCISE DB

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

    // CALLING ON YOUTUBE VIDEOS OF THE USER'S CREATED WORKOUT(S)

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
    <div className="flex flex-col items-center mb-5 px-5" >
        <Output
            figureStyle='flex flex-col items-center gap-5 w-full lg:flex-row lg:w-6/12'
            image={WorkoutImages}
            imageStyle='rounded lg:w-10/12'
            TitleStyle='capitalize font-bold mb-10 text-center sm:text-left text-3xl underline'
            Title={Exercises.Name} 
            Description={Exercises.Category}
        >
            <div className="flex flex-col gap-2 mt-2">
                <h2 className="capitalize font-bold text-center sm:text-left text-2xl w-80">Target Muscle: {Exercises.Muscle}</h2>
                <h3 className="capitalize font-bold text-center sm:text-left text-2xl underline w-80">Instructions</h3>
                <li>{Exercises.Instructions}</li>
            </div>
        </Output>
        <h2 className="font-bold mt-5 mb-10 text-center text-blue-600 text-4xl underline" >YouTube Videos</h2>
        <section className="grid grid-cols-1 gap-10 items-center justify-center px-10 lg:grid-cols-3" >
            {Videos ? (
                Videos?.slice(0,3).map((Video: any) => {
                    let ExerciseLink = Video.video.videoId  
                    return(
                        <a href={`https://www.youtube.com/watch?v=${ExerciseLink}`} target='_blank' rel='noreferrer' className='no-underline text-black'>
                            <img src={Video.video.thumbnails[0].url} alt="" width="350px" className='rounded' />
                            <h3 className="capitalize font-bold mt-5 text-center text-2xl" >{Video.video.title}</h3>   
                        </a>
                    )
                })
            ) : (
                <h2 className='font-bold text-red-700 text-center text-3xl w-custom'>No Results Found</h2> 
            )
            }
        </section>
    </div>
)
}
    
export default WorkoutDetails