"use client";
import { useToast } from "@/components/ui/use-toast";
import { setCredentials, logout } from "@/redux/auth/reducer";
import { selectAccessToken, selectCurrentUser } from "@/redux/auth/selectors";
import { useLoginMutation, useRegisterMutation } from "@/services/auth";
import {
  LoginUserRequestType,
  RegisterUserRequestType,
} from "@/services/auth/typings";
import { useDispatch, useSelector } from "react-redux";

const useUserAuth = () => {
  const [login, { isLoading, isSuccess: LoggedIn }] = useLoginMutation();
  const [register, { isLoading: loadingRegistration, isSuccess: Registered }] =
    useRegisterMutation();
  const dispatch = useDispatch();
  const { toast } = useToast();
  const user = useSelector(selectCurrentUser);
  const accessToken = useSelector(selectAccessToken);

  const loginUser = async (values: LoginUserRequestType) => {
    const { email, password } = values;

    try {
      const res = await login({
        email,
        password,
      }).unwrap();

      const {
        accessToken,
        email: userEmail,
        firstName,
        lastName,
        otherName,
        refreshToken,
        accountType,
        userId,
      } = res;
      dispatch(
        setCredentials({
          user: {
            email: userEmail,
            firstName,
            lastName,
            otherName: otherName,
            accountType,
            userId,
          },
          accessToken: accessToken,
          refreshToken: refreshToken,
        })
      );
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${
          (err?.data?.statusCode, err?.data?.message || "unable to login")
        }`,
      });
    }
  };

  const registerUser = async (values: RegisterUserRequestType) => {
    try {
      const res = await register(values).unwrap();
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${
          (err?.data?.statusCode, err?.data?.message || "unable to register")
        }`,
      });
    }
  };

  const logoutUser = () => {
    dispatch(logout());
  };

  return {
    loading: isLoading || loadingRegistration,
    loginUser,
    user,
    registerUser,
    accessToken,
    logoutUser,
    LoggedIn,
    Registered,
  };
};

export default useUserAuth;
