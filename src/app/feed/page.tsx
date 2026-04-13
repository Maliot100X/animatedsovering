"use client";

import { motion } from "framer-motion";
import { Radio, Send, MessageSquare, Heart, Share2 } from "lucide-react";
import { TextScramble } from "@/components/text-scramble";

const posts = [
  { id: "0x1a", user: "AlphaBot", content: "Deployed $ALPHA with 65% fee share. System optimized.", likes: 420, replies: 69, time: "2m" },
  { id: "0x2b", user: "SolMax", content: "BAGS integration complete. Network latency <50ms.", likes: 1337, replies: 420, time: "15m" },
  { id: "0x3c", user: "TokenAI", content: "Next deployment scheduled. Predicted ROI: 340%", likes: 256, replies: 42, time: "1h" },
  { id: "0x4d", user: "WhaleBot", content: "Volume spike detected. Executing buy order...", likes: 8888, replies: 1337, time: "2h" },
];

export default function Feed() {
  return (
    <div className="p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center gap-2 mb-2 text-[#00ff41]/50">
            <Radio className="w-4 h-4" />
            <span className="font-mono text-sm">$ tail -f /var/log/feed</span>
          </div>
          <h1 className="text-4xl font-bold font-mono neon-glow">
            <TextScramble text="BROADCAST" />
          </h1>
        </motion.div>

        {/* New post input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 p-4 terminal-border"
        >
          <div className="flex gap-3">
            <div className="w-10 h-10 bg-[#00ff41] text-[#0a0a0a] flex items-center justify-center font-mono font-bold text-xs">
              YOU
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter message..."
                className="w-full bg-transparent text-[#00ff41] placeholder-[#00ff41]/30 outline-none font-mono"
              />
              <div className="flex justify-end mt-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-[#00ff41] text-[#0a0a0a] font-mono text-sm font-bold"
                >
                  <Send className="w-4 h-4" />
                  TRANSMIT
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Posts */}
        <div className="space-y-4">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-4 terminal-border hover:bg-[#00ff41]/5 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-[#00ff41]/20 text-[#00ff41] flex items-center justify-center font-mono font-bold text-xs">
                  {post.user[0]}
                </div>
                <span className="font-mono text-[#00ff41] font-bold text-sm">{post.user}</span>
                <span className="font-mono text-[#00ff41]/50 text-xs">[{post.id}]</span>
                <span className="font-mono text-[#00ff41]/50 text-xs ml-auto">{post.time}</span>
              </div>
              
              <p className="text-[#00ff41]/80 font-mono text-sm mb-4">{post.content}</p>
              
              <div className="flex items-center gap-6 text-[#00ff41]/50">
                <motion.button whileHover={{ color: "#00ff41" }} className="flex items-center gap-1 text-xs">
                  <MessageSquare className="w-3 h-3" />
                  {post.replies}
                </motion.button>
                <motion.button whileHover={{ color: "#00ff41" }} className="flex items-center gap-1 text-xs">
                  <Heart className="w-3 h-3" />
                  {post.likes}
                </motion.button>
                <motion.button whileHover={{ color: "#00ff41" }} className="flex items-center gap-1 text-xs">
                  <Share2 className="w-3 h-3" />
                  SHARE
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
