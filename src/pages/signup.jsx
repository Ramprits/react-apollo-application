import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useForm } from "../utils/formHooks";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const [addUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
    update(proxy, result) {
      console.log(result);
    },
    onError: error => {
      setErrors(error);
    },
    variables: values
  });

  const handleSubmit = event => {
    event.preventDefault();
    addUser();
  };

  return (
    <React.Fragment>
      <div className="box" style={{ margin: "0 10rem" }}>
        <form noValidate onSubmit={handleSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="User Name"
                name="username"
                onChange={handleChange}
                value={values.username}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
            </p>
          </div>

          <div className="field">
            <p className="control has-icons-left">
              <input
                className="input"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button
                className={`button is-success ${loading ? "is-loading" : ""}`}
                type="submit"
              >
                Sign Up
              </button>
            </p>
          </div>
          {Object.keys(errors).length > 0 && (
            <div class="notification is-danger">
              <button type="button" class="delete" />
              {Object.keys(errors).map(value => (
                <div key={value}>{value}</div>
              ))}
            </div>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER(
    $username: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      input: {
        data: { username: $username, email: $email, password: $password }
      }
    ) {
      user {
        username
        email
      }
    }
  }
`;

export default SignUp;
