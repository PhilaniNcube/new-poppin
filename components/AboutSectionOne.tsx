import React from "react";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "lucide-react";


const AboutSectionOne = () => {
  return (
    <div className="max-w-7xl mx-auto my-8 px-4 lg:px-0">
      <h2 className="font-montBold text-2xl md:text-3xl text-center">
        Who <span className="font-montLight">we are</span>
      </h2>
      <p className="text-base mt-4 text-center">
        Popp Inn Property is a dynamic upmarket property management company that
        is passionate about people and the leisure industry.
      </p>
      <p className="text-base mt-4 text-center">
        We specialise in two areas, helping investors earn a return on their
        properties by managing the property and advertising it to seek clients
        for short term to long term leisure or business stays. We utilise very
        effective platforms like Airbnb, Bookings.com and various other social
        media apps to advertise our listings.
      </p>
      <p className="text-base mt-4 text-center">
        Our second area of focus is our customers. We ensure that whenever our
        customers book a stay at any of our properties they leave having
        experienced world-class hospitality and exceptional service. We love to
        add a personal touch so that the customer feels that all of their needs
        are met.
      </p>
      <div className="flex justify-center space-x-3 mt-6 text-3xl">
        <Link
          href="https://www.instagram.com/popp.inn_"
          target="_blank"
          passHref
        >
          <InstagramIcon className="cursor-pointer" />
        </Link>
        <Link
          href="https://www.facebook.com/PoppInnSouthAfrica"
          target="_blank"
          passHref
        >
          <FacebookIcon className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default AboutSectionOne;
