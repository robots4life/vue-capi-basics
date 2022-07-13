import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	server: {
		host: '0.0.0.0',
		port: 3000,
		strictPort: true,
		hmr: {
			clientPort: 443
		}
	},
	define: {
		// env-cmd https://blog.hdks.org/Environment-Variables-in-SvelteKit-and-Vercel/
		'process.env': process.env
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
});
