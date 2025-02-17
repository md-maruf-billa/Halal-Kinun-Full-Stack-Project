"use client";

import UserContextProvider from "@/context/userContext";
const UserProvider = ({ children }: { children: React.ReactNode }) => {
      return <UserContextProvider>{children}</UserContextProvider>;
};

export default UserProvider;