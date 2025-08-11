import { FileText, Share2, Zap, Lock, Smartphone, Cloud } from "lucide-react";

const features = [
  {
    title: "Smart Organization",
    description:
      "Automatically categorize and tag your notes with AI-powered organization that learns from your writing style.",
    icon: FileText,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real-time. Share notes, comment, and edit simultaneously across all devices.",
    icon: Share2,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Lightning Fast",
    description:
      "Instant search, quick capture, and seamless sync. Your notes are always up-to-date and accessible anywhere.",
    icon: Zap,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const additionalFeatures = [
  {
    title: "End-to-end encryption",
    description: "Your data is protected with military-grade encryption",
    icon: Lock,
  },
  {
    title: "Cross-platform sync",
    description: "Access your notes on any device, anywhere",
    icon: Smartphone,
  },
  {
    title: "Cloud backup",
    description: "Never lose your notes with automatic cloud backup",
    icon: Cloud,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything you need to stay organized
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to make note-taking effortless and
            productive
          </p>
        </div>

        {/* Main Features */}
        <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.bgColor} mb-6`}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100">
                  <feature.icon className="w-4 h-4 text-gray-600" />
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  {feature.title}
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of users who have transformed their note-taking
              experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Start free trial
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                View pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
