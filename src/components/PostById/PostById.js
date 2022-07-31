import * as React from "react";

const PostById = () => {
  return (
    <div className="create-post">
      <div className="container row d-flex align-items-center justify-content-center">
        <div className="col-md-8">
          <form>
            <div className="mb-3">
              <label htmlFor="searchById" className="form-label">
                Search By ID:
              </label>
              <input type="number" className="form-control" id="searchById" />
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
