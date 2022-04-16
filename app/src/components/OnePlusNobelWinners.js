import React from "react";
import Curie from "../media/curie1.jpeg";
import Pauling from "../media/pauling1.jpeg";
import Bardeen from "../media/bardeen1.jpeg";
import Sanger from "../media/sanger1.jpeg";

const OnePlusNobelWinners = () => {
  return (
    <div className="jumbotron">
      <h1 className="display-4"><b>More Than One Time Nobel Prize Winners</b></h1>
      
      <hr className="my-4" />
     

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={3}
            aria-label="Slide 4"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div class="alert alert-primary" role="alert">
            <b>MARIE CURIE (1867 - 1934)</b>
            <br></br>
              The first person in history to accomplish the feat of twice
              receiving a Nobel Prize was the Polish scientist Marie Skłodowska
              Curie (7th November, 1867- 4th July, 1934), first awarded the
              prize in Physics and, later, in Chemistry.
            </div>
            <img
              src={Curie}
              className="d-block w-100"
              width="200"
              height="700"
              alt="Cannot load rabindranath's image."
            />
          </div>
          <div className="carousel-item">
            <div class="alert alert-primary" role="alert">
            <b>LINUS PAULING (1901 - 1994)</b>
            <br></br>
              The only person twice decorated with a Nobel Prize not shared with
              anyone else was Linus Pauling (28th February, 1901 – 19th August,
              1994). The first award, the 1954 Nobel Prize in Chemistry,
              recognized his research into the nature of chemical bonding. And
              eight years later, his militant pacifism during the Cold War,
              focused primarily on combating nuclear weapons, earned him the
              Nobel Peace Prize (1962).
            </div>
            <img
              src={Pauling}
              className="d-block w-100"
              width="200"
              height="700"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <div class="alert alert-primary" role="alert">
            <b>JOHN BARDEEN (1908 - 1991)</b>
            <br></br>
              The fact that today we can listen to the latest music hits on the
              radio, watch television, talk by mobile phone or comfortably surf
              the Internet using computers and tablets owes much to John Bardeen
              (23rd May, 1908 – 30th January, 1991), the only scientist in
              history to have received two Nobel Prizes in the Physics category.
            </div>
            <img
              src={Bardeen}
              className="d-block w-100"
              width="200"
              height="700"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <div class="alert alert-primary" role="alert">
            <b>FREDERICK SANGER (1918 - 2013)</b>
            <br></br>
              The fourth person, and so far the last, to join the illustrious
              club of the double Nobel Prize was Frederick Sanger (13th August,
              1918 – 19th November, 2013), an enthusiast of biochemistry who
              succeeded in determining the amino acid sequence of a protein.
              Sanger chose none other than insulin, the key hormone in the
              regulation of glucose metabolism, and for his feat he won the
              Nobel Prize in Chemistry in 1958.
            </div>
            <img
              src={Sanger}
              className="d-block w-100"
              width="200"
              height="700"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default OnePlusNobelWinners;
