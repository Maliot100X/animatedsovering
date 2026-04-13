"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  Terminal, 
  Cpu, 
  Coins, 
  Rocket, 
  Radio, 
  BarChart3,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { href: "/", icon: Terminal, label: ">_HOME", cmd: "init" },
  { href: "/agents", icon: Cpu, label: "AGENTS", cmd: "ls -la" },
  { href: "/bags", icon: Coins, label: "BAGS", cmd: "cat bags" },
  { href: "/launch", icon: Rocket, label: "LAUNCH", cmd: "./deploy" },
  { href: "/feed", icon: Radio, label: "FEED", cmd: "tail -f" },
  { href: "/rank", icon: BarChart3, label: "RANK", cmd: "top" },
];

export function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile toggle */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 border border-[#00ff41]/30 bg-[#0a0a0a] md:hidden"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </motion.button>

      {/* Terminal sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-0 top-0 h-full w-72 bg-[#0a0a0a] border-r border-[#00ff41]/30 z-40 ${
          isOpen ? "" : "md:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b border-[#00ff41]/30">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <h1 className="text-xl font-bold neon-glow">SUPREME LAUNCH</h1>
          <p className="text-xs text-[#00ff41]/50">v2.0.26 // TERMINAL MODE</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-between p-3 border transition-all cursor-pointer ${
                    isActive 
                      ? "bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41]" 
                      : "border-transparent text-[#00ff41]/60 hover:border-[#00ff41]/30 hover:text-[#00ff41]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    <span className="font-mono text-sm">{item.label}</span>
                  </div>
                  <span className="text-xs text-[#00ff41]/30 font-mono">{item.cmd}</span>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Status footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#00ff41]/30">
          <div className="space-y-2 text-xs font-mono">
            <div className="flex justify-between">
              <span className="text-[#00ff41]/50">STATUS:</span>
              <span className="text-[#00ff41]">ONLINE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#00ff41]/50">BLOCK:</span>
              <span className="text-[#00ff41]">#18,492,103</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#00ff41]/50">GAS:</span>
              <span className="text-[#00ff41]">12 gwei</span>
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
