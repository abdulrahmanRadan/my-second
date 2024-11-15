import React, { useCallback } from "react";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/22.1 validators";
import "./NewPlace.css";

const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please, Enter a valid title."
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please, Enter a valid description (at least 5 characters)."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
