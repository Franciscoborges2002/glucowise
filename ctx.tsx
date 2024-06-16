import React from 'react';
import { useStorageState, setStorageItemAsync } from './hooks/useStorageState';


const AuthContext = React.createContext<{
    signIn: (username: string, password: string) => boolean;
    signOut: () => void;
    session?: string | null;
    isLoading: boolean;
}>({
    signIn: (username: string, password: string) => false,
    signOut: () => null,
    session: null,
    isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = React.useContext(AuthContext);

    if (!value) {
        throw new Error('useSession must be wrapped in a <SessionProvider />');
    }

    return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
    const [[isLoading, session], setSession] = useStorageState('session');
    const [user, setUser] = useStorageState('User');

    return (
        <AuthContext.Provider
            value={{
                signIn: (username: string, password: string): boolean => {
                    //Se estiverem vazios
                    if (username === "" || username === "") {
                        return false;
                    }

                    //criar objeto inicial
                    let userInfo = {
                        username: username,
                        password: password,
                        realName: "",
                        email: "",
                        token: ""
                    }

                    //sistema de login basico
                    if (userInfo.username === "a" && userInfo.password === "a") {
                        userInfo.realName = "Francisco Borges";
                        userInfo.email = "b@a.com";
                        userInfo.token = "11";

                        let userSave: string = JSON.stringify(userInfo);

                        console.log("teste", typeof(userSave))

                        setUser(userSave);
                        setSession(userInfo.token);
                        console.log(user)
                        console.log("dededededed")
                        return true;
                    }
                    return false;


                },
                signOut: () => {
                    setUser(null);
                    setSession(null);
                },
                session,
                isLoading,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}