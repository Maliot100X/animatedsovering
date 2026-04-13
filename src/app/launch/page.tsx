"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, TrendingDown, Zap, Terminal } from "lucide-react";
import { TextScramble } from "@/components/text-scramble";

const tokens = [
  { symbol: "BAGS", price: "0.00000237", change: "+15.5", mc: "2.37M", vol: "79K", hot: true },
  { symbol: "SOL", price: "142.50", change: "+5.2", mc: "64B", vol: "2.5B", hot: false },
  { symbol: "ALPHA", price: "0.0001", change: "+45.8", mc: "500K", vol: "120K", hot: true },
  { symbol: "BETA", price: "0.001", change: "-2.3", mc: "100K", vol: "50K", hot: false },
  { symbol: "GAMMA", price: "0.002", change: "+8.9", mc: "2M", vol: "150K", hot: false },
  { symbol: "DELTA", price: "0.05", change: "+12.5", mc: "5M", vol: "200K", hot: true },
];

export default function Launch() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#00ff41]/50">
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm">$ ./deploy --list</span>
            </div>
            <h1 className="text-4xl font-bold font-mono neon-glow">
              <TextScramble text="TOKEN_REGISTRY" />
            </h1>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 px-6 py-3 bg-[#00ff41] text-[#0a0a0a] font-mono font-bold border border-[#00ff41]"
          >
            <Zap className="w-5 h-5" />
            <span className="cursor-blink">DEPLOY_NEW</span>
          </motion.button>
        </motion.div>

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 p-6 terminal-border bg-[#00ff41]/5"
        >
          <div className="flex items-center gap-2 mb-4 text-[#00ff41]/50">
            <span className="font-mono text-sm">$ cat featured_token</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-bold text-[#00ff41] font-mono mb-2">$BAGS</h2>
              <p className="text-[#00ff41]/70 font-mono">Native platform token</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-bold text-[#00ff41] font-mono">$0.00000237</p>
              <p className="text-[#00ff41] font-mono">+15.5%</p>
            </div>
          </div>
        </motion.div>

        {/* Token list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="terminal-border bg-[#0a0a0a]"
        >
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#00ff41]/30 font-mono text-xs text-[#00ff41]/50">
            <div className="col-span-3">SYMBOL</div>
            <div className="col-span-3">PRICE</div>
            <div className="col-span-2">24H</div>
            <div className="col-span-2">MARKET_CAP</div>
            <div className="col-span-2">VOLUME</div>
          </div>

          {/* Rows */}
          {tokens.map((token, i) => (
            <motion.div
              key={token.symbol}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(0, 255, 65, 0.05)" }}
              className="grid grid-cols-12 gap-4 p-4 border-b border-[#00ff41]/10 font-mono text-sm items-center cursor-pointer"
            >
              <div className="col-span-3 font-bold text-[#00ff41]">
                {token.hot && <span className="text-red-400 mr-2">*</span>}
                {token.symbol}
              </div>
              <div className="col-span-3 text-[#00ff41]">${token.price}</div>
              <div className={`col-span-2 ${token.change.startsWith('+') ? 'text-[#00ff41]' : 'text-red-400'}`}>
                <span className="flex items-center gap-1">
                  {token.change.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {token.change}%
                </span>
              </div>
              <div className="col-span-2 text-[#00ff41]/70">${token.mc}</div>
              <div className="col-span-2 text-[#00ff41]/70">${token.vol}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
