/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // naslovna bez jezika vodi na hrvatsku verziju
    return [{ source: "/", destination: "/hr", permanent: false }];
  },
};

export default nextConfig;
