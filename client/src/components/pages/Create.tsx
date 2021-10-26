import React from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../graphql/posts/mutations";

const Create = (props: any) => {
  const [formData, setFormData] = React.useState({
    title: "",
    body: "",
  });

  const [createUser, { error, data }] = useMutation(CREATE_POST);

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    createUser({ variables: { title: formData.title, body: formData.body } });
    setFormData({ title: "", body: "" });
    props.history.push("/");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Post title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                id="title"
                onChange={handleChange}
                value={formData.title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea
                className="form-control"
                id="body"
                name="body"
                onChange={handleChange}
                value={formData.body}
              ></textarea>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Draft
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
