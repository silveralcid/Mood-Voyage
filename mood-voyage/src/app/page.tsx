import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, BarChart2, Bell, BookOpen, Lock, ArrowRight, CheckCircle, Menu } from "lucide-react"
// import EmailSignupForm from "@/components/email-signup-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" />
            <Link href="#" className="text-xl font-bold">
              Mood Voyage
            </Link>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About NVC
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="#signup" className="text-sm font-medium hover:text-primary">
              Get Updates
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex">
              <Link href="#signup">Join Waitlist</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
      {/* Hero Section */} 
      <section className="w-full bg-gradient-to-b from-background to-muted py-16 md:py-0 md:min-h-[calc(100vh-4rem)] md:flex md:items-center md:justify-center">
        <div className="container px-4 md:px-6 flex items-center">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 text-center md:text-left"> {/* Center text for small screens */}
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Uncover Your Why
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto md:mx-0">
                  Mood Voyage simplifies the discovery of emotional needs using scientifically-backed NVC principles. Effortlessly uncover insights and deepen self-awareness.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center md:justify-start">
                <Button asChild size="lg" className="px-8">
                  <Link href="#signup">Join the Waitlist</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="#about">Learn More</Link>
                </Button>
              </div>
            </div>
            <Image
              src="/undraw_holding-flowers_jc03.svg?height=550&width=550"
              width={300}
              height={300}
              alt="Mood Voyage App Interface"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>




        {/* Features Section */}
        <section id="features" className="w-full h-scre py-12 md:py-24 lg:py-32 md:min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Simplifying the complex world of emotions, making them more quantifiable and actionable.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Emotion Tracking</h3>
                <p className="text-center text-muted-foreground">
                  Easily log and categorize your emotions throughout the day with intuitive interfaces.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Intuitive Visualization</h3>
                <p className="text-center text-muted-foreground">
                  View your emotional patterns and need fulfillment through clear, insightful graphs and charts.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Customizable Reminders</h3>
                <p className="text-center text-muted-foreground">
                  Set gentle prompts to encourage regular check-ins and self-reflection.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Guided Journaling</h3>
                <p className="text-center text-muted-foreground">
                  Deepen your understanding with thought-provoking prompts based on your tracked data.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Needs Identification</h3>
                <p className="text-center text-muted-foreground">
                  Connect your emotions to underlying needs using NVC principles.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Privacy-Focused</h3>
                <p className="text-center text-muted-foreground">
                  Your emotional data stays secure and private on your device.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About NVC Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted md:min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  What is Nonviolent Communication?
                </h2>
                <p className="text-muted-foreground md:text-xl">
                  NVC is a communication approach developed by psychologist Marshall Rosenberg in the 1960s. It&apos;s based
                  on the idea that all human beings have the capacity for compassion and that our natural state is one
                  of empathy and cooperation.
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">The NVC process involves four key components:</h3>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>
                      <strong>Observation:</strong> Objectively describing what is happening without judgment or
                      evaluation.
                    </li>
                    <li>
                      <strong>Feelings:</strong> Identifying and expressing the emotions that arise in response to the
                      observation.
                    </li>
                    <li>
                      <strong>Needs:</strong> Recognizing the underlying needs, values, or desires connected to the
                      feelings.
                    </li>
                    <li>
                      <strong>Requests:</strong> Making clear, specific, and actionable requests to help meet the
                      identified needs.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/NVC_Mandala3_1600.webp"
                  width={750}
                  height={500}
                  alt="NVC Process Diagram"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 md:min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Scientific Basis & Benefits</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Research has shown that NVC can provide significant improvements in various aspects of life.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Research-Backed Results</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Improved empathy and understanding in communication</p>
                      <p className="text-sm text-muted-foreground">(Marlow et al., 2012)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Reduced stress and increased well-being</p>
                      <p className="text-sm text-muted-foreground">(Wacker & Dziobek, 2018)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Enhanced relationship satisfaction and conflict resolution skills</p>
                      <p className="text-sm text-muted-foreground">(Nosek et al., 2014)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4">Mood Voyage Empowers You To</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Gain clarity on your emotional states</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Identify patterns in your emotional responses</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Recognize unfulfilled needs driving your emotions</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Take informed actions to improve your overall well-being</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>Cultivate more fulfilling relationships</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section id="signup" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground md:min-h-screen flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-8 text-center">
              <div className="flex flex-col gap-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Be the First to Experience Mood Voyage
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Join our waitlist to receive updates on our launch and get early access to Mood Voyage.
                </p>
              </div>

              <div className="mx-auto w-full max-w-md">
                {/* <EmailSignupForm /> */}
              </div>
            </div>
          </div>
        </section>

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

