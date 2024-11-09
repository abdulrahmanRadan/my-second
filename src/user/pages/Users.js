import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "abdulrahman",
      image:
        "https://www.shutterstock.com/image-photo/woman-using-chatbot-computer-tablet-260nw-2276323975.jpg",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
