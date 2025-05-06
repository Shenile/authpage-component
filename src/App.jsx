import React from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import AuthPage from "./AuthPage";

function App() {
  return (
    <div className="min-w-full min-h-screen flex items-center justify-center max-w-lg">
      <AuthPage
        onOAuthClick={(provider) => {
          console.log("OAuth clicked (provider) : ", provider);
        }}

        onLogIn={(data)=>{
          console.log(data);
        }}

        onSignUp={(data)=>{
          console.log(data);
        }}
      />
    </div>
  );
}

export default App;
