import * as yup from "yup";

export interface INewProjectForm {
    projectName: string;
}

export const INITIAL_NEW_PROJECT_FORM: INewProjectForm = {
    projectName: ""
};

export const NEW_PROJECT_VALIDATION_SCHEMA = yup.object({
    projectName: yup
        .string()
        .required()
});