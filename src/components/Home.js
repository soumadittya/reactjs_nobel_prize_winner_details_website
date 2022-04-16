import React from "react";
import HomeCorousel from "./HomeCarousel";

const Home = () => {
  return (
    <div className="Home">
      <div className="jumbotron p-3 mb-2 bg-secondary text-white">
        <h1 className="display-4"><b>Nobel Prize Winners</b></h1>
        <br></br>
        <p className="lead">
          <b><i>From Year 1900 - 2018</i></b>
        </p>
        <hr className="my-4" />
        <br></br>
       <p>
           <HomeCorousel/>
       </p>
      </div>
    </div>
  );
};

export default Home;
