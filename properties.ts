const properties = [
  {
    slug: 'bryanston',
    title: 'Bryanston',
    description: 'A beautiful apartment in the heart of Bryanston',
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
    images: ['/images/living.jpg', "/images/kitchen-small-3.jpg", "/images/kitchen-small.jpg", "/images/tv-1.jpg", "/images/welcome.jpg"]
  },  {
    slug: 'morningside_2',
    title: 'Morningside 2',
    description: 'Entire serviced apartment in Sandton, South Africa',
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
  images: ["/images/masingita_towers_two/image_1.JPG", "/images/masingita_towers_two/image_2.JPG", "/images/masingita_towers_two/image_3.JPG", "/images/masingita_towers_two/image_4.JPG", "/images/masingita_towers_two/image_5.JPG", "/images/masingita_towers_two/image_6.JPG", "/images/masingita_towers_two/image_7.JPG", "/images/masingita_towers_two/image_8.JPG", "/images/masingita_towers_two/image_9.JPG", "/images/masingita_towers_two/image_10.JPG", "/images/masingita_towers_two/image_11.JPG", "/images/masingita_towers_two/image_12.JPG", "/images/masingita_towers_two/image_13.JPG", "/images/masingita_towers_two/image_14.JPG", "/images/masingita_towers_two/image_16.JPG"]
  },
  {
    slug: 'morningside_3',
    title: 'Morningside 3',
    description: 'A luxury apartment in the heart of Sandotn',
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
    images: ["/images/masingita_towers/main_bedroom.jpeg", "/images/masingita_towers/living_room.jpeg", "/images/masingita_towers/sinks.jpeg", "/images/masingita_towers/balcony.jpeg", "/images/masingita_towers/bathroom_4.jpeg", "/images/masingita_towers/bed.jpeg", "/images/masingita_towers/balcony_2.jpeg", "/images/masingita_towers/bathroom.jpeg", "/images/masingita_towers/bedroom.jpeg", "/images/masingita_towers/dining.jpeg", "/images/masingita_towers/kitchen.jpeg", "/images/masingita_towers/living_room_2.jpeg", "/images/masingita_towers/smeg.jpeg"]
  },

]

export type Property = typeof properties[0]


export default properties
