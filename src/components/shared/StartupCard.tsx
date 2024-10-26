"use client";

import {
  ChevronDown,
  ChevronUp,
  Eye,
  MessageSquare,
  Star,
  ThumbsUp,
} from "lucide-react";
import { useState } from "react";

export default function StartupCard() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full max-w-md bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl overflow-hidden shadow-lg">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">AnyoneCanAI</h2>
              <span className="text-purple-300 text-sm">
                Empowering Creativity
              </span>
            </div>
          </div>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </span>
        </div>

        <p className="text-purple-100 mb-4">
          A simpler & faster way creating valuable products with AI
        </p>

        <div className="flex space-x-2 mb-4">
          {["DESIGN", "ARTIFICIAL INTELLIGENCE", "USER EXPERIENCE"].map(
            (tag) => (
              <span
                key={tag}
                className="bg-purple-700 text-purple-100 text-xs px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            )
          )}
        </div>

        <div className="flex justify-between text-purple-300 text-sm">
          <div className="flex items-center space-x-2">
            <Eye className="w-4 h-4" />
            <span>16 Views</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>0 Comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <ThumbsUp className="w-4 h-4" />
            <span>0 Votes</span>
          </div>
        </div>
      </div>

      <div className="bg-purple-800 p-4">
        <p className="text-purple-100 mb-2">
          Unlock the power of AI-driven product development. Our platform
          simplifies the process, allowing anyone to create innovative solutions
          quickly and efficiently.
        </p>
        <a
          href="#"
          className="text-purple-300 hover:text-white transition-colors"
        >
          Learn more about AnyoneCanAI →
        </a>
      </div>

      <button
        className="w-full bg-purple-700 text-white py-2 flex items-center justify-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <ChevronDown className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
