/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCookie } from "@/services/auth/tokenHandler";

const BACKEND_API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://my-portfolio-backend-peach.vercel.app/api/v1";

const serverFetchHelper = async (
  endpoint: string,
  options: RequestInit
): Promise<Response> => {
  const { headers, ...restOptions } = options;

  const accessToken = await getCookie("accessToken");

  const response = await fetch(`${BACKEND_API_URL}${endpoint}`, {
    headers: {
      ...headers,

      Cookie: accessToken ? `accessToken=${accessToken}` : "",
    },
    ...restOptions,
  });
  return response;
};

export const serverFetch = {
  get: (endpoint: string, options?: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "GET" }),
  post: (
    endpoint: string,
    body: any,
    options?: RequestInit
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "POST", body }),
  put: (
    endpoint: string,
    body: any,
    options?: RequestInit
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "PUT", body }),
  patch: (
    endpoint: string,
    body: any,
    options?: RequestInit
  ): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "PATCH", body }),
  delete: (endpoint: string, options?: RequestInit): Promise<Response> =>
    serverFetchHelper(endpoint, { ...options, method: "DELETE" }),
};
