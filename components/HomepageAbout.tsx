/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vfFnQB8yk9Q
 */
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomepageAbout() {
  return (
    <section className="relative flex flex-col items-center justify-center container w-full h-screen ">
      <h1 className="text-4xl text-center font-bold sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-100">
        About Us
      </h1>
      <p className="mt-4 text-xl text-center max-w-[50ch] max-auto text-gray-600 dark:text-gray-300 py-8">
        Popp Inn Property is a dynamic upmarket property management company that
        is passionate about people and the leisure industry.
      </p>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="px-4 sm:px-6 lg:px-8"></div>
        <div className="w-full">
          <p className="text-md leading-7 mb-3">
            We specialise in two areas, helping investors earn a return on their
            properties by managing the property and advertising it to seek
            clients for short term to long term leisure or business stays. We
            utilise very effective platforms like Airbnb, Bookings.com and
            various other social media apps to advertise our listings.
          </p>
          <p className="text-md leading-7">
            Our second area of focus is our customers. We ensure that whenever
            our customers book a stay at any of our properties they leave having
            experienced world-class hospitality and exceptional service. We love
            to add a personal touch so that the customer feels that all of their
            needs are met.
          </p>
          <div className="mt-6 pl-4 pr-8 pb-8 pt-6 bg-white dark:bg-gray-800 rounded-lg shadow sm:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              For Property Owners
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              List your property easily with us and reach thousands of potential
              holiday goers every day.
            </p>
          </div>
          <div className="mt-6 mb-8 pl-4 pr-8 pb-8 pt-6 bg-white dark:bg-gray-800 rounded-lg shadow sm:shadow-lg">
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
          className="mt-6 mx-auto block text-center w-full  px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-400 rounded-full"
          href="/contact"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
