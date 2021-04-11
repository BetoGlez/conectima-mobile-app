import * as yup from "yup";
import { FormikHelpers } from "formik";

import { ILoginForm } from "../../../models/forms/login-form.model";
import AppConfig from "../../../app-constants";

export interface IAuthBoxComponentProps {
    isLoading: boolean;
    doLogin: (values: ILoginForm, helpers: FormikHelpers<ILoginForm>) => void | Promise<any>;
}

export const INITIAL_LOGIN_FORM_VALUES = {
    email: "",
    password: ""
} as ILoginForm;

export const LOGIN_VALIDATION_SCHEMA = yup.object({
    email: yup
        .string()
        .email()
        .required(),
    password: yup
        .string()
        .min(AppConfig.MIN_PASSWORD_LENGTH)
        .required()
});