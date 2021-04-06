import React from "react";
import styled from "styled-components";

const AboutusStyled = styled.div`
  body {
    background-color: aqua;
  }

  h1 {
    justify-content: center;
    font-weight: 100px;
  }

  img {
    border-radius: 15px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    padding: 20px;
  }

  .team-section {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 20px;
  }
`;

const Aboutus = () => {
  return (
    <AboutusStyled>
      <div>
        <div class="row-one">
          <div class="Jake">
            <img
              src="https://avatars.githubusercontent.com/u/71855863?v=4"
              alt="jake"
            />
            <h2>Jake Linn</h2>
            <p>Front-End</p>
            <a href="https://github.com/jake-linn">Github </a>
            <a href="https://www.linkedin.com/in/jake-linn-a1116a11a/">
              LinkedIn
            </a>
          </div>
          <div class="jonathan">
            <img
              src="https://avatars.githubusercontent.com/u/19716248?v=4"
              alt="jonathan"
            />
            <h2>Jonathan Han </h2>
            <p>Front-End</p>
            <a href="https://github.com/jonnhann">Github </a>
            <a href="https://www.linkedin.com">LinkedIn</a>
          </div>
        </div>
        <div class="row-two">
          <div class="danielle">
            <img
              src="https://avatars.githubusercontent.com/u/69174710?v=4"
              alt="danielle"
            />
            <h2>Danielle Koduru</h2>
            <p>Back-End</p>
            <a href="https://github.com/DanielleKoduru">Github </a>
            <a href="https://www.linkedin.com/in/danielle-koduru-5273b8177/">
              LinkedIn
            </a>
          </div>
        </div>
        <div class="jim">
          <img
            src="https://avatars.githubusercontent.com/u/54656947?v=4"
            alt="jim"
          />
          <h2>Jime Moua</h2>
          <p>Back End</p>
          <a href="https://github.com/jimmoua1">Github </a>
          <a href=" https://www.linkedin.com/in/jimmoua4/">LinkedIn</a>
        </div>
      </div>
    </AboutusStyled>
  );
};

export default Aboutus;