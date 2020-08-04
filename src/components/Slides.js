import React from "react";
import Slide from "./Slide";

function Slides({ slides }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const changeSlide = React.useCallback((nextSlide) => {
    setCurrentSlide(nextSlide);
  }, []);
  const disabledNext = currentSlide >= slides.length - 1;
  const disabledPrev = currentSlide <= 0;
  const restartDisabled = currentSlide === 0;

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          disabled={restartDisabled}
          onClick={() => changeSlide(0)}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          disabled={disabledPrev}
          onClick={() => changeSlide(currentSlide - 1)}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          disabled={disabledNext}
          onClick={() => changeSlide(currentSlide + 1)}
        >
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <Slide
          title={slides[currentSlide].title}
          text={slides[currentSlide].text}
        />
      </div>
    </div>
  );
}

export default Slides;
