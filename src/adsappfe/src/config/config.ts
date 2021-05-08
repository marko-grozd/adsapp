const API_URLS = {
  login: "/authenticate",
  user: "/user",
  signup: "/user/signup",
  ad: "/ad",
};

interface Config {
  [name: string]: any;
}

const CONFIG: Config = {
  development: {
    BASE_URL: "http://localhost:8080",
  },
};

export default {
  ...CONFIG[process.env.REACT_APP_ENV || "development"],
  API_URLS,
};
