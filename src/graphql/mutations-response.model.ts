export interface ILoginResponse {
    login: {
        id: string;
        email: string;
        username: string;
        token: string;
    }
}