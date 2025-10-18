import React from "react";
import RegistrationForm from "./components/registrationform";
import FormikForm from "./components/formikForm";
import PostsComponent from "./components/PostsComponent";

function App() {
  return (
    <div>
      <RegistrationForm />
      <FormikForm />
      <PostsComponent />
    </div>
  );
}

export default App;