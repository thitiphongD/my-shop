"use client";
import React, { useState } from "react";
import SignInForm from "../components/form/SignForm";
import SignUpForm from "../components/form/SignUpForm";

enum FormType {
  SignIn = "signIn",
  SignUp = "signUp",
}

const AuthPage = () => {
  const [formType, setFormType] = useState<FormType>(FormType.SignIn);

  const handleForm = () => {
    setFormType((prevType) =>
      prevType === FormType.SignIn ? FormType.SignUp : FormType.SignIn
    );
  };

  return (
    <div className="flex flex-col items-center justify-between py-24">
      {formType === FormType.SignIn ? <SignInForm /> : <SignUpForm />}

      <span
        className="text-blue-600 text-sm cursor-pointer"
        onClick={handleForm}
      >
        {formType === FormType.SignIn
          ? "Create account."
          : "Already have an account? Sign in."}
      </span>
    </div>
  );
};

export default AuthPage;
