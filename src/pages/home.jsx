import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const Home = () => {
  const { loading, data } = useQuery(FETCH_ITEMS_QUERY);

  return (
    <React.Fragment>
      <div className="columns is-multiline">
        {data &&
          data.items.map(item => (
            <div className="column">
              <div class="card" style={{ height: "100%", width: "100%" }}>
                <header class="card-header">
                  <p class="card-header-title">{item.name}</p>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                  >
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                </header>
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img
                      src={`http://localhost:1337${item.image.url}`}
                      alt={item.name}
                    />
                  </figure>
                </div>
                <div class="card-content">
                  <div class="content">
                    {item.description.substr(0, 220).concat("...")}
                    <br />
                  </div>
                </div>
                <footer class="card-footer">
                  <a href="#" class="card-footer-item">
                    Add To Cart
                  </a>
                  <a href="#" class="card-footer-item">
                    Edit
                  </a>
                  <a href="#" class="card-footer-item">
                    Delete
                  </a>
                </footer>
              </div>
            </div>
          ))}
      </div>
    </React.Fragment>
  );
};

const FETCH_ITEMS_QUERY = gql`
  query GET_ITEMS {
    items {
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
