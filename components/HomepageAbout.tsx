/**
 * v0 by Vercel.
 * @see https://v0.dev/t/vfFnQB8yk9Q
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomepageAbout() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-100">
          About Us
        </h1>
        <p className="max-w-lg text-center mx-auto mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
          Welcome to our holiday rental platform! We are here to connect property
          owners with eager travelers.
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
        <Link
          className="mt-6 mx-auto block text-center w-full max-w-md px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-400 rounded-full"
          href="/contact"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}
