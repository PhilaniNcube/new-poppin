/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vfFnQB8yk9Q
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomepageAbout() {
  return (
    <section className="container relative flex flex-col items-center justify-center w-full py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 sm:text-5xl md:text-6xl dark:text-gray-100">
        About Us
      </h1>
      <p className="mt-4 text-xl text-center max-w-[50ch] max-auto text-gray-600 dark:text-gray-300 py-8">
        Popp Inn Property is a dynamic upmarket property management company that
        is passionate about people and the leisure industry.
      </p>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="px-4 sm:px-6 lg:px-8"></div>
        <div className="w-full">
          <p className="mb-3 leading-7 text-md">
            We specialise in two areas, helping investors earn a return on their
            properties by managing the property and advertising it to seek
            clients for short term to long term leisure or business stays. We
            utilise very effective platforms like Airbnb, Bookings.com and
            various other social media apps to advertise our listings.
          </p>
          <p className="leading-7 text-md">
            Our second area of focus is our customers. We ensure that whenever
            our customers book a stay at any of our properties they leave having
            experienced world-class hospitality and exceptional service. We love
            to add a personal touch so that the customer feels that all of their
            needs are met.
          </p>
          <div className="pt-6 pb-8 pl-4 pr-8 mt-6 bg-white rounded-lg shadow dark:bg-gray-800 sm:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              For Property Owners
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              List your property easily with us and reach thousands of potential
              holiday goers every day.
            </p>
          </div>
          <div className="pt-6 pb-8 pl-4 pr-8 mt-6 mb-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              For Holiday Goers
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Explore our extensive listings and find your perfect holiday
              accommodation with us.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Link
          className="block w-full px-6 py-3 mx-auto mt-6 text-base font-medium text-center text-white bg-red-600 rounded-full hover:bg-red-400"
          href="/contact"
        >
         Chat to us
        </Link>
      </div>
    </section>
  );
}
