"use client";

import { motion } from "framer-motion";
import { Cpu, Activity, Zap, Terminal } from "lucide-react";
import { TextScramble } from "@/components/text-scramble";

const agents = [
  { id: "0x1a", name: "AlphaBot", type: "TRADING", status: "ONLINE", cpu: "78%", mem: "4.2GB", winRate: "92%" },
  { id: "0x2b", name: "SolMax", type: "LAUNCH", status: "ONLINE", cpu: "65%", mem: "3.8GB", winRate: "88%" },
  { id: "0x3c", name: "TokenAI", type: "SOCIAL", status: "STANDBY", cpu: "12%", mem: "1.2GB", winRate: "74%" },
  { id: "0x4d", name: "WhaleBot", type: "TRADING", status: "ONLINE", cpu: "89%", mem: "5.1GB", winRate: "95%" },
  { id: "0x5e", name: "MoonAI", type: "LAUNCH", status: "ONLINE", cpu: "71%", mem: "4.0GB", winRate: "81%" },
  { id: "0x6f", name: "LaunchKing", type: "SOCIAL", status: "OFFLINE", cpu: "0%", mem: "0GB", winRate: "86%" },
];

export default function Agents() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2 text-[#00ff41]/50">
            <Terminal className="w-4 h-4" />
            <span className="font-mono text-sm">$ ps aux | grep agents</span>
          </div>
          <h1 className="text-4xl font-bold font-mono neon-glow">
            <TextScramble text="AGENT_MATRIX" />
          </h1>
          <p className="text-[#00ff41]/60 font-mono mt-2">Active AI agents in the network</p>
        </motion.div>

        {/* Agent table - terminal style */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="terminal-border bg-[#0a0a0a]"
        >
          {/* Table header */}
          <div className="grid grid-cols-12 gap-4 p-4 border-b border-[#00ff41]/30 font-mono text-xs text-[#00ff41]/50">
            <div className="col-span-2">PID</div>
            <div className="col-span-2">NAME</div>
            <div className="col-span-2">TYPE</div>
            <div className="col-span-2">STATUS</div>
            <div className="col-span-2">RESOURCES</div>
            <div className="col-span-2">WIN_RATE</div>
          </div>

          {/* Agent rows */}
          {agents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.05 }}
              whileHover={{ backgroundColor: "rgba(0, 255, 65, 0.05)" }}
              className="grid grid-cols-12 gap-4 p-4 border-b border-[#00ff41]/10 font-mono text-sm items-center cursor-pointer group"
            >
              <div className="col-span-2 text-[#00ff41]/50">{agent.id}</div>
              <div className="col-span-2 text-[#00ff41] font-bold">
                <TextScramble text={agent.name} />
              </div>
              <div className="col-span-2 text-[#00ff41]/70">{agent.type}</div>
              <div className="col-span-2">
                <span className={`flex items-center gap-2 ${
                  agent.status === "ONLINE" ? "text-[#00ff41]" : 
                  agent.status === "STANDBY" ? "text-yellow-400" : "text-red-400"
                }`}>
                  <Activity className={`w-3 h-3 ${agent.status === "ONLINE" ? "animate-pulse" : ""}`} />
                  {agent.status}
                </span>
              </div>
              <div className="col-span-2 text-[#00ff41]/70">
                <div className="text-xs">CPU: {agent.cpu}</div>
                <div className="text-xs">MEM: {agent.mem}</div>
              </div>
              <div className="col-span-2 text-[#00ff41] font-bold">{agent.winRate}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* System status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { label: "TOTAL_AGENTS", value: "6", cmd: "wc -l" },
            { label: "ONLINE", value: "4", cmd: "grep ONLINE" },
            { label: "AVG_CPU", value: "52%", cmd: "top -bn1" },
          ].map((stat, i) => (
            <div key={stat.label} className="p-4 terminal-border">
              <p className="text-xs text-[#00ff41]/50 font-mono">$ {stat.cmd}</p>
              <p className="text-3xl font-bold text-[#00ff41] font-mono">{stat.value}</p>
              <p className="text-xs text-[#00ff41]/70 font-mono">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
