import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";

function getWindowDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}
export default function TCEAlumni() {
  const quotes = [
    {
      message:
        "I liked how their were a lot of different speakers to provide me with different perspectives on a variety of topics.",
    },
    {
      message:
        "I loved being able to gather experiences from all of the guest speakers, who all had decades worth of experience in the industry!",
    },
    {
      message:
        "I loved listening to real professionals talk about their careers and give us advice!",
    },
  ];
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());
  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimension());
    }

    window.addEventListener("resize", handleResize());
    return () => window.removeEventListener("resize", handleResize());
  });

  const carouselOrientation =
    windowDimension.width > 480 ? "horizontal" : "vertical";
  return (
    <div className="md:p-24 px-8 py-12">
      <div>
        <h3 className="text-center">What Our Past Alumni Have To Say</h3>
      </div>
      <div className="flex justify-center m-auto md:mt-4 mt-16">
        <Carousel
          orientation={carouselOrientation}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{ align: "start", loop: true }}
          className="w-full md:max-w-2xl max-w-xs md:mt-4"
        >
          <CarouselContent className="md:h-auto h-44">
            {quotes.map((quotes, index) => (
              <CarouselItem key={index}>
                <Card className="flex justify-center h-full">
                  <CardContent className="flex items-center justify-center align-middle p-6 ">
                    <p className="md:text-3xl text-base font-semibold text-center md:p-8">
                      {quotes.message}
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
