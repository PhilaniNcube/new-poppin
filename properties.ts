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
  },
  {
    slug: 'masingita_towers',
    title: 'Masingita Towers',
    description: 'A luxury apartment in the heart of Sandotn',
    type: 'Apartment',
        links: [ {
      platform: "AirBnB",
      href: "https://www.airbnb.co.za/rooms/46767440?locale=en&_set_bev_on_new_domain=1696280310_NWVmNTlhMjVjMmNh&source_impression_id=p3_1696280569_UwG9pgHxug4TqQPI"
    }],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2.5,
    price: 2580,
    images: ["/images/masingita_towers/main_bedroom.jpeg", "/images/masingita_towers/living_room.jpeg", "/images/masingita_towers/sinks.jpeg", "/images/masingita_towers/balcony.jpeg", "/images/masingita_towers/bathroom_4.jpeg", "/images/masingita_towers/bed.jpeg", "/images/masingita_towers/balcony_2.jpeg", "/images/masingita_towers/bathroom.jpeg", "/images/masingita_towers/bedroom.jpeg", "/images/masingita_towers/dining.jpeg", "/images/masingita_towers/kitchen.jpeg", "/images/masingita_towers/living_room_2.jpeg", "/images/masingita_towers/smeg.jpeg"]
  },
  {
    slug: 'masingita_towers_2',
    title: 'Masingita Towers 2',
    description: 'Entire serviced apartment in Sandton, South Africa',
    type: 'Apartment',
    links: [{
      platform: "AirBnB",
      href: "https://www.airbnb.co.za/rooms/731588256049922111?locale=en&_set_bev_on_new_domain=1696280310_NWVmNTlhMjVjMmNh&source_impression_id=p3_1696280765_OoToFRfrLlU4tuZV"
    }],
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2.5,
    price: 2780,
    images: ['https://a0.muscache.com/im/pictures/miso/Hosting-731588256049922111/original/0a55157f-95e6-4740-86fa-9155e31a37a4.jpeg?im_w=1200', "https://a0.muscache.com/im/pictures/miso/Hosting-731588256049922111/original/89a61f17-f23a-4fce-81c7-d78850f0474a.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-731588256049922111/original/ae677f3c-9097-49d9-943f-a07a12bb269f.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-731588256049922111/original/fff9fbac-1b4d-49a8-b3e3-46b07ec15581.jpeg?im_w=720", "https://a0.muscache.com/im/pictures/miso/Hosting-731588256049922111/original/d75c6035-11b2-4695-8666-107d2b131400.jpeg?im_w=720"]
  },
]

export type Property = typeof properties[0]


export default properties
