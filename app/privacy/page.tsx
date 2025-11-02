import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Stop Overthinking Your Marketing',
  description: 'Privacy policy for Stop Overthinking Your Marketing',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="mb-8">
            <Link 
              href="/"
              className="text-primary-600 hover:text-primary-700 font-semibold mb-4 inline-block"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stop Overthinking Your Marketing ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Schedule a consultation or free session</li>
                <li>Contact us via email or other communication methods</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Fill out forms on our website</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                This information may include your name, email address, phone number, company name, and any other 
                information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, 
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Schedule and manage consultations and appointments</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze website usage and trends</li>
                <li>Detect, prevent, and address technical issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers 
                who perform services on our behalf, such as scheduling platforms (e.g., Calendly), email services, 
                and analytics providers.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or in 
                response to valid requests by public authorities.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, 
                your information may be transferred.</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with 
                your explicit consent.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may use cookies and similar tracking technologies to track activity on our website and store 
                certain information. Cookies are files with a small amount of data which may include an anonymous 
                unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie 
                is being sent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information. However, no method of transmission over the Internet or electronic storage is 100% 
                secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, 
                including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to object to processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our website may contain links to third-party websites or services. We are not responsible for the 
                privacy practices or content of these third-party sites. We encourage you to review the privacy 
                policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect 
                personal information from children. If you become aware that a child has provided us with personal 
                information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review 
                this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <p className="text-gray-700 mb-2">
                  <strong>Stop Overthinking Your Marketing</strong>
                </p>
                <p className="text-gray-700 mb-2">
                  Email: <a href="mailto:privacy@stopoverthinkingmarketing.com" className="text-primary-600 hover:text-primary-700">privacy@stopoverthinkingmarketing.com</a>
                </p>
                <p className="text-gray-700">
                  Website: <a href="/" className="text-primary-600 hover:text-primary-700">www.stopoverthinkingmarketing.com</a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

