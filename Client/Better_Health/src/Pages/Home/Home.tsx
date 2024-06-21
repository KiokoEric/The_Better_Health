import React from 'react';
import { Link } from 'react-router-dom';
import Fitness_Image  from "../../assets/Fitness_Home_Image.jpg" 

const Home:React.FC = () => {
return (
    <div className='flex gap-2'>
        <section className='flex flex-col gap-10 mt-20 px-10 w-3/5 '>
            <h1 className='font-bold text-4xl'>Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom.</h1>
            <p className='text-lg'>
                Better Health is an online platform looking to provide online fitness and nutrition resources to its members as they pursue their goal of better health. Through the use of various exercise and nutrition resources we look to help our members to both start as well as continue on a path of continuous body fitness.
            </p>
            <h4 className='font-bold'>Please feel free to explore our available resources below.</h4>
            <div className='flex gap-5'>
                <button className='bg-Blue px-8 py-2 rounded'>
                    <Link to="/Exercise" className='text-center text-white no-underline'>Exercise</Link> 
                </button>
                <button className='bg-Blue px-8 py-2 rounded' >
                    <Link to="/Nutrition" className='text-center text-white no-underline'>Nutrition</Link>
                </button>
                <button className='bg-Blue px-8 py-2 rounded' >
                    <Link to="/Fitness_Calculator" className='text-center text-white no-underline'>Fitness Calculator</Link>
                </button>
                <button className='bg-Blue px-8 py-2 rounded' >
                    <Link to="/Workout" className='text-center text-white no-underline'>My Workout</Link>
                </button>
            </div>
        </section>
        <section>
            <figure>
                <img src={Fitness_Image} alt="" />
            </figure>
        </section>
    </div>
)
}

export default Home