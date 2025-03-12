import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TermsOfServicePage() {
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

      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Terms of Service</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Mood Voyage service, you agree to be bound by these Terms of Service. If you
                  do not agree to these terms, please do not use our service.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">2. Description of Service</h2>
                <p>
                  Mood Voyage provides tools for emotional intelligence development through Nonviolent Communication
                  principles. The service includes emotion tracking, needs identification, visualization tools, and
                  guided journaling.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">3. User Accounts</h2>
                <p>
                  To use certain features of the service, you may be required to create an account. You are responsible
                  for maintaining the confidentiality of your account information and for all activities that occur
                  under your account.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">4. User Content</h2>
                <p>
                  You retain all rights to any content you submit, post or display on or through the service. By
                  submitting content to the service, you grant Mood Voyage a worldwide, non-exclusive, royalty-free
                  license to use, reproduce, and distribute your content in connection with the service.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">5. Prohibited Conduct</h2>
                <p>You agree not to engage in any of the following prohibited activities:</p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Violating any laws or regulations.</li>
                  <li>Infringing on the intellectual property rights of others.</li>
                  <li>
                    Attempting to interfere with, compromise the system integrity or security, or decipher any
                    transmissions to or from the servers running the service.
                  </li>
                  <li>Using the service for any harmful or malicious purpose.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">6. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, Mood Voyage shall not be liable for any indirect, incidental,
                  special, consequential or punitive damages, or any loss of profits or revenues, whether incurred
                  directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will provide notice of any material changes
                  by posting the new terms on the site or via email. Your continued use of the service after such
                  modifications will constitute your acknowledgment of the modified terms.
                </p>
              </div>

              {/* <div className="space-y-2">
                <h2 className="text-2xl font-bold">8. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <div className="rounded-lg border p-4 bg-muted/50">
                  <p>Email: terms@moodvoyage.com</p>
                  <p>
                    Or visit our{" "}
                    <Link href="/contact" className="text-primary hover:underline">
                      contact page
                    </Link>
                  </p>
                </div>
              </div> */}
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

