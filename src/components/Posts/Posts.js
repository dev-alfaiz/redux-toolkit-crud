import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllPosts } from "../../app/slices/postsSlice";
import { Card } from "../Card";
import { Spinner } from "../Spinner";

const Posts = () => {
  const dispatch = useDispatch(0);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const posts = useSelector((state) => state.posts.postsList);

  React.useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
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
