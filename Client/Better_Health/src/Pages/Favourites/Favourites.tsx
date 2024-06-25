import Axios from "axios";
import { Link  } from 'react-router-dom';
import { useCookies } from "react-cookie";
import React, { useEffect, useState } from 'react';
import ExercisingGif from "../../assets/Exercise.gif";
import Output from "../../Components/Common/Output/Output";
import { useGetUserID } from "../../Components/Hooks/useGetUserID";

const Favourites: React.FC = () => {

    const UserID = useGetUserID();

    const [Cookie, _] = useCookies(["auth_token"]); 
    const [isLoading, setIsLoading] = useState(true);
    const [ExerciseID, setExerciseID] = useState("")
    const [ExerciseID2, setExerciseID2] = useState("")
    const [ExerciseID3, setExerciseID3] = useState("")
    const [ExerciseID4, setExerciseID4] = useState("")
    const [ExerciseID5, setExerciseID5] = useState("")
    const [ExerciseID6, setExerciseID6] = useState("")
    const [Favourites, setFavourites] = useState<any>([])
    const [Favourites2, setFavourites2] = useState<any>([])
    const [Favourites3, setFavourites3] = useState<any>([])
    const [Favourites4, setFavourites4] = useState<any>([])
    const [Favourites5, setFavourites5] = useState<any>([])
    const [Favourites6, setFavourites6] = useState<any>([])
    const [FavouritesID, setFavouritesID] = useState("")
    const [FavouritesID2, setFavouritesID2] = useState("")
    const [FavouritesID3, setFavouritesID3] = useState("")
    const [FavouritesID4, setFavouritesID4] = useState("")
    const [FavouritesID5, setFavouritesID5] = useState("")
    const [FavouritesID6, setFavouritesID6] = useState("")

    useEffect(() => {

        const fetchExerciseID = async () => {
            try {
                await Axios.get(`https://localhost:4000/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setExerciseID(response.data[0].ID)
                        setFavouritesID(response.data[0]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchExerciseID2 = async () => { 
            try {
                await Axios.get(`https://localhost:4000/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setExerciseID2(response.data[1].ID)
                        setFavouritesID2(response.data[1]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchExerciseID3 = async () => {
            try {
                await Axios.get(`https://localhost:4000/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setExerciseID3(response.data[2].ID)
                        setFavouritesID3(response.data[2]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchExerciseID4 = async () => {
            try {
                await Axios.get(`https://localhost:4000/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setExerciseID4(response.data[3].ID)
                        setFavouritesID4(response.data[3]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchExerciseID5 = async () => {
            try {
                await Axios.get(`https://localhost:4000/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setExerciseID5(response.data[4].ID)
                        setFavouritesID5(response.data[4]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        const fetchExerciseID6 = async () => {
            try {
                await Axios.get(`https://localhost:4000/Favourites/${UserID}/Favourites`, {
                headers: { authorization: Cookie.auth_token },
                }) 
                .then((response) =>   {
                        setExerciseID6(response.data[5].ID)
                        setFavouritesID6(response.data[5]._id)
                })
            }
            catch (err) {
                console.log(err);
            }
        }

        if (UserID) {
            fetchExerciseID()
        } 
        
        if (UserID) {
            fetchExerciseID2()
        } 

        if (UserID) {
            fetchExerciseID3()
        } 

        if (UserID) {
            fetchExerciseID4()
        } 

        if (UserID) {
            fetchExerciseID5()
        } 

        if (UserID) {
            fetchExerciseID6()
        } 

    },[UserID])

    useEffect(()=> { 

        const fetchFavourites = () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ExerciseID}`;  
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }};

            try {
                fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setFavourites(data)
                    setTimeout(() => {
                        setIsLoading(false);
                    }, 1000);
            })
            } catch (error) {
                console.error(error);
            }
        }

        if (ExerciseID) {
            fetchFavourites()
        } else {
            console.log("No Favourites")
        }

    },[ExerciseID]) 

    useEffect(()=> {  

        const fetchFavourites2 = () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ExerciseID2}`;  
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }};

            try {
                fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setFavourites2(data)
            })
            } catch (error) {
                console.error(error);
            }
        }


        if (ExerciseID2) {
            fetchFavourites2()
        } 

    },[ExerciseID2]) 

    useEffect(()=> {  

        const fetchFavourites3 = () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ExerciseID3}`;  
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }};

            try {
                fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setFavourites3(data)
            })
            } catch (error) {
                console.error(error);
            }
        }


        if (ExerciseID3) {
            fetchFavourites3()
        } 

    },[ExerciseID3]) 

    useEffect(()=> {  

        const fetchFavourites4 = () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ExerciseID4}`;  
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }};

            try {
                fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setFavourites4(data)
            })
            } catch (error) {
                console.error(error);
            }
        }

        if (ExerciseID4) {
            fetchFavourites4()
        } 

    },[ExerciseID4]) 


    useEffect(()=> {  

        const fetchFavourites5 = () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ExerciseID5}`;  
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }};

            try {
                fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setFavourites5(data)
            })
            } catch (error) {
                console.error(error);
            }
        }


        if (ExerciseID5) {
            fetchFavourites5()
        } 

    },[ExerciseID5])

    useEffect(()=> {  

        const fetchFavourites6 = () => {
            const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${ExerciseID6}`;  
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }};

            try {
                fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                    setFavourites6(data)
            })
            } catch (error) {
                console.error(error);
            }
        }


        if (ExerciseID6) {
            fetchFavourites6()
        } 

    },[ExerciseID6])
    
    const RemoveFromFavourites = (id: any) => {
        Axios.delete(`https://localhost:4000/Favourites/${id}`, {
            headers: { authorization: Cookie.auth_token }
        }) 
        .then(
            window.location.reload()
        )
    }

return (
    <article> 
        <p className='font-bold text-red-700 text-xl'>Maximum number of favourites displayed is 6</p>
        <div className='Favourite'>
            {
            isLoading ? (
                <div className='flex flex-auto items-center justify-center gap-5 px-10' >
                    <img src={ExercisingGif} alt="Loading..." className='w-max' />
                </div>
            ) : (
            (Favourites) ? ( 
                <div key={Favourites.id} >
                    <Link className='text-black no-underline' to={`/Workout/${Favourites.id}`} >
                        <Output
                                figureStyle='flex flex-col gap-5 mb-5'
                                image={Favourites.gifUrl}
                                imageStyle='rounded w-11/12 w-5/6 '
                                TitleStyle='capitalize font-bold text-center text-3xl'
                                Title={Favourites.name}
                            >
                            <div className='flex flex-col gap-2 mt-5 text-center'>
                                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Favourites.target}</h3>
                                <h3 className='font-bold text-2xl capitalize'>Equipment: {Favourites.equipment}</h3> 
                            </div>
                        </Output>
                    </Link>
                {ExerciseID ?<button onClick={() => RemoveFromFavourites(FavouritesID)}>Remove from Favourites</button> : null }    
                </div>
            ) : <h2 className='Failure'>No Favourites Found.</h2>
            )}
            {
            isLoading ? (
                <div className='flex flex-auto items-center justify-center gap-5 px-10' >
                    <img src={ExercisingGif} alt="Loading..." className='Loading' />
                </div>
            ) : (
            (Favourites2) ? ( 
                <div key={Favourites2.id} >
                    <Link className='text-black no-underline' to={`/Workout/${Favourites2.id}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Favourites2.gifUrl}
                            imageStyle='rounded w-11/12 w-5/6 '
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Favourites2.name}
                        >
                            <div className='flex flex-col gap-2 mt-5 text-center'>
                                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Favourites2.target}</h3>
                                <h3 className='font-bold text-2xl capitalize'>Equipment: {Favourites2.equipment}</h3> 
                            </div>
                        </Output>
                    </Link>
                    { ExerciseID2 ? <button onClick={() => RemoveFromFavourites(FavouritesID2)}>Remove from Favourites</button> : null }
                </div>
            ) : ""
            )}
            {
            isLoading ? (
                <div className='flex flex-auto items-center justify-center gap-5 px-10' >
                    <img src={ExercisingGif} alt="Loading..." className='Loading' />
                </div>
            ) : (
            (Favourites3) ? ( 
                <div key={Favourites3.id} >
                    <Link className='text-black no-underline' to={`/Workout/${Favourites3.id}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Favourites3.gifUrl}
                            imageStyle='rounded w-11/12 w-5/6 '
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Favourites3.name}
                        >
                            <div className='flex flex-col gap-2 mt-5 text-center'>
                                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Favourites3.target}</h3>
                                <h3 className='font-bold text-2xl capitalize'>Equipment: {Favourites3.equipment}</h3> 
                            </div>
                        </Output>
                    </Link>
                        { ExerciseID3 ? <button onClick={() => RemoveFromFavourites(FavouritesID3)}>Remove from Favourites</button> : null
                        }
                </div>
            ) : ""
            )}
            {
            isLoading ? (
                <div className='flex flex-auto items-center justify-center gap-5 px-10' >
                    <img src={ExercisingGif} alt="Loading..." className='Loading' />
                </div>
            ) : (
            (Favourites4) ? ( 
                <div key={Favourites4.id} >
                    <Link className='text-black no-underline' to={`/Workout/${Favourites4.id}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Favourites4.gifUrl}
                            imageStyle='rounded w-11/12 w-5/6 '
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Favourites4.name}
                        >
                            <div className='flex flex-col gap-2 mt-5 text-center'>
                                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Favourites4.target}</h3>
                                <h3 className='font-bold text-2xl capitalize'>Equipment: {Favourites4.equipment}</h3> 
                            </div>
                        </Output>
                    </Link>
                    { ExerciseID4 ? <button onClick={() => RemoveFromFavourites(FavouritesID4)}>Remove from Favourites</button> : null
                    }
                </div>
            ) : ""
            )}
            {
            isLoading ? (
                <div className='flex flex-auto items-center justify-center gap-5 px-10' >
                    <img src={ExercisingGif} alt="Loading..." className='Loading' />
                </div>
            ) : (
            (Favourites5) ? ( 
                <div key={Favourites5.id} >
                    <Link className='text-black no-underline' to={`/Workout/${Favourites5.id}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Favourites5.gifUrl}
                            imageStyle='rounded w-11/12 w-5/6 '
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Favourites5.name}
                        >
                            <div className='flex flex-col gap-2 mt-5 text-center'>
                                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Favourites5.target}</h3>
                                <h3 className='font-bold text-2xl capitalize'>Equipment: {Favourites5.equipment}</h3> 
                            </div>
                        </Output>
                    </Link>
                    { ExerciseID5 ? <button onClick={() => RemoveFromFavourites(FavouritesID5)}>Remove from Favourites</button> : null
                    }
                </div>
            ) : ""
            )}
            {
            isLoading ? (
                <div className='flex flex-auto items-center justify-center gap-5 px-10' >
                    <img src={ExercisingGif} alt="Loading..." className='Loading' />
                </div>
            ) : (
            (Favourites6) ? ( 
                <div key={Favourites6.id} >
                    <Link className='text-black no-underline' to={`/Workout/${Favourites6.id}`} >
                        <Output
                            figureStyle='flex flex-col gap-5 mb-5'
                            image={Favourites6.gifUrl}
                            imageStyle='rounded w-11/12 w-5/6 '
                            TitleStyle='capitalize font-bold text-center text-3xl'
                            Title={Favourites6.name}
                        >
                            <div className='flex flex-col gap-2 mt-5 text-center'>
                                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Favourites6.target}</h3>
                                <h3 className='font-bold text-2xl capitalize'>Equipment: {Favourites6.equipment}</h3> 
                            </div>
                        </Output>
                    </Link>
                    { ExerciseID6 ? <button onClick={() => RemoveFromFavourites(FavouritesID6)}>Remove from Favourites</button> : null
                    }
                </div>
            ) : ""
            )}
        </div>
    </article>
    
)
}

export default Favourites 