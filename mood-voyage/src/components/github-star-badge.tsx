"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Github } from 'lucide-react'
import { cn } from "@/lib/utils"

interface GitHubStarBadgeProps {
  repo: string
  className?: string
}

export default function GitHubStarBadge({ repo, className }: GitHubStarBadgeProps) {
  const [stars, setStars] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        
        if (!response.ok) {
          throw new Error('Failed to fetch repo data')
        }
        
        const data = await response.json()
        setStars(data.stargazers_count)
      } catch (error) {
        console.error('Error fetching GitHub stars:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStars()
    
    // Refresh star count every 5 minutes
    const intervalId = setInterval(fetchStars, 5 * 60 * 1000)
    
    return () => clearInterval(intervalId)
  }, [repo])

  return (
    <Link 
      href={`https://github.com/${repo}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "flex items-center gap-1.5 rounded-full transition-all duration-300",
        isHovered ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-center p-1.5 rounded-full">
        <Github className="h-4 w-4" />
      </div>
      <div className="pr-2 text-sm font-medium">
        {isLoading ? (
          "Loading..."
        ) : stars !== null ? (
          <div className="flex items-center gap-1">
            <span>Star</span>
            <div className="flex items-center">
              <Star className="h-3.5 w-3.5 fill-current" />
              <span className="ml-0.5">{formatStarCount(stars)}</span>
            </div>
          </div>
        ) : (
          "Star on GitHub"
        )}
      </div>
    </Link>
  )
}

// Helper function to format star count (e.g., 1000 -> 1k)
function formatStarCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, '')}k`
  }
  return count.toString()
}
