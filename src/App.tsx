import React from 'react';
import { BookOpen, Target, Heart, Shield, Download, Smartphone, CheckCircle, Star, Calendar, TrendingUp, Lock, Cloud } from 'lucide-react';
import Logo from './assets/logo.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <img
                      src={Logo}
                      alt={'DayStories'}
                      className="h-12 w-12 object-contain mx-auto"
                    />
              <span className="text-2xl font-bold text-gray-900">DayStories</span>
            </div>
           <a
              href="https://play.google.com/store/apps/details?id=com.tecxzo.daystories"
              download
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-block"
            >
              Download Now
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Capture. Track.
                <span className="text-indigo-600 block">Reflect. Relive.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your personal space to track moods, habits, and daily reflections — secure, simple, and powerful.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                href="https://play.google.com/store/apps/details?id=com.tecxzo.daystories"
                download
                >
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download from Play Store</span>
                </button>
                </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-colors">
                  Coming Soon on iOS
                </button>
              </div>
              <p className="text-sm text-gray-500">Free to download • No subscription required • Your data stays private</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-1 transition-transform">
                <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 space-y-4">
                    {/* App Icon + Name */}
                    <div className="flex items-center space-x-4">
                      <img 
                        src= {Logo}
                        alt="DayStories" 
                        className="w-16 h-16 rounded-2xl shadow" 
                      />
                      <div>
                        <h2 className="text-xl font-bold text-gray-800">DayStories</h2>
                        <p className="text-sm text-gray-500">TecxZo</p>
                        <p className="text-xs text-gray-400">Contains ads</p>
                      </div>
                    </div>

                    {/* Downloads + Rating */}
                    <div className="flex space-x-6 text-sm text-gray-600">
                      <div>
                        <p className="font-medium">100+</p>
                        <p className="text-xs">Downloads</p>
                      </div>
                      <div>
                        <p className="font-medium">3+</p>
                        <p className="text-xs">Rated for</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex space-x-3">
                      <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition">
                        Install
                      </button>
                      <button className="p-2 border rounded-lg hover:bg-gray-100 transition">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={2} 
                          stroke="currentColor" 
                          className="w-5 h-5 text-gray-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12v.01M12 4v.01M20 12v.01M12 20v.01M6.34 6.34l.01.01M17.66 6.34l.01.01M17.66 17.66l.01.01M6.34 17.66l.01.01" />
                        </svg>
                      </button>
                    </div>

                    {/* Device availability */}
                    <p className="text-xs text-gray-500 text-center">This app is available for your device</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Headlines (Hidden, for reference) */}
      <div className="hidden">
        {/* Alternative 1: "Your Journey of Growth Starts Here" */}
        {/* Alternative 2: "Mindful Moments, Meaningful Progress" */}
        {/* Alternative 3: "Reflect Daily. Grow Consistently." */}
      </div>

      {/* About DayStories - Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About DayStories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              DayStories is a minimal, private journaling app that combines daily reflections, habit tracking, and mood insights. 
              Our mission is helping people reflect, grow, and preserve their daily moments securely in one beautiful, intuitive space.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                <BookOpen className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Journal</h3>
              <p className="text-gray-600">Capture your thoughts with ease using our clean, distraction-free writing interface</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Habit Tracker</h3>
              <p className="text-gray-600">Build routines and maintain streaks with visual progress tracking and insights</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mood Diary</h3>
              <p className="text-gray-600">Track emotions over time with beautiful visualizations and pattern recognition</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:bg-gray-50 transition-colors group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Backup & Privacy</h3>
              <p className="text-gray-600">Secure Google Drive sync with end-to-end encryption for complete peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How DayStories Works</h2>
            <p className="text-xl text-gray-600">Four simple steps to start your journey of mindful reflection</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Capture Moments</h3>
                <p className="text-gray-600">Record your daily thoughts, experiences, and current mood with our intuitive interface.</p>
              </div>
              <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-1/4"></div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Organize & Track</h3>
                <p className="text-gray-600">Build habits, track progress, and organize your reflections with smart categorization.</p>
              </div>
              <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-1/4"></div>
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure Backup</h3>
                <p className="text-gray-600">Your data is automatically encrypted and backed up to your personal Google Drive.</p>
              </div>
              <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-1/4"></div>
            </div>

            <div className="text-center">
              <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Relive & Grow</h3>
              <p className="text-gray-600">Revisit your journey anytime with insights, trends, and meaningful growth patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Demo Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">See DayStories in Action</h2>
            <p className="text-xl text-gray-600">Beautiful, intuitive design that makes journaling a joy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 mb-4 h-64 flex items-center justify-center">
                <div className="space-y-3 w-full">
                  <div className="h-3 bg-indigo-300 rounded w-3/4 mx-auto"></div>
                  <div className="h-16 bg-white rounded-lg shadow-sm"></div>
                  <div className="flex space-x-2 justify-center">
                    <div className="w-6 h-6 bg-pink-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-yellow-300 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Journal Entry</h3>
              <p className="text-sm text-gray-600">Clean writing interface with mood tracking</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 mb-4 h-64 flex items-center justify-center">
                <div className="space-y-3 w-full">
                  <div className="grid grid-cols-7 gap-1">
                    {[...Array(21)].map((_, i) => (
                      <div key={i} className={`w-4 h-4 rounded ${i < 15 ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                    ))}
                  </div>
                  <div className="h-8 bg-white rounded shadow-sm flex items-center justify-center">
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Habit Tracker</h3>
              <p className="text-sm text-gray-600">Visual progress with streak counters</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8 mb-4 h-64 flex items-center justify-center">
                <div className="space-y-3 w-full">
                  <div className="h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-pink-600" />
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className={`w-3 h-${Math.floor(Math.random() * 8) + 4} bg-pink-300 rounded-t`}></div>
                    ))}
                  </div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Mood Analytics</h3>
              <p className="text-sm text-gray-600">Insights and patterns over time</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 mb-4 h-64 flex items-center justify-center">
                <div className="space-y-3 w-full">
                  <div className="flex items-center justify-center space-x-2">
                    <Cloud className="h-6 w-6 text-blue-600" />
                    <Lock className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="h-12 bg-white rounded shadow-sm flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-xs text-blue-600 font-medium">Encrypted & Synced</div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Secure Backup</h3>
              <p className="text-sm text-gray-600">Google Drive integration with encryption</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Data. Your Control.</h2>
              <p className="text-xl text-gray-600 mb-8">
                Privacy isn't an afterthought—it's built into every aspect of DayStories. Your personal reflections deserve the highest level of protection.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">End-to-end encrypted backups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Stored securely in your personal Google Drive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">No third-party data sharing or analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700">Complete data ownership and export options</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="text-center">
                  <Shield className="h-24 w-24 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Privacy by Design</h3>
                  <p className="text-gray-600 mb-4">Your journal entries never leave your device unencrypted</p>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span>256-bit AES Encryption</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-3">4.9/5</span>
            </div>
            <p className="text-xl text-gray-600">Loved by mindful users worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Clean and simple journaling app. Love the habit tracker! Finally found something that doesn't feel overwhelming."
              </p>
              <div className="text-sm text-gray-500">— Pavan Kumar., Student</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Finally an app that keeps my data private. The Google Drive backup gives me peace of mind without compromising security."
              </p>
              <div className="text-sm text-gray-500">— Random User From PlayStore</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "The mood tracking insights have been eye-opening. I can see patterns I never noticed before. Beautifully designed!"
              </p>
              <div className="text-sm text-gray-500">— Nandan Gowda., Creative Head TecxZo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who've made reflection a daily habit with DayStories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
                href="https://play.google.com/store/apps/details?id=com.tecxzo.daystories"
                download
            >
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center space-x-2">
              <Smartphone className="h-5 w-5" />
              <span>Download from Play Store</span>
            </button>
            </a>
            <button className="bg-indigo-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-indigo-400 transition-colors flex items-center space-x-2">
              <Smartphone className="h-5 w-5" />
              <span>Coming Soon on iOS</span>
            </button>
          </div>
          
          <p className="text-indigo-200 text-sm">Free to download • No subscription required • Your privacy guaranteed</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                 <img
                      src={Logo}
                      alt={'DayStories'}
                      className="h-12 w-12 "
                    />
                <span className="text-2xl font-bold">DayStories</span>
              </div>
              <p className="text-gray-300 mb-4">Your moments, your story.</p>
              <p className="text-gray-400 text-sm">
                Capture, track, reflect, and relive your daily journey with the privacy and security you deserve.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tecxzo</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DayStories. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;