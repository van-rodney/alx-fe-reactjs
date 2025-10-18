import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import RegistrationForm from "./components/registrationform";
import FormikForm from "./components/formikForm";
import PostsComponent from "./components/PostsComponent";

// Create QueryClient instance
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RegistrationForm />
        <FormikForm />
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;