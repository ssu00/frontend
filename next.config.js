module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["tutorlab.s3.ap-northeast-2.amazonaws.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
