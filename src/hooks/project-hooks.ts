import { ApolloCache, ApolloError, FetchResult, useMutation } from "@apollo/client";

import AppConfig from "../app-constants";
import { useToast } from "./popups";
import { useLogger } from "./logger";
import { ICreateProjectPayload } from "../graphql/inputs-payload.model";
import { CREATE_PROJECT } from "../graphql/mutations";
import { GET_PROJECTS_CARDS_DATA } from "../graphql/queries";
import { ICreateProjectResponse } from "../graphql/mutations-response.model";
import { IGetProjectsCardsDataResponse } from "../graphql/queries-response.model";

export const useCreateProject = () => {

    const logger = useLogger("useCreateProject");
    const { presentInfoToast } = useToast();

    const [createProject, { loading }] = useMutation<ICreateProjectResponse, ICreateProjectPayload>(CREATE_PROJECT, {
        update: (cache, res) => handleProjectCreation(cache, res),
        onError: (err) => handleError(err)
    });

    const handleProjectCreation = (cache: ApolloCache<ICreateProjectResponse>, { data }: FetchResult<ICreateProjectResponse>) => {
        const newCreatedProject = data?.createProject;
        const existingProjects = cache.readQuery<IGetProjectsCardsDataResponse>({
            query: GET_PROJECTS_CARDS_DATA
        });
        if (newCreatedProject && existingProjects) {
            logger.d("Apollo cache updated with new project");
            cache.writeQuery<IGetProjectsCardsDataResponse>({
                query: GET_PROJECTS_CARDS_DATA,
                data: {
                    getProjects: [ ...existingProjects.getProjects, newCreatedProject ]
                }
            });
        }
    };

    const handleError = (err: ApolloError): void => {
        const gqlErrors = err.graphQLErrors[0].extensions;
        const errorCode = gqlErrors?.errorCodes && gqlErrors?.errorCodes[0];
        if (Object.values(AppConfig.ERROR_CODES.CREATE_PROJECT).includes(errorCode)) {
            presentInfoToast(`errors.${errorCode}`);
        } else {
            logger.w("There was an unexpected project creation error", err.message);
        }
    };

    return { createProject, isLoading: loading };
};