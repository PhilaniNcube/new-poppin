/**
 * v0 by Vercel.
 * @see https://v0.dev/t/tkaZKNVxMSa
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <section className="flex flex-col items-center justify-center h-[70vh] p-6 space-y-6">
      <svg
        className=" w-24 h-24 text-green-600 dark:text-green-300"
        fill="none"
        height="24"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
      <h2 className="text-3xl font-semibold text-center text-green-800 dark:text-green-200">
        Thank You!
      </h2>
      <p className="max-w-lg text-center text-green-700 dark:text-green-300">
        Your form has been successfully submitted. We appreciate your time and
        effort.
      </p>
      <Link href="/">
        <Button
          type="button"
          className="text-white bg-green-600 hover:bg-green-700 dark:bg-green-300 dark:hover:bg-green-400 rounded-full"
        >
          Return to Home
        </Button>
      </Link>
    </section>
  );
}
