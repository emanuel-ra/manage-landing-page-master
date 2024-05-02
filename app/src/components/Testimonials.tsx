import { testimonials } from "../data/testimonials";
import { Testimonial } from "./Testimonial";
import { useState } from "react";

export const Testimonials = () => {
  const [current, setCurrent] = useState<number>(0);

  const nextSlide = () => {
    if (current === 0) setCurrent(1);
    else setCurrent(0);
  };

  setInterval(nextSlide, 5000);
  // TODO: FIX SLIDER TRANSITION
  const itemsNumber = 2;
  const translateX = `-${current * (100 / itemsNumber)}%`;
  const widthImagesContainer = testimonials.length * 540;
  return (
    <>
      <section className="w-full flex flex-col overflow-hidden">
        <h2 className="text-pretty text-center text-4xl font-bold mb-32">
          What they’ve said
        </h2>
        <div
          className="flex flex-row flex-nowrap items-center justify-center transition ease-in-out  w-full overflow-hidden gap-x-10 "
          style={{
            transform: `translateX(${translateX})`,
            width: `${widthImagesContainer}px`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              className="rounded-lg"
              style={{ width: "540px", backgroundColor: "hsl(0, 0%, 98%)" }}
            >
              <Testimonial key={index} data={testimonial} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
