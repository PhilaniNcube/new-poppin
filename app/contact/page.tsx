/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GdO2bM6oE2D
 */
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-center sm:text-5xl md:text-6xl text-gray-800 dark:text-gray-100">
        Contact Us
      </h1>
      <p className="max-w-lg mt-4 text-xl text-center md:text-2xl text-gray-600 dark:text-gray-300">
        Have any questions or concerns? We are here to help!
      </p>
      <div className="mt-6 w-full max-w-md mx-auto">
        <form className="grid grid-cols-1 gap-6">
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Full Name</span>
            <input
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              placeholder="John Doe"
              type="text"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">
              Email Address
            </span>
            <input
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              placeholder="john@example.com"
              type="email"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
              placeholder="Type your message..."
              rows={3}
            />
          </label>
          <Button
            className="w-full px-6 py-3 text-base font-medium text-white bg-red-600 hover:bg-red-400 rounded-full"
            variant="default"
          >
            Submit
          </Button>
        </form>
      </div>
      <div className="mt-6 text-center">
        <p className="text-base text-gray-600 dark:text-gray-400">
          Or you can reach us directly at
          <a className="underline text-blue-500 hover:text-blue-400" href="#">
            bookings@poppinn.co.za
          </a>
        </p>
      </div>
    </section>
  );
}
