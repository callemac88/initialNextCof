import axios from "axios";
import React, { useState, useContext, createContext } from "react";
import Cookies from "js-cookie";
import endPoints from "@services/api/index";

interface IAuth {
  user: string | null;
  signIn: {};
}

const AuthContext = createContext<IAuth>({
  user: null,
  signIn: {},
});

type Props = {
  children: React.ReactNode;
};

export function ProviderAuth({ children }: Props) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}> {children} </AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [user, setUser] = useState<null | string>(null);
  const signIn = async (email: string, password: string) => {
    const options = {
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
      },
    };
    const { data: access_token } = await axios.post(
      endPoints.auth.login,
      { email, password },
      options
    );

    if (access_token) {
      const token = access_token.access_token;
      Cookies.set("token", token, { expires: 5 });
      axios.defaults.headers.Authorization = `Bearer ${token}`;
      const { data: user } = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  return {
    user,
    signIn,
  };
}
