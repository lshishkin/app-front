
import { useMutation, useQuery } from "@tanstack/react-query";
import { QUERY_USER_KEY } from "../constants/query.constant";
import { getUser, putUser } from "../repositories/users/usersRepository";

export const useGetUserQuery = () =>
  useQuery({
    queryKey: [QUERY_USER_KEY],
    queryFn: () => getUser().then((res) => res.data.user),
    staleTime: 20000,
  });

export const usePutUserMutation = () => useMutation(putUser);
