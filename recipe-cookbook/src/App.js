import React, { useEffect } from 'react';
import './App.css';

const dotenv = require('dotenv');
dotenv.config();

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_APP_KEY;

  // console.log(`process.env.APP_ID: ${APP_ID}`)
  // console.log(`process.env.APP_KEY: ${APP_KEY}`)

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
  }

  return(
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' type='text'></input>
        <button className='search-button' type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
