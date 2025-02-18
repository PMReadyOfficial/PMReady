import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import TCEImage1 from "@Images/program/TCE/TCEImage1.png";
import TCEImage2 from "@Images/program/TCE/TCEImage2.png";
import TCEImage3 from "@Images/program/TCE/TCEImage3.png";
import Boba from "@Images/program/TCE/boba.png";

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
  return (
    <div className="p-24 py-12">
      <div>
        <h3 className="text-center">What Our Past Alumni Have To Say</h3>
      </div>
      <div className="flex justify-center m-auto mt-4">
        <Carousel
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {quotes.map((quotes, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6">
                      <p className="text-3xl font-semibold p-8">
                        {quotes.message}
                      </p>
                    </CardContent>
                  </Card>
                </div>
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
