"use client"
import { Property } from "@/properties";
import React, { Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { formatter } from "@/lib/utils";

const PropertyDetails = ({property}: {property:Property}) => {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [guests, setGuests] = useState("1");

  return (
    <Fragment>
      <div className="max-w-7xl mx-auto px-6 md:px-4 lg:px-0 my-4">
        <h1 className="font-montBold text-xl md:text-2xl mb-2">
          {property.description}
        </h1>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-2">
          <div className="w-full rounded-l">
            <div className="rounded-l inline aspect-video">
              <Image
                width={1200}
                height={800}
                alt="main"
                src="/images/living.jpg"
                className="rounded-l-xl inline w-full aspect-video object-cover"
              />
            </div>
          </div>
          <div className="rounded-r w-full grid grid-cols-2 gap-2">
            {property.images.map((image, index) => {
              if (index === 0) return;
              return (
                <div key={index} className=" even:rounded-r-lg overflow-clip aspect-video">
                  <Image
                    width={1200}
                    height={800}
                    alt="main"
                    src={image}
                    className=" inline w-full aspect-video object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex-col md:flex-row justify-between">
          <div>
            <h2 className="font-montMedium text-lg">{property.type}</h2>
            <p className="text-base font-montLight">
              {property.guests} guests - {property.bedrooms} bedrooms -{" "}
              {property.beds} beds - {property.baths} baths
            </p>
          </div>

          <h2 className="font-montMedium text-lg">
            {formatter(property.price)}/ night
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-7xl mx-auto px-6 md:px-4 lg:px-0 my-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {property.links.map((link, index) => (
            <Link key={index} href={link}>
              <Button className="rounded-lg mr-6 bg-red-500 w-full h-12 py-2 px-4 text-sm text-white hover:bg-gray-400">
                Book
              </Button>
            </Link>
          ))}
          {/* <Link
            href="https://www.booking.com/hotel/za/pop-inn-modern-apartment-in-heart-of-bryanston.en-gb.html?aid=1258472&label=Share-lfWNCr%401630515174"
            passHref
          >
            <button className="rounded-lg mr-6 bg-red-500 w-full h-12 py-2 px-4 text-sm text-white hover:bg-gray-400">
              Book on Booking.com
            </button>
          </Link>
          <Link
            href="https://www.airbnb.co.za/rooms/44663589?source_impression_id=p3_1654077115_rSo%2BvOVoa16m5AE3&locale=en&_set_bev_on_new_domain=1654077110_Yjc1ZDNlZmM4NzBk"
            passHref
          >
            <button className="rounded-lg bg-red-500 py-2 w-full px-4 h-12 text-sm text-white hover:bg-gray-400">
              Book on Airbnb
            </button>
          </Link> */}
        </div>

        <div className="px-6">
          <h2 className="font-montBold mb-4 text-2xl text-red-500">
            Contact Us To Book A Stay
          </h2>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="w-full text-gray-700"
          >
            <input
              type="hidden"
              name="access_key"
              value={process.env.NEXT_PUBLIC_WEBFORMS_API}
            ></input>

            <input
              type="hidden"
              name="subject"
              value="New Booking Enquiry"
            ></input>

            <input
              type="hidden"
              name="from_name"
              value="Pop Inn Website"
            ></input>

            <input
              type="hidden"
              name="redirect"
              value="https://web3forms.com/success"
            ></input>

            <div className="flex flex-col md:flex-row items-between md:items-center md:justify-between">
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="email"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="firstName"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-between md:items-center md:justify-between mt-6">
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="lastName"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="guests"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  How Many Guests
                </label>
                <input
                  id="guests"
                  type="number"
                  name="guests"
                  min={1}
                  max={4}
                  required
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-between md:items-center md:justify-between mt-6">
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="startDate"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Check In
                </label>
                <input
                  id="startDate"
                  type="date"
                  name="startDate"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                />
              </div>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="endDate"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal mb-2"
                >
                  Check Out
                </label>
                <input
                  id="endDate"
                  type="date"
                  name="endDate"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="text-gray-600 focus:outline-none focus:border focus:border-gray-700  bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
                />
              </div>
            </div>

            <button
              type="submit"
              className="rounded-lg bg-red-500 py-2 w-full px-4 h-12 text-sm text-white hover:bg-gray-400 mt-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
export default PropertyDetails;
