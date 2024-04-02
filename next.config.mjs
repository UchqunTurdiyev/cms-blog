/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fus-east-1-shared-usea1-02.graphassets.com',
				hostname: 'us-east-1-shared-usea1-02.graphassets.com',
			},
		],
	},
};

export default nextConfig;
