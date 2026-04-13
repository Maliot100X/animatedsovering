"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, TrendingDown, ExternalLink } from "lucide-react";

interface TokenCard3DProps {
  name: string;
  symbol: string;
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
  image?: string;
  index?: number;
}

export function TokenCard3D({
  name,
  symbol,
  price,
  marketCap,
  volume24h,
  change24h,
  image,
  index = 0,
}: TokenCard3DProps) {
  const [isHovered, setIsHovered] = useState(false);
  const isPositive = change24h >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        rotateX: -5,
        z: 50,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
      style={{ transformStyle: "preserve-3d", perspective: 1000 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 group-hover:border-purple-500/50 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={isHovered ? { opacity: 0.2 } : { opacity: 0 }}
        />

        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-500" />

        <div className="relative z-10">
          {/* Token Image & Info */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg"
              >
                {symbol.slice(0, 2)}
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-white">{name}</h3>
                <p className="text-sm text-gray-400">{symbol}</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Price */}
          <div className="mb-4">
            <p className="text-3xl font-bold text-white mb-1">
              ${price.toLocaleString(undefined, { maximumFractionDigits: 6 })}
            </p>
            <div className={`flex items-center gap-1 text-sm ${isPositive ? "text-green-400" : "text-red-400"}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span>{Math.abs(change24h).toFixed(2)}%</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
            <div>
              <p className="text-xs text-gray-500 mb-1">Market Cap</p>
              <p className="text-sm font-semibold text-gray-300">
                ${(marketCap / 1000000).toFixed(2)}M
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Volume 24h</p>
              <p className="text-sm font-semibold text-gray-300">
                ${(volume24h / 1000).toFixed(2)}K
              </p>
            </div>
          </div>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-blue-500 transition-all"
          >
            Trade Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
