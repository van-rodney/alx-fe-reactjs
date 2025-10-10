import React, { useEffect, useState } from 'react';import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';import { useParams, Link } from 'react-router-dom';



const RecipeDetail = () => {const RecipeDetail = () => {

  const { id } = useParams();  const { id } = useParams();

  const [recipe, setRecipe] = useState(null);  const [recipe, setRecipe] = useState(null);



  useEffect(() => {  useEffect(() => {

    fetch('/src/data.json')    fetch('/src/data.json')

      .then((res) => res.json())      .then((res) => res.json())

      .then((data) => {      .then((data) => {

        const found = data.find((r) => r.id === Number(id));        const found = data.find((r) => r.id === Number(id));

        setRecipe(found);        setRecipe(found);

      });      });

  }, [id]);  }, [id]);



  if (!recipe) {  if (!recipe) {

    return <div className="text-center py-8">Loading...</div>;    return <div className="text-center py-8">Loading...</div>;

  }  }



  return (  return (

    <div className="container mx-auto px-4 py-8">    <div className="container mx-auto px-4 py-8">

      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Home</Link>      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Home</Link>

      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">      <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">

        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-6" />        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-6" />

        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>

        <p className="text-gray-700 mb-6">{recipe.summary}</p>        <p className="text-gray-700 mb-6">{recipe.summary}</p>

        <div className="mb-6">        <div className="mb-6">

          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>          <h2 className="text-xl font-semibold mb-2">Ingredients</h2>

          <ul className="list-disc list-inside text-gray-600">          <ul className="list-disc list-inside text-gray-600">

            {recipe.ingredients && recipe.ingredients.map((ingredient, idx) => (            {recipe.ingredients && recipe.ingredients.map((ingredient, idx) => (

              <li key={idx}>{ingredient}</li>              <li key={idx}>{ingredient}</li>

            ))}            ))}

          </ul>          </ul>

        </div>        </div>

        <div>        <div>

          <h2 className="text-xl font-semibold mb-2">Instructions</h2>          <h2 className="text-xl font-semibold mb-2">Instructions</h2>

          <ol className="list-decimal list-inside text-gray-600">          <ol className="list-decimal list-inside text-gray-600">

            {recipe.instructions && recipe.instructions.map((step, idx) => (            {recipe.instructions && recipe.instructions.map((step, idx) => (

              <li key={idx}>{step}</li>              <li key={idx}>{step}</li>

            ))}            ))}

          </ol>          </ol>

        </div>        </div>

      </div>      </div>

    </div>    </div>

  );  );

};};



export default RecipeDetail;export default RecipeDetail;

