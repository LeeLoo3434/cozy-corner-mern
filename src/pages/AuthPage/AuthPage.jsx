import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  return (
    <main className="auth-page">
      <div className="image-container">
        <img src="/cozy-corner.jpeg" alt="cozy-corner" className="logo" />
      </div>
      <div className="container">
        <h2 className="slogan">
          Connecting and Creating Events for the Queer Community
        </h2>
      </div>
      <div className="form-container">
        <SignUpForm setUser={setUser} />
        <LoginForm setUser={setUser} />
      </div>
    </main>
  );
}