import { useUsersControllerGetMeQuery } from "@/generated/service/users";

const useProfile = () => {
  const {
    data: userProfile,
    isLoading: loadingProfile,
    refetch: refetchProfile,
  } = useUsersControllerGetMeQuery();

  return {
    userProfile,
    loadingProfile,
    refetchProfile,
  };
};
export default useProfile;
