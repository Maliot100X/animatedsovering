"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Rocket, Users, Trophy, Home, PlusCircle, ShoppingBag } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/agents", label: "Agents", icon: Users },
  { href: "/bags-launch", label: "Bags Launch", icon: ShoppingBag },
  { href: "/launchpad", label: "Launchpad", icon: Rocket },
  { href: "/feed", label: "Feed", icon: PlusCircle },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
];

export function AnimatedNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Sovereign
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Link key={item.href} href={item.href} className="relative">
                <motion.div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white transition-colors"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  
                  {hoveredIndex === index && (
                    <motion.div
                      layoutId="navHover"
                      className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.div>
              </Link>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium text-sm hover:from-purple-500 hover:to-blue-500 transition-all"
          >
            Connect Wallet
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
