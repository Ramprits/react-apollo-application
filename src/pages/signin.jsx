import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { useForm } from "../utils/formHooks";
import { AuthContext } from "../context/authContext";

const SignIn = ({ history }) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const { onChange, onSubmit, values } = useForm(loginUser, {
    identifier: "anita",
    password: "anita@1234"
  });

  const [login, { loading }] = useMutation(CREATE_USER_MUTATION, {
    update(_, result) {
      context.login(result.data.login);
      history.push("/home");
    },
    onError(err) {
      setErrors(err);
    },
    variables: values
  });
  function loginUser() {
    login();
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
                placeholder="User Name or Email"
                name="identifier"
                onChange={onChange}
                value={values.identifier}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
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
                Sign In
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
  mutation LOGIN_USER_MUTATION($identifier: String!, $password: String!) {
    login(input: { identifier: $identifier, password: $password }) {
      jwt
      user {
        email
      }
    }
  }
`;

export default SignIn;
