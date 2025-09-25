import React from 'react';
import { Shield, CheckCircle, Cloud } from 'lucide-react';

const PrivacyPolicyDayStories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Last updated: July 24, 2025
          </p>
        </div>

        {/* Intro Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 text-center">
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            <strong>DayStories</strong>, developed by <strong>Tecxzo</strong>, is committed to protecting your privacy.
            This Privacy Policy explains how we handle your personal data when you use our mobile application.
          </p>
        </div>

        {/* Sections */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Section Template */}
          <Section
            title="1. Information We Collect"
            icon={<Shield className="h-10 w-10 text-indigo-600" />}
            content={
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>No personal identifiers like name, email, or phone number are collected.</li>
                <li>Your entries, images, and emotions are stored locally on your device.</li>
                <li>Optional Google Drive backup is only done with consent.</li>
              </ul>
            }
          />

          <Section
            title="2. How Your Data is Used"
            icon={<CheckCircle className="h-10 w-10 text-green-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                All your content stays on your device. If you opt for backup, your journal data is encrypted
                and stored securely in your Google Drive. No data is sold or used for advertising purposes.
              </p>
            }
          />

          <Section
            title="3. Data Security"
            icon={<Cloud className="h-10 w-10 text-blue-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                We ensure your data is encrypted during backup and storage. Local data is stored using secure mechanisms
                provided by your device’s operating system.
              </p>
            }
          />

          <Section
            title="4. Emotion Detection"
            icon={<Shield className="h-10 w-10 text-pink-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                DayStories may use offline emotion classification models to analyze entries. No data is sent to external servers — everything runs on-device.
              </p>
            }
          />

          <Section
            title="5. Google Services"
            icon={<Cloud className="h-10 w-10 text-green-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                Google Drive access is only used if you explicitly choose to back up your data. This is managed via Google Sign-In and is never accessed without your permission.
              </p>
            }
          />

          <Section
            title="6. Children’s Privacy"
            icon={<Shield className="h-10 w-10 text-indigo-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                Our app is not directed toward children under 13. We do not knowingly collect any personal data from children.
              </p>
            }
          />

          <Section
            title="7. Consent"
            icon={<CheckCircle className="h-10 w-10 text-green-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                By using DayStories, you agree to this Privacy Policy and grant us permission to store and process your data as described.
              </p>
            }
          />

          <Section
            title="8. Changes to this Policy"
            icon={<Shield className="h-10 w-10 text-pink-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy occasionally. All changes will be posted on this page, and you are advised to review it regularly.
              </p>
            }
          />

          <Section
            title="9. Contact"
            icon={<Cloud className="h-10 w-10 text-blue-600" />}
            content={
              <p className="text-gray-700 leading-relaxed">
                If you have any questions, please contact us at{' '}
                <a href="mailto:tecxzo.dev@gmail.com" className="text-indigo-600 underline hover:text-indigo-800">
                  tecxzo.dev@gmail.com
                </a>.
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyDayStories;

// Reusable Section Component
const Section = ({ title, icon, content }: { title: string; icon: React.ReactNode; content: React.ReactNode }) => (
  <div className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
    <div className="flex items-center mb-4 space-x-4">
      {icon}
      <h2 className="text-lg md:text-xl font-semibold text-gray-900">{title}</h2>
    </div>
    <div>{content}</div>
  </div>
);
