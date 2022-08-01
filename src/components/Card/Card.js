import * as React from "react";

export const Card = (props) => {
  const { userId, id, title, body } = props;
  return (
    <div
      className="card"
      style={{ width: "18rem", height: "25rem", position: "relative" }}
    >
      <div className="card-body">
        <small className="text-muted">
          <strong>{id ? `Id: ${id}` : "Unknown"}</strong>
        </small>
        <h5 className="card-title">
          <b>Title: </b>
          {title}
        </h5>
        <p className="card-text">
          <b>Content: </b>
          {body}
        </p>
        <p className="card-text">
          <small className="text-muted">
            By <strong>{userId ? `User: ${userId}` : "Unknown"}</strong>
          </small>
        </p>
        <div
          className="d-flex align-items-end justify-content-end mb-2 mx-2"
          style={{ position: "absolute", bottom: "0", right: "0" }}
        >
          <button className="btn btn-dark mx-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};
