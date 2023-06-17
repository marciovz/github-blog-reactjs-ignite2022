import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { api } from '../services/api'

interface Profile {
  name: string
  bio: string
  login: string
  avatarUrl: string
  company: string | null
  followers: number
}

interface PostsContextData {
  profile: Profile | null
}

const PostsContext = createContext({} as PostsContextData)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await api.get('/users/marciovz')

        setProfile({
          name: response.data.name,
          bio: response.data.bio,
          login: response.data.login,
          avatarUrl: response.data.avatar_url,
          company: response.data.company,
          followers: response.data.followers,
        })
      } catch (error) {
        console.log(error)
      }

      setProfile(null)
    }
    loadProfile()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        profile,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  return useContext(PostsContext)
}
