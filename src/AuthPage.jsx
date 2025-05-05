import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Checkbox } from "primereact/checkbox";
import { MdEmail } from "react-icons/md";

export default function AuthPage() {
  const [state, setState] = useState("signUp");

  return (
    <div
      className="
    text-base w-full mx-8 rounded-md border border-gray-200 p-4 
    flex flex-col items-center justify-center
    sm:w-[75%] md:w-[50%] lg:w-[40%] xl:w-[30%] shadow-lg"
    >
      <h1 className="font-semibold text-lg mb-2">
        {state === "logIn" ? "Log In" : "Sign Up"}
      </h1>
      {/* <form
        action="submit"
        method="post"
        className="flex flex-col gap-4 w-full my-2 "
      >
        <input
          type="email"
          name="email"
          id="email"
          value={signInForm.email}
          onChange={handleFormChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="email"
        />

        <input
          type="password"
          name="password"
          id="password"
          value={signInForm.password}
          onChange={handleFormChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg"
          placeholder="password"
        />

        <div>
          <Checkbox
            name="rememberMe"
            onChange={handleFormChange}
            checked={signInForm.rememberMe}
            className="text-base"
          />
          <label htmlFor="rememberMe" className="px-3">
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="px-2 py-2 rounded-lg bg-blue-500 font-semibold text-white"
        >
          Sign Up
        </button>
      </form> */}

      {/* Oauth Block */}
      {(state === "signUp" || state === "logIn") && (
        <OAuth2 state={state} setState={setState} />
      )}

      {state === "emailSignUp" && <SignUpViaEmail />}

      {state === "logIn" && <DividerOR />}

      {state === "logIn" && <LogInViaEmail />}
      {/* forward to login */}
      {(state === "signUp" || state === "logIn") && (
        <div className="flex flex-col items-center justify-center sm:flex-row gap-2 my-2">
          {state === "signUp" ? <p>Already have an account ?</p> : <p>Don't have an account ?</p>}
          
          <button
            type="button"
            className="ml-2 underline underline-offset-2 cursor-pointer text-blue-500 "
            onClick={() => {
              if(state === "signUp"){
                setState("logIn");
              }else{
                setState("signUp");
              }
              
            }}
          >
            {state === "signUp" ? <span>Log In</span> : <span>Sign Up</span>}
          </button>
        </div>
      )}
    </div>
  );
}

function LogInViaEmail() {
  const [logInForm, setLogInForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  function handleFormChange(e) {
    const { name, value, checked, type } = e.target;
    setLogInForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function resetForm() {
    setLogInForm({
      email: "",
      password: "",
      rememberMe: false,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted sucessfully", logInForm);
    console.log(logInForm);
    resetForm();
  }

  return (
    <form
      action="submit"
      method="post"
      className="flex flex-col gap-4 w-full my-2 "
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        id="email"
        value={logInForm.email}
        onChange={handleFormChange}
        required
        className="w-full p-3 py-2 border border-gray-200 rounded-lg"
        placeholder="email"
      />

      <input
        type="password"
        name="password"
        id="password"
        value={logInForm.password}
        onChange={handleFormChange}
        required
        className="w-full p-3 py-2 border border-gray-200 rounded-lg"
        placeholder="password"
      />

      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between ">
        <div className="flex items-center gap-3">
          <Checkbox
            name="rememberMe"
            onChange={handleFormChange}
            checked={logInForm.rememberMe}
            className="text-base my-1 sm:my-0"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <p className="w-full sm:w-fit text-center mt-6 mb-1 sm:m-0 text-blue-500 underline underline-offset-2 cursor-pointer">
          Forget Password ?
        </p>
      </div>

      <button
        type="submit"
        className="p-2 mt-2 rounded-lg bg-blue-500 font-semibold text-white cursor-pointer"
      >
        Log In
      </button>
    </form>
  );
}

function SignUpViaEmail() {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleFormChange(e) {
    const { name, value, checked, type } = e.target;
    setSignUpForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function resetForm() {
    setSignUpForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (signUpForm.password !== signUpForm.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Form submitted sucessfully", signUpForm);
    console.log(signUpForm)
    resetForm();
  }

  return (
    <form
      action="submit"
      method="post"
      className="flex flex-col gap-4 w-full my-2 "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        id="name"
        value={signUpForm.name}
        onChange={handleFormChange}
        required
        className="w-full p-3 py-2 border border-gray-300 rounded-lg"
        placeholder="name"
      />
      <input
        type="email"
        name="email"
        id="email"
        value={signUpForm.email}
        onChange={handleFormChange}
        required
        className="w-full p-3 py-2 border border-gray-300 rounded-lg"
        placeholder="email"
      />

      <input
        type="password"
        name="password"
        id="password"
        value={signUpForm.password}
        onChange={handleFormChange}
        required
        className="w-full p-3 py-2 border border-gray-300 rounded-lg"
        placeholder="password"
      />

      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={signUpForm.confirmPassword}
        onChange={handleFormChange}
        required
        className={`w-full p-3 py-2 border rounded-lg ${
          signUpForm.confirmPassword &&
          signUpForm.confirmPassword !== signUpForm.password
            ? "border-red-500"
            : "border-gray-300"
        }`}
        placeholder="confirm password"
        // onFocus={signUpForm.confirmPassword ? }
      />

      <button
        type="submit"
        className="px-2 py-2 rounded-lg bg-blue-500 font-semibold text-white cursor-pointer"
      >
        Sign Up
      </button>
    </form>
  );
}

function DividerOR() {
  return (
    <div className="w-full flex justify-between items-center my-2">
      <div className="w-full border-t border-gray-200"></div>
      <p className="px-2">or</p>
      <div className="w-full border-t border-gray-200"></div>
    </div>
  );
}

function OAuth2({ state, setState }) {
  const OAuth = [
    {
      id: 1,
      provider: "google",
      icon: FcGoogle,
      iconColor: { light: "", dark: "" },
      onClick() {},
    },
    {
      id: 2,
      provider: "github",
      icon: FaGithub,
      iconColor: { light: "text-gray-950", dark: "text-gray-100" },
      onClick() {},
    },
    {
      id: 3,
      provider: "facebook",
      icon: FaFacebook,
      iconColor: {
        light: "text-blue-600",
        dark: "text-blue-600",
      },
      onClick() {},
    },
    {
      id: 4,
      provider: "email",
      icon: MdEmail,
      iconColor: {
        light: "text-gray-900",
        dark: "text-gray-100",
      },
      onClick() {
        setState("emailSignUp");
      },
    },
  ];

  return (
    <>
      {OAuth.map((ele) => {
        if (state === "logIn" && ele.provider === "email") return null; // skip GitHub on signUp
        return (
          <div
            key={ele.id}
            className="p-2 m-2 border border-gray-200 w-full 
            flex gap-2 items-center justify-center rounded-lg cursor-pointer hover:bg-gray-200"
            onClick={ele.onClick}
          >
            <ele.icon className={ele.iconColor.light} />
            <span>
              {state === "signUp" ? "Sign in with" : "Continue with"}{" "}
              {ele.provider}
            </span>
          </div>
        );
      })}
    </>
  );
}
