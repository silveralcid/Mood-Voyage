import Link from "next/link"
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated:  {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">1. Introduction</h2>
                <p>
                  Welcome to Mood Voyage. Your privacy is critically important to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use our platform. Mood Voyage is committed to maintaining compliance with global data protection laws, including <strong>GDPR (EU), CCPA (California), and other applicable privacy regulations</strong>.
                </p>
                <p>By using our services, you consent to the data practices described in this policy.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">2. Data We Collect</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li><strong>Identity Data:</strong> First name, last name, and username.</li>
                  <li><strong>Contact Data:</strong> Email address and phone number.</li>
                  <li><strong>Technical Data:</strong> IP address, browser type, operating system, and device information.</li>
                  <li><strong>Usage Data:</strong> Information about how you use our platform.</li>
                  <li><strong>Self-Reported Data:</strong> Emotion logs, journaling entries, and user-generated responses.</li>
                </ul>
                <p>Mood Voyage <strong>does not collect, store, or process medical or Protected Health Information (PHI)</strong>, ensuring that we remain outside the scope of <strong>HIPAA compliance</strong>.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">3. How We Use Your Data</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>Provide and improve our services.</li>
                  <li>Personalize user experiences based on self-reported emotions.</li>
                  <li>Ensure legal and security compliance.</li>
                  <li>Develop AI-driven insights (non-medical).</li>
                  <li>Monitor and enhance data security.</li>
                </ul>
                <p>We <strong>do not</strong> use AI-generated insights for medical diagnosis or treatment recommendations. AI insights are for <strong>self-reflection purposes only</strong>.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">4. Data Security & Retention</h2>
                <p>
                  We prioritize <strong>strong encryption and data security</strong>:
                </p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li><strong>Encryption:</strong> All personal data is stored securely with <strong>AES-256 encryption</strong>.</li>
                  <li><strong>Access Controls:</strong> Only authorized personnel can access personal data.</li>
                  <li><strong>Data Retention:</strong> We retain data <strong>only as long as necessary</strong> for service functionality.</li>
                  <li><strong>Deletion Requests:</strong> Users can delete their data at any time by contacting support or using in-app settings.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">5. Your Rights</h2>
                <p>
                  Under GDPR and CCPA, you have the following rights:
                </p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li><strong>Right to Access:</strong> Request copies of your stored data.</li>
                  <li><strong>Right to Correction:</strong> Update or correct inaccurate personal data.</li>
                  <li><strong>Right to Deletion:</strong> Request permanent deletion of your data.</li>
                  <li><strong>Right to Data Portability:</strong> Export your data in a structured format.</li>
                  <li><strong>Right to Opt-Out:</strong> Decline AI analysis and targeted data processing.</li>
                </ul>
                <p>To exercise any of these rights, email <strong>support@moodvoyage.com</strong>.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">6. AI Transparency & Ethical Use</h2>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li>AI-generated insights are <strong>non-medical and should not replace professional guidance</strong>.</li>
                  <li>Users can <strong>opt-out of AI-driven analysis</strong> in privacy settings.</li>
                  <li>AI models are regularly reviewed to <strong>prevent bias and ensure fairness</strong>.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">7. Accessibility & Inclusion</h2>
                <p>
                  Mood Voyage is committed to <strong>WCAG 2.1 accessibility standards</strong> to ensure that privacy settings and policy documents are fully accessible to all users, including those with visual, auditory, and cognitive impairments.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">8. Emergency Handling & Crisis Support</h2>
                <p>
                  Mood Voyage is <strong>not a crisis intervention service</strong>. If you are experiencing distress, we encourage you to seek professional support. Below are international crisis resources:
                </p>
                <ul className="ml-6 list-disc space-y-1 text-muted-foreground">
                  <li><strong>U.S.:</strong> National Suicide Prevention Lifeline: <strong>988</strong></li>
                  <li><strong>U.K.:</strong> Samaritans: <strong>116 123</strong></li>
                  <li><strong>Global:</strong> <a href="https://www.befrienders.org/">befrienders.org</a></li>
                </ul>
                <p>We do not monitor or store user entries related to crisis situations.</p>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-bold">9. Updates to This Policy</h2>
                <p>We may update this Privacy Policy periodically. We will notify users of significant changes via email or platform notifications.</p>
                <p>For questions about this policy, contact us at <strong>support@moodvoyage.com</strong>.</p>
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
