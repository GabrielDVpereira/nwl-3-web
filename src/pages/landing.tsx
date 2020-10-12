import React from "react";
import { FiArrowRight } from "react-icons/all";
import logoImg from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import "../styles/pages/landing.css";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanato e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Brasília, </strong>
          <main>DF</main>
        </div>
        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}
