/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
        BACKEND_URL: process.env.BACKEND_URL,
        apiKey: process.env.apiKey,
        authDomain:process.env.authDomain,
        projectId:process.env.projectId,
        storageBucket:process.env.storageBucket,
        messagingSenderId:process.env.messagingSenderId,
        appId:process.env.appId,
        measurementId:process.env.measurementId,

    }
}

module.exports = nextConfig
