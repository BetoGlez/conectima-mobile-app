import { gql } from "@apollo/client";

export interface ILoginResponse {
    login: {
        id: string;
        email: string;
        username: string;
        token: string;
    }
}

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