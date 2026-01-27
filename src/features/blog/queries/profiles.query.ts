import { useMutation, useQueries } from "@tanstack/react-query";
import {
  QUERY_ARTICLES_KEY,
  QUERY_PROFILE_KEY,
} from "../constants/query.constant";
import {
  followUser,
  getProfile,
  unfollowUser,
} from "../repositories/profiles/profileRepository";
import { getArticles } from "../repositories/articles/articlesRepository";

export const useGetProfileQueries = (
  username: string,
  page: number,
  isFavorited: boolean,
) => {
  return useQueries({
    queries: [
      {
        queryKey: [QUERY_PROFILE_KEY, username],
        queryFn: () => getProfile({ username }).then((res) => res.data.profile),
        staleTime: 20000,
      },
      {
        queryKey: [QUERY_ARTICLES_KEY, username, page, isFavorited],
        queryFn: () =>
          getArticles({ username, page, isFavorited }).then((res) => res.data),
        staleTime: 20000,
      },
    ],
  });
};

export const useFollowUserMutation = () => useMutation(followUser);

export const useUnFollowUserMutation = () => useMutation(unfollowUser);
