import React, {useEffect, createContext, useState} from 'react';


export const UserContext = createContext();

export default function UserProvider({children}) {
    const [user, setUser] = useState(undefined)
    
    useEffect(() => {
        const validStorage = async () => {
            try {
              const mySession = await AsyncStorage.getItem('session');
              setMe(JSON.parse(mySession));
            } catch (error) {
              console.log(`ERROR: ${error.message}`)
            }
        }
        validStorage();
    }, [])

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}