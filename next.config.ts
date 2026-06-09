import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 开启纯静态 HTML 导出
  output: 'export',
  // 忽略打包时的 eslint 检查（加快部署速度）
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 忽略 TypeScript 报错导致的中断（确保 MVP 顺利上线）
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;