import React, { useState } from 'react';
import Input from '../../Components/Common/Input/Input';
import Select from '../../Components/Common/Select/Select';
import Button from '../../Components/Common/Button/Button';

const Fitness: React.FC = () => {

    // USESTATE HOOK

    const[Items, setItems]= useState<any>([])
    const[Calories, setCalories] = useState<[]>([])
    const[Height, setHeight] = useState<string>("")
    const[Weight, setWeight] = useState<string>("")
    const[Pounds, setPounds] = useState<string>("")
    const[Minutes, setMinutes] = useState<string>("")
    const[BMIError, setBMIError] = useState<string>("")
    const[Activity, setActivity] = useState<string>("")
    const[CaloriesError, setCaloriesError] = useState<string>("")

    // BMI CALCULATOR FUNCTION

    const BMICalculator = async () => {
        if (Height === "" && Weight === ""){
            setBMIError("Kindly enter your height and weight.")
        } else {
            const url = `https://bmi-calculator6.p.rapidapi.com/bmi?height=${Height}&weight=${Weight}&system=metric`;
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5900d31798msha8dd7877bd6558dp109800jsn25f147783e1b',
                'X-RapidAPI-Host': 'bmi-calculator6.p.rapidapi.com'
            }
        };

            fetch(url, options)
            .then((response) => response.json()) 
            .then((data) => {
                setBMIError("")
                setItems(data)
            })
            .catch(err => console.error(err))
        }
        
    }

    // CALORIE CALCULATOR FUNCTION

    const CalorieCalculator = () => {

        if(Activity === "") {
            setCaloriesError("Kindly select among the options above.")
        } else{
            const url = `https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned?activity=${Activity}&weight=${Pounds}&duration=${Minutes}`;
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '244993a79dmsh0fa01b82b28a5dbp1cdc42jsnf77dcbc9e24c',
                'X-RapidAPI-Host': 'calories-burned-by-api-ninjas.p.rapidapi.com'
            }
        };

        try {
            fetch(url, options)
            .then((response) => response.json())
            .then((result) => {
                setCaloriesError("")
                setCalories(result)
            })
        } catch (error) {
            console.error(error);
        }
        }
    }

    return (
        <div className='flex flex-col gap-5 sm:gap-10'>
            <article className='grid grid-cols-1 gap-10 px-5 py-5 sm:grid-cols-2'>
                <section className='bg-LightBlue h-155 px-5 py-5 rounded-BodyMass sm:h-150 md:h-120 lg:h-100 xl:h-85'>
                    <h1 className='font-bold text-center text-4xl mb-5 xl:text-left'>
                        Body Mass Index Calculator
                    </h1>
                    <p className='text-lg'>
                        Body mass index is a measure of body fat based on height and weight that applies to adult men and women. It is a person’s weight in kilograms (or pounds) divided by the square of height in meters (or feet). <br /> A BMI for adult women and men between 18.5 and 24.9 is considered healthy. A BMI lower than 18.5 is considered underweight, whereas a BMI between 25.0 and 29.9 equates with overweight and 30.0 and above with obesity. <br /> BMI screens for weight categories that may lead to health problems, but it does not diagnose the body fatness or health of an individual.
                    </p>
                </section>
                <section className='flex flex-col gap-2 items-center justify-center' >
                    <h2 className='font-bold text-3xl'>Enter your details below</h2>
                    <div className='flex flex-col gap-10 text-center sm:gap-20 xl:flex-row xl:text-left'>
                        <form className='flex flex-col gap-3'>
                            <Input
                                ContainerStyle='flex flex-col gap-2'
                                Label='Height'
                                LabelStyle='font-bold text-xl'
                                Placeholder='Enter height in centimetres'
                                inputStyle='border-black border-b h-8 outline-none px-1 py-2 text-black text-center truncate w-52'
                                Change={(e: any) => setHeight(e.target.value)}
                            />
                        </form>
                        <form className='flex flex-col gap-3'>
                            <Input
                                ContainerStyle='flex flex-col gap-2'
                                Label='Weight'
                                LabelStyle='font-bold text-xl'
                                Placeholder='Enter weight in kilograms'
                                inputStyle='border-black border-b h-8 outline-none px-1 py-2 text-black text-center truncate w-52'
                                Change={(e: any) => setWeight(e.target.value)}
                            />
                        </form> 
                    </div>
                    <span>{BMIError}</span>
                    <Button
                        ButtonText='Calculate'
                        ButtonStyle='bg-Blue cursor-pointer mt-6 py-2 rounded-sm text-center text-white w-52'
                        onClick={BMICalculator}
                    />
                    <div className='flex gap-10 items-center justify-center mt-5'>
                        <h3 className='font-bold text-2xl py-2 '>BMI Value: <span className='mr-2 text-red-700 underline'>{Items.BMI}</span></h3>
                        <h3 className='font-bold text-2xl py-2'>Class: <span className='mr-2 text-red-700 underline'>{Items.Class}</span></h3>
                    </div>
                </section>
            </article>
            <article className='flex flex-col gap-10 px-4 py-4 sm:flex-row-reverse'>
                <section className='bg-LightBlue h-160 px-4 py-5 rounded-Calories w-full sm:w-1/2 lg:h-110'>
                    <h1 className=' font-bold text-center text-4xl mb-5 xl:text-left'>
                        Calories Burned
                    </h1>
                    <p className='text-lg'>
                        Being active is important for any weight-loss or weight-maintenance program. When you're active, your body uses more energy (calories). And when you burn more calories than you consume, you lose weight.
                    </p>
                    <h3 className='font-bold mb-5 mt-5 text-center text-2xl xl:telft'>Benefits of burning calories</h3>
                    <ul className=' flex flex-col gap-2 list-disc list-inside' >
                        <li>
                        Ensuring your blood vessels stay healthier and lowering your risk of cardiovascular diseases.
                    </li>
                    <li>
                        Protecting you from illnesses like diabetes and helping you control the condition if you already have it.
                    </li>
                    <li>
                        Improving your mood and lowering stress and feelings of anxiety.
                    </li>
                    <li>
                        Helping with weight management.
                    </li>
                </ul>
                </section>
                <section className='flex flex-col items-center justify-center gap-5 m-auto text-center sm:w-1/2 xl:text-left'>
                    <h2 className='font-bold text-3xl'>Enter your details below</h2>
                    <div className='flex flex-col gap-5 items-center justify-center xl:flex-row'>
                        <form  className='flex flex-col gap-2'> 
                            <h4 className='font-bold text-lg'>Activity</h4>
                            <div>
                                <Select SelectStyle='border-black border-b h-8 outline-none px-2 py-1 text-black text-center w-80 xl:w-72' Search={Activity} onSearch={e => setActivity(e.target.value)} >
                                    <option value="">Search among the activities below</option>
                                    <option value="skiing">Skiing</option>
                                    <option value="Water">Water Activities</option>
                                    <option value="Run">Walking/Running</option>
                                    <option value="Rope">Jumping Rope</option>
                                    <option value="Horse">Horse Riding</option>
                                    <option value="Golf">Golf</option>
                                    <option value="Calisthenics">Calisthenics</option>
                                    <option value="Aerobics">Aerobics</option>
                                    <option value="cycling">Cycling</option>
                                </Select>
                            </div>
                        </form>
                        <form className='flex flex-col gap-3'>
                            <Input
                                ContainerStyle='flex flex-col gap-2'
                                Label='Weight'
                                LabelStyle='font-bold text-xl'
                                Placeholder='Enter weight in pounds'
                                inputStyle='border-black border-b h-8 outline-none px-1 py-2 text-black text-center truncate w-80 xl:w-64'
                                Change={(e: any)=> setPounds(e.target.value)}
                            />
                        </form> 
                    </div>
                    <form className='flex flex-col justify-center gap-2'>
                        <Input
                            ContainerStyle='flex flex-col gap-2'
                            Label='Duration'
                            LabelStyle='font-bold text-lg'
                            Placeholder='Enter duration in minutes'
                            inputStyle='border-black border-b h-8 outline-none  px-1 py-2 text-black text-center truncate w-80 xl:w-96'
                            Change={(e: any) => setMinutes(e.target.value)}
                        />
                    </form>
                    <span>{CaloriesError}</span>
                    <Button
                        ButtonText='Calculate'
                        ButtonStyle='bg-Blue cursor-pointer py-2 rounded-sm text-center text-white w-52'
                        onClick={CalorieCalculator}
                    />
                    <section className='flex flex-col justify-center gap-5'>
                        {Calories.map((Calory: any) => {
                            return (
                                <div className='grid grid-cols-2 items-center justify-center gap-5'>
                                    <h4 className='capitalize font-bold text-lg underline'>Activity: {Calory.name}</h4>
                                    <h4 className='capitalize font-bold text-lg underline'>Calories: {Calory.total_calories}</h4>
                                    </div>
                            )
                        })
                        }
                    </section>
                </section>
            </article>
        </div>
    )
}

export default Fitness