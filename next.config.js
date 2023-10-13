/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const isDev = process.env.NODE_ENV === 'development'
const nextConfig = withPWA({
  dest:"public",
  register: true,
  skipWaiting:true,
  disable: isDev
})

module.exports = nextConfig
