import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useForm } from "../utils/formHooks";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: ""
  });

  const [addUser, { loading }] = useMutation(CREATE_USER_MUTATION, {
    update(_, result) {},
    onError(err) {
      setErrors(err);
    },
    variables: values
  });
  function registerUser() {
    addUser();
  }

  return (
    <React.Fragment>
      <div className="box" style={{ margin: "0 10rem" }}>
        <form noValidate onSubmit={onSubmit}>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="User Name"
                name="username"
                onChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
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
