import {
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user Profile Update

  const userProfileUpdate = (userInfo, profile) => {
    return updateProfile(userInfo, profile);
  };

  // user SigIn
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const gitHubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // user Sign out
  const userLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // on Auth State

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createNewUser,
    loginUser,
    gitHubLogin,
    userLogOut,
    loading,
    userProfileUpdate,
    setUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
