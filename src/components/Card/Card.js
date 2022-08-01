import * as React from "react";

export const Card = (props) => {
  const { userId, id, title, body } = props;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <small className="text-muted">
          <strong>{id ? `Id: ${id}` : "Unknown"}</strong>
        </small>
        <h5 className="card-title"><b>Title: </b>{title}</h5>
        <p className="card-text"><b>Content: </b>{body}</p>
        <p className="card-text">
          <small className="text-muted">
            By <strong>{userId ? `User: ${userId}` : "Unknown"}</strong>
          </small>
        </p>
      </div>
    </div>
  );
};
