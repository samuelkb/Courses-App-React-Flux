import React from "react";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Bounce = styled.div`
  animation: 3s ${keyframes`${bounce}`} infinite;
`;

function HomePage() {
  //The JS convention is to use PascalCase for things that can be instantiated
  //Elements in JSX that start with a capital letter are assumed to be React components.
  //Lowercase elements are assumed to be native HTML
  //Function components render whatever JSX we return
  //We use className instead class, one rara defference between JSX and HTML
  return (
    <div className="jumbotron">
      <Bounce>
        <h1>Pluralsight Administration </h1>
      </Bounce>
      <p>React, Flux, and React Router for ultra-responsive web apps.</p>
      <a href="/about">About</a>
    </div>
  );
  //By default everything in each file is private.
  /*
  The href It's not good for the performance. It's posting back to the server.
  So it's slower, and we lose client-side state.
  */
}

//That is why we need to export to allow the file be used for other components.
//Traditionally, if only a single item is being exported, it is declared as the "default".
/*Default requires a little less code to import, and the import can decide what to name 
that import */
export default HomePage;
