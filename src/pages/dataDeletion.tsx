import React from "react";

const DataDeletionPolicyDayStories = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-6">
          Data Deletion Policy
        </h1>
        <p className="text-center text-gray-500 text-sm mb-10">
          Last updated: July 24, 2025
        </p>
        <p className="text-center text-gray-600 text-lg mb-16 leading-relaxed max-w-3xl mx-auto">
          At <strong>DayStories</strong>, your privacy and data control are our priorities.
          This Data Deletion Policy explains how you can delete your personal data
          stored within the app or backed up to Google Drive.
        </p>

        <div className="grid gap-8">
          {/* Section 1 */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">1. Local Data Deletion</h2>
            <p className="text-gray-700 mb-4">
              All your journal entries, images, and emotion records are stored locally on your device. To delete your local data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Open the DayStories app</li>
              <li>Navigate to the "Settings" section</li>
              <li>
                Select "Delete All Data" (this will permanently remove all your entries and images from your device)
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">2. Google Drive Backup Deletion</h2>
            <p className="text-gray-700 mb-4">
              If you opted to back up your data to Google Drive:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                Go to{" "}
                <a
                  href="https://drive.google.com/drive/u/0/settings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-700"
                >
                  Google Drive Settings
                </a>
              </li>
              <li>Find "Manage Apps" and locate <strong>DayStories</strong></li>
              <li>Click "Options" and choose “Delete hidden app data”</li>
              <li>This will remove your backup file stored in your Drive's private appDataFolder</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">3. Uninstalling the App</h2>
            <p className="text-gray-700 leading-relaxed">
              Uninstalling DayStories will remove all local app data from your device.
              However, this will not delete any backups stored in Google Drive.
              Follow the steps above to delete cloud backups separately.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">4. Requesting Data Deletion</h2>
            <p className="text-gray-700 leading-relaxed">
              If you need help deleting your data, or if you believe any data is still stored after following the steps above, please contact us.
              We will assist you within 7 business days.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
            <p className="text-gray-700 mb-2">
              For any data-related concerns, contact us at:
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

export default DataDeletionPolicyDayStories;
