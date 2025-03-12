"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { CheckCircle2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.")
      return
    }

    if (!formData.email.includes("@")) {
      toast.error("Please enter a valid email address.")
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    try {
      // In a real app, you would send this to your API
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   body: JSON.stringify(formData),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // })

      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      toast.success("Message sent! We'll get back to you as soon as possible.")
    } catch (error) {
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center space-y-4 p-4 rounded-lg bg-primary/10 text-primary">
          <CheckCircle2 className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Thank You!</h3>
          <p className="text-center">Your message has been sent. We&apos;ll get back to you as soon as possible.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-2">
            Send another message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name <span className="text-primary">*</span>
            </label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email <span className="text-primary">*</span>
            </label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message <span className="text-primary">*</span>
            </label>
            <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      )}
    </>
  )
}

