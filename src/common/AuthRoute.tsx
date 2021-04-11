import { Route, Redirect, RouteProps } from "react-router-dom";

import { useAuth } from "../hooks/authentication";
import AppConfig from "../app-constants";

interface AuthRouteProps extends RouteProps {
    component: any;
}
const AuthRoute: React.FC<AuthRouteProps> = ({ component: Component, ...rest }) => {
    const { activeUser } = useAuth();

    return (
        <Route
            {...rest}
            render={(routeProps) =>
                !!activeUser && activeUser.id ? (
                    <Component {...routeProps} />
                ) : (
                    <Redirect to={{ pathname: AppConfig.APP_ROUTES.LOGIN }} />
                )
            }
        />
    );
};

export default AuthRoute;