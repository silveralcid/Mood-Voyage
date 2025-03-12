"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface GitHubStarBadgeProps {
  repo: string
  className?: string
}

export default function GitHubStarBadge({ repo, className }: GitHubStarBadgeProps) {
  const [stars, setStars] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStars = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`https://api.github.com/repos/${repo}`)
        
        if (!response.ok) {
          throw new Error("Failed to fetch repo data")
        }
        
        const data = await response.json()
        setStars(data.stargazers_count)
      } catch (error) {
        console.error("Error fetching GitHub stars:", error)
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
    <Button asChild variant="ghost" size="sm" className={cn("gap-2", className)}>
      <Link href={`https://github.com/${repo}`} target="_blank" rel="noopener noreferrer">
        <Github className="h-4 w-4" />
        {isLoading ? (
          "Loading..."
        ) : stars !== null ? (
          <>
            <span>Star Us!</span>
            <span>{formatStarCount(stars)}</span>
          </>
        ) : (
          "Star on GitHub"
        )}
      </Link>
    </Button>
  )
}

// Helper function to format star count (e.g., 1000 -> 1k)
function formatStarCount(count: number): string {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}k`
  }
  return count.toString()
}
