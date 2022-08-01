import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllPosts } from "../../app/slices/postsSlice";
import { Card } from "../Card";

const Posts = () => {
  const dispatch = useDispatch(0);
  const posts = useSelector((state) => state.posts.postsList);

  React.useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className="posts">
      <div className="container">
        <h1 className="text-center">All Posts</h1>
        <div className="row">
          {posts
            ? posts.map((post) => {
                return (
                  <div className="col-md-4 my-2" key={post.title + post.id}>
                    <Card
                      userId={post.userId}
                      id={post.id}
                      title={post.title}
                      body={post.body}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Posts;
