import React, { useEffect, useState } from 'react'
import axios from "axios"
import "../style.css"


const Meals = () => {

    const [item,setItem]=useState([])

    useEffect(()=>{
        axios
        .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
        .then((res)=>{
            setItem(res.data.meals)
        })
        .catch((err)=>{
            console.log(err)
        })    
    },[])

const itemlist= item.map(({strMeal,strMealThumb,idMeal})=>{
    return(
        <section className='card'>
            <img src={strMealThumb} alt={strMeal} />
            <section className='content'>
                <p>{strMeal}</p>
                <p>#{idMeal}</p>
            </section>
        </section>
    )
})

  return (
    <div className='container'>
     {itemlist}
    </div>
  )
}

export default Meals;
