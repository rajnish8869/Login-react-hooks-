import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";

const BoardUser = () => {
  const [content, setContent] = useState({});
console.log("content",content)
  useEffect(() => {
    UserService.getUserBoard()
    .then(response => response.data)
    // .then(response => setContent(response))
    .then((response) => {
        setContent(response);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <p>{content.email}</p>
        <p>{content.name}</p>
        <p>{content.username}</p>
        <p>{content.key}</p>
      </header>
    </div>
  );
};

export default BoardUser;