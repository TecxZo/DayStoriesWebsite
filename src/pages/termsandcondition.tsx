import React from "react";

const TermsAndConditionsDayStories = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Terms & Conditions
        </h1>
        <p className="text-center text-gray-500 text-sm mb-10">
          Last updated: July 24, 2025
        </p>
        <p className="text-center text-gray-600 text-lg mb-16 leading-relaxed max-w-3xl mx-auto">
          Welcome to <strong>DayStories</strong>, developed by <strong>Tecxzo</strong>. By using our app, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <div className="grid gap-8">
          {/* Section 1 */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By downloading and using DayStories, you accept and agree to be bound by these Terms & Conditions. If you do not agree, please do not use the app.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">2. Use of the App</h2>
            <p className="text-gray-700 leading-relaxed">
              DayStories is intended for personal use only. You may not modify, distribute, or reproduce any part of the app without explicit permission from Tecxzo.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">3. Privacy & Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Your entries, images, and emotions are stored locally on your device. Optional backups to Google Drive are encrypted. Please review our Privacy Policy for more details.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, design, logos, and trademarks of DayStories are the property of Tecxzo. You may not use any of these without prior written consent.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              DayStories is provided "as is" without warranties of any kind. Tecxzo is not responsible for any data loss, device issues, or other damages that may occur from using the app.
            </p>
          </div>

          {/* Section 6 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">6. Updates & Changes</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update the app and these Terms & Conditions occasionally. Continued use of DayStories implies acceptance of any updates.
            </p>
          </div>

          {/* Section 7 */}
          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-2">
              For any questions regarding these Terms & Conditions, please contact us at:
            </p>
            <a
              href="mailto:tecxzo.dev@gmail.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              tecxzo.dev@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsDayStories;
