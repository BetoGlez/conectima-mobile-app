import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Storage } from "@capacitor/storage";

import AppConfig from "../app-constants";

const httpLink = createHttpLink({
    uri: AppConfig.APOLLOR_SERVER_URL
});
const authLink = setContext(async (_, { headers }) => {
    const { value } = await Storage.get({key: AppConfig.TOKEN_STORAGE_KEY});
    return {
        headers: {
            ...headers,
            authorization: value ? `Bearer ${value}` : ""
        }
    };
});
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default apolloClient;
