import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteSelectPost, setEdit } from "../../app/slices/postsSlice";

export const Card = (props) => {
  const { userId, id, title, body } = props;
  const dispatch = useDispatch();
  const [isEditable, setIsEditable] = React.useState(false);

  const [text, setText] = React.useState("");

  const bodyData = useSelector((state) => state.posts.body);

  const handleEdit = (params) => {
    setIsEditable(true);
    dispatch(setEdit({ edit: true, body: params.body }));
  };

  const handleDelete = (id) => {
    dispatch(deleteSelectPost(id));
  };

  const handleSave = () => {};

  const handleCancel = () => {
    setIsEditable(false);
    dispatch(setEdit({ edit: false, body: "" }));
  };

  React.useEffect(() => {
    setText(bodyData ? bodyData : "");
  }, [bodyData]);

  return (
    <div
      className="card"
      style={{ width: "18rem", height: "25rem", position: "relative" }}
    >
      <div className="card-body">
        <small className="text-muted">
          <strong>{id}</strong>
        </small>
        <h5 className="card-title">
          <b>Title: </b>
          {title}
        </h5>
        {isEditable ? (
          <textarea
            className="form-control"
            id="floatingTextarea2"
            value={text}
            style={{ height: "100px" }}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
        ) : (
          <p className="card-text">
            <b>Content: </b>
            {body}
          </p>
        )}
        <p className="card-text">
          <small className="text-muted">
            By <strong>User {userId}</strong>
          </small>
        </p>
        {isEditable ? (
          <div
            className="d-flex align-items-end justify-content-end mb-2 mx-2"
            style={{ position: "absolute", bottom: "0", right: "0" }}
          >
            <button className="btn btn-dark mx-2" onClick={() => handleSave()}>
              Save
            </button>
            <button className="btn btn-danger" onClick={() => handleCancel(id)}>
              Cancel
            </button>
          </div>
        ) : (
          <div
            className="d-flex align-items-end justify-content-end mb-2 mx-2"
            style={{ position: "absolute", bottom: "0", right: "0" }}
          >
            <button
              className="btn btn-dark mx-2"
              onClick={() => handleEdit({ id, title, body })}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
