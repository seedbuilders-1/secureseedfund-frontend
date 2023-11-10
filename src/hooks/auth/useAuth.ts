import { useToast } from "@/components/ui/use-toast";
// import { setCredentials } from "@/redux/auth/reducer";
import { selectCurrentUser } from "@/redux/auth/selectors";
import { useLoginMutation } from "@/services/auth";
import { LoginUserRequestType } from "@/services/auth/typings";
import { useSelector } from "react-redux";

const useUserAuth = () => {
  const [login, { isLoading }] = useLoginMutation();
  //   const dispatch = useDispatch();
  const { toast } = useToast();
  const user = useSelector(selectCurrentUser);

  const loginUser = async (values: LoginUserRequestType) => {
    const { email, password } = values;

    try {
      const res = await login({
        email,
        password,
      }).unwrap();

      console.log({ res });

      // dispatch(
      //   setCredentials({
      //     user: res.data.user,
      //     token: res.data.token.accessToken,
      //     refreshToken: res.data.token.refreshToken,
      //     context: "donor",
      //   })
      // );
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Please check your email and password and try again",
      });
    }
  };
  return {
    loading: isLoading,
    loginUser,
    user,
  };
};

export default useUserAuth;
