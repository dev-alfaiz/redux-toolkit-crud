import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

import { createPost } from "../../app/slices/postsSlice";
import { Card } from "../Card";

const defaultState = {
  title: "",
  body: "",
};

const CreatePost = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.postsList);
  // const navigate = useNavigate();

  const [createPostData, setCreatePostData] = React.useState(defaultState);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      Object.keys(createPostData.title).length <= 0 &&
      Object.keys(createPostData.body.length <= 0)
    ) {
      return alert("Provide Valid Information!");
    } else {
      dispatch(createPost(createPostData));
      setCreatePostData(defaultState);
      // navigate("/posts");
    }
  };
  return (
    <div className="create-post">
      <div className="container">
        <h1 className="text-center">Create Post</h1>
        <div className="container row d-flex align-items-center justify-content-center my-4">
          <div className="col-md-8">
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={createPostData.title}
                  onChange={(event) =>
                    setCreatePostData({
                      ...createPostData,
                      title: event.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                    value={createPostData.body}
                    style={{ height: "200px" }}
                    onChange={(event) =>
                      setCreatePostData({
                        ...createPostData,
                        body: event.target.value,
                      })
                    }
                  ></textarea>
                  <label htmlFor="floatingTextarea2">Content:</label>
                </div>
              </div>
              <button type="submit" className="btn btn-dark">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
      {posts?.map((post) => {
        return (
          <div className="container" key={post.id}>
            <p>New Created Post!</p>
            <Card
              userId={post.userId}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CreatePost;
