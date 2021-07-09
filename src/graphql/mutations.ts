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
    mutation createProject($name: String!, $spreadSheetId: String!, $startDate: String!) {
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

export const SYNC_ALL_PROJECTS = gql`
    mutation syncAllProjects {
        syncAllProjects {
            id
            name
            spreadSheetId
            startDate
            activeSprint {
                id
                version
                issueCount
                statistics {
                    id
                    originalEstimationSp
                    devEstimationSp
                    originalEstimationHours
                    devEstimationHours
                    startDate
                    releaseDate
                    workHoursPerDay
                    remainingWorkDays
                    originalDeviationPercentage
                    devDeviationPercentage
                    originalProgressPercentage
                    devProgressPercentage
                }
                dedications {
                    user
                    currentHours
                    expectedHoursPerDay
                }
                spsProgress {
                    date
                    sp
                }
            }
            sprints {
                id
                version
                issueCount
                statistics {
                    id
                    originalEstimationSp
                    devEstimationSp
                    originalEstimationHours
                    devEstimationHours
                    startDate
                    releaseDate
                    workHoursPerDay
                    remainingWorkDays
                    originalDeviationPercentage
                    devDeviationPercentage
                    originalProgressPercentage
                    devProgressPercentage
                }
                dedications {
                    user
                    currentHours
                    expectedHoursPerDay
                }
                spsProgress {
                    date
                    sp
                }
            }
            dedications {
                user
                currentHours
                expectedHoursPerDay
            }
        }
    }
`;