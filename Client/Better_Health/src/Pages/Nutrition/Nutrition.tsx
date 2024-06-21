import React, { ChangeEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import SearchPage from '../../Components/Common/Search/SearchPage';

const Nutrition:React.FC = () => {

    const [Nutritions, setNutritions] = useState([])
    const [Search, setSearch] = useState("")
    const [SearchError, setSearchError] = useState("")

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const getRecipe = async (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly enter a search item.")
        } else {
            const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&q=${Search}`;
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '244993a79dmsh0fa01b82b28a5dbp1cdc42jsnf77dcbc9e24c',
                'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setSearchError("")
            setNutritions(data.hits)
        } catch (error) {
            console.error(error);
        }
        }
    }

    const onSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        if(Search === "") {
            setSearchError("Kindly enter a search item.")
        } else {
            const url = `https://edamam-recipe-search.p.rapidapi.com/api/recipes/v2?type=public&q=${Search}`;
            const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '244993a79dmsh0fa01b82b28a5dbp1cdc42jsnf77dcbc9e24c',
                'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setSearchError("")
            setNutritions(data.hits)
        } catch (error) {
            console.error(error);
        }
        }
    }

return (
    <div>
        <SearchPage
            idName= 'Nutrition'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-white'
            Heading= 'Search your desired dish?'
            HeadingStyle= 'font-bold text-5xl'
            formStyle= 'bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-2/5'
            Placeholder= 'Search your dish...'
            inputStyle= 'outline-none px-2 py-1 text-black w-11/12'
            Search= {Search}
            onChange= {handleSearch}
            onSubmit= {getRecipe}
            onClick= {onSearch}
            ButtonStyle= 'bg-Blue px-3 py-1 rounded'
            IconStyle= 'cursor-pointer'
            SearchError= {SearchError}
            Text= 'Search any recipe e.g burger, pizza, sandwich'
            ErrorStyle='text-red-700'
        />
        <section className='flex flex-col gap-10 items-center mb-10'>
        {
            (!Nutritions) ? <h2 className='font-bold text-red-700 text-center text-3xl'>No Results Found</h2> :
            Nutritions.map((Nutrition: any) => {
            return (
                    <div className='flex flex-col' >
                        <figure className='flex flex-row gap-20 px-5'>
                            <div className='w-2/5' >
                                <img src={Nutrition.recipe.image} alt="" className='mb-5 rounded' width="400px" />
                                <a href={Nutrition.recipe.url} target='_blank' rel='noreferrer' className='flex gap-2' >
                                    <p>Recipe Instructions</p><FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                </a>
                            </div>
                            <figcaption className='flex flex-col gap-2' >
                                <h2 className='capitalize font-bold text-3xl'>{Nutrition.recipe.label} <span>({Nutrition.recipe.cuisineType})</span> </h2>
                                <h3 className='font-bold text-red-700 text-2xl' >Calories : {Nutrition.recipe.calories.toFixed(2)}</h3>
                                <h4 className='font-bold text-xl'>Ingredients</h4>
                                <div>
                                    <ul className='list-disc list-inside'>
                                        {Nutrition.recipe.ingredientLines[0]? (<li>{Nutrition.recipe.ingredientLines[0]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[1]? (<li>{Nutrition.recipe.ingredientLines[1]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[2]? (<li>{Nutrition.recipe.ingredientLines[2]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[3]? (<li>{Nutrition.recipe.ingredientLines[3]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[4]? (<li>{Nutrition.recipe.ingredientLines[4]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[5]? (<li>{Nutrition.recipe.ingredientLines[5]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[6]? (<li>{Nutrition.recipe.ingredientLines[6]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[7]? (<li>{Nutrition.recipe.ingredientLines[7]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[8]? (<li>{Nutrition.recipe.ingredientLines[8]}</li>): null}
                                    </ul>
                                    <ul className='list-disc list-inside'>
                                    {Nutrition.recipe.ingredientLines[9]? (<li>{Nutrition.recipe.ingredientLines[9]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[10]? (<li>{Nutrition.recipe.ingredientLines[10]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[11]? (<li>{Nutrition.recipe.ingredientLines[11]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[12]? (<li>{Nutrition.recipe.ingredientLines[12]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[13]? (<li>{Nutrition.recipe.ingredientLines[13]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[14]? (<li>{Nutrition.recipe.ingredientLines[14]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[15]? (<li>{Nutrition.recipe.ingredientLines[15]}</li>): null}
                                        {Nutrition.recipe.ingredientLines[16]? (<li>{Nutrition.recipe.ingredientLines[16]}</li>): null}
                                    </ul>
                                </div>
                                <div className='flex gap-5 mt-5' >
                                    <section className='border-black list-none rounded px-10 py-5 shadow-custom-dark text-center w-32'>
                                        {<li>{Nutrition.recipe.totalNutrients.CA.label}</li>}
                                        {<li>{Nutrition.recipe.totalNutrients.CA.quantity.toFixed(2)}</li>}
                                    </section>
                                    <section className='border-black list-none rounded px-10 py-5 shadow-custom-dark text-center w-32'>
                                        {<li>{Nutrition.recipe.totalNutrients.FE.label}</li>}
                                        {<li>{Nutrition.recipe.totalNutrients.FE.quantity.toFixed(2)}</li>}
                                    </section>
                                    <section className='border-black list-none rounded px-10 py-5 shadow-custom-dark text-center w-32'>
                                        {<li>{Nutrition.recipe.totalNutrients.MG.label}</li>}
                                        {<li>{Nutrition.recipe.totalNutrients.MG.quantity.toFixed(2)}</li>}
                                    </section>
                                    <section className='border-black list-none rounded px-10 py-5 shadow-custom-dark text-center w-32'>
                                        {<li>{Nutrition.recipe.totalNutrients.ZN.label}</li>}
                                        {<li>{Nutrition.recipe.totalNutrients.ZN.quantity.toFixed(2)}</li>}
                                    </section>
                                    <section className='border-black list-none rounded px-10 py-5 shadow-custom-dark text-center w-32'>
                                        {<li>{Nutrition.recipe.totalNutrients.NA.label}</li>}
                                        {<li>{Nutrition.recipe.totalNutrients.NA.quantity.toFixed(2)}</li>}
                                    </section>
                                    <section className='border-black list-none rounded px-10 py-5 shadow-custom-dark text-center w-32'>
                                        {<li>{Nutrition.recipe.totalNutrients.K.label}</li>}
                                        {<li>{Nutrition.recipe.totalNutrients.K.quantity.toFixed(2)}</li>}
                                    </section>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
            )
            })} 
        </section>
    </div>
)
}

export default Nutrition