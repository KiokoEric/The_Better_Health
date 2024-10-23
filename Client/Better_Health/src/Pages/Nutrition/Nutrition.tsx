import React, { useState } from 'react';
import Status from '../../Components/Common/Status/Status';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchPage from '../../Components/Common/Search/SearchPage';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

const Nutrition:React.FC = () => {

    // USESTATE HOOK

    const [Search, setSearch] = useState<string>("")
    const [Nutritions, setNutritions] = useState<[]>([])
    const [SearchError, setSearchError] = useState<string>("")

    // ONSEARCH FUNCTION

    const onSearch = async (e: React.FormEvent) => { 
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
            HeadingStyle= 'capitalize font-bold text-3xl sm:text-5xl'
            formStyle= 'bg-white flex flex-row items-center justify-between gap-1 px-1 py-1 rounded w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/5'
            Placeholder= 'Search your dish...'
            inputStyle= 'outline-none px-2 py-1 text-black w-11/12'
            Search= {Search}
            onChange= {e => setSearch(e.target.value)}
            onSubmit= {onSearch}
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
                <figure className='flex flex-col items-center justify-center gap-5 px-2 sm:gap-5 lg:flex-row lg:items-start lg:justify-normal lg:gap-0 lg:px-1'>
                    <div className='flex flex-col items-center justify-center sm:w-2/5 sm:items-start sm:justify-start lg:w-1/5 xl:w-2/5'>
                        <img src={Nutrition.recipe.image} alt="" className='mb-5 rounded w-11/12'  />
                        <a href={Nutrition.recipe.url} target='_blank' rel='noreferrer' className='flex items-center gap-2' >
                            <p className='font-bold text-center text-xl sm:text-left hover:text-Blue'>Recipe Instructions</p><FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </a>
                    </div>
                    <figcaption className='flex flex-col items-center gap-2 lg:items-start'>
                        <h2 className='capitalize font-bold text-center text-3xl sm:text-left'>{Nutrition.recipe.label} <span>({Nutrition.recipe.cuisineType})</span> </h2>
                        <h3 className='font-bold text-red-700 text-2xl' >Calories : {Nutrition.recipe.calories.toFixed(2)}</h3>
                        <h4 className='font-bold text-xl'>Ingredients</h4>
                        <div>
                            <ul className='list-disc list-inside'>{Nutrition.recipe.ingredientLines[0]? (<li>{Nutrition.recipe.ingredientLines[0]}</li>): null}
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
                        <div className='grid grid-cols-3 items-center justify-center gap-2 mt-5 sm:grid-cols-3 lg:grid-cols-6 sm:gap-5 lg:gap-1 xl:gap-8'>
                            <Status
                                Label={Nutrition.recipe.totalNutrients.CA.label}
                                Quantity={Nutrition.recipe.totalNutrients.CA.quantity.toFixed(2)}
                                StatusStyle='border-black flex flex-col items-center list-none rounded px-5 py-5 shadow-custom-dark w-28 sm:w-32'
                            />
                            <Status
                                Label={Nutrition.recipe.totalNutrients.FE.label}
                                Quantity={Nutrition.recipe.totalNutrients.FE.quantity.toFixed(2)}
                                StatusStyle='border-black flex flex-col items-center list-none rounded px-5 py-5 shadow-custom-dark w-28 sm:w-32'
                            />
                            <Status
                                Label={Nutrition.recipe.totalNutrients.MG.label}
                                Quantity={Nutrition.recipe.totalNutrients.MG.quantity.toFixed(2)}
                                StatusStyle='border-black flex flex-col items-center list-none rounded px-5 py-5 shadow-custom-dark w-28 sm:w-32'
                            />
                            <Status
                                Label={Nutrition.recipe.totalNutrients.ZN.label}
                                Quantity={Nutrition.recipe.totalNutrients.ZN.quantity.toFixed(2)}
                                StatusStyle='border-black flex flex-col items-center list-none rounded px-5 py-5 shadow-custom-dark w-28 sm:w-32'
                            />
                            <Status
                                Label={Nutrition.recipe.totalNutrients.NA.label}
                                Quantity={Nutrition.recipe.totalNutrients.NA.quantity.toFixed(2)}
                                StatusStyle='border-black flex flex-col items-center list-none rounded px-5 py-5 shadow-custom-dark w-28 sm:w-32'
                            />
                            <Status
                                Label={Nutrition.recipe.totalNutrients.K.label}
                                Quantity={Nutrition.recipe.totalNutrients.K.quantity.toFixed(2)}
                                StatusStyle='border-black flex flex-col items-center list-none rounded px-5 py-5 shadow-custom-dark w-28 sm:w-32'
                            />
                        </div>
                    </figcaption>
                </figure>
            </div>
            )
        })
        } 
        </section>
    </div>
)
}

export default Nutrition
