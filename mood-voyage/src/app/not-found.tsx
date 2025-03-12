import Link from "next/link"
import Image from "next/image"
import { Heart, ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <Link href="/" className="text-xl font-bold">
              Mood Voyage
            </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              About NVC
            </Link>
            <Link href="/#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="/#signup" className="text-sm font-medium hover:text-primary">
              Get Updates
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="/#signup">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-2">
              <h1 className="text-6xl font-bold tracking-tighter text-primary">404</h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Page Not Found</h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
                Oops! The page you're looking for seems to have wandered off on its own emotional journey.
              </p>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Image
                src="/undraw_lost_teip.svg?height=200&width=200"
                width={200}
                height={200}
                alt="Lost illustration"
                className="mx-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <Home className="h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <Link href="/contact">
                  <ArrowLeft className="h-4 w-4" />
                  Contact Support
                </Link>
              </Button>
            </div>

            <div className="rounded-lg border p-4 bg-muted/50 max-w-md">
              <p className="text-sm text-muted-foreground">
                If you believe this is an error, please contact our support team and we'll help guide you back to your
                emotional center.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Mood Voyage. All rights reserved.
            </p>
          </div>

          <nav className="flex gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}