import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

export default function TCEAlumni() {
  const quotes = [
    { message: "quote quote quote quote quote quote quote quote” - John Doe" },
    { message: "quote quote quote quote quote quote quote quote” - John Doe" },
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
