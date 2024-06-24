import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Output from '../../Components/Common/Output/Output';

const Details:React.FC = () => {

    const [Details, setDetails] = useState("")
    const [Videos, setVideos] = useState([])
    const { id } = useParams();

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
    <div>
        <Output
            figureStyle='flex flex-row gap-5 mb-5'
            image={Details.gifUrl}
            imageStyle='rounded w-11/12 w-5/6 '
            TitleStyle='capitalize font-bold text-center text-3xl'
            Title={Details.name}
        >
            <div className='flex flex-col gap-2 mt-5 text-center'>
                <h3 className='font-bold text-2xl capitalize'>Target Muscle: {Details.target}</h3>
                <h3 className='font-bold text-2xl capitalize'>Equipment: {Details.equipment}</h3> 
            </div>
        </Output>
        <h2>YouTube Videos</h2>
        <section>
            {
                Videos?.slice(0,3).map((Video: any) => {
                    let ExerciseLink = Video.video.videoId
                    return(
                        <a href={`https://www.youtube.com/watch?v=${ExerciseLink}`} target='_blank' rel='noreferrer' className='Youtube'>
                            <img src={Video.video.thumbnails[0].url} alt="" />
                            <h3>{Video.video.title}</h3>
                        </a>
                    )
                })
            }
        </section>
    </div>
)
}

export default Details