import React from "react";

import "./LoginPage.scss"
import AppConfig from "../../app-constants";
import AuthBoxComponent from "./AuthBoxComponent/AuthBoxComponent";

const LoginPage: React.FC = () => {
    return (
        <div className="login-page" style={{ backgroundImage: `url(${AppConfig.LOGIN_BG_IMAGE_URL})` }}>
            <AuthBoxComponent />
        </div>
    );
};

export default LoginPage;