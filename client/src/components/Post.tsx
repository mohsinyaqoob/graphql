import React from "react";
import { Link } from "react-router-dom";

type PostType = {
  _id: String;
  title: String;
  body: String;
  createdAt: String;
};

const Post = (props: any) => {
  const { post } = props;
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">{post.title}</h4>
        </div>
        <div className="card-body">{post.body}</div>
        <div className="card-footer">
          <Link to={`/edit/${post._id}`} className="btn btn-secondary btn-sm">
            Edit
          </Link>
          <Link to="" className="btn btn-danger btn-sm ml-3">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
