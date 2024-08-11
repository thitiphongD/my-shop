"use client";
import React, { useState } from "react";
import SignInForm from "../components/form/SignInForm";
import SignUpForm from "../components/form/SignUpForm";

export enum AuthFormType {
  SignIn = 1,
  SignUp,
}

const AuthPage = () => {
  const [formType, setFormType] = useState<AuthFormType>(AuthFormType.SignIn);

  const handleForm = () => {
    setFormType((prevType) =>
      prevType === AuthFormType.SignIn
        ? AuthFormType.SignUp
        : AuthFormType.SignIn
    );
  };

  return (
    <div className="flex flex-col items-center justify-between py-24">
      <span>Welcome to SHOP STORE</span>
      <br />
      {formType === AuthFormType.SignIn ? (
        <SignInForm />
      ) : (
        <SignUpForm onBack={handleForm} />
      )}

      <span
        className="text-blue-600 text-sm cursor-pointer"
        onClick={handleForm}
      >
        {formType === AuthFormType.SignIn
          ? "Create account."
          : "Already have an account? Sign in."}
      </span>
    </div>
  );
};

export default AuthPage;
