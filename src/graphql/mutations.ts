import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login ($email: String!, $password: String!) {
        login(
            loginInput: {
                email: $email,
                password: $password
            }
        ) {
        id
        email
        username
        token
    }
  }
`;