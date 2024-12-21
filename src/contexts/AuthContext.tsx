import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import auth from '@react-native-firebase/auth';

interface AuthContextType {
  user: {email: string | null};
  loading: boolean;
  setUser: (value: {isAuthenticated: boolean; email: string | null}) => void;
  setLoading: (loading: boolean) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [user, setUser] = useState<{email: string | null}>({email: null});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUser({email: currentUser.email});
      setLoading(true);
    } else {
      setUser({email: null});
    }
    setLoading(false);
    setLoading(false);
  }, []);

  const signOut = async () => {
    try {
      await auth().signOut();
      setUser({email: null});
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider value={{user, loading, setUser, setLoading, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthContext is not found');
  }
  return context;
};
