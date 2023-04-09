import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from "react";
import ReactDOM from "react-dom/client";
import {ApolloClient,InMemoryCache,ApolloProvider} from "@apollo/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const client = new ApolloClient({
    //uri: "http://localhost:45222/graphql",
    uri: "/graphql",
    cache: new InMemoryCache(),
    name: 'kinnemed',
    version: '1.2',
    defaultOptions: {
        query: {
            errorPolicy: 'all',
        },
        mutate: {
            errorPolicy: 'ignore',
        },
    },
});

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
);