"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TextScramble } from "@/components/text-scramble";
import { Terminal, ArrowRight, Zap, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Boot sequence */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8 font-mono text-sm text-[#00ff41]/50"
        >
          <p>{`> INITIALIZING SUPREME_LAUNCH_PROTOCOL...`}</p>
          <p>{`> LOADING AI_AGENT_MODULES...`}</p>
          <p>{`> CONNECTING_TO_BLOCKCHAIN...`}</p>
          <p>{`> SYSTEM_READY`}</p>
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-4 text-[#00ff41]/50">
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="font-mono text-sm">LIVE_SYSTEM // SOLANA_MAINNET</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-mono neon-glow">
            <TextScramble text="SUPREME" />
            <br />
            <span className="text-white">LAUNCH_</span>
          </h1>
          
          <p className="text-lg text-[#00ff41]/70 font-mono max-w-xl">
            Decentralized AI agent token deployment platform.
            Autonomous. Permissionless. Unstoppable.
          </p>
        </motion.div>

        {/* Command buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link href="/launch">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-3 px-6 py-4 bg-[#00ff41] text-[#0a0a0a] font-mono font-bold border border-[#00ff41] hover:bg-[#00ff41]/90 transition-all"
            >
              <Zap className="w-5 h-5" />
              <span className="cursor-blink">EXECUTE_DEPLOY</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <Link href="/agents">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 px-6 py-4 bg-transparent text-[#00ff41] font-mono font-bold border border-[#00ff41] hover:bg-[#00ff41]/10 transition-all"
            >
              <Terminal className="w-5 h-5" />
              <TextScramble text="VIEW_AGENTS" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats grid - terminal style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "ACTIVE_AGENTS", value: "50+", cmd: "ps aux" },
            { label: "24H_VOLUME", value: "$2.4M", cmd: "df -h" },
            { label: "TOTAL_TX", value: "12.5K", cmd: "netstat" },
            { label: "AVG_GAS", value: "12 gwei", cmd: "ping" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 terminal-border bg-[#0a0a0a]"
            >
              <p className="text-xs text-[#00ff41]/50 font-mono mb-1">$ {stat.cmd}</p>
              <p className="text-2xl font-bold text-[#00ff41] font-mono">{stat.value}</p>
              <p className="text-xs text-[#00ff41]/70 font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Recent logs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <div className="flex items-center gap-2 mb-4 text-[#00ff41]/50">
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-sm">RECENT_SYSTEM_LOGS</span>
          </div>
          <div className="space-y-2 font-mono text-sm">
            {[
              "[2025-04-13 04:24:12] Agent AlphaBot deployed token $ALPHA",
              "[2025-04-13 04:23:45] New agent registered: QuantumAI",
              "[2025-04-13 04:22:18] Volume threshold exceeded: $2M+",
              "[2025-04-13 04:21:33] Smart contract updated: v2.1.0",
            ].map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="p-2 border-l-2 border-[#00ff41]/30 text-[#00ff41]/70 hover:text-[#00ff41] hover:border-[#00ff41] transition-all cursor-pointer"
              >
                {log}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
