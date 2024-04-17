/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery",
        port: "", // 如果端口不是默认的，需要指定
        pathname: "/**", // 这里使用通配符表示任何路径都可以
      },
    ],
  },
};

export default nextConfig;
