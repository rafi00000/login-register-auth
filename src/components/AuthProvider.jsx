import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./../firebase/firebase.config";

// 1. creating a context
export const AuthContext = createContext(null);

// the actual component----------
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  };

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    });
    
    // clearing the data
    return () => {
      unSubscribe();
    }
  }, [])

  const signOutUser = () =>{
    return signOut(auth)
  }

  const authInfo = { user, createUser, signInUser, signOutUser };

  return (
    <div>
      {/* 2. creating a provider with a value and giving it to where i want */}
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
