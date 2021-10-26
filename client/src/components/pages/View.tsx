import React from "react";
import { useQuery } from "@apollo/client";

import Post from "../Post";
import { GET_POSTS } from "../../graphql/posts/queries";

const View = () => {
  // Fetch posts here and pass down as post item
  const { loading, error, data } = useQuery(GET_POSTS);

  return (
    <div className="container mt-5">
      <div className="row">
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          data.posts.map((post: any) => <Post key={post._id} post={post} />)
        )}
      </div>
    </div>
  );
};

export default View;
