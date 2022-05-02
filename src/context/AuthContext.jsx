import { useReducer, createContext } from "react";
import { AuthReducer } from "./AuthReducer";

const initialState = {
  currentUser: null,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContextProvider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContextProvider>
  );
};
