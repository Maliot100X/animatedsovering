"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";
import { AnimatedNav } from "@/components/AnimatedNav";
import { HeroSection } from "@/components/HeroSection";
import { TokenCard3D } from "@/components/TokenCard3D";
import { motion } from "framer-motion";

const featuredTokens = [
  { name: "BAGS Token", symbol: "BAGS", price: 0.00000237, marketCap: 2370000, volume24h: 79196, change24h: 15.5 },
  { name: "Solana", symbol: "SOL", price: 142.50, marketCap: 64000000000, volume24h: 2500000000, change24h: 5.2 },
  { name: "New Launch", symbol: "NEW", price: 0.001, marketCap: 100000, volume24h: 50000, change24h: -2.3 },
  { name: "MoonShot", symbol: "MOON", price: 0.0001, marketCap: 500000, volume24h: 120000, change24h: 45.8 },
];

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <AnimatedNav />
      
      <HeroSection />
      
      {/* Featured Tokens Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Featured Tokens</h2>
            <p className="text-gray-400">Discover the hottest launches</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTokens.map((token, index) => (
              <TokenCard3D key={token.symbol} {...token} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-gray-400">The most advanced launchpad</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "3D Animated", desc: "Immersive token visualization" },
              { title: "Real-time Data", desc: "Live prices from GeckoTerminal" },
              { title: "Secure Launch", desc: "Audited smart contracts" },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10"
              >
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center text-gray-500">
          <p>© 2026 SovereignLaunch. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
