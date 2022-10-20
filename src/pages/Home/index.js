import React from "react";
import "./home.css";

export default function Home() {
  return (
    <section>
      <div className="home" id="home">
        <p className="description">Hi, my name is</p>
        <h1 className="title">
          Saban Yilmaz.
          <br /> I’m a Frontend Developper
        </h1>
        <p className="description">
          I am a french engineering student in Cognitive sciences at the Ecole
          Nationale Supérieure de Cognitique. I am currently looking for a 6
          months internship starting in February 2023.
        </p>
        <div>
          <button className="btnAboutMe">
            <a href="#aboutMe">About Me</a>
          </button>
        </div>
      </div>
      <div style={{ background: "white" }}>
        <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 400"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
        >
          <path
            d="M 0,400 C 0,400 0,200 0,200 C 69.59945036070079,203.20783236001375 139.19890072140157,206.41566472002748 202,194 C 264.80109927859843,181.58433527997252 320.8038474750944,153.5451734799038 385,167 C 449.1961525249056,180.4548265200962 521.5857093782206,235.40364136035726 600,232 C 678.4142906217794,228.59635863964274 762.8533150120235,166.84026107866714 833,177 C 903.1466849879765,187.15973892133286 959.0010305736862,269.2353143249742 1018,272 C 1076.9989694263138,274.7646856750258 1139.1425626932325,198.21848162143593 1210,173 C 1280.8574373067675,147.78151837856407 1360.4287186533838,173.89075918928205 1440,200 C 1440,200 1440,400 1440,400 Z"
            stroke="none"
            stroke-width="0"
            fill="#fddc2b"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
            transform="rotate(-180 720 200)"
          ></path>
        </svg>
      </div>
    </section>
  );
}
