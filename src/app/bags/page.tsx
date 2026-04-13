"use client";

import { motion } from "framer-motion";
import { Terminal, TrendingUp, Wallet, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { TextScramble } from "@/components/text-scramble";

export default function Bags() {
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
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-sm">$ cat /proc/bags</span>
          </div>
          <h1 className="text-6xl font-bold font-mono neon-glow mb-2">
            <TextScramble text="$BAGS" />
          </h1>
          <p className="text-[#00ff41]/60 font-mono">PLATFORM_NATIVE_TOKEN</p>
        </motion.div>

        {/* Price display */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-8 terminal-border bg-[#00ff41]/5 text-center"
        >
          <p className="text-[#00ff41]/50 font-mono mb-2">CURRENT_PRICE</p>
          <p className="text-7xl font-bold text-[#00ff41] font-mono mb-4">$0.00000237</p>
          <div className="flex items-center justify-center gap-2 text-[#00ff41]">
            <TrendingUp className="w-5 h-5" />
            <span className="font-mono">+15.5% (24h)</span>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {[
            { label: "MARKET_CAP", value: "$2.37M", cmd: "market_cap" },
            { label: "24H_VOLUME", value: "$79K", cmd: "volume" },
            { label: "HOLDERS", value: "1,234", cmd: "holders" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="p-4 terminal-border"
            >
              <p className="text-xs text-[#00ff41]/50 font-mono mb-1">$ {stat.cmd}</p>
              <p className="text-3xl font-bold text-[#00ff41] font-mono">{stat.value}</p>
              <p className="text-xs text-[#00ff41]/70 font-mono">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#00ff41] text-[#0a0a0a] font-mono font-bold border border-[#00ff41]"
          >
            <ArrowUpRight className="w-5 h-5" />
            <span className="cursor-blink">BUY_BAGS</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#00ff41] font-mono font-bold border border-[#00ff41] hover:bg-[#00ff41]/10"
          >
            <ArrowDownRight className="w-5 h-5" />
            <span>SELL_BAGS</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
