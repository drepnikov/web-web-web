import * as React from "react";
import img1 from "./img/1.avif";
import img2 from "./img/2.avif";
import img3 from "./img/3.avif";
import img4 from "./img/4.avif";
import img5 from "./img/5.avif";
import { MouseEventHandler, useState } from "react";

interface SliderWithTransformComponentPropsInterface {}

const images = [img1, img2, img3, img4, img5];

const SliderWithTransformComponent: React.FC<
  SliderWithTransformComponentPropsInterface
> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlider: MouseEventHandler = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlider: MouseEventHandler = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-1/2 absolute top-1/2 -translate-y-1/2 mx-auto right-0 left-0">
      <div className="relative">
        <div className={`overflow-x-hidden`}>
          <div
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            className={` w-[50vw] h-[60vh] flex transition-all duration-500`}
          >
            {images.map((src, i) => {
              return (
                <img
                  className="w-full h-full flex-shrink-0 object-cover object-center"
                  alt={`img-${i + 1}`}
                  key={i}
                  src={src}
                />
              );
            })}
          </div>
        </div>

        <button
          onClick={prevSlider}
          className="active:p-4 p-5 top-1/2 -translate-y-1/2 -left-24 border-2 absolute"
        >
          Prev
        </button>
        <button
          onClick={nextSlider}
          className="active:p-4 p-5 top-1/2 -translate-y-1/2 -right-24 absolute border-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { SliderWithTransformComponent };
