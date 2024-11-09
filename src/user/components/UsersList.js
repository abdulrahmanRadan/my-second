import React from "react";
import "./UsersList.css";
import UsersItem from "./UsersItem";

const UsersList = (props) => {
  if (props.itmes.length === 0) {
    return (
      <div className="center">
        <h2>No users found!</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
