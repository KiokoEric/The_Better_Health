import React from 'react';
import Navigate from '../../Components/Common/Navigate/Navigate';
import Fitness_Image  from "../../assets/Fitness_Home_Image.jpg";

const Home:React.FC = () => {
return (
    <div className='flex gap-2 items-center justify-center mb-5 lg:items-start'>
        <section className='flex flex-col gap-10 mt-5 px-3 text-center w-11/12 lg:mt-5 lg:text-left lg:w-3/5 lg:px-10'>
            <h1 className='font-bold text-center text-4xl'>Exercise is king. Nutrition is queen. Put them together and you’ve got a kingdom.</h1>
            <p className='text-lg'>
                Better Health is an online platform looking to provide online fitness and nutrition resources to its members as they pursue their goal of better health. Through the use of various exercise and nutrition resources we look to help our members to both start as well as continue on a path of continuous body fitness.
            </p>
            <h4 className='font-bold text-center'>Please feel free to explore our available resources below.</h4>
            <div className='grid gap-5 xl:grid-cols-4'>
                <Navigate 
                    Navigation={'/Exercise'}
                    NavigateStyle='bg-Blue no-underline px-8 py-2 text-center text-white rounded'
                    NavigateText='Exercise'
                />
                <Navigate 
                    Navigation={'/Nutrition'}
                    NavigateStyle='bg-Blue no-underline px-8 py-2 text-center text-white rounded'
                    NavigateText='Nutrition'
                />
                <Navigate 
                    Navigation={'/Fitness_Calculator'}
                    NavigateStyle='bg-Blue no-underline px-3 py-2 text-center text-white rounded'
                    NavigateText='Fitness Calculator'
                />
                <Navigate 
                    Navigation={'/MyWorkout'}
                    NavigateStyle='bg-Blue no-underline px-8 py-2 text-center text-white rounded'
                    NavigateText='My Workout'
                />
            </div>
        </section>
        <section className='hidden lg:block'>
            <figure>
                <img src={Fitness_Image} alt="" />
            </figure>
        </section>
    </div>
)
}

export default Home