import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Output from '../../Components/Common/Output/Output';

const Details:React.FC = () => {

    const { id } = useParams()

    // USESTATE HOOK

    const [Videos, setVideos] = useState<[]>([])
    const [Details, setDetails] = useState<any>('')

    // CALLING ON THE DETAILS OF THE EXERCISE BY EXERCISE ID
    
    useEffect(() => {

    const ExerciseDetails = () => {

        const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`;  
        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
        };

        try {
            fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                setDetails(data)
        })
        } catch (error) {
            console.error(error);
        }
    }

    ExerciseDetails()

    }, [id])

    let Link = Details.name 

    // CALLING ON YOUTUBE VIDEOS BASED ON EXERCISE NAME

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

        if(Details) {
            YouTube()
        }
        
    }, [Details])


return (
    <div className='flex flex-col items-center justify-center mb-5 px-5'>
        <Output
            figureStyle='flex flex-col items-center gap-5 lg:flex-row w-10/12 lg:w-5/12'
            image={Details.gifUrl}
            imageStyle='rounded lg:w-10/12'
            TitleStyle='capitalize font-bold mb-20 text-center sm:text-left text-3xl underline'
            Title={Details.name}
        >
            <div className='flex flex-col gap-2 mt-2'>
                <h3 className='capitalize font-bold text-center sm:text-left text-2xl w-80'>Target Muscle: {Details.target}</h3>
                <h3 className='capitalize font-bold text-center sm:text-left text-2xl w-80'>Equipment: {Details.equipment}</h3> 
            </div>
        </Output>
        <h2 className='font-bold mt-5 mb-10 text-center text-blue-600 text-4xl underline' >YouTube Videos</h2>
        <section className='grid grid-cols-1 gap-10 items-center justify-center px-10 lg:grid-cols-3' >
            {
                Videos?.slice(0,3).map((Video: any) => {
                    let ExerciseLink = Video.video.videoId
                    return(
                        <a href={`https://www.youtube.com/watch?v=${ExerciseLink}`} target='_blank' rel='noreferrer' className='flex flex-col items-center justify-center'>
                            <img src={Video.video.thumbnails[0].url} alt="" className='rounded' />
                            <h3 className='capitalize font-bold mt-5 text-center text-2xl'>{Video.video.title}</h3>
                        </a>
                    )
                })
            }
        </section>
    </div>
)
}

export default Details