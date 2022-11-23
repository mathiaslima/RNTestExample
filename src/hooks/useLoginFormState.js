import React, { useState } from "react";

export function useLoginFormState({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);

  let isUsernameValid = false;
  let isPasswordValid = false;

  if (username === "exemplo") {
    isUsernameValid = true;
  }

  if (password === "abc123") {
    isPasswordValid = true;
  }

  return {
    username: {
      value: username,
      set: setUsername,
      valid: isUsernameValid,
    },
    password: {
      value: password,
      set: setPassword,
      valid: isPasswordValid,
    },
    submit: {
      value: submit,
      set: () => {
        setSubmit(true);

        if (isUsernameValid && isPasswordValid) {
          fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
              username,
              password,
            }),
          })
            .then((response) => response.json())
            .then(() => {
              navigation.push("Home");
            })
            .catch((error) => {
              console.log("error", error);
            });
        }
      },
    },
  };
}
