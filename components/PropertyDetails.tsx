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
      <div className="px-6 mx-auto my-4 max-w-7xl md:px-4 lg:px-0">
        <h1 className="mb-2 text-xl font-montBold md:text-2xl">
          {property.description}
        </h1>
        <div className="grid w-full grid-cols-1 gap-2 overflow-hidden md:grid-cols-2">
          <div className="w-full rounded-l">
            <div className="inline rounded-l aspect-video">
              <Image
                width={1200}
                height={800}
                alt="main"
                src={property.images[0]}
                className="inline object-cover w-full rounded-l-xl aspect-video"
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-2 gap-2 rounded-r">
            {property.images.map((image, index) => {
              if (index === 0 || index >= 5) return;
              return (
                <div
                  key={index}
                  className=" even:rounded-r-lg overflow-clip aspect-video"
                >
                  <Image
                    width={1200}
                    height={800}
                    alt="main"
                    src={image}
                    className="inline object-cover w-full aspect-video"
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex-col justify-between mt-4 md:flex-row">
          <div>
            <h2 className="text-lg font-montMedium">{property.type}</h2>
            <p className="text-base font-montLight">
              {property.guests} guests - {property.bedrooms} bedrooms -{" "}
              {property.beds} beds - {property.baths} baths
            </p>
          </div>

          <h2 className="text-lg font-montMedium">
            From {formatter(property.price)}/ night
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 px-6 mx-auto my-8 md:grid-cols-2 max-w-7xl md:px-4 lg:px-0">
        <div className="grid w-full grid-cols-1 gap-6 ">
          <div className="w-full">
            <div className="grid grid-cols-2 gap-8">
              {property.links.map((link, index) => (
                <Link key={index} href={link.href} target="_blank">
                  <Button className="w-full h-12 px-4 py-2 mr-6 text-sm text-white bg-red-500 rounded-lg hover:bg-gray-400">
                    Book on {link.platform}
                  </Button>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 md:grid-cols-3">
              {property.images.map((image, index) => (
                <Image
                  src={image}
                  key={index}
                  width={1920}
                  height={1280}
                  alt={property.title}
                  className="object-cover w-full rounded-md aspect-video"
                />
              ))}
            </div>
          </div>

          {/* <Link
            href="https://www.booking.com/hotel/za/pop-inn-modern-apartment-in-heart-of-bryanston.en-gb.html?aid=1258472&label=Share-lfWNCr%401630515174"
            passHref
          >
            <button className="w-full h-12 px-4 py-2 mr-6 text-sm text-white bg-red-500 rounded-lg hover:bg-gray-400">
              Book on Booking.com
            </button>
          </Link>
          <Link
            href="https://www.airbnb.co.za/rooms/44663589?source_impression_id=p3_1654077115_rSo%2BvOVoa16m5AE3&locale=en&_set_bev_on_new_domain=1654077110_Yjc1ZDNlZmM4NzBk"
            passHref
          >
            <button className="w-full h-12 px-4 py-2 text-sm text-white bg-red-500 rounded-lg hover:bg-gray-400">
              Book on Airbnb
            </button>
          </Link> */}
        </div>

        <div className="px-6">
          <h2 className="mb-4 text-2xl text-red-500 font-montBold">
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
            <input type="hidden" name="redirect" value="https://web3forms.com/success"></input>

            <div className="flex flex-col md:flex-row items-between md:items-center md:justify-between">
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="email"
                  className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-gray-700"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="firstName"
                  className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
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
                  className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-gray-700"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 md:flex-row items-between md:items-center md:justify-between">
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="lastName"
                  className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
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
                  className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-gray-700"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="guests"
                  className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
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
                  className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-gray-700"
                  placeholder="First Name"
                />
              </div>
            </div>

            <div className="flex flex-col mt-6 md:flex-row items-between md:items-center md:justify-between">
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="startDate"
                  className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
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
                  className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-gray-700"
                />
              </div>
              <div className="flex flex-col md:mr-16">
                <label
                  htmlFor="endDate"
                  className="mb-2 text-sm font-bold leading-tight tracking-normal text-gray-800"
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
                  className="flex items-center w-64 h-10 pl-3 text-sm font-normal text-gray-600 bg-white border border-gray-300 rounded shadow focus:outline-none focus:border focus:border-gray-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 px-4 py-2 mt-4 text-sm text-white bg-red-500 rounded-lg hover:bg-gray-400"
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
