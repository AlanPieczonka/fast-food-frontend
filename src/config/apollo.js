import ApolloClient from "apollo-boost";

const HTTP_URI =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_GRAPHQL_URI_PROD
    : process.env.REACT_APP_GRAPHQL_URI_DEV

export const createClient = () => new ApolloClient({
  uri: HTTP_URI
})
