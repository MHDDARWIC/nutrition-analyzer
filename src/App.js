import React, { useEffect, useState } from 'react';
import Recipe from './recipe';
import styles from './App.module.css'
import LogoImg from './assets/nlogo.png'

const App = () => {
  const APP_ID = '1d77d6ae';
  const APP_KEY = '3e1ac5eaeeaa9b356031bdda7eb0110a';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')


  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits);
  }

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  
  return (
    <div className={styles.gridContainer}>
      <div className={styles.init}>
        <img src={LogoImg} className={styles.logoImg}></img>
        <p className={styles.pStyle}>Welcome to Nutrition Analyzer!</p>
        <p className={styles.pStyle}> To get started, search for a recipe and find the result you want.</p>
        <p className={styles.pStyle}>Nutrition Analyzer gives you a detailed anaylysis of nutrients in each recipe, helping you achieve your ultimate fitness goals.</p>
        <form onSubmit={getSearch} className="search-form">
          <input className={styles.searchBar} type="text" value={search} placeholder="(eg: Steak)" onChange={handleChange} />
          <br/>
          <button className={styles.searchButton} type="submit" >Search</button>
        </form>
      </div>

      <div className={styles.results}>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            carbs={recipe.recipe.totalNutrients.CHOCDF.quantity}
            cholestorol={recipe.recipe.totalNutrients.CHOLE.quantity}
            monounsaturated={recipe.recipe.totalNutrients.FAMS.quantity}
            polyunsaturated={recipe.recipe.totalNutrients.FAPU.quantity}
            saturated={recipe.recipe.totalNutrients.FASAT.quantity}
            totalfat={recipe.recipe.totalNutrients.FAT.quantity}
            fiber={recipe.recipe.totalNutrients.FIBTG.quantity}
            potassium={recipe.recipe.totalNutrients.K.quantity}
            sodium={recipe.recipe.totalNutrients.NA.quantity}
            protein={recipe.recipe.totalNutrients.PROCNT.quantity}
            sugars={recipe.recipe.totalNutrients.SUGAR.quantity}
            vitaminE={recipe.recipe.totalNutrients.TOCPHA.quantity}
            vitaminA={recipe.recipe.totalNutrients.VITA_RAE.quantity}
            vitaminB12={recipe.recipe.totalNutrients.VITB12.quantity}
            vitaminB6={recipe.recipe.totalNutrients.VITB6A.quantity}
            vitaminC={recipe.recipe.totalNutrients.VITC.quantity}
            vitaminD={recipe.recipe.totalNutrients.VITD.quantity}
            vitaminK={recipe.recipe.totalNutrients.VITK1.quantity}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  )
}
export default App;
