import React, { useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const SessionContext = React.createContext({})

export function useSessionContext() {
    return useContext(SessionContext)
}

function SessionProvider({ children }) {
    
    const defaultPosts = [
        // {
        //     name: 'Emrata',
        //     profilepic: emratapfp,
        //     image: emrata6,
        //     description: 'Sono una fregna'
        // },
    ]


    const [ posts, setPosts] = useState(defaultPosts)

    const [session, setSession] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => { loadSession() }, [])

    async function loadSession() {
        const savedSession = await AsyncStorage.getItem('@user_session')
        const savedPosts = await AsyncStorage.getItem('@user_posts')

        if (savedSession)   {
            setSession(JSON.parse(savedSession))
        }

        if (savedPosts)   {
            setPosts(JSON.parse(savedPosts))
        }

        setLoading( false )
    }

    async function login(newSession) {
        await AsyncStorage.setItem('@user_session', JSON.stringify( newSession ))
        setSession(newSession)
    }

    async function logout() {
        await AsyncStorage.removeItem('@user_session')
        setSession(null)
    }

    async function addPost (newPost) {
        const updatePosts = [newPost,...posts] 
        await AsyncStorage.setItem('@user_posts', JSON.stringify (updatePosts))
        setPosts( updatePosts )
    }

    async function removeFirstPost() {
        if (posts.length > 0) {
            // Rimuove il primo elemento dall'array
            const updatedPosts = posts.slice(1);
    
            // Aggiorna AsyncStorage con l'elenco aggiornato
            await AsyncStorage.setItem('@user_posts', JSON.stringify(updatedPosts));
    
            // Aggiorna lo stato dei post
            setPosts(updatedPosts);
        }
    }
    
    const data = {
        session: session,
        login: login,
        logout: logout,
        loading: loading,

        posts: posts,
        addPost: addPost,
        removeFirstPost: removeFirstPost        
    }

    return (
        <SessionContext.Provider value={data}>
            {children}
        </SessionContext.Provider>
    )
}

export default SessionProvider
