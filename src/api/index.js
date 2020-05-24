import { store } from "../store";

const baseUrl = process.env.REACT_APP_API_HOST || "http://localhost:4000";
const apiPrefix = "/api";

const api = async (relativeUrl, params = {}) => {
  try {
    const token = store.getState().user.accessToken;

    const defaultConfig = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(`${baseUrl}${apiPrefix}${relativeUrl}`, {
      ...defaultConfig,
      ...params,
    });

    if (res.statusText === "No Content") {
      return res.text();
    }

    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export default api;
