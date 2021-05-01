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

export const GET_BASIC_PROJECTS_DATA = gql`
    query {
        getProjects {
            id
            name
        }
    }
`;

export const GET_SELECT_SPRINT_MODAL_DATA = gql`
    query getSprints($projectId: String!) {
        getSprints(projectIdInput: {projectId: $projectId}) {
            id
            version
            statistics {
                originalEstimationSp
                workHoursPerDay
                startDate
                releaseDate
            }
            issueCount
        }
    }
`;

export const GET_BURNDOWN_CHART_DATA = gql`
    query getSprint($projectId: String!, $sprintVersion: String!) {
        getSprint(getSprintInput: {projectId: $projectId, sprintVersion: $sprintVersion}) {
            id
            statistics {
                originalEstimationSp
            }
            spsProgress {
                date
                sp
            }
        }
    }
`;
