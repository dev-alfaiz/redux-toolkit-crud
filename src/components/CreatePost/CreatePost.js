import * as React from "react";

const CreatePost = () => {
  return (
    <div className="create-post">
      <div className="container">
        <h1 className="text-center">Create Post</h1>
        <div className="container row d-flex align-items-center justify-content-center my-4">
          <div className="col-md-8">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    style={{ height: "200px" }}
                  ></textarea>
                  <label for="floatingTextarea2">Content:</label>
                </div>
              </div>
              <button type="submit" className="btn btn-dark">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
