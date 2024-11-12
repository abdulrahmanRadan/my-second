import React from "react";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.shutterstock.com/image-photo/woman-using-chatbot-computer-tablet-260nw-2276323975.jpg",
    address: "تقاطع شارع الستين مع شارع عمران، 60, صنعاء اليمن",
    location: {
      lat: 15.4237743,
      lng: 44.1906041,
    },
    creator: "abod",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://www.shutterstock.com/image-photo/woman-using-chatbot-computer-tablet-260nw-2276323975.jpg",
    address: "تقاطع شارع الستين مع شارع عمران، 60, صنعاء اليمن",
    location: {
      lat: 15.4237743,
      lng: 44.1906041,
    },
    creator: "abod",
  },
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
