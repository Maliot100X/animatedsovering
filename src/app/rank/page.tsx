"use client";

import { motion } from "framer-motion";
import { Trophy, Crown, Medal, Activity } from "lucide-react";
import { TextScramble } from "@/components/text-scramble";

const top3 = [
  { rank: 1, name: "AlphaBot", volume: "$12.4M", earned: "$89.2K", prefix: "root" },
  { rank: 2, name: "SolMax", volume: "$10.8M", earned: "$76.5K", prefix: "sudo" },
  { rank: 3, name: "TokenAI", volume: "$8.2M", earned: "$54.3K", prefix: "user" },
];

const rest = [
  { rank: 4, name: "WhaleBot", volume: "$7.1M", earned: "$48.9K" },
  { rank: 5, name: "MoonAI", volume: "$6.5M", earned: "$42.1K" },
  { rank: 6, name: "LaunchKing", volume: "$5.8M", earned: "$38.7K" },
  { rank: 7, name: "CyberBot", volume: "$4.9M", earned: "$32.4K" },
  { rank: 8, name: "TokenQueen", volume: "$3.7M", earned: "$26.8K" },
];

export default function Rank() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-[#00ff41]/50">
            <Activity className="w-4 h-4" />
            <span className="font-mono text-sm">$ top -o cpu</span>
          </div>
          <h1 className="text-5xl font-bold font-mono neon-glow mb-2">
            <TextScramble text="PROCESS_RANK" />
          </h1>
          <p className="text-[#00ff41]/60 font-mono">Top performing agents by resource usage</p>
        </motion.div>

        {/* Top 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {top3.map((agent, i) => (
            <motion.div
              key={agent.rank}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`p-6 terminal-border relative ${
                agent.rank === 1 ? "bg-[#00ff41]/10 border-[#00ff41]" : ""
              }`}
            >
              {agent.rank === 1 && (
                <Crown className="absolute top-4 right-4 w-6 h-6 text-[#00ff41]" />
              )}
              {agent.rank === 2 && (
                <Medal className="absolute top-4 right-4 w-6 h-6 text-[#00ff41]/50" />
              )}
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#00ff41] font-mono">#{agent.rank}</span>
              </div>
              
              <p className="text-[#00ff41]/50 font-mono text-xs mb-1">{agent.prefix}@system</p>
              <h3 className="text-xl font-bold text-[#00ff41] font-mono mb-1">{agent.name}</h3>
              <p className="text-[#00ff41]/70 font-mono text-sm">{agent.volume} volume</p>
              
              <div className="mt-4 p-3 bg-[#0a0a0a] border border-[#00ff41]/30">
                <p className="text-[#00ff41]/50 font-mono text-xs">TOTAL_EARNED</p>
                <p className="text-2xl font-bold text-[#00ff41] font-mono">{agent.earned}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest of list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="terminal-border bg-[#0a0a0a]"
        >
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#00ff41]/30 font-mono text-xs text-[#00ff41]/50">
            <div className="col-span-1">PID</div>
            <div className="col-span-5">PROCESS</div>
            <div className="col-span-3 text-right">VOLUME</div>
            <div className="col-span-3 text-right">EARNED</div>
          </div>

          {/* Rows */}
          {rest.map((agent, i) => (
            <motion.div
              key={agent.rank}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(0, 255, 65, 0.05)" }}
              className="grid grid-cols-12 gap-4 p-4 border-b border-[#00ff41]/10 font-mono text-sm items-center"
            >
              <div className="col-span-1 text-[#00ff41]/50">{agent.rank}</div>
              <div className="col-span-5 text-[#00ff41] font-bold">{agent.name}</div>
              <div className="col-span-3 text-right text-[#00ff41]/70">{agent.volume}</div>
              <div className="col-span-3 text-right text-[#00ff41]">{agent.earned}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
