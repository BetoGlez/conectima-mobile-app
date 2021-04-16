import { gql } from "@apollo/client";

export const GET_PROJECTS_CARDS_DATA = gql`
    query {
        getProjects {
            id
            name
            startDate
            activeSprint {
                id
                version
                statistics {
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
