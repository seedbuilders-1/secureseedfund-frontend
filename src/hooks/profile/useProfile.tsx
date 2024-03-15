import { useUserProfileQuery } from "@/services/profile";
import useUserAuth from "../auth/useAuth";

const useProfile = () => {
  const { accessToken } = useUserAuth();
  const {
    data: userProfile,
    isLoading: loadingProfile,
    refetch: refetchProfile,
  } = useUserProfileQuery({
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  });

  return {
    userProfile,
    loadingProfile,
    refetchProfile,
  };
};
export default useProfile;
