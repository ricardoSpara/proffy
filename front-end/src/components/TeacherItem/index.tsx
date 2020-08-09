import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars0.githubusercontent.com/u/34757240?s=460&u=4d3df456070c8cace592d99314de06ffac39df7a&v=4"
          alt="Ricardo Sparapan"
        />
        <div>
          <strong>Ricardo Sparapan</strong>
          <span>Node.js</span>
        </div>
      </header>

      <p>
        I'm 21 years old and I'm passionate about technology.
        <br />
        <br />I like new challenges and especially to overcome expectations,
        always trying to learn and improve my techniques.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
