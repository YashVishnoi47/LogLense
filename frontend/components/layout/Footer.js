import { Github, Linkedin, Mail, Heart, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-gray-200 relative z-1">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Brand */}
          <div className="flex flex-col justify-start items-start space-y-4">
            <h1 className="text-4xl cursor-pointer select-none font-normal text-black hover:text-gray-700 transition-colors">
              LogLense
            </h1>
            <p className="text-sm text-gray-600 max-w-md leading-relaxed">
              A powerful log analysis tool designed to simplify debugging and
              monitoring. Transform your logs into actionable insights.
            </p>
            <p className="text-sm text-gray-500 font-mono flex items-center gap-2">
              Designed and Developed with
              <Heart className="w-4 h-4 fill-black text-black" />
              by Yash Vishnoi
            </p>
          </div>

          {/* Right Section - Links & Social */}
          <div className="flex flex-col justify-start items-start md:items-end space-y-6">
            {/* Quick Links */}
            <div className="flex flex-col md:items-end space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Quick Links
              </h3>
              <nav className="flex flex-col md:items-end space-y-2">
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black transition-colors"
                >
                  Terms of Service
                </a>
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex flex-col md:items-end space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                Connect
              </h3>
              <div className="flex gap-4">
                <Link
                  href="https://github.com/YashVishnoi47"
                  target="_blank"
                  className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/Yash_Vishnoi7"
                  target="_blank"
                  className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://cal.com/yash-vishnoi"
                  target="_blank"
                  className="p-2 rounded-full border border-gray-300 hover:border-black hover:bg-black hover:text-white transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} LogLense. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              All systems operational
            </span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
