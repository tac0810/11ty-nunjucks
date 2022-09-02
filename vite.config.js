import { defineConfig } from "vite";
export default defineConfig({
	base: "/",
	server: {
		host: "0.0.0.0",
	},
	build: {
		rollupOptions: {
			input: "src/scripts/main.ts",
		},
		manifest: true,
	},
});
