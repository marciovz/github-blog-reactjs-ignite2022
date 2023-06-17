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
  github: string
  company: string | null
  followers: number
}

interface PostsContextData {
  profile: Profile | null
  isLoadingProfile: boolean
}

const PostsContext = createContext({} as PostsContextData)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [isLoadingProfile, setIsLoadingProfile] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)

  useEffect(() => {
    async function loadProfile() {
      setIsLoadingProfile(true)
      try {
        const response = await api.get('/users/marciovz')

        console.log(response)

        setProfile({
          name: response.data.name,
          bio: response.data.bio,
          login: response.data.login,
          avatarUrl: response.data.avatar_url,
          github: response.data.html_url,
          company: response.data.company,
          followers: response.data.followers,
        })
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingProfile(false)
      }
    }
    loadProfile()
  }, [])

  return (
    <PostsContext.Provider
      value={{
        profile,
        isLoadingProfile,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  return useContext(PostsContext)
}
