import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Home = () => {
  const { loading, data } = useQuery(FETCH_ITEMS_QUERY);

  return (
    <React.Fragment>
      {loading ? (
        <div className="is-loading">Please wait while loading</div>
      ) : (
        <div className="columns is-multiline">
          {data &&
            data.items.map(item => (
              <div className="column is-4" key={item.id}>
                <div className="card" style={{ height: "100%", width: "100%" }}>
                  <header className="card-header">
                    <p className="card-header-title">{item.name}</p>
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
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img
                        src={`http://localhost:1337${item.image.url}`}
                        alt={item.name}
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      {item.description.substr(0, 220).concat("...")}
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

const FETCH_ITEMS_QUERY = gql`
  query GET_ITEMS {
    items {
      id
      name
      description
      price
      image {
        url
      }
    }
  }
`;

export default Home;
