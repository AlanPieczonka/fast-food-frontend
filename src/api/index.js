const defaultConfig = {
  method: "GET"
};

const baseUrl = "http://localhost:4000/api";

const api = async (relativeUrl, params = {}) => {
  const res = await fetch(`${baseUrl}${relativeUrl}`, {
    ...defaultConfig,
    ...params
  });

  return res.json();
};

export default api;
