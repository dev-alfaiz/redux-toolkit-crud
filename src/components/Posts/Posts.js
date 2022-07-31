import * as React from "react";
import { useDispatch } from "react-redux";

import { fetchAllPosts } from "../../app/slices/postsSlice";

const Posts = () => {
  const dispatch = useDispatch(0);

  const handleClick = () => {
    dispatch(fetchAllPosts());
  };

  return (
    <div className="container">
      <h1>Posts Component</h1>
      <button onClick={() => handleClick()}>Fetch Posts</button>
    </div>
  );
};

export default Posts;
