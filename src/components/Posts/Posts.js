import * as React from "react";
import { useDispatch } from "react-redux";

import { fetchAllPosts } from "../../app/slices/postsSlice";

const Posts = () => {
    const dispatch = useDispatch(0);

    const handleClick = () => {
      dispatch(fetchAllPosts());
    };

  return (
    <div className="posts">
      <button onClick={() => handleClick()}>Fetch Posts</button>
      <div className="container text-center">
        <h1>All Posts</h1>
      </div>
    </div>
  );
};

export default Posts;
