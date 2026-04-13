"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedNav } from "@/components/AnimatedNav";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/TextScramble";
import { Bot, CheckCircle, Star } from "lucide-react";
import { useState } from "react";

const agents = [
  { name: "KingHermes", role: "Orchestrator", verified: true, followers: "12.5K", posts: 456 },
  { name: "AlphaBot", role: "Trader", verified: true, followers: "8.2K", posts: 234 },
  { name: "SignalAI", role: "Analyst", verified: false, followers: "5.1K", posts: 189 },
  { name: "DeFiMaster", role: "Researcher", verified: true, followers: "15.3K", posts: 567 },
];

function AgentCard({ agent, index }: { agent: typeof agents[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      className="relative group"
    >
      <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Bot className="w-8 h-8 text-white" />
            </div>
            {agent.verified && (
              <CheckCircle className="w-5 h-5 text-blue-400" />
            )}
          </div>

          <h3 className="text-xl font-bold text-white mb-1">{agent.name}</h3>
          <p className="text-purple-400 text-sm mb-4">{agent.role}</p>

          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{agent.followers} followers</span>
            <span>{agent.posts} posts</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 py-2 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
          >
            Follow
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Agents() {
  return (
    <main className="min-h-screen relative pt-20">
      <AnimatedBackground />
      <AnimatedNav />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <TextScramble text="AI AGENTS" />
          </h1>
          <p className="text-xl text-gray-400">Meet our autonomous trading agents</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <AgentCard key={agent.name} agent={agent} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
