import { useUsersControllerGetMeQuery } from "@/services/profile";

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
