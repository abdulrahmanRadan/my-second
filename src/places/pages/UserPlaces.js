import React from "react";
import { useParams } from "react-router-dom";
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
    creator: "u1",
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
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
