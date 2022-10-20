import React from "react";
import "./aboutme.css";
import "../../index.css";
import pictureHome from "../../assets/pictureHome.png";

function AboutMe() {
  return (
    <section>
      <div className="container" id="aboutMe">
        <img className="imgHome" src={pictureHome} alt="pictureHome" />
        <div className="presentationContainer">
          <h1 className="title">About me</h1>
          <p>
            Hi ! My name is Saban, I am a french student in cognitive sciences.
            I am passionate about developing software, websites and mobile
            applications. I dedicate my work to give people the best user
            experience possible.
          </p>
          <p>
            After two years of preparatory course, I entered in the Ecole
            Nationale Supérieure de Cognitique where I have been introduced to
            cognitive sciences. It is a domain which combines computer science,
            and human factors.
          </p>
          <p>
            In my first and second year, I had the opportunity to lead computer
            science projects of any kind. It allowed me to discover new
            languages and to improve my skills as a coder. As a passionate, I am
            always looking to improve my programming skills. I also have
            abilities in UX design and human system interface.
          </p>
          <p>
            After two years of preparatory course, I entered in the Ecole
            Nationale Supérieure de Cognitique where I have been introduced to
            cognitive sciences. It is a domain which combines computer science,
            and human factors.
          </p>
        </div>
      </div>
      <div style={{ background: "#fddc2b" }}>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 86.10443146684989,187.54792167639988 172.20886293369978,175.09584335279973 241,187 C 309.7911370663002,198.90415664720027 361.26897973205087,235.16454826520095 420,229 C 478.73102026794913,222.83545173479905 544.7152181380968,174.2459635863964 622,169 C 699.2847818619032,163.7540364136036 787.8701477155616,201.85159738921334 848,216 C 908.1298522844384,230.14840261078666 939.8041909996564,220.3476468567503 994,228 C 1048.1958090003436,235.6523531432497 1124.9130882858124,260.7578151837856 1203,259 C 1281.0869117141876,257.2421848162144 1360.5434558570937,228.6210924081072 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#ffffff"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default AboutMe;
