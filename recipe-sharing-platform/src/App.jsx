import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './src/components/HomePage';
import RecipeDetail from './src/components/RecipeDetail';
import AddRecipeForm from './src/components/AddRecipeForm';

function App() {
  return (
    <Router>
         {/* Navigation bar */}
      <nav className="p-4 bg-gray-100 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/add">Add Recipe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
