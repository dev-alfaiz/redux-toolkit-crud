import * as React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container text-center">
      <h1>Home Page</h1>
      {/* <Link className="btn btn-dark" to={"/posts"}>
        All Posts
      </Link> */}
      <Link className="btn btn-dark mx-4" to={"/post"}>
        Post By ID
      </Link>
      <Link className="btn btn-dark" to={"/createpost"}>
        Create Post
      </Link>
    </div>
  );
};
