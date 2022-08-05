import * as React from "react";
import { MouseEventHandler, useState } from "react";

interface SliderWithOpacityComponentPropsInterface {}

const images = [
  "https://images.unsplash.com/photo-1659201045838-7905e3656417?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1659355863904-a6b023894b4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1656189641630-baf5189a42e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1659584079553-c300cb85f10d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1658816849623-57ff49aee765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const SliderWithOpacityComponent: React.FC<
  SliderWithOpacityComponentPropsInterface
> = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlider: MouseEventHandler = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlider: MouseEventHandler = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative h-[70vh] w-[50vw] mx-auto">
        {images.map((src, i) => {
          return (
            <img
              className={`transition-opacity duration-500 absolute h-full w-full object-cover object-center ${
                currentSlide === i ? "opacity-100" : "opacity-0"
              }`}
              src={src}
              alt={`img-${i + 1}`}
            />
          );
        })}

        <button
          className="absolute top-1/2 -translate-y-1/2 -right-24 p-5 border-2"
          onClick={prevSlider}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 -translate-y-1/2 -left-24 p-5 border-2"
          onClick={nextSlider}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { SliderWithOpacityComponent };
