import * as React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container text-center">
      <h1>Home Page</h1>
      <Link className="btn btn-dark" to={"/posts"}>
        All Posts
      </Link>
    </div>
  );
};
