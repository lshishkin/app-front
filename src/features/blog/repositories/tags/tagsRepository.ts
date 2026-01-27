import apiClient from "../apiClient";

export const getTags = async () => {
  return await apiClient({
    method: 'get',
    url: `/tags`,
  });
};
