# 1. Advanced Data Handling with React Query

## Objective
Implement advanced data fetching and management in a React application using **React Query**, focusing on handling API interactions efficiently and improving user interface responsiveness.

---

## Task Description
This task involves integrating **React Query** into a React project to fetch, cache, and update data from a public API. You’ll build a component that handles these data operations smoothly, demonstrating the capabilities of React Query in optimizing data interactions in React applications.

---

## API Details
**API Used:** [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts)

**Endpoint for fetching posts:**
\`\`\`
https://jsonplaceholder.typicode.com/posts
\`\`\`

---

## Step 1: Set Up React Query in the Project

### Project Setup
Run the following commands to set up your project:
\`\`\`bash
npm create vite@latest react-query-demo -- --template react
cd react-query-demo
npm install react-query
\`\`\`

### React Query Integration
Integrate React Query into your app’s main component:

\`\`\`javascript
import { QueryClient, QueryClientProvider } from 'react-query';
import PostsComponent from './PostsComponent';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsComponent />
    </QueryClientProvider>
  );
}

export default App;
\`\`\`

---

## Step 2: Create a Component to Fetch Data

Create a component called **PostsComponent** and use the `useQuery` hook to fetch data from the API.

\`\`\`javascript
import { useQuery } from 'react-query';

function PostsComponent() {
  const { data, error, isLoading, refetch } = useQuery('posts', () =>
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json())
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading posts!</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
\`\`\`

---

## Step 3: Implement Features for Caching and Updating Data

### Demonstrate React Query Caching
- Navigate away and back to the **PostsComponent** — data should load instantly from the cache.
- Observe network requests — fewer calls indicate caching is working.

### Refetching
- Click **“Refetch Posts”** to update the data on demand.

---

## Step 4: Testing and Evaluation

### Functionality Checklist
✅ Data fetching works properly  
✅ Loading and error states handled  
✅ Caching reduces repeated requests  
✅ Refetch button updates posts  

Use **React Developer Tools** to inspect the React Query cache and **Browser DevTools** to confirm reduced API calls.

---

## Repository Details
**GitHub Repository:** `alx-fe-reactjs`  
**Directory:** `react-query-demo`

---

## Author
Created by **Van Elloh Rodney Bright** — Demonstrating efficient data handling using **React Query**.
