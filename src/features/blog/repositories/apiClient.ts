import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import token from "../lib/token";
import { ACCESS_TOKEN_KEY } from "../constants/token.contant";

const host = "https://www.shishkin.site/api";

const apiClient = axios.create({
  baseURL: host,
});

const logOnDev = (
  message: string,
  log?: AxiosResponse | InternalAxiosRequestConfig | AxiosError,
) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message, log);
  }
};

apiClient.interceptors.request.use((request) => {
  const jwtToken: string | null = token.getToken(ACCESS_TOKEN_KEY);
  const { method, url } = request;

  if (jwtToken) {
    request.headers["Authorization"] = `Token ${jwtToken}`;
  }

  logOnDev(`🚀 [${method?.toUpperCase()}] ${url} | Request`, request);

  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;
    const { status } = response;

    logOnDev(
      `✨ [${method?.toUpperCase()}] ${url} | Response ${status}`,
      response,
    );

    return response;
  },
  (error) => {
    const { message } = error;
    const { status, data } = error.response;
    const { method, url } = error.config;

    if (status === 429 || status === 401) {
      token.removeToken("jwtToken");
      window.location.reload();
    }

    logOnDev(
      `🚨 [${method?.toUpperCase()}] ${url} | Error ${status} ${data?.message || ""} | ${message}`,
      error,
    );

    return Promise.reject(error);
  },
);

export default apiClient;
