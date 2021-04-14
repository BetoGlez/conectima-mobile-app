import { ApolloClient, InMemoryCache } from "@apollo/client";

import AppConfig from "../app-constants";

const apolloClient = new ApolloClient({
    uri: AppConfig.APOLLOR_SERVER_URL,
    cache: new InMemoryCache(),
});

export default apolloClient;
