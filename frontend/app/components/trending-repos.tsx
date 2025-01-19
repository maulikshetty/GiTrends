'use client'

import { useState, useEffect } from 'react'
import { Star, GitFork } from 'lucide-react'
import { Skeleton } from "./ui/skeleton"

interface Repo {
  position: number
  name: string
  description: string
  language: string
  stars: string
  forks: string
  url: string
}

export default function TrendingRepos() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        const response = await fetch('gitrends-api.vercel.app/trending')
        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }
        const data = await response.json()
        setRepos(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  if (error) {
    return (
      <div className="rounded-lg p-6 bg-red-900/20 border border-red-900">
        <p className="text-red-400">{error}</p>
        <p className="text-gray-400 mt-2">Please make sure the API server is running at gitrends-api.vercel.app</p>
      </div>
    )
  }

  if (loading) {
    return (
      <ul className="space-y-6">
        {[...Array(5)].map((_, index) => (
          <li key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-800">
            <Skeleton className="h-8 w-3/4 mb-4 bg-gray-800" />
            <Skeleton className="h-4 w-full mb-4 bg-gray-800" />
            <div className="flex items-center space-x-6">
              <Skeleton className="h-6 w-20 bg-gray-800" />
              <Skeleton className="h-6 w-20 bg-gray-800" />
            </div>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className="space-y-6">
      {repos.map((repo) => (
        <li key={repo.position} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800">
          <h2 className="text-2xl font-semibold mb-2">
            <a 
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors"
            >
              {repo.name}
            </a>
          </h2>
          <p className="text-gray-400 mb-4">{repo.description}</p>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-gray-300">{repo.stars}</span>
            </div>
            <div className="flex items-center space-x-2">
              <GitFork className="w-5 h-5 text-green-400" />
              <span className="text-gray-300">{repo.forks}</span>
            </div>
            {repo.language && (
              <div className="text-gray-400">
                <span className="inline-block w-3 h-3 rounded-full bg-purple-400 mr-2" />
                {repo.language}
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  )
}

