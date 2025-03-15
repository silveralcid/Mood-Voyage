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
                  By accessing or using Mood Voyage, you agree to be bound by these Terms of Service. If you do not agree with these terms, please discontinue use of our platform.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">2. Description of Service</h2>
                <p>
                  Mood Voyage provides a digital platform for emotional intelligence development using <strong>Nonviolent Communication (NVC) principles</strong>. Our services include <strong>emotion tracking, needs identification, AI-generated self-reflection insights, visualization tools, and journaling features</strong>.
                </p>
                <p>Mood Voyage <strong>is not a medical or mental health service</strong> and does not provide therapy, diagnosis, or treatment. AI-generated insights are for <strong>self-reflection purposes only</strong> and should not be considered professional guidance.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">3. User Accounts & Responsibilities</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>You must provide accurate and complete registration information.</li>
                  <li>You are responsible for <strong>maintaining the confidentiality</strong> of your login credentials.</li>
                  <li>You agree not to share your account with others or use another person’s account.</li>
                  <li>You must be <strong>at least 18 years old</strong> or have parental consent to use Mood Voyage.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">4. User Content & Privacy</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Users retain ownership of their self-reported <strong>emotion logs, journal entries, and personal content</strong>.</li>
                  <li>By submitting content, you <strong>grant Mood Voyage a limited, non-exclusive, royalty-free license</strong> to use, store, and process the content <strong>solely for service functionality</strong>.</li>
                  <li>We <strong>do not</strong> sell or share personal data with third parties without explicit user consent.</li>
                  <li>Users have the right to <strong>delete their data at any time</strong> in accordance with our <a href="#">Privacy Policy</a>.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">5. Prohibited Conduct</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li><strong>Uploading or sharing offensive, harmful, or illegal content.</strong></li>
                  <li><strong>Attempting to interfere with the security of our platform.</strong></li>
                  <li><strong>Using Mood Voyage for commercial purposes without authorization.</strong></li>
                  <li><strong>Inputting medical or health-related information that may violate HIPAA policies.</strong></li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">6. AI Transparency & Limitations</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Mood Voyage uses <strong>AI-driven insights</strong> to provide <strong>self-reflection prompts</strong>.</li>
                  <li>AI-generated insights <strong>are not medical advice</strong> and should not replace professional support.</li>
                  <li>Users can <strong>opt-out of AI-driven analysis</strong> in their settings.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">7. Data Security & Compliance</h2>
                <p>Mood Voyage complies with <strong>GDPR, CCPA, and global data protection regulations</strong>.</p>
                <p>We implement <strong>AES-256 encryption</strong> to safeguard user data.</p>
                <p>Users can <strong>request data deletion or export</strong> at any time.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
                <p>Mood Voyage is provided "as is" without warranties of any kind. To the fullest extent permitted by law:</p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>We <strong>do not guarantee uninterrupted access</strong> to our services.</li>
                  <li>We <strong>are not responsible for data loss, security breaches, or third-party misuse</strong>.</li>
                  <li>We <strong>are not liable for any indirect or consequential damages</strong> arising from use of our platform.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">9. Modifications to Terms</h2>
                <p>We reserve the right to update these Terms at any time. Users will be notified of material changes via email or in-app notifications.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">10. Contact Information</h2>
                <p>For any questions regarding these Terms, please contact <strong>support@moodvoyage.com</strong>.</p>
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

