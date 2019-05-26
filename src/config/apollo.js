import ApolloClient from "apollo-boost";

const HTTP_URI =
  process.env.NODE_ENV === "production"
    ? ""
    : "http://localhost:4000";

export const createClient = () => new ApolloClient({
  uri: HTTP_URI
})