import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'

import { user, repo } from '../config/blogCongig'
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

interface IssueApi {
  id: string
  title: string
  body: string
  created_at: string
}

interface IssuesApi {
  total_count: number
  items: IssueApi[]
}

interface IssueData {
  id: string
  title: string
  body: string
  createdAt: string
}

interface IssuesData {
  totalPublications: number
  items: IssueData[]
}

interface PostsContextData {
  profile: Profile | null
  issues: IssuesData
  isLoadingProfile: boolean
  isLoadingIssues: boolean
  updateFilterIssues: (text: string) => void
}

const PostsContext = createContext({} as PostsContextData)

interface PostsProviderProps {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [isLoadingProfile, setIsLoadingProfile] = useState(true)
  const [isLoadingIssues, setIsLoadingIssues] = useState(true)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [issues, setIssues] = useState<IssuesData>({
    totalPublications: 0,
    items: [],
  } as IssuesData)
  const [filterIssues, setFilterIssues] = useState('')

  function updateFilterIssues(text: string) {
    setFilterIssues(text)
  }

  useEffect(() => {
    async function loadProfile() {
      setIsLoadingProfile(true)
      try {
        const response = await api.get(`/users/${user}`)

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

  useEffect(() => {
    async function loadIssues() {
      setIsLoadingIssues(true)
      try {
        const response = await api.get<IssuesApi>(
          `/search/issues?q=${filterIssues}%20repo:${user}/${repo}`,
        )

        const totalPublications = response.data.total_count

        const items = response.data.items.map((item) => ({
          id: item.id,
          title: item.title,
          body: item.body,
          createdAt: item.created_at,
        }))

        setIssues({ totalPublications, items })
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoadingIssues(false)
      }
    }
    loadIssues()
  }, [filterIssues])

  return (
    <PostsContext.Provider
      value={{
        profile,
        issues,
        isLoadingProfile,
        isLoadingIssues,
        updateFilterIssues,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export function usePosts() {
  return useContext(PostsContext)
}
