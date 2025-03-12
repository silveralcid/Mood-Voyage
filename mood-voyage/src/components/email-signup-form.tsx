"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { CheckCircle2 } from "lucide-react"

export default function EmailSignupForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real app, you would send this to your API
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      setEmail("")

      toast.success("You've been added to our waitlist!")
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center space-y-4 p-4 rounded-lg bg-primary-foreground text-primary">
          <CheckCircle2 className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Thank You for Joining!</h3>
          <p>We'll keep you updated on our launch and send you early access information.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-2">
            Sign up another email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground text-foreground"
            required
          />
          <Button type="submit" variant="secondary" disabled={isSubmitting} className="whitespace-nowrap">
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      )}
      <p className="text-xs pt-2">We respect your privacy. Unsubscribe at any time.</p>
    </>
  )
}

