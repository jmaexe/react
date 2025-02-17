import { createContext, ReactNode, useContext, useState } from 'react';
import { User } from '../models/User';

export type UserContextType = {
  user: User | undefined;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type UserContextProps = {
  children: ReactNode;
};

export default function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User | undefined>({
    name: 'user',
    likes: [],
  });
  // username: 'John',
  //   password: '123456789',
  //   picture: iconProfile,
  //   likes: [1241241, 5513513, 3212],
  // {
  //   username: 'John',
  //   password: '123456789',
  // }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('UserContext is not provided');
  }
  return context;
};
