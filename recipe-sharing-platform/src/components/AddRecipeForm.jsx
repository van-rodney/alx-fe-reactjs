import React, { useState } from 'react';import React, { useState } from 'react';



const AddRecipeForm = () => {const AddRecipeForm = () => {

  const [title, setTitle] = useState('');  const [title, setTitle] = useState('');

  const [ingredients, setIngredients] = useState('');  const [ingredients, setIngredients] = useState('');

  const [steps, setSteps] = useState('');  const [steps, setSteps] = useState('');

  const [errors, setErrors] = useState({});  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState(false);  const [success, setSuccess] = useState(false);



  const validate = () => {  const validate = () => {

    const newErrors = {};    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is required.';    if (!title.trim()) newErrors.title = 'Title is required.';

    if (!ingredients.trim()) {    if (!ingredients.trim()) {

      newErrors.ingredients = 'Ingredients are required.';      newErrors.ingredients = 'Ingredients are required.';

    } else if (ingredients.split('\n').length < 2) {    } else if (ingredients.split('\n').length < 2) {

      newErrors.ingredients = 'Please enter at least two ingredients.';      newErrors.ingredients = 'Please enter at least two ingredients.';

    }    }

    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';    if (!steps.trim()) newErrors.steps = 'Preparation steps are required.';

    return newErrors;    return newErrors;

  };  };



  const handleSubmit = (e) => {  const handleSubmit = (e) => {

    e.preventDefault();    e.preventDefault();

    const validationErrors = validate();    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);      setErrors(validationErrors);

      setSuccess(false);      setSuccess(false);

      return;      return;

    }    }

    setErrors({});    setErrors({});

    setSuccess(true);    setSuccess(true);

    // Here you would handle the form submission, e.g., send to backend or update state    // Here you would handle the form submission, e.g., send to backend or update state

  };  };



  return (  return (

    <div className="container mx-auto px-4 py-8 max-w-lg">    <div className="container mx-auto px-4 py-8 max-w-lg">

      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>      <h2 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">

        <div className="mb-4">        <div className="mb-4">

          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>          <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>

          <input          <input

            type="text"            type="text"

            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"

            value={title}            value={title}

            onChange={(e) => setTitle(e.target.value)}            onChange={(e) => setTitle(e.target.value)}

            placeholder="Enter recipe title"            placeholder="Enter recipe title"

          />          />

          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}

        </div>        </div>

        <div className="mb-4">        <div className="mb-4">

          <label className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>          <label className="block text-gray-700 font-semibold mb-2">Ingredients (one per line)</label>

          <textarea          <textarea

            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"

            value={ingredients}            value={ingredients}

            onChange={(e) => setIngredients(e.target.value)}            onChange={(e) => setIngredients(e.target.value)}

            rows={4}            rows={4}

            placeholder="e.g. 2 eggs\n100g flour"            placeholder="e.g. 2 eggs\n100g flour"

          />          />

          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}

        </div>        </div>

        <div className="mb-4">        <div className="mb-4">

          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>          <label className="block text-gray-700 font-semibold mb-2">Preparation Steps (one per line)</label>

          <textarea          <textarea

            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"

            value={steps}            value={steps}

            onChange={(e) => setSteps(e.target.value)}            onChange={(e) => setSteps(e.target.value)}

            rows={4}            rows={4}

            placeholder="e.g. Mix ingredients\nBake for 20 minutes"            placeholder="e.g. Mix ingredients\nBake for 20 minutes"

          />          />

          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}

        </div>        </div>

        <button        <button

          type="submit"          type="submit"

          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"

        >        >

          Submit Recipe          Submit Recipe

        </button>        </button>

        {success && (        {success && (

          <p className="text-green-500 text-center mt-4">Recipe submitted successfully!</p>          <p className="text-green-500 text-center mt-4">Recipe submitted successfully!</p>

        )}        )}

      </form>      </form>

    </div>    </div>

  );  );

};};



export default AddRecipeForm;export default AddRecipeForm;

