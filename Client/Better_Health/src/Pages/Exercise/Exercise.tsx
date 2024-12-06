import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { IoSearchSharp } from "react-icons/io5";
import Button from '../../Components/Common/Button/Button';
import Select from '../../Components/Common/Select/Select';
import Output from '../../Components/Common/Output/Output';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const Exercise: React.FC = () => {

    const userID = useGetUserID();
    const [Cookie, _] = useCookies(["auth_token"])

    // USESTATE HOOK

    const [userOwner, __] = useState<any>(userID)
    const [Search,setSearch] = useState<string>("")
    const [Exercises, setExercises] = useState<[]>([])
    const [SearchError, setSearchError] = useState<string>("")

    // ONSEARCH FUNCTION

    const onSearch = async (e: React.FormEvent) => {
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly select one of the options above.")
        } else {
            const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${Search}?limit=60`;
            const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setExercises(result)
            setSearchError("")
        } catch (error) {
            console.error(error);
        }
        }
    }

    // ADD TO FAVOURITES

    const AddToFavourites = async (ID: any) => {
        const data = {
            ID, userOwner
        }
        try {
            await axios.post("https://better-health-server.onrender.com/Favourites/AddFavourite", data, {
                headers: { authorization: Cookie.auth_token },
            });
        } catch (error) {
            console.log(error);
        }
    };

    // HANDLE COPY FUNCTION

    const handleCopy = (id: any) => {
        navigator.clipboard.writeText(id)
    };
    
    return (
        <div>
            <section id='Exercise' className='flex flex-col items-center justify-center gap-5 mb-10 text-white'>
                <h1 className='capitalize font-bold text-3xl sm:text-5xl'>Search your body part</h1>
                <form onSubmit={onSearch} className="bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded-sm w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5">
                    <FontAwesomeIcon icon={faDumbbell} width="2rem" color="black"  />
                    <Select SelectStyle='h-10 outline-none px-2 py-1 text-black w-5/6' Search={Search} onSearch={e => setSearch(e.target.value.toLowerCase())} >
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
                    <button onClick={onSearch} className="bg-Blue px-3 py-1 rounded"><IoSearchSharp size="1.8rem" color="white" className="cursor-pointer" /></button>
                </form>
                    <span className='text-red-700'>{SearchError}</span>
                    <p className='text-center'>The secret of getting ahead is getting started.</p>
            </section>
            <section className='grid grid-cols-1 gap-5 px-10 sm:grid-cols-3'>
            {
                (!Exercises) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
                Exercises.map((Exercise: any) => {
                    return(
                        <div className='flex flex-col items-center justify-center' key={Exercise.id} >
                            <Link className='text-black no-underline' to={`/Workout/${Exercise.id}`} >
                                <Output
                                    figureStyle='flex flex-col gap-5 mb-5'
                                    image={Exercise.gifUrl}
                                    imageStyle='rounded w-11/12 w-5/6 '
                                    TitleStyle='capitalize font-bold text-center text-3xl'
                                    Title={Exercise.name}
                                    DescriptionStyle="hidden"
                                >
                                    <div className='flex flex-col gap-2 mt-5 text-center'>
                                        <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Exercise.target}</h3>
                                        <h3 className='font-bold text-2xl capitalize'>Equipment: {Exercise.equipment}</h3> 
                                    </div>
                                </Output>
                            </Link>
                            <div className='flex gap-3' >
                                <Button
                                    ID="Bookmark"
                                    onClick={() => AddToFavourites(Exercise.id)}
                                    Children={<FontAwesomeIcon icon={faBookmark} className='bg-Blue cursor-pointer p-2 rounded-sm text-white text-xl hover:bg-black' />}
                                />
                                <Button
                                    ID="Copy"
                                    onClick={() => handleCopy(Exercise.id)}
                                    Children={<FontAwesomeIcon icon={faCopy}  className='bg-Blue cursor-pointer p-2 rounded-sm text-white text-xl hover:bg-black' />}
                                />
                            </div>
                        </div>
                    )
                })
            }
            </section>
        </div>
    )
}
    
export default Exercise
