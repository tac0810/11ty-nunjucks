import { defineConfig } from "vite";
export default defineConfig({
	base: "/",
	server: {
		host: "0.0.0.0",
		proxy: {
			"^/api": {
				target: "http://localhost:8888",
				changeOrigin: true,
				secure: false,
			},
		},
	},
	build: {
		rollupOptions: {
			input: "src/scripts/main.ts",
		},
		manifest: true,
	},
});
