"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedNav } from "@/components/AnimatedNav";
import { TokenCard3D } from "@/components/TokenCard3D";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/TextScramble";
import { ShoppingBag } from "lucide-react";

const bagsTokens = [
  { name: "82a James Carter", symbol: "PUMPWARE", price: 0.00000237, marketCap: 237000, volume24h: 79196, change24h: 0 },
  { name: "FukADEV", symbol: "FAD", price: 0.000001, marketCap: 100000, volume24h: 50000, change24h: 5 },
  { name: "Dear Finn", symbol: "FINN", price: 0.000003, marketCap: 300000, volume24h: 100000, change24h: -2 },
  { name: "Riskit McBiscuit", symbol: "RISK", price: 0.00000245, marketCap: 245000, volume24h: 82000, change24h: 3 },
];

export default function BagsLaunch() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6">
            <ShoppingBag className="w-5 h-5" />
            <span>Bags Integration</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            <TextScramble text="BAGS LAUNCH" />
          </h1>
          <p className="text-xl text-gray-400">Fresh tokens from Bags protocol</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bagsTokens.map((token, index) => (
            <TokenCard3D key={token.symbol} {...token} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
