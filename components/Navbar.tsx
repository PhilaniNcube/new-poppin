/* eslint-disable @next/next/no-img-element */
"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname()


  return (
    <nav className="">
      {/*Desktop Nav */}
      <div className="hidden max-w-7xl mx-auto md:flex md:px-4 lg:px-0 justify-between py-2 items-center">
        {pathname === "/travel" || pathname === "/see-you" ? (
          <img
            src="/images/travel.svg"
            alt="Popp Inn"
            className="h-20 object-cover"
          />
        ) : (
          <img
            src="/images/logo.svg"
            alt="Popp Inn"
            className="h-20 object-cover"
          />
        )}

        <nav className="flex text-base text-gray-700 space-x-3 items-center">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/contact">Contact Us</Link>

          <Link href="/properties" passHref>
            <Button className="text-white font-montBold text-md bg-red-500 px-4 py-2 rounded-full">
              Book Now
            </Button>
          </Link>
        </nav>
      </div>

      {/*Mobile Menu*/}
      <div className="flex md:hidden px-6 py-2 justify-between items-center">
        {pathname === "/travel" || pathname === "/see-you" ? (
          <img
            src="/images/travel.svg"
            alt="Popp Inn"
            className="h-20 object-cover"
          />
        ) : (
          <img
            src="/images/logo.svg"
            alt="Popp Inn"
            className="h-20 object-cover"
          />
        )}

        <button onClick={() => setShow(!show)}>
          {/**Mobile Menu Buttons */}
          {!show ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>

        {show && (
          <div className="absolute top-16 left-4 flex w-1/2 min-w-[150px] max-w-[300px] flex-col space-y-2 rounded-sm bg-gray-50 px-4 py-4 shadow-lg z-50 md:hidden">
            <Link
              href="/"
              onClick={() => setShow(false)}
              className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-100 hover:shadow"
            >
              Home
            </Link>
            <Link
              href="/properties"
              onClick={() => setShow(false)}
              className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-100 hover:shadow"
            >
              Properties
            </Link>
            <Link
              href="/travel"
              onClick={() => setShow(false)}
              className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-100 hover:shadow"
            >
              Travel
            </Link>
            <Link
              href="/contact"
              onClick={() => setShow(false)}
              className="block rounded-lg py-2 px-4 text-sm hover:bg-gray-100 hover:shadow"
            >
              Contact Us
            </Link>
            <Link
              href="/properties"
              className="block rounded-lg bg-red-500 py-2 px-4 text-sm text-white hover:bg-gray-400"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
