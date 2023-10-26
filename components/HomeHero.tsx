/**
 * v0 by Vercel.
 * @see https://v0.dev/t/wH9eaq2dZ0f
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative grid grid-cols-2 w-full h-screen">
      <div className="relative">
        <Image
          alt="Holiday Rental"
          className="absolute inset-0 object-cover w-full h-full"
          height="1080"
          src="/images/bedroom-blue-2.jpg"
          style={{
            aspectRatio: "960/1080",
            objectFit: "cover",
          }}
          width="960"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            List Your Property With Us
          </h1>
          <p className="max-w-lg mt-4 text-xl md:text-2xl">
            Open your doors to holiday goers and earn extra income.
          </p>
          <Button
            className="mt-6 px-8 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-400 rounded-full"
            variant="secondary"
          >
            List Now
          </Button>
        </div>
      </div>
      <div className="relative">
        <Image
          alt="Find Accommodation"
          className="absolute inset-0 object-cover w-full h-full"
          height="1080"
          src="/images/masingita_towers_two/image_8.JPG"
          style={{
            aspectRatio: "960/1080",
            objectFit: "cover",
          }}
          width="960"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Find Your Perfect Holiday Home
          </h1>
          <p className="max-w-lg mt-4 text-xl md:text-2xl">
            Explore a wide range of accommodations for your next holiday.
          </p>
          <Button
            className="mt-6 px-8 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-400 rounded-full"
            variant="secondary"
          >
            Explore Now
          </Button>
        </div>
      </div>
    </section>
  );
}
