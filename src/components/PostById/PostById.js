import * as React from "react";
import { useDispatch } from "react-redux";

import { fetchSelectPosts } from "../../app/slices/postsSlice";

const PostById = () => {
  const dispatch = useDispatch();
  const [term, setTerm] = React.useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();

    if (term > 0) {
      dispatch(fetchSelectPosts(term));
    } else {
      alert("Id must be greater than 0");
    }
  };
  return (
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
    </div>
  );
};

export default PostById;
