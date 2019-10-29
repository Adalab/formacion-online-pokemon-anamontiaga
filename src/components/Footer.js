import React from "react";
import "../stylesheets/Footer.scss";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import gitlab from "../images/gitlab.png";
import telegram from "../images/telegram.png";
import twitter from "../images/twitter.png";
import logoPoke from "../images/logoPoke.png";

const Footer = props => {
  return (
    <div className="poke--footer">
      <div className="poke--footer__author">
        <img src={logoPoke} alt="" className="poke--footer__logo"></img>
        <p className="poke--footer__text">
          {" "}
          2019 Design by Ana Montiaga <br />
          for Adalab <br />
          Inspired on{" "}
          <a className="poke--footer__pokedex--link" href="https://pokedex.org">
            Pokedex
          </a>
        </p>
      </div>
      <div className="poke--footer__social">
        <a target="_blank" rel="noopener noreferrer" href="https://t.me/anamontiaga/App">
          <img src={telegram} alt="" className="poke--footer__telegram"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anamontiaga/?locale=en_US">
          <img src={linkedin} alt="" className="poke--footer__linkedin"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/anamontiaga">
          <img src={gitlab} alt="" className="poke--footer__gitlab"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/anamontiaga">
          <img src={github} alt="" className="poke--footer__github"></img>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/AMontiaga">
          <img src={twitter} alt="" className="poke--footer__twitter"></img>
        </a>
      </div>
    </div>
  );
};
export default Footer;
