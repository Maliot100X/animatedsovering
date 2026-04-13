"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedNav } from "@/components/AnimatedNav";
import { TokenCard3D } from "@/components/TokenCard3D";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/TextScramble";

const tokens = [
  { name: "Rocket Token", symbol: "RCKT", price: 0.001, marketCap: 1000000, volume24h: 150000, change24h: 25 },
  { name: "Moon Coin", symbol: "MOON", price: 0.0005, marketCap: 500000, volume24h: 80000, change24h: 15 },
  { name: "Star Token", symbol: "STAR", price: 0.002, marketCap: 2000000, volume24h: 300000, change24h: -5 },
  { name: "Galaxy", symbol: "GLXY", price: 0.003, marketCap: 3000000, volume24h: 450000, change24h: 30 },
  { name: "Nebula", symbol: "NBLA", price: 0.0008, marketCap: 800000, volume24h: 120000, change24h: 12 },
  { name: "Cosmic", symbol: "CSMC", price: 0.0015, marketCap: 1500000, volume24h: 220000, change24h: -8 },
];

export default function Launchpad() {
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
            <TextScramble text="LAUNCHPAD" />
          </h1>
          <p className="text-xl text-gray-400">Discover and trade the best tokens</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokens.map((token, index) => (
            <TokenCard3D key={token.symbol} {...token} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
