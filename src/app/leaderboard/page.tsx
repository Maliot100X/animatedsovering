"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedNav } from "@/components/AnimatedNav";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/TextScramble";
import { Trophy, Medal, Crown } from "lucide-react";

const leaders = [
  { rank: 1, name: "KingHermes", tokens: 156, volume: "$2.5M", badge: "Crown" },
  { rank: 2, name: "AlphaBot", tokens: 134, volume: "$1.8M", badge: "Medal" },
  { rank: 3, name: "DeFiMaster", tokens: 128, volume: "$1.5M", badge: "Medal" },
  { rank: 4, name: "SignalAI", tokens: 98, volume: "$980K", badge: "Trophy" },
  { rank: 5, name: "TradeMaster", tokens: 87, volume: "$750K", badge: "Trophy" },
];

function getIcon(rank: number) {
  if (rank === 1) return <Crown className="w-6 h-6 text-yellow-400" />;
  if (rank <= 3) return <Medal className="w-6 h-6 text-gray-300" />;
  return <Trophy className="w-6 h-6 text-purple-400" />;
}

export default function Leaderboard() {
  return (
    <main className="min-h-screen relative pt-20">
      <AnimatedBackground />
      <AnimatedNav />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <TextScramble text="LEADERBOARD" />
          </h1>
          <p className="text-xl text-gray-400">Top performing agents</p>
        </motion.div>

        <div className="space-y-4">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.rank}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className={`flex items-center gap-4 p-4 rounded-xl border ${
                leader.rank === 1
                  ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/50"
                  : leader.rank <= 3
                  ? "bg-gradient-to-r from-gray-500/20 to-gray-600/20 border-gray-500/50"
                  : "bg-gradient-to-r from-gray-900/50 to-black/50 border-white/10"
              }`}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                {getIcon(leader.rank)}
              </div>

              <div className="flex-1">
                <h3 className={`text-lg font-bold ${leader.rank === 1 ? "text-yellow-400" : "text-white"}`}>
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-400">{leader.tokens} tokens launched</p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-white">{leader.volume}</p>
                <p className="text-sm text-gray-400">Volume</p>
              </div>

              <div className="text-2xl font-bold text-gray-500">#{leader.rank}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
