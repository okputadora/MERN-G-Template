import React, { useState } from "react";
import { Mutation, Query } from "react-apollo";
import { Link } from "react-router-dom";

import gql from "graphql-tag";
export const Signup = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const SIGNUP_MUTATION = gql`
    mutation signUp(
      $email: String!
      $username: String!
      $name: String!
      $password: String!
    ) {
      signUp(
        email: $email
        username: $username
        name: $name
        password: $password
      ) {
        username
      }
    }
  `;

  const GET_USERS = gql`
    {
      users {
        username
        id
      }
    }
  `;
  return (
    <div>
      <h1>Signup</h1>
      <Link to="/login">Login</Link>
      <input
        type="text"
        name="name"
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <input
        type="text"
        name="username"
        value={username}
        onChange={e => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{ username, email, password, name }}
      >
        {(signUp, { data, error }) => {
          console.log(data);
          console.log(error);
          return (
            <div>
              <button
                onClick={() =>
                  signUp({
                    variables: { email, username, password, name }
                  })
                }
              >
                Submit
              </button>
              {data ? data.signUp.username : null}
              {/* {Object.keys(error).map(key => key)} */}
            </div>
          );
        }}
      </Mutation>
      <h2>Users</h2>
      <Query query={GET_USERS}>
        {({ loading, error, data }) => {
          if (loading) return "...loading";
          if (error) return `ERROR ${error}`;
          return data.users.map(user => {
            return <div>{user.username}</div>;
          });
        }}
      </Query>
    </div>
    // after creating a user redirect to login @TODO figure out if this is for creating participants or for signing up on your own
    // the answer will determine where/if we redirect to
  );
};

// export default Signup;
