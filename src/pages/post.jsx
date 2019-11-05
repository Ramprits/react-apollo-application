import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { POSTS_QUERY } from "../utils/graphQl";

const Post = ({ history }) => {
  const { data, loading, error } = useQuery(POSTS_QUERY);
  if (data) {
    console.log(data);
  }
  return (
    <React.Fragment>
      <button
        className="button is-small is-rounded is-link mb-1"
        onClick={() => history.push("/addPost")}
      >
        Add New Post
      </button>
      {loading ? (
        <div className="is-loading">Please wait while loading</div>
      ) : (
        <div className="columns is-multiline">
          {data &&
            data.posts.map(item => (
              <div className="column is-4" key={item.id}>
                <div className="card" style={{ height: "100%", width: "100%" }}>
                  <header className="card-header">
                    <p className="card-header-title">
                      <Link to={`${item.id}`}>
                        {item.title.substr(0, 50).concat("...")}
                      </Link>
                    </p>
                    <a
                      href="#"
                      className="card-header-icon"
                      aria-label="more options"
                    >
                      <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true" />
                      </span>
                    </a>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      {item.body.substr(0, 100).concat("...")}
                      <br />
                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href="#" className="card-footer-item">
                      Add To Cart
                    </a>
                    <a href="#" className="card-footer-item">
                      Edit
                    </a>
                    <a href="#" className="card-footer-item">
                      Delete
                    </a>
                  </footer>
                </div>
              </div>
            ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default Post;
