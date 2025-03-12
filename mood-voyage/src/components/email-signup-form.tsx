"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function EmailSignupForm() {
  const [email, setEmail] = useState("");
  const [userReferralSource, setUserReferralSource] = useState("");
  const [referralOtherInput, setReferralOtherInput] = useState("");
  const [favoriteFeatureSelection, setFavoriteFeatureSelection] = useState("");
  const [favoriteFeatureOtherInput, setFavoriteFeatureOtherInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }


    setIsSubmitting(true);

    try {
      const autoReferralSource = document.referrer || ""; // Auto-detect referral source

      const response = await fetch("/api/submit-email", {
        method: "POST",
        body: JSON.stringify({
          email,
          autoReferralSource,
          userReferralSelection: userReferralSource,
          userReferralInput: userReferralSource === "other" ? referralOtherInput : "",
          favoriteFeatureSelection,
          favoriteFeatureInput: favoriteFeatureSelection === "other" ? favoriteFeatureOtherInput : "", // Fix: Correcting key name
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });      
      

      if (!response.ok) {
        throw new Error("Failed to submit signup");
      }

      setIsSubmitted(true);
      setEmail("");
      setUserReferralSource("");
      setReferralOtherInput("");
      setFavoriteFeatureSelection("");
      setFavoriteFeatureOtherInput("");
      toast.success("You've been added to our waitlist!");
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="flex flex-col items-center space-y-4 p-4 rounded-lg bg-primary-foreground text-primary">
          <CheckCircle2 className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Thank You for Joining!</h3>
          <p>We&apos;ll keep you updated on our launch and send you early access information.</p>
          <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-2">
            Sign up another email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 w-full max-w-md">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-primary-foreground text-foreground"
            required
          />

          {/* Referral Source Select */}
          <Select onValueChange={setUserReferralSource} value={userReferralSource}>
            <SelectTrigger className="bg-primary-foreground text-foreground">
              <SelectValue placeholder="Where did you hear about us? (Optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="family_friend">Family/Friend</SelectItem>
              <SelectItem value="search_engine">Search Engine</SelectItem>
              <SelectItem value="advertisement">Advertisement</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="reddit">Reddit</SelectItem>
              <SelectItem value="linkedin">LinkedIn</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          {userReferralSource === "other" && (
            <Input
              type="text"
              placeholder="Please specify where you found us!"
              value={referralOtherInput}
              onChange={(e) => setReferralOtherInput(e.target.value)}
              className="bg-primary-foreground text-foreground"
            />
          )}

          {/* Favorite Feature Select */}
          <Select onValueChange={setFavoriteFeatureSelection} value={favoriteFeatureSelection}>
            <SelectTrigger className="bg-primary-foreground text-foreground">
              <SelectValue placeholder="What feature is most important to you? (Optional)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emotion_tracking">Emotion Tracking</SelectItem>
              <SelectItem value="data_visualization">Data Visualization</SelectItem>
              <SelectItem value="guided_journaling">Guided Journaling</SelectItem>
              <SelectItem value="needs_identification">Needs Identification</SelectItem>
              <SelectItem value="ai_chat_coaching">AI Chat Coaching</SelectItem>
              <SelectItem value="ai_voice_coaching">AI Voice Coaching</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>

          {favoriteFeatureSelection === "other" && (
            <Input
              type="text"
              placeholder="Tell us more about a feature you'd like to see!"
              value={favoriteFeatureOtherInput}
              onChange={(e) => setFavoriteFeatureOtherInput(e.target.value)}
              className="bg-primary-foreground text-foreground"
            />
          )}

          <Button type="submit" variant="secondary" disabled={isSubmitting} className="whitespace-nowrap">
            {isSubmitting ? "Submitting..." : "Join Waitlist"}
          </Button>
        </form>
      )}
      <p className="text-xs pt-2">We respect your privacy. Unsubscribe at any time.</p>
    </>
  );
}
