import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSelectPosts,
  clearSelectedPost,
} from "../../app/slices/postsSlice";
import { Card } from "../Card";
import { Spinner } from "../Spinner";

const PostById = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.posts.isLoading);
  const selectedPost = useSelector((state) => state.posts.selectedPost);
  const [term, setTerm] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (term > 0) {
      dispatch(fetchSelectPosts(term));
    } else {
      alert("Id must be greater than 0");
    }
  };

  React.useEffect(() => {
    return () => {
      dispatch(clearSelectedPost());
    };
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="create-post">
      <div className="container row d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="mb-3">
              <label htmlFor="searchById" className="form-label">
                Search By ID:
              </label>
              <input
                type="number"
                className="form-control"
                id="searchById"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              Fetch Post
            </button>
          </form>
        </div>
      </div>
      <div className="container my-4">
        {selectedPost
          ? selectedPost.map((post) => {
              return (
                <Card
                  key={post.title + post.id}
                  userId={post.userId}
                  id={post.id}
                  title={post.title}
                  body={post.body}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default PostById;
