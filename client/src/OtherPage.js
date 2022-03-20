import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      The other page
      <Link to="/">go back home</Link>
    </div>
  );
};
