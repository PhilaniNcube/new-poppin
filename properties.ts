const properties = [
  {
    slug: 'bryanston',
    title: 'Bryanston',
    description: 'A beautiful apartment in the heart of Bryanston',
    text: ['This modern apartment is conveniently located close to popular shopping malls like Bryanston and Morningside Shopping Centre as well as Nicolway. It&apos;s a mere 8km from Sandton City and the Sandton Gautrain Station.', 'Thanks to uncapped WiFi, kickback and enjoy your favourite shows on Netflix, Showmax, YouTube and other streaming sites from the comfort of the lounge or the main bedroom.'],
    type: 'Apartment',
    links: [{
      platform: 'Booking.com',
      href: "https://www.booking.com/hotel/za/pop-inn-modern-apartment-in-heart-of-bryanston.en-gb.html?aid=1258472&label=Share-lfWNCr%401630515174"
    }, {
      platform: "AirBnB",
      href: "https://www.airbnb.co.za/rooms/44663589?source_impression_id=p3_1654077115_rSo%2BvOVoa16m5AE3&locale=en&_set_bev_on_new_domain=1654077110_Yjc1ZDNlZmM4NzBk"
    }],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    price: 1500,
    images: ['/images/bedroom-blue-2.jpg', "/images/bedroom-blue-3.jpg", "/images/kitchen-large.jpg", "/images/dining.jpg", "/images/welcome.jpg", "/images/building.jpg", "/images/bathroom-2.jpg", "/images/balcony.jpg", "/images/bathroom.jpg", "/images/bedroom-yellow-2.jpg", "/images/bedroom-yellow.jpg", "/images/kitchen-coffee.jpg", "/images/living-2.jpg", "/images/lounge.jpg"]
  },  {
    slug: 'morningside_2',
    title: 'Morningside 2',
    description: 'Entire serviced apartment in Sandton, South Africa',
    text: ['This luxurious and spacious 2 bedroom, 2.5 bathroom apartment is located in the heart of Sandton. It is a 5 minute drive from Sandton City Mall as well as the Gautrain Station.', "This fully furnished apartment is ideal for the modern business individual, family or couple. The apartment includes uncapped Wifi, smart TVs and smeg appliances. Both bedrooms include an en-suite bathroom and there is a guest bathroom as well.", "This apartment is perfect for those that enjoy luxurious, comfort and convenience."],
    type: 'Apartment',
    links: [
    //   {
    //   platform: "AirBnB",
    //   href: "https://www.airbnb.co.za/rooms/731588256049922111?locale=en&_set_bev_on_new_domain=1696280310_NWVmNTlhMjVjMmNh&source_impression_id=p3_1696280765_OoToFRfrLlU4tuZV"
    // }
  ],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2.5,
    price: 2580,
  images: ["/images/masingita_towers_two/image_1.JPG", "/images/masingita_towers_two/image_2.JPG", "/images/masingita_towers_two/image_3.JPG", "/images/masingita_towers_two/image_4.JPG", "/images/masingita_towers_two/image_5.JPG", "/images/masingita_towers_two/image_6.JPG", "/images/masingita_towers_two/image_7.JPG", "/images/masingita_towers_two/image_8.JPG", "/images/masingita_towers_two/image_9.JPG", "/images/masingita_towers_two/image_10.JPG", "/images/masingita_towers_two/image_11.JPG", "/images/masingita_towers_two/image_12.JPG", "/images/masingita_towers_two/image_13.JPG", "/images/masingita_towers_two/image_14.JPG"]
  },
  {
    slug: 'morningside_3',
    title: 'Morningside 3',
    description: 'A luxury apartment in the heart of Sandotn',
   text: ['This luxurious and spacious apartment boasts 2 bedroom with King Beds as well as 2.5 bathrooms.  It is located in the heart of Sandton with Sandton City Mall and the Gautrain station being a mere 5 minute drive.', "This fully furnished apartment is ideal for the modern business individual, family or couple. The apartment includes uncapped Wifi, smart TVs and smeg appliances. Both bedrooms include an en-suite bathroom and there is a guest bathroom as well. ", "This apartment is perfect for those that enjoy luxurious, comfort and convenience."],
    type: 'Apartment',
        links: [
    //       {
    //   platform: "AirBnB",
    //   href: "https://www.airbnb.co.za/rooms/46767440?locale=en&_set_bev_on_new_domain=1696280310_NWVmNTlhMjVjMmNh&source_impression_id=p3_1696280569_UwG9pgHxug4TqQPI"
    // }
  ],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2.5,
    price: 2780,
    images: ["/images/masingita_towers/main_bedroom.jpeg", "/images/masingita_towers/main_bedroom_3.jpeg", "/images/masingita_towers/living_room.jpeg", "/images/masingita_towers/sinks.jpeg", "/images/masingita_towers/balcony.jpeg", "/images/masingita_towers/bathroom_4.jpeg", "/images/masingita_towers/bed.jpeg", "/images/masingita_towers/balcony_2.jpeg", "/images/masingita_towers/bathroom.jpeg", "/images/masingita_towers/bedroom.jpeg", "/images/masingita_towers/dining.jpeg", "/images/masingita_towers/kitchen.jpeg", "/images/masingita_towers/living_room_2.jpeg", "/images/masingita_towers/smeg.jpeg", "/images/masingita_towers/kitchen_counter.jpeg", "/images/masingita_towers/pillow.jpeg", "/images/masingita_towers/lounge_3.jpeg"]
  },

]

export type Property = typeof properties[0]


export default properties
