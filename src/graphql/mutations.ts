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

export const CREATE_PROJECT = gql`
    mutation createProject($name: String!, $spreadSheetId: String!, startDate: String!) {
        createProject(createProjectInput: {name: $name, spreadSheetId: $spreadSheetId, startDate: $startDate}) {
            id
            name
            startDate
            activeSprint {
                id
                version
                statistics {
                    id
                    startDate
                    releaseDate
                }
                dedications {
                    user
                    currentHours
                    expectedHoursPerDay
                }
            }
        }
    }
`;